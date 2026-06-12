const SESSION_COOKIE = "love_test_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === "/login.html") {
      return Response.redirect(`${url.origin}/login`, 301);
    }

    if (pathname === "/login") {
      return env.ASSETS.fetch(request);
    }

    if (pathname === "/unlock" && request.method === "POST") {
      return unlock(request, env);
    }

    if (pathname === "/logout") {
      return redirectWithCookie("/", clearCookie());
    }

    if (await hasValidSession(request, env)) {
      return env.ASSETS.fetch(request);
    }

    return Response.redirect(`${url.origin}/login`, 302);
  },
};

async function unlock(request, env) {
  if (!env.ACCESS_CODES || !env.SESSION_SECRET) {
    return new Response("Cloudflare environment variables are not configured.", {
      status: 500,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const form = await request.formData();
  const inputCode = String(form.get("code") || "").trim();
  const allowedCodes = env.ACCESS_CODES.split(",")
    .map((code) => code.trim())
    .filter(Boolean);

  const matched = allowedCodes.some((code) => constantTimeEqual(code, inputCode));
  const url = new URL(request.url);

  if (!matched) {
    return Response.redirect(`${url.origin}/login?error=1`, 302);
  }

  const cookie = await createSessionCookie(env.SESSION_SECRET, url.protocol === "https:");
  return redirectWithCookie("/", cookie);
}

async function hasValidSession(request, env) {
  if (!env.SESSION_SECRET) {
    return false;
  }

  const cookies = parseCookies(request.headers.get("cookie") || "");
  const session = cookies[SESSION_COOKIE];
  if (!session) {
    return false;
  }

  const parts = session.split(".");
  if (parts.length !== 3) {
    return false;
  }

  const [expiresText, nonce, signature] = parts;
  const expires = Number(expiresText);
  if (!Number.isFinite(expires) || Date.now() > expires || !nonce) {
    return false;
  }

  const expected = await hmacHex(env.SESSION_SECRET, `${expiresText}.${nonce}`);
  return constantTimeEqual(expected, signature);
}

async function createSessionCookie(secret, secure) {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000;
  const nonce = crypto.randomUUID().replaceAll("-", "");
  const payload = `${expires}.${nonce}`;
  const signature = await hmacHex(secret, payload);
  const securePart = secure ? " Secure;" : "";

  return `${SESSION_COOKIE}=${payload}.${signature}; Path=/; Max-Age=${MAX_AGE_SECONDS}; HttpOnly;${securePart} SameSite=Lax`;
}

function clearCookie() {
  return `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`;
}

function redirectWithCookie(path, cookie) {
  return new Response(null, {
    status: 302,
    headers: {
      location: path,
      "set-cookie": cookie,
    },
  });
}

async function hmacHex(secret, value) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return [...new Uint8Array(signature)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function parseCookies(header) {
  return header.split(";").reduce((cookies, item) => {
    const [name, ...rest] = item.trim().split("=");
    if (name) {
      cookies[name] = rest.join("=");
    }
    return cookies;
  }, {});
}

function constantTimeEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  let diff = 0;
  for (let index = 0; index < a.length; index += 1) {
    diff |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }
  return diff === 0;
}
