const QUESTIONS = [
  {
    tag: "社交边界",
    text: "伴侣要和异性朋友单独吃饭，你的第一反应是？",
    options: [
      ["询问细节，并告诉 TA 吃饭时哪些话题和行为不合适。", { control: 2 }],
      ["非常不舒服，觉得 TA 不应该和其他异性单独吃饭。", { possessive: 2 }],
      ["可以去，但必须发定位和现场照片让我安心。", { control: 2, possessive: 2 }],
      ["确认关系边界后选择信任，祝 TA 用餐愉快。", { healthy: 2 }],
    ],
  },
  {
    tag: "社交边界",
    text: "你想翻看伴侣手机的冲动主要来自哪里？",
    options: [
      ["我需要知道 TA 在和谁聊、聊什么，才能掌握动态。", { control: 2 }],
      ["我害怕 TA 心里有别人，所以想确认。", { possessive: 2 }],
      ["既想掌握动态，也害怕 TA 不再只属于我。", { control: 2, possessive: 2 }],
      ["我没有这种冲动，隐私和信任都很重要。", { healthy: 2 }],
    ],
  },
  {
    tag: "社交边界",
    text: "伴侣发朋友圈前，你希望 TA 怎么做？",
    options: [
      ["最好先让我看看内容和配图是否合适。", { control: 2 }],
      ["最好不要有异性点赞或评论。", { possessive: 2 }],
      ["内容我要审核，评论区我也会盯着。", { control: 2, possessive: 2 }],
      ["TA 想怎么发就怎么发，那是 TA 的表达。", { healthy: 2 }],
    ],
  },
  {
    tag: "社交边界",
    text: "伴侣要参加一个你不认识的人的聚会，你会？",
    options: [
      ["要求了解人员、地点、时间，并判断是否适合去。", { control: 2 }],
      ["不想让 TA 去，担心 TA 遇到更吸引的人。", { possessive: 2 }],
      ["要求带我一起去，否则就别去。", { control: 2, possessive: 2 }],
      ["提醒安全，自己也安排好自己的时间。", { healthy: 2 }],
    ],
  },
  {
    tag: "社交边界",
    text: "伴侣有一位关系很好的异性发小，你会？",
    options: [
      ["要求减少见面频率，见面时最好让我在场。", { control: 2 }],
      ["无论他们是否越界，我都会觉得这个人是威胁。", { possessive: 2 }],
      ["要求 TA 断绝往来，否则我无法接受。", { control: 2, possessive: 2 }],
      ["接受这是 TA 的正常社交，同时保留清晰边界。", { healthy: 2 }],
    ],
  },
  {
    tag: "社交边界",
    text: "伴侣换了新工作，同事聚餐变多，哪些想法符合你？",
    multi: true,
    options: [
      ["我会要求 TA 控制聚餐次数，并汇报参与人员。", { control: 2 }],
      ["我担心 TA 和同事走得太近，尤其是异性。", { possessive: 2 }],
      ["如果 TA 不按时报备，我会不断追问或查岗。", { control: 2, possessive: 1 }],
      ["我会为 TA 适应新环境感到开心。", { healthy: 2 }],
    ],
  },
  {
    tag: "社交边界",
    text: "伴侣想单独去旅行，你的态度是？",
    options: [
      ["可以去，但行程、住宿、联系频率都要按我定的来。", { control: 2 }],
      ["不太愿意，旅行这种事我希望 TA 只和我一起。", { possessive: 2 }],
      ["不同意，除非每天多次视频并实时共享位置。", { control: 2, possessive: 2 }],
      ["支持，每个人都需要独处和探索空间。", { healthy: 2 }],
    ],
  },
  {
    tag: "社交边界",
    text: "伴侣的前任突然联系 TA，你会？",
    options: [
      ["要求 TA 当面删除联系方式，并说明全部对话。", { control: 2 }],
      ["极度不安，觉得 TA 的过去是最大的威胁。", { possessive: 2 }],
      ["拿过手机拉黑，并检查有没有其他联系。", { control: 2, possessive: 2 }],
      ["会关注边界，但不把一次联系等同于背叛。", { healthy: 2 }],
    ],
  },
  {
    tag: "社交边界",
    text: "伴侣关注了好看的异性博主，你会？",
    options: [
      ["要求 TA 取消关注，避免产生不必要的影响。", { control: 2 }],
      ["心里难受，觉得 TA 眼里不该总看到别人。", { possessive: 2 }],
      ["直接帮 TA 取消关注，并要求以后别再看。", { control: 2, possessive: 2 }],
      ["不太在意，我也有自己的审美和关注。", { healthy: 2 }],
    ],
  },
  {
    tag: "社交边界",
    text: "伴侣和朋友聊到了你们之间的私事，你会？",
    options: [
      ["不允许 TA 对外透露，我会规定哪些事不能说。", { control: 2 }],
      ["不喜欢 TA 和别人分享只属于我们的东西。", { possessive: 2 }],
      ["要求 TA 给我看聊天记录，并以后不准再说。", { control: 2, possessive: 2 }],
      ["如果 TA 只是需要倾诉，我愿意理解并协商边界。", { healthy: 2 }],
    ],
  },
  {
    tag: "生活方式",
    text: "伴侣买了一件你觉得不好看但 TA 很喜欢的衣服，你会？",
    options: [
      ["直接说不好看，要求退换，我的审美更可靠。", { control: 2 }],
      ["担心 TA 穿出去太招人注意，心里不舒服。", { possessive: 2 }],
      ["帮 TA 重新搭配，并规定以后买衣服要我把关。", { control: 2, possessive: 1 }],
      ["尊重 TA 的审美，TA 喜欢就好。", { healthy: 2 }],
    ],
  },
  {
    tag: "生活方式",
    text: "周末安排通常应该如何决定？",
    options: [
      ["我来做详细安排，TA 按我的时间表执行。", { control: 2 }],
      ["必须安排只有我们两个人的活动，不想 TA 做自己的事。", { possessive: 2 }],
      ["我来安排，而且内容必须围绕陪我。", { control: 2, possessive: 2 }],
      ["共同商量，也允许各自有自己的周末。", { healthy: 2 }],
    ],
  },
  {
    tag: "生活方式",
    text: "伴侣想换一份薪水低但自己热爱的工作，你会？",
    options: [
      ["强烈反对，要求 TA 按我认为更现实的规划走。", { control: 2 }],
      ["担心新环境让 TA 离我更远，陪我的时间变少。", { possessive: 2 }],
      ["否定 TA 的选择，并要求 TA 找更能配合我的工作。", { control: 2, possessive: 2 }],
      ["一起评估风险，最终尊重 TA 的职业选择。", { healthy: 2 }],
    ],
  },
  {
    tag: "生活方式",
    text: "以下哪些场景会让你明显不舒服？",
    multi: true,
    options: [
      ["TA 做重大决定前没有先征求我的同意。", { control: 2 }],
      ["TA 把很多时间花在不包含我的兴趣上。", { possessive: 2 }],
      ["TA 有自己的私人计划，而我无法干预。", { control: 1, possessive: 1 }],
      ["TA 有独立安排，但会在重要节点和我沟通。", { healthy: 2 }],
    ],
  },
  {
    tag: "生活方式",
    text: "伴侣的饮食习惯和你不同，你会？",
    options: [
      ["要求 TA 跟我吃得一样，因为我觉得更健康。", { control: 2 }],
      ["觉得连吃饭都不同步，会怀疑 TA 不够在乎我。", { possessive: 2 }],
      ["没收或限制 TA 喜欢但我不认可的食物。", { control: 2, possessive: 1 }],
      ["互相兼顾口味，也允许各吃各的。", { healthy: 2 }],
    ],
  },
  {
    tag: "生活方式",
    text: "伴侣想把房间布置成 TA 喜欢的风格，你会？",
    options: [
      ["否决 TA 的方案，必须按我的审美和实用标准来。", { control: 2 }],
      ["觉得这是我们共同空间，TA 不该不优先考虑我。", { possessive: 2 }],
      ["强行改成我的风格，并限制 TA 购买装饰。", { control: 2, possessive: 2 }],
      ["划分区域，融合两个人的喜好。", { healthy: 2 }],
    ],
  },
  {
    tag: "生活方式",
    text: "讨论观点时，伴侣和你完全相反，你会？",
    options: [
      ["通过辩论让 TA 接受我的观点。", { control: 2 }],
      ["觉得 TA 不站在我这边，上升到爱不爱我。", { possessive: 2 }],
      ["持续施压，直到 TA 承认我更对。", { control: 2, possessive: 1 }],
      ["求同存异，不把观点分歧等同于感情问题。", { healthy: 2 }],
    ],
  },
  {
    tag: "生活方式",
    text: "伴侣周末想自己待着，不想见面，你会？",
    options: [
      ["不高兴，觉得 TA 的时间应该优先由我安排。", { control: 2 }],
      ["会想 TA 是不是厌倦我了。", { possessive: 2 }],
      ["生气或冷战，逼 TA 改变安排。", { control: 2, possessive: 2 }],
      ["理解个人空间的需要，自己也安排生活。", { healthy: 2 }],
    ],
  },
  {
    tag: "生活方式",
    text: "伴侣想养一只你不喜欢的宠物，你会？",
    options: [
      ["列出弊端，努力说服或强迫 TA 放弃。", { control: 2 }],
      ["担心宠物分走 TA 对我的关注。", { possessive: 2 }],
      ["不准养，并要求 TA 把精力放在我身上。", { control: 2, possessive: 2 }],
      ["沟通顾虑，如果 TA 能负责，愿意尝试接受。", { healthy: 2 }],
    ],
  },
  {
    tag: "生活方式",
    text: "伴侣花自己的钱买了你觉得不值得的东西，你会？",
    options: [
      ["要求退掉，大额消费必须经过我同意。", { control: 2 }],
      ["怀疑 TA 是不是把钱花在别人或不想告诉我的事上。", { possessive: 2 }],
      ["反复审问，并规定以后消费必须透明。", { control: 2, possessive: 2 }],
      ["了解原因，只要不影响共同生活就尊重。", { healthy: 2 }],
    ],
  },
  {
    tag: "情绪沟通",
    text: "吵架时，你希望伴侣怎么做？",
    options: [
      ["承认错误，并按我说的方法改正。", { control: 2 }],
      ["立刻哄我，证明 TA 还在乎我、不会离开。", { possessive: 2 }],
      ["一直道歉到我消气，并保证以后听我的。", { control: 2, possessive: 2 }],
      ["双方冷静后平等沟通，解决具体问题。", { healthy: 2 }],
    ],
  },
  {
    tag: "情绪沟通",
    text: "伴侣说“我今天心情不好，想一个人静静”，你会？",
    options: [
      ["强行要求 TA 立刻说出原因，让我来解决。", { control: 2 }],
      ["觉得 TA 在疏远我，恐慌到想一直陪着 TA。", { possessive: 2 }],
      ["不准 TA 一个人待着，必须按我的方式处理情绪。", { control: 2, possessive: 2 }],
      ["给 TA 空间，并告诉 TA 我随时都在。", { healthy: 2 }],
    ],
  },
  {
    tag: "情绪沟通",
    text: "下列哪些话或想法你比较熟悉？",
    multi: true,
    options: [
      ["你为什么不听我的？", { control: 2 }],
      ["你是不是不在乎我了？", { possessive: 2 }],
      ["我管你都是因为爱你。", { control: 1, possessive: 1 }],
      ["我相信你，我们可以好好谈。", { healthy: 2 }],
    ],
  },
  {
    tag: "情绪沟通",
    text: "伴侣表达爱意的方式不合你的期待，你会？",
    options: [
      ["制定一套爱我的标准，要求 TA 执行。", { control: 2 }],
      ["觉得 TA 不够爱我，通过委屈或作闹索取更多关注。", { possessive: 2 }],
      ["要求 TA 必须用我喜欢的方式爱我。", { control: 2, possessive: 2 }],
      ["说清自己的需求，也理解 TA 的表达方式。", { healthy: 2 }],
    ],
  },
  {
    tag: "情绪沟通",
    text: "当你觉得伴侣做错事时，你通常会？",
    options: [
      ["像老师一样批评，直到 TA 承诺改变。", { control: 2 }],
      ["让 TA 产生内疚感，从而更重视我。", { possessive: 2 }],
      ["惩罚 TA，并要求更多陪伴和服从来补偿。", { control: 2, possessive: 2 }],
      ["就事论事，共同探讨改进方案。", { healthy: 2 }],
    ],
  },
  {
    tag: "情绪沟通",
    text: "伴侣忘记某个小纪念日，你会？",
    options: [
      ["要求 TA 写下补救计划，以后严格提醒。", { control: 2 }],
      ["觉得 TA 心里没我了，特别受伤。", { possessive: 2 }],
      ["严厉惩罚，并要求以后按我的高标准执行。", { control: 2, possessive: 2 }],
      ["提醒 TA，一起补一个简单仪式。", { healthy: 2 }],
    ],
  },
  {
    tag: "情绪沟通",
    text: "你们冷战时，你内心更接近哪种状态？",
    options: [
      ["TA 必须认识错误，主动来求我并改正。", { control: 2 }],
      ["TA 怎么还不来找我，是不是想分手？", { possessive: 2 }],
      ["等 TA 低头后，我会提出更多条件。", { control: 2, possessive: 2 }],
      ["给彼此时间，再找合适时机破冰。", { healthy: 2 }],
    ],
  },
  {
    tag: "情绪沟通",
    text: "伴侣向你抱怨工作委屈，你会？",
    options: [
      ["指出 TA 的问题，教 TA 应该怎么做。", { control: 2 }],
      ["觉得工作总是占据 TA，对我不公平。", { possessive: 2 }],
      ["否定 TA 的工作，并要求 TA 按我的建议调整。", { control: 2, possessive: 2 }],
      ["先共情倾听，再问 TA 是否需要建议。", { healthy: 2 }],
    ],
  },
  {
    tag: "情绪沟通",
    text: "当你感到关系受到威胁时，哪些做法符合你？",
    multi: true,
    options: [
      ["要求 TA 立刻划清界限，并按我的规则来。", { control: 2 }],
      ["反复确认 TA 还爱不爱我。", { possessive: 2 }],
      ["加强报备、定位、检查来获得安心。", { control: 2, possessive: 2 }],
      ["表达不安，一起讨论清晰边界。", { healthy: 2 }],
    ],
  },
  {
    tag: "情绪沟通",
    text: "伴侣说“你管得太多了”，哪些反应符合你？",
    multi: true,
    options: [
      ["我会觉得 TA 不懂我的用心，甚至想证明我是对的。", { control: 2 }],
      ["我会很委屈，觉得自己这么在乎却被嫌弃。", { possessive: 2 }],
      ["我会更焦虑，想通过更多规则让关系稳定下来。", { control: 2, possessive: 1 }],
      ["我会认真复盘哪些行为越界，并和 TA 重新协商边界。", { healthy: 2 }],
    ],
  },
  {
    tag: "隐私信任",
    text: "你如何看待伴侣的手机密码？",
    options: [
      ["必须告诉我，我要随时检查使用记录。", { control: 2 }],
      ["必须告诉我，主要是怕有异性消息。", { possessive: 2 }],
      ["必须共享，并且允许我定期清理好友。", { control: 2, possessive: 2 }],
      ["可以知道，但不随意翻看，尊重隐私。", { healthy: 2 }],
    ],
  },
  {
    tag: "隐私信任",
    text: "伴侣去洗澡时手机亮了，你会？",
    options: [
      ["拿起来看看，判断 TA 的社交是否合适。", { control: 2 }],
      ["立刻看是谁，有没有暧昧内容。", { possessive: 2 }],
      ["检查消息，并顺手看更多聊天记录。", { control: 2, possessive: 2 }],
      ["不看，或帮 TA 把手机翻面保护隐私。", { healthy: 2 }],
    ],
  },
  {
    tag: "隐私信任",
    text: "你希望伴侣随时报备行程吗？",
    options: [
      ["必须报备，而且行程不合理我会干预。", { control: 2 }],
      ["必须报备，让我知道 TA 没去见别人。", { possessive: 2 }],
      ["必须实时共享定位，去哪里都要批准。", { control: 2, possessive: 2 }],
      ["大致知道去向即可，不需要事无巨细。", { healthy: 2 }],
    ],
  },
  {
    tag: "隐私信任",
    text: "伴侣有一本从不给你看的日记，你会？",
    options: [
      ["要求打开，让我了解 TA 的真实想法。", { control: 2 }],
      ["怀疑里面有前任或别人相关的秘密。", { possessive: 2 }],
      ["想办法看，并规定以后不能有我不了解的隐私。", { control: 2, possessive: 2 }],
      ["尊重 TA 的精神自留地。", { healthy: 2 }],
    ],
  },
  {
    tag: "隐私信任",
    text: "你如何看待伴侣独处的时间？",
    options: [
      ["独处应该用来做更有价值的事，我会安排。", { control: 2 }],
      ["TA 宁愿独处也不陪我，会让我觉得被冷落。", { possessive: 2 }],
      ["我会剥夺这段时间，让 TA 陪我或按我要求提升。", { control: 2, possessive: 2 }],
      ["独处能让人充电，我支持。", { healthy: 2 }],
    ],
  },
  {
    tag: "隐私信任",
    text: "伴侣不想让你看正在回复的一条消息，你会？",
    options: [
      ["认为 TA 处理不当社交，想指导 TA 回复。", { control: 2 }],
      ["认定 TA 可能在和别人暧昧，要求查看。", { possessive: 2 }],
      ["抢过手机查看，并要求以后当着我回。", { control: 2, possessive: 2 }],
      ["尊重边界，等 TA 处理完再沟通。", { healthy: 2 }],
    ],
  },
  {
    tag: "隐私信任",
    text: "你希望了解伴侣过去的每段感情细节吗？",
    options: [
      ["需要详细了解，方便分析 TA 的问题。", { control: 2 }],
      ["需要详细了解，想比较 TA 更爱谁。", { possessive: 2 }],
      ["必须全盘托出，并按我的要求处理所有遗留。", { control: 2, possessive: 2 }],
      ["了解大概即可，更看重现在。", { healthy: 2 }],
    ],
  },
  {
    tag: "隐私信任",
    text: "关于财务透明，哪些想法更接近你？",
    multi: true,
    options: [
      ["必须由我统管，我来制定消费和理财计划。", { control: 2 }],
      ["必须完全透明，不准 TA 私自给别人花钱。", { possessive: 2 }],
      ["工资卡和每笔开销都要由我审查批准。", { control: 2, possessive: 2 }],
      ["共同开支透明，同时保留各自财务自由。", { healthy: 2 }],
    ],
  },
  {
    tag: "隐私信任",
    text: "哪些行为你曾经做过或很想做？",
    multi: true,
    options: [
      ["偷看 TA 的手机、账单或浏览记录。", { control: 2 }],
      ["因为 TA 和别人互动而发脾气。", { possessive: 2 }],
      ["要求 TA 和某个人断交。", { control: 2, possessive: 1 }],
      ["承认边界重要，尽量不越界。", { healthy: 2 }],
    ],
  },
  {
    tag: "隐私信任",
    text: "伴侣说你侵犯了 TA 的隐私，哪些反应符合你？",
    multi: true,
    options: [
      ["觉得 TA 小题大做，情侣之间不该有秘密。", { control: 2 }],
      ["觉得 TA 心虚，反而更想查清楚。", { possessive: 2 }],
      ["指责 TA 不信任我，并要求以后都让我看。", { control: 2, possessive: 2 }],
      ["道歉，承认自己越界，并调整做法。", { healthy: 2 }],
    ],
  },
  {
    tag: "未来规划",
    text: "伴侣想去外地或出国发展，你会？",
    options: [
      ["如果不符合我的规划，我会强行干预或否决。", { control: 2 }],
      ["坚决反对，异地会让 TA 离开我。", { possessive: 2 }],
      ["要求 TA 放弃，或必须让我跟着并按我的计划生活。", { control: 2, possessive: 2 }],
      ["支持 TA 的目标，一起讨论如何维系关系。", { healthy: 2 }],
    ],
  },
  {
    tag: "未来规划",
    text: "两人未来居住地有分歧，你会？",
    options: [
      ["必须住在我选的地方，因为我判断更合理。", { control: 2 }],
      ["希望住在让我更安心的位置，远离 TA 的某些圈子。", { possessive: 2 }],
      ["按我的要求选，并限制 TA 搬离我视线。", { control: 2, possessive: 2 }],
      ["综合双方工作、生活偏好共同决定。", { healthy: 2 }],
    ],
  },
  {
    tag: "未来规划",
    text: "伴侣想花很多钱实现个人梦想，你会？",
    options: [
      ["认为不切实际，要求 TA 把钱用在正途。", { control: 2 }],
      ["觉得不如花在我们身上，TA 太自我。", { possessive: 2 }],
      ["否决梦想，并规定钱只能用于共同生活或我认可的事。", { control: 2, possessive: 2 }],
      ["不影响共同生活的前提下，支持 TA 为梦想买单。", { healthy: 2 }],
    ],
  },
  {
    tag: "未来规划",
    text: "伴侣的发展比你快很多，你可能会？",
    options: [
      ["感到失控，想指导 TA 放慢或调整节奏。", { control: 2 }],
      ["担心 TA 变优秀后看不上我、离开我。", { possessive: 2 }],
      ["打压 TA 的成就感，要求 TA 把精力转回我这里。", { control: 2, possessive: 2 }],
      ["为 TA 骄傲，也努力经营自己的成长。", { healthy: 2 }],
    ],
  },
  {
    tag: "未来规划",
    text: "关于伴侣的爱好，你希望 TA 放弃哪些？",
    multi: true,
    options: [
      ["放弃我认为没用、低级或不合适的爱好。", { control: 2 }],
      ["放弃那些占用大量时间、不能陪我的爱好。", { possessive: 2 }],
      ["放弃所有不能带我一起参与的爱好。", { control: 2, possessive: 2 }],
      ["不希望 TA 放弃，爱好是个人魅力的一部分。", { healthy: 2 }],
    ],
  },
  {
    tag: "未来规划",
    text: "关于生育或婚姻节奏，如果伴侣想法不同，你会？",
    options: [
      ["用道理和压力说服 TA 按我的计划来。", { control: 2 }],
      ["觉得 TA 不愿意就是不够爱我或想留后路。", { possessive: 2 }],
      ["用分手、内疚或规则逼 TA 同意。", { control: 2, possessive: 2 }],
      ["深入沟通，如果无法一致就认真评估关系。", { healthy: 2 }],
    ],
  },
  {
    tag: "未来规划",
    text: "伴侣想投入很多业余时间做公益或学习，你会？",
    options: [
      ["认为影响正业，要求 TA 把时间用在我认可的事上。", { control: 2 }],
      ["觉得 TA 把时间给了外人或别的事，心里不舒服。", { possessive: 2 }],
      ["禁止 TA 去，并规定业余时间只能陪我或听我安排。", { control: 2, possessive: 2 }],
      ["欣赏 TA 的投入，也协商好相处时间。", { healthy: 2 }],
    ],
  },
  {
    tag: "未来规划",
    text: "你希望伴侣在外人面前展现什么形象？",
    options: [
      ["展现我设定的完美伴侣形象，言行由我把关。", { control: 2 }],
      ["展现非常爱我、离不开我的状态。", { possessive: 2 }],
      ["表现得对我百依百顺，并时刻亲密宣示主权。", { control: 2, possessive: 2 }],
      ["展现真实的自己即可。", { healthy: 2 }],
    ],
  },
  {
    tag: "未来规划",
    text: "以下哪项会让你下意识觉得伴侣“不乖”？",
    multi: true,
    options: [
      ["没有听我的话。", { control: 2 }],
      ["和别人表现得过于亲近。", { possessive: 2 }],
      ["挑战我定下的规则，或长时间不回复。", { control: 2, possessive: 1 }],
      ["我不会用“不乖”评价一个成年人。", { healthy: 2 }],
    ],
  },
  {
    tag: "未来规划",
    text: "如果让你选择一个词形容恋爱中最大的执念，你选？",
    options: [
      ["掌控。", { control: 2 }],
      ["独占。", { possessive: 2 }],
      ["既要掌控，也要独占。", { control: 2, possessive: 2 }],
      ["信任。", { healthy: 2 }],
    ],
  },
];

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const method = document.getElementById("method");
const questionCounter = document.getElementById("questionCounter");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const questionTag = document.getElementById("questionTag");
const questionText = document.getElementById("questionText");
const questionHint = document.getElementById("questionHint");
const optionsNode = document.getElementById("options");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const answers = Array.from({ length: QUESTIONS.length }, () => []);

function show(section) {
  [intro, quiz, result].forEach((node) => node.classList.add("hidden"));
  section.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const current = QUESTIONS[index];
  const progress = Math.round(((index + 1) / QUESTIONS.length) * 100);

  questionCounter.textContent = `第 ${index + 1} / ${QUESTIONS.length} 题`;
  progressPercent.textContent = `${progress}%`;
  progressFill.style.width = `${progress}%`;
  questionTag.textContent = current.tag;
  questionText.textContent = current.text;
  questionHint.textContent = current.multi ? "本题可多选，选择所有符合你的真实反应。" : "本题单选，选择最贴近你的真实反应。";

  optionsNode.innerHTML = "";
  current.options.forEach(([label], optionIndex) => {
    const selected = answers[index].includes(optionIndex);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${selected ? " is-selected" : ""}`;
    button.innerHTML = `<span class="option-mark">${selected ? "✓" : String.fromCharCode(65 + optionIndex)}</span><span>${label}</span>`;
    button.addEventListener("click", () => chooseOption(optionIndex));
    optionsNode.append(button);
  });

  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === QUESTIONS.length - 1 ? "生成结果" : "下一题";
}

function chooseOption(optionIndex) {
  const current = QUESTIONS[index];
  if (current.multi) {
    const existing = answers[index].indexOf(optionIndex);
    if (existing >= 0) {
      answers[index].splice(existing, 1);
    } else {
      answers[index].push(optionIndex);
    }
  } else {
    answers[index] = [optionIndex];
  }
  renderQuestion();
}

function totals() {
  return answers.reduce(
    (sum, selected, questionIndex) => {
      selected.forEach((optionIndex) => {
        const score = QUESTIONS[questionIndex].options[optionIndex][1];
        sum.control += score.control || 0;
        sum.possessive += score.possessive || 0;
        sum.healthy += score.healthy || 0;
      });
      return sum;
    },
    { control: 0, possessive: 0, healthy: 0 },
  );
}

function percentages(score) {
  const total = Math.max(score.control + score.possessive + score.healthy, 1);
  return {
    control: Math.round((score.control / total) * 100),
    possessive: Math.round((score.possessive / total) * 100),
    healthy: Math.round((score.healthy / total) * 100),
  };
}

function resultCopy(score, percent) {
  const intense = score.control >= 34 && score.possessive >= 34;
  const diff = Math.abs(score.control - score.possessive);
  const healthyLead = percent.healthy >= 45;

  if (healthyLead && score.healthy > score.control && score.healthy > score.possessive) {
    return {
      title: "安全边界型",
      summary: "你在亲密关系里更能保持信任、尊重和独立感。你不是没有情绪，而是更倾向于用沟通处理不安。",
      analysis: "你的健康边界得分最高，说明你能把“爱一个人”和“拥有一个人”区分开，也能允许伴侣保留自己的空间、朋友、选择和隐私。",
      advice: "继续保留这种稳定感。遇到吃醋或担心时，优先表达感受和需求，而不是把情绪变成规则。",
    };
  }

  if (intense || (diff <= 8 && score.control + score.possessive >= 60)) {
    return {
      title: "高控制 + 高占有混合型",
      summary: "你既容易想让伴侣按你的方式行动，也容易害怕 TA 被别人吸引或离开。这类模式会让关系消耗很大。",
      analysis: "混合型的核心不是“很爱”，而是安全感高度依赖外部确认。你可能同时需要报备、服从、删除联系人、秒回、公开偏爱等多种保证。",
      advice: "先从一个最容易执行的边界开始：不偷看、不威胁、不用冷战换服从。把“你必须”改成“我会担心，因为我需要”。如果冲突频繁，建议做伴侣沟通或心理咨询。",
    };
  }

  if (score.control > score.possessive) {
    return {
      title: "控制欲主导型",
      summary: "你的不安更容易表现为规则、干预、指导和纠正。你在意的是事情是否按你的标准运行。",
      analysis: "控制欲的底层需求通常是确定性：知道 TA 在哪里、做什么、该怎么选，关系才显得可控。但伴侣可能会感到被管理、被否定、没有自主权。",
      advice: "练习“建议到此为止”：表达观点后，把决定权还给 TA。每次想立规矩前，先问自己这是不是共同边界，还是我单方面的焦虑。",
    };
  }

  return {
    title: "占有欲主导型",
    summary: "你的不安更容易表现为吃醋、排他、反复确认爱意和害怕失去。你在意的是 TA 是否只把你放在最特殊的位置。",
    analysis: "占有欲的底层需求通常是被选择和被偏爱。适度吃醋很常见，但如果发展成限制社交、反复查证、情绪勒索，关系会变得窒息。",
    advice: "把注意力从“TA 会不会离开”拉回“我如何让自己稳定”。保留自己的社交、爱好和成长，会比不断确认更能带来安全感。",
  };
}

function renderResult() {
  const score = totals();
  const percent = percentages(score);
  const copy = resultCopy(score, percent);

  document.getElementById("resultTitle").textContent = copy.title;
  document.getElementById("resultSummary").textContent = copy.summary;
  document.getElementById("analysisText").textContent = copy.analysis;
  document.getElementById("adviceText").textContent = copy.advice;

  document.getElementById("controlScore").textContent = `${percent.control}%`;
  document.getElementById("possessiveScore").textContent = `${percent.possessive}%`;
  document.getElementById("healthyScore").textContent = `${percent.healthy}%`;
  document.getElementById("controlBar").style.width = `${percent.control}%`;
  document.getElementById("possessiveBar").style.width = `${percent.possessive}%`;
  document.getElementById("healthyBar").style.width = `${percent.healthy}%`;

  show(result);
}

function next() {
  if (!answers[index].length) {
    optionsNode.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 180 },
    );
    return;
  }
  if (index === QUESTIONS.length - 1) {
    renderResult();
    return;
  }
  index += 1;
  renderQuestion();
}

document.getElementById("startBtn").addEventListener("click", () => {
  index = 0;
  renderQuestion();
  show(quiz);
});

document.getElementById("backHomeBtn").addEventListener("click", () => show(intro));
document.getElementById("jumpResultBtn").addEventListener("click", () => method.classList.remove("hidden"));
document.getElementById("closeMethodBtn").addEventListener("click", () => method.classList.add("hidden"));
document.getElementById("restartBtn").addEventListener("click", () => {
  answers.forEach((answer) => answer.splice(0, answer.length));
  index = 0;
  renderQuestion();
  show(quiz);
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  const title = document.getElementById("resultTitle").textContent;
  const summary = document.getElementById("resultSummary").textContent;
  const control = document.getElementById("controlScore").textContent;
  const possessive = document.getElementById("possessiveScore").textContent;
  const healthy = document.getElementById("healthyScore").textContent;
  const text = `我的情侣边界测评结果：${title}\n控制欲 ${control}｜占有欲 ${possessive}｜健康边界 ${healthy}\n${summary}`;
  await navigator.clipboard.writeText(text);
  document.getElementById("copyBtn").textContent = "已复制";
  setTimeout(() => {
    document.getElementById("copyBtn").textContent = "复制结果摘要";
  }, 1400);
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index -= 1;
    renderQuestion();
  }
});
nextBtn.addEventListener("click", next);

renderQuestion();
