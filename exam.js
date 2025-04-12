const notifications = document.querySelector('.notifications'),
buttons = document.querySelectorAll('#info'),
toastDetails = {
  timer: 5000,
  success:{
    icon: 'fa-circle-check',
    text: 'Success: This is a success toast.'
  },
  error:{
    icon: 'fa-circle-xmark',
    text: 'Error: This is a error toast.'
  },
  warning:{
    icon: 'fa-circle-exclamation',
    text: 'Warning: This is a warning toast.'
  },
  info:{
    icon: 'fa-circle-info',
    text: 'Version: 1.0.0<br>Powered by <a href="https://github.com/Aionfatedio">执笔画江南</a>'
  }
},
removeToast = (toast) =>{
  toast.classList.add('hide')
  if( toast.timeoutId) clearTimeout(toast.timeoutId) 
  setTimeout(() => {
    toast.remove()
  },500)

}


const createToast = (id) => {
 const {icon, text} = toastDetails[id]
 const toast = document.createElement('li')
 toast.className = `toast ${id}` 
 toast.innerHTML = `<div class="column">
 <i class="fa-solid ${icon}"></i>
 <span>${text}</span>
</div>
<i class="fa-solid fa-xmark" onClick="removeToast(this.parentElement)"></i>`
  notifications.appendChild(toast)
  toast.timeoutId = setTimeout(()=> removeToast(toast), toastDetails.timer)
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => createToast(btn.id))
})

const questionBank = {
    single: [
    {
        question: "“廉洁” 一词，最早出现在哪部作品中？",
        options: ["《楚辞・招魂》", "《周礼》", "《论语》", "《孟子》"],
        answer: "A",
        explanation: ""
    },
    {
        question: "被称为 “天下第一廉吏” 的是？",
        options: ["包拯", "于成龙", "海瑞", "狄仁杰"],
        answer: "B",
        explanation: ""
    },
    {
        question: "以下哪种行为不属于学术不端，违反廉洁原则的是？",
        options: ["抄袭他人论文", "在实验数据上弄虚作假", "请同学帮忙做课程作业", "认真查阅文献撰写论文"],
        answer: "D",
        explanation: ""
    },
    {
        question: "我国哪部法律对贪污贿赂犯罪作出了明确规定？",
        options: ["《民法总则》", "《刑法》", "《行政法》", "《治安管理处罚法》"],
        answer: "B",
        explanation: ""
    },
    {
        question: "校园中，学生干部为同学评奖评优时，接受同学赠送的贵重礼物并给予特殊关照，这一行为违背了？",
        options: ["公平公正原则", "自愿原则", "等价有偿原则", "诚实信用原则"],
        answer: "A",
        explanation: ""
    },
    {
        question: "“不受曰廉，不污曰洁”，出自于？",
        options: ["东汉・王逸", "北宋・包拯", "唐・魏徵", "清・张伯行"],
        answer: "A",
        explanation: ""
    },
    {
        question: "在学生会竞选过程中，候选人通过贿赂同学拉选票，这种行为破坏了？",
        options: ["竞选的合法性", "竞选的公平性", "竞选的程序性", "竞选的公开性"],
        answer: "B",
        explanation: ""
    },
    {
        question: "对于廉洁文化的理解，错误的是？",
        options: ["廉洁文化是社会主义先进文化的重要组成部分", "廉洁文化只针对政府官员", "廉洁文化有助于营造风清气正的社会环境", "廉洁文化需从小培养"],
        answer: "B",
        explanation: ""
    },
    {
        question: "预防腐败的重要举措不包括？",
        options: ["加强思想教育", "建立健全监督机制", "增加官员的工资待遇", "推进政务公开"],
        answer: "C",
        explanation: ""
    },
    {
        question: "下列不属于廉政监督方式的是？",
        options: ["党内监督", "群众监督", "自我监督", "舆论封锁"],
        answer: "D",
        explanation: ""
    },
    {
        question: "以下哪种行为符合学生干部廉洁自律要求？",
        options: ["利用职务之便优先获取活动信息", "为朋友争取特殊权益", "公平组织各项活动", "接受商家赞助时收取回扣"],
        answer: "C",
        explanation: ""
    },
    {
        question: "《中国共产党廉洁自律准则》对党员和党员领导干部提出了几个方面的廉洁要求？",
        options: ["3 个", "4 个", "5 个", "6 个"],
        answer: "B",
        explanation: ""
    },
    {
        question: "“廉者，政之本也”，出自哪部典籍？",
        options: ["《晏子春秋》", "《管子》", "《韩非子》", "《吕氏春秋》"],
        answer: "A",
        explanation: ""
    },
    {
        question: "校园内开展的勤工俭学活动中，虚报工作时长获取报酬，这是？",
        options: ["合理的增收手段", "违反廉洁要求的行为", "学生的自由权利", "无关紧要的小事"],
        answer: "B",
        explanation: ""
    },
    {
        question: "国家监察委员会的首要职责是？",
        options: ["调查职责", "处置职责", "监督职责", "审判职责"],
        answer: "C",
        explanation: ""
    },
    {
        question: "当发现身边同学有学术不端行为时，正确做法是？",
        options: ["视而不见", "与自己无关，不予举报", "向学校相关部门反映", "帮助同学隐瞒"],
        answer: "C",
        explanation: ""
    },
    {
        question: "古代 “悬鱼太守” 指的是？",
        options: ["羊续", "包拯", "刘宠", "狄仁杰"],
        answer: "A",
        explanation: ""
    },
    {
        question: "下列选项中，不属于廉洁教育目的的是？",
        options: ["培养正确的价值观", "增强拒腐防变能力", "鼓励追求物质享受", "营造廉洁氛围"],
        answer: "C",
        explanation: ""
    },
    {
        question: "在学校组织的考试中，替考行为严重违反了？",
        options: ["考试纪律和廉洁原则", "学生的自由选择", "学校的后勤管理规定", "同学间的互助原则"],
        answer: "A",
        explanation: ""
    },
    {
        question: "党的纪律建设中，首要的纪律是？",
        options: ["组织纪律", "廉洁纪律", "政治纪律", "群众纪律"],
        answer: "C",
        explanation: ""
    },
    {
        question: "《中国共产党廉洁自律准则》的施行日期是（ ）。",
        options: ["2015年1月1日", "2016年1月1日", "2018年10月1日", "2020年7月1日"],
        answer: "B",
        explanation: ""
    },
    {
        question: "党员廉洁自律规范要求坚持（ ），先公后私，克己奉公。",
        options: ["公私分明", "清正廉洁", "尚俭戒奢", "甘于奉献"],
        answer: "A",
        explanation: ""
    },
    {
        question: "最新修订的《中国共产党纪律处分条例》发布于（ ）。",
        options: ["2017年", "2018年", "2021年", "2023年"],
        answer: "B",
        explanation: ""
    },
    {
        question: "下列哪项不属于党的“六大纪律”？（ ）",
        options: ["政治纪律", "财经纪律", "群众纪律", "生活纪律"],
        answer: "B",
        explanation: ""
    },
    {
        question: "党员领导干部离职后（ ）内，不得接受原任职务管辖业务范围内的企业聘任。",
        options: ["1年", "2年", "3年", "5年"],
        answer: "C",
        explanation: ""
    },
    {
        question: "党内监督的专门机关是（ ）。",
        options: ["党的各级委员会", "党的各级纪律检查委员会", "党委组织部", "巡视组"],
        answer: "B",
        explanation: ""
    },
    {
        question: "下列行为违反廉洁纪律的是（ ）。",
        options: ["超标准报销差旅费", "未及时缴纳党费", "参加校友会", "迟到早退"],
        answer: "A",
        explanation: ""
    },
    {
        question: "《中华人民共和国监察法》实施时间是（ ）。",
        options: ["2018年3月20日", "2019年1月1日", "2020年6月30日", "2021年1月1日"],
        answer: "A",
        explanation: ""
    },
    {
        question: "党员因故意犯罪被判处有期徒刑以上刑罚，应给予（ ）处分。",
        options: ["严重警告", "留党察看", "撤销党内职务", "开除党籍"],
        answer: "D",
        explanation: ""
    },
    {
        question: "下列属于中央八项规定精神的是（ ）。",
        options: ["改进调查研究", "严控公车私用", "精简会议活动", "以上全是"],
        answer: "D",
        explanation: ""
    },
    {
        question: "党员受留党察看处分期间，没有（ ）。",
        options: ["表决权", "选举权", "被选举权", "以上全无"],
        answer: "D",
        explanation: ""
    },
    {
        question: "公职人员政务处分的最高等级是（ ）。",
        options: ["撤职", "开除", "记大过", "降级"],
        answer: "B",
        explanation: ""
    },
    {
        question: "党员领导干部操办婚丧喜庆事宜应提前（ ）报告。",
        options: ["3天", "5天", "7天", "10天"],
        answer: "D",
        explanation: ""
    },
    {
        question: "下列不属于监察机关权限的是（ ）。",
        options: ["谈话", "讯问", "逮捕", "冻结财产"],
        answer: "C",
        explanation: ""
    },
    {
        question: "党员廉洁自律规范要求坚持（ ），自觉维护人民根本利益。",
        options: ["公私分明", "执政为民", "清正廉洁", "尚俭戒奢"],
        answer: "B",
        explanation: ""
    },
    {
        question: "党员受到警告处分后，（ ）内不得在党内提升职务。",
        options: ["6个月", "1年", "1.5年", "2年"],
        answer: "B",
        explanation: ""
    },
    {
        question: "下列哪项属于受贿行为？（ ）",
        options: ["收受礼金未登记", "接受管理对象宴请", "借用下属车辆", "以上全是"],
        answer: "D",
        explanation: ""
    },
    {
        question: "党员领导干部的配偶经商需向（ ）报备。",
        options: ["上级纪委", "所在党组织", "组织部", "监察委"],
        answer: "B",
        explanation: ""
    },
    {
        question: "党的问责对象不包括（ ）。",
        options: ["党委（党组）", "纪委（纪检组）", "普通党员", "党的工作部门"],
        answer: "C",
        explanation: ""
    },
    {
        question: "《中国共产党纪律处分条例》规定，对抗组织审查的行为应（ ）。",
        options: ["从重处分", "加重处分", "单独处理", "不予追究"],
        answer: "A",
        explanation: ""
    },
    {
        question: "《中国共产党纪律处分条例》规定，对党员的纪律处分种类不包括以下哪项？",
        options: ["警告", "严重警告", "撤销党内职务", "经济罚款"],
        answer: "D",
        explanation: "党内纪律处分不涉及经济罚款，但可能追缴违纪所得"
    },
    {
        question: "下列哪种行为违反了《中国共产党纪律处分条例》中的“廉洁纪律”？",
        options: ["出差期间自费参观景点", "利用职权为配偶经营活动谋利", "按规定申报个人有关事项", "拒绝管理服务对象宴请"],
        answer: "B",
        explanation: "条例第85条明确禁止利用职权为亲属谋利"
    },
    {
        question: "《中国共产党党内监督条例》规定，党内监督的重点对象是：",
        options: ["全体党员", "党的领导机关和领导干部", "基层党支部", "离退休干部"],
        answer: "B",
        explanation: "突出“关键少数”监督"
    },
    {
        question: "党员领导干部违反规定经商办企业，最严重的处分是：",
        options: ["警告", "撤销党内职务", "留党察看", "开除党籍"],
        answer: "D",
        explanation: "条例第94条，情节严重者可开除党籍"
    },
    {
        question: "下列哪项不属于中央八项规定精神的要求？",
        options: ["改进调查研究", "精简会议活动", "提高公务接待标准", "厉行勤俭节约"],
        answer: "C",
        explanation: "八项规定明确要求“轻车简从”“简化接待”"
    },
    {
        question: "《中国共产党问责条例》规定，对党组织的问责方式不包括：",
        options: ["检查", "通报", "改组", "扣发工资"],
        answer: "D",
        explanation: "问责方式为检查、通报、改组，不涉及经济处罚"
    },
    {
        question: "根据《中国共产党纪律处分条例》，党员在国（境）外违反当地法律，损害党和国家形象的，应当如何处理？",
        options: ["不予追究，尊重当地法律", "视情节轻重给予党纪处分", "仅批评教育", "由所在单位内部处理"],
        answer: "B",
        explanation: "《条例》第135条，党员在境外违纪同样受党纪约束"
    },
    {
        question: "党员领导干部违反规定干预和插手市场经济活动，造成不良后果的，最可能受到的处分是：",
        options: ["诫勉谈话", "撤销党内职务", "留党察看", "开除党籍"],
        answer: "D",
        explanation: "《条例》第126条，情节严重者可开除党籍"
    },
    {
        question: "《中国共产党党内监督条例》规定，党内监督的专责机关是：",
        options: ["党的各级委员会", "党的基层组织", "党的纪律检查委员会", "党委组织部"],
        answer: "C",
        explanation: "各级纪委是党内监督专责机关"
    },
    {
        question: "党员受到留党察看处分期间，不享有以下哪项权利？",
        options: ["选举权", "被选举权", "申诉权", "参加组织生活"],
        answer: "B",
        explanation: "留党察看期间无表决权、选举权和被选举权"
    },
    {
        question: "“领导干部配偶、子女及其配偶经商办企业”需执行什么制度？",
        options: ["事前申报", "事后备案", "全面禁止", "定期公示"],
        answer: "A",
        explanation: "《领导干部报告个人有关事项规定》要求事前规范"
    },
    {
        question: "党员在社交平台转发妄议中央大政方针的文章，属于违反：",
        options: ["政治纪律", "组织纪律", "廉洁纪律", "工作纪律"],
        answer: "A",
        explanation: "《条例》第46条，严禁公开发表不当言论"
    },
    {
        question: "“受贿行贿一起查”体现了哪项反腐败原则？",
        options: ["标本兼治", "宽严相济", "零容忍", "系统治理"],
        answer: "C",
        explanation: "对腐败行为无差别打击，体现“零容忍”态度"
    },
    {
        question: "《中国共产党党内监督条例》规定，党委（党组）在党内监督中负主体责任，书记是第一责任人，班子成员在职责范围内履行：",
        options: ["主要责任", "监督责任", "直接责任", "领导责任"],
        answer: "B",
        explanation: "明确‘一岗双责’要求"
    },
    {
        question: "国际反腐败日是哪一天？",
        options: ["10月31日", "12月9日", "7月1日", "5月15日"],
        answer: "B",
        explanation: "联合国2003年确立"
    },
    {
        question: "下列哪项制度不属于党内监督体系的重要组成部分？",
        options: ["巡视巡察制度", "民主生活会制度", "重大事项请示报告制度", "民主评议党员制度"],
        answer: "D",
        explanation: "属于党员教育管理范畴"
    },
    {
        question: "《中国共产党廉洁自律准则》对全体党员提出的“四个坚持”不包括：",
        options: ["坚持公私分明", "坚持崇廉拒腐", "坚持尚俭戒奢", "坚持民主集中制"],
        answer: "D",
        explanation: "“四个坚持”聚焦廉洁自律，民主集中制是组织原则"
    },
    {
        question: "“三重一大”事项必须集体决策，其中“三重一大”不包括：",
        options: ["重大事项决策", "重要干部任免", "重大项目安排", "个人家庭事务"],
        answer: "D",
        explanation: "“三重一大”指重大决策、重要人事、重大项目和大额资金使用"
    },
    {
        question: "党员收受可能影响公正执行公务的礼品，应如何处理？",
        options: ["立即退还或上交组织", "留存但向组织报备", "转赠他人避免浪费", "自行折现后捐赠"],
        answer: "A",
        explanation: "《纪律处分条例》第88条规定应退交或登记上交"
    },
    {
        question: "根据《中国共产党纪律处分条例》，下列哪种情形不属于‘对抗组织审查’行为？",
        options: ["串供或者伪造证据", "阻止他人揭发检举", "主动向组织说明问题", "向调查人员提供虚假情况"],
        answer: "C",
        explanation: "主动说明问题属于配合调查，不构成对抗"
    }
],

multiple: [
        {
            question: "以下属于廉洁廉政典型人物的有？",
            options: ["焦裕禄", "孔繁森", "杨善洲", "和珅"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "廉洁文化建设的途径包括？",
            options: ["开展廉洁教育活动", "营造廉洁文化氛围", "建立廉洁制度体系", "忽视廉洁宣传"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "大学生在日常生活中践行廉洁，可体现在以下哪些方面？",
            options: ["考试不作弊", "不铺张浪费", "抵制校园贷诱惑", "参与校园腐败"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "校园廉洁风险点可能存在于？",
            options: ["奖学金评定", "学生干部选举", "图书采购", "食堂饭菜定价"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "预防校园腐败，可采取的措施有？",
            options: ["加强学生思想道德教育", "完善学校监督机制", "对违规行为从轻处理", "推进校务公开"],
            answer: ["A", "B", "D"],
            explanation: ""
        },
        {
            question: "学术廉洁的重要性体现在？",
            options: ["推动学术进步", "维护学术尊严", "培养诚信品质", "促进社会公平"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "以下哪些行为属于违反廉洁纪律的行为？",
            options: ["接受可能影响公正执行公务的宴请", "利用职权为亲属谋取利益", "廉洁奉公，不谋私利", "违规收受礼品礼金"],
            answer: ["A", "B", "D"],
            explanation: ""
        },
        {
            question: "廉洁教育对大学生的意义包括？",
            options: ["帮助树立正确的世界观、人生观和价值观", "提高辨别是非的能力", "为未来职业发展奠定良好基础", "限制个人自由发展"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "加强大学生廉洁教育，学校可以采取的方式有？",
            options: ["开设廉洁教育课程", "举办廉洁主题讲座", "组织廉洁文化活动", "放任学生自主发展"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "下列属于廉洁相关法律法规的有？",
            options: ["《监察法》", "《公务员法》", "《反不正当竞争法》", "《消费者权益保护法》"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "学生干部廉洁履职的要求有？",
            options: ["坚持公平公正公开", "不滥用职权", "接受同学监督", "以权谋私"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "在参与校园商业活动时，大学生应做到？",
            options: ["抵制虚假宣传", "拒绝商业贿赂", "维护自身合法权益", "协助商家进行欺诈"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "廉洁的基本内涵包括？",
            options: ["不贪污受贿", "诚实守信", "办事公正", "奢侈浪费"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "营造廉洁校园文化，学生可以做的有？",
            options: ["传播廉洁知识", "举报腐败行为", "倡导廉洁行为", "参与腐败活动"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "下列属于监督腐败的有效方式的有？",
            options: ["网络监督", "信访举报", "媒体曝光", "放任腐败行为"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "大学生在社会实践中践行廉洁，要做到？",
            options: ["拒绝接受贿赂", "如实报告工作情况", "参与不正当竞争", "遵守社会公德"],
            answer: ["A", "B", "D"],
            explanation: ""
        },
        {
            question: "廉洁教育与哪些教育相互关联？",
            options: ["道德教育", "法制教育", "心理健康教育", "体育教育"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "在评选先进个人时，应遵循的原则有？",
            options: ["公平", "公正", "公开", "任人唯亲"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "校园中，防止考试作弊的措施有？",
            options: ["加强诚信教育", "严格考场纪律", "加大作弊惩处力度", "纵容作弊行为"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "下列关于廉洁的名言警句，出自古代典籍的有？",
            options: ["“其身正，不令而行；其身不正，虽令不从。”", "“清风两袖朝天去，免得闾阎话短长。”", "“粉身碎骨浑不怕，要留清白在人间。”", "“出淤泥而不染，濯清涟而不妖。”"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "党员廉洁自律规范的“四个必须”包括（ ）。",
            options: ["必须坚定理想信念", "必须坚持全心全意为人民服务", "必须继承发扬党的优良传统", "必须自觉培养高尚道德情操"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "下列属于违反政治纪律的行为有（ ）。",
            options: ["公开发表反党言论", "对抗组织审查", "参加宗教活动", "搞团团伙伙"],
            answer: ["A", "B", "D"],
            explanation: ""
        },
        {
            question: "监察机关可采取的调查措施包括（ ）。",
            options: ["谈话", "讯问", "冻结财产", "通缉"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "下列属于“违反组织纪律”的行为有（ ）。",
            options: ["不如实报告个人事项", "违规发展党员", "拉票贿选", "拒不执行党组织决定"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "党的纪律处分种类包括（ ）。",
            options: ["警告", "严重警告", "撤销党内职务", "留党察看"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "中央八项规定禁止的行为包括（ ）。",
            options: ["公款旅游", "超标准接待", "违规发放津贴", "大办婚丧喜庆"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "党员领导干部“一岗双责”指（ ）。",
            options: ["业务工作职责", "党建工作职责", "安全生产职责", "党风廉政建设职责"],
            answer: ["A", "D"],
            explanation: ""
        },
        {
            question: "下列属于受贿罪构成要件的有（ ）。",
            options: ["利用职务便利", "索取或收受财物", "为他人谋取利益", "数额较大"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "党内监督的重点对象是（ ）。",
            options: ["党的领导机关", "领导干部", "普通党员", "基层党支部"],
            answer: ["A", "B"],
            explanation: ""
        },
        {
            question: "党员不得从事的活动包括（ ）。",
            options: ["经商办企业", "有偿中介", "买卖股票", "兼职取酬"],
            answer: ["A", "B", "D"],
            explanation: ""
        },
        {
            question: "下列属于廉洁文化内涵的是（ ）。",
            options: ["崇廉拒腐", "公私分明", "勤俭节约", "家风建设"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "党员受留党察看处分期间（ ）。",
            options: ["无表决权", "无选举权", "保留党籍", "可担任党外职务"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "《政务处分法》的处分种类包括（ ）。",
            options: ["警告", "记过", "撤职", "开除"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "下列行为违反廉洁纪律的有（ ）。",
            options: ["收受购物卡", "违规发放津贴", "公款吃喝", "私车公养"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "党的问责方式包括（ ）。",
            options: ["检查", "通报", "诫勉", "组织调整"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "‘三重一大’制度包括（ ）。",
            options: ["重大决策", "重要人事任免", "重大项目安排", "大额资金使用"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "党员领导干部应报告的个人事项包括（ ）。",
            options: ["房产", "股票", "子女婚姻", "配偶从业"],
            answer: ["A", "B", "D"],
            explanation: ""
        },
        {
            question: "下列属于党内监督方式的有（ ）。",
            options: ["巡视巡察", "述职述廉", "民主生活会", "信访举报"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "党员有权对党组织的工作提出（ ）。",
            options: ["建议", "倡议", "批评", "质询"],
            answer: ["A", "B", "C"],
            explanation: ""
        },
        {
            question: "下列行为构成职务违法的有（ ）。",
            options: ["滥用职权", "玩忽职守", "贪污受贿", "徇私舞弊"],
            answer: ["A", "B", "C", "D"],
            explanation: ""
        },
        {
            question: "根据《中国共产党纪律处分条例》，下列哪些行为属于违反廉洁纪律？",
            options: ["借用管理服务对象钱款，影响公正执行公务", "公款旅游或以学习培训为名变相旅游", "在公务活动中超标准接待", "正常参加校友会活动"],
            answer: ["A", "B", "C"],
            explanation: "D项不涉及利益输送，但需注意校友会活动若存在利益交换仍可能违纪。"
        },
        {
            question: "党员领导干部的‘家风建设’要求包括哪些内容？",
            options: ["教育约束配偶、子女及其配偶遵纪守法", "默许亲属利用其影响力谋取私利", "定期向组织报告个人婚姻变化情况", "制止亲属插手职权范围内的工作"],
            answer: ["A", "D"],
            explanation: "B项明确禁止，C项属于个人事项报告内容，非家风建设直接要求。"
        },
        {
            question: "下列哪些情形可能构成‘形式主义、官僚主义’问题？",
            options: ["重复要求基层报送相同数据", "调研时‘走经典路线’搞作秀", "对群众诉求推诿扯皮", "按规定开展年度考核"],
            answer: ["A", "B", "C"],
            explanation: "D项为正常工作程序，但需注意考核是否流于形式。"
        },
        {
            question: "《中国共产党党内监督条例》明确的监督体系包括哪些？",
            options: ["党委（党组）全面监督", "纪律检查机关专责监督", "党员民主监督", "社会舆论监督"],
            answer: ["A", "B", "C"],
            explanation: "D项属于外部监督，非党内监督体系组成部分。"
        },
        {
            question: "下列哪些礼品应当登记上交？",
            options: ["企业赠送的价值500元购物卡", "同学赠送的家乡土特产", "管理对象邮寄的匿名茶叶", "亲属赠送的名牌手表"],
            answer: ["A", "C"],
            explanation: "B项无利益关联可不交，D项属私人赠与，但若领导干部职务相关仍需报备。"
        },
        {
            question: "‘三重一大’决策制度中‘重大决策’包括哪些内容？",
            options: ["年度预算调整5%以上", "处级干部岗位调整", "办公楼墙面翻新", "制定内部考勤制度"],
            answer: ["A", "B"],
            explanation: "C项属日常管理，D项为常规制度，均未达‘重大’标准。"
        },
        {
            question: "党员有下列哪些行为应当给予党纪处分？",
            options: ["疫情期间拒不执行管控措施", "未按时缴纳党费", "长期不过组织生活", "出差时顺道参观红色景点"],
            answer: ["A", "C"],
            explanation: "B项可批评教育，D项不违纪。但需注意红色景点参观是否变相旅游。"
        },
        {
            question: "下列哪些属于‘隐形变异’四风问题？",
            options: ["将公务接待费用拆分报销", "通过电子礼品卡收受礼金", "在内部食堂违规吃喝", "按标准发放节日福利"],
            answer: ["A", "B", "C"],
            explanation: "D项合规，但需注意福利资金来源和发放范围。"
        },
        {
            question: "《中国共产党问责条例》规定的问责方式包括（ ）",
            options: ["通报", "诫勉", "组织调整", "移送司法"],
            answer: ["A", "B", "C"],
            explanation: "D项属于法律程序，非党内问责方式。"
        },
        {
            question: "下列哪些行为违反政治纪律？",
            options: ["在微信群转发境外反动文章", "对抗巡视调查", "不如实报告个人事项", "参加宗教活动"],
            answer: ["A", "B"],
            explanation: "C项属组织纪律，D项需区分是否参与宗教事务管理。"
        },
        {
            question: "下列哪些行为属于违规公务接待？",
            options: ["提供高档菜肴和野生动物菜品", "使用私人会所进行公务接待", "接待无公函的公务活动人员", "接待人数超标但未超过预算", "将接待费用转嫁至下属单位"],
            answer: ["A", "B", "C", "E"],
            explanation: "D项无论是否超预算，人数超标即属违规。需特别注意隐蔽转嫁费用问题。"
        },
        {
            question: "领导干部个人有关事项报告必须包括：",
            options: ["本人及配偶名下房产", "子女就读学校信息", "持有股票基金情况", "配偶从业情况", "年度收入总额"],
            answer: ["A", "B", "C", "D"],
            explanation: "E项只需报告工资及奖金收入，不要求报告总额。2023年新规强化金融资产申报。"
        },
        {
            question: "下列哪些岗位应当列为重点廉洁风险岗位？",
            options: ["采购审批岗位", "人事管理岗位", "财务审核岗位", "信访接待岗位", "项目审批岗位"],
            answer: ["A", "B", "C", "E"],
            explanation: "D岗位虽重要但不直接涉及资金、权力运行，风险等级相对较低。"
        },
        {
            question: "下列哪些行为属于违规经商办企业？",
            options: ["配偶注册同业竞争公司", "子女入股管辖范围内企业", "堂弟经营与职务无关企业", "本人代持非上市公司股份", "同学经营业务关联企业"],
            answer: ["A", "B", "D"],
            explanation: "需注意‘特定关系人’范围及‘影子股东’等新型违纪形式。"
        },
        {
            question: "下列哪些行为明确违反廉洁纪律？",
            options: ["收受可能影响公正执行公务的礼品", "违规发放津补贴", "占用公物归个人使用", "正常民间借贷行为", "接受管理服务对象安排的旅游"],
            answer: ["A", "B", "C", "E"],
            explanation: "D项需结合借贷金额、对象等综合判断是否影响公正执行公务。"
        },
        {
            question: "被巡视党组织应当做到：",
            options: ["建立问题清单", "制定整改方案", "公开整改情况", "追究相关人员责任", "建立长效机制"],
            answer: ["A", "B", "C", "D", "E"],
            explanation: "体现巡视整改‘四个融入’要求，特别强调长效机制建设。"
        },
        {
            question: "有效开展廉洁文化建设的载体包括：",
            options: ["廉政教育基地", "廉洁文化长廊", "新媒体宣传平台", "家风家教活动", "廉洁主题文艺作品"],
            answer: ["A", "B", "C", "D", "E"],
            explanation: "新时代廉洁文化建设要求构建全方位、立体化传播矩阵。"
        },
        {
            question: "下列哪些属于‘四风’问题新表现？",
            options: ["通过快递收送礼金", "电子红包贿赂", "私车公养", "吃老板家宴", "虚列开支套现"],
            answer: ["A", "B", "C", "D", "E"],
            explanation: "需警惕‘四风’问题隐形变异，特别注意电子化、隐蔽化趋势。"
        },
        {
            question: "党纪处分决定作出后应当：",
            options: ["一个月内宣布执行", "归入受处分人档案", "向同级党委组织部门通报", "在一定范围内宣布", "抄送相关纪检监察机关"],
            answer: ["A", "B", "C", "D", "E"],
            explanation: "体现处分执行‘闭环管理’要求，确保处分决定落实到位。"
        },
        {
            question: "领导干部廉洁从业承诺通常包括：",
            options: ["严守政治纪律", "规范权力行使", "自觉接受监督", "管好亲属和身边人", "如实报告个人事项"],
            answer: ["A", "B", "C", "D", "E"],
            explanation: "新时代对领导干部廉洁承诺提出更全面要求，强化自我约束。"
        }
    ],

    trueFalse: [
        {
            question: "廉洁廉政只与政府官员有关，与大学生无关。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "大学生作为未来社会的建设者，培养廉洁意识至关重要，关乎未来职业发展与社会风气。"
        },
        {
            question: "在校园活动中，偶尔接受商家小额贿赂不会有严重后果。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "任何形式的贿赂行为都违背廉洁原则，损害校园公平公正，严重时需承担法律责任。"
        },
        {
            question: "学术不端行为不仅损害个人学术声誉，也阻碍学术进步。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "学术不端破坏学术秩序，误导研究方向，阻碍学术健康发展。"
        },
        {
            question: "学生干部在组织活动时，可以优先考虑自己的朋友参与。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "学生干部应公平对待每位同学，优先照顾朋友违背公平公正原则。"
        },
        {
            question: "廉洁教育能够帮助大学生树立正确的消费观。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "廉洁教育引导大学生认识消费与道德的关系，避免盲目攀比和铺张浪费。"
        },
        {
            question: "只要不触犯法律，在校园里有点小贪小腐没关系。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "校园小贪小腐破坏校园风气，腐蚀学生思想，是严重的道德问题。"
        },
        {
            question: "抵制校园贷诱惑是大学生践行廉洁的体现。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "校园贷常伴随欺诈陷阱，抵制它可避免陷入经济困境，维护自身权益。"
        },
        {
            question: "学校推进校务公开，有助于预防校园腐败。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "校务公开让学校工作接受师生监督，减少腐败滋生空间。"
        },
        {
            question: "考试作弊只是违反考试纪律，与廉洁无关。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "考试作弊本质是不诚信、不公平的行为，违背廉洁原则。"
        },
        {
            question: "廉洁文化建设只需开展理论教育，无需实践活动。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "廉洁文化建设需理论与实践结合，通过实践活动让廉洁理念深入人心。"
        },
        {
            question: "大学生参与廉洁教育活动对自身成长有益。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "参与廉洁教育活动可增强大学生廉洁意识，提升道德素养。"
        },
        {
            question: "在学生会竞选时，为拉选票可以适当承诺给同学好处。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "这种行为破坏竞选公平性，违背廉洁原则。"
        },
        {
            question: "举报校园腐败行为是多管闲事，会得罪人。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "举报校园腐败是维护校园公平正义的行为，值得鼓励。"
        },
        {
            question: "廉洁自律是党员干部的事，普通学生无需关注。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "廉洁自律是每个人应具备的品质，普通学生也应培养。"
        },
        {
            question: "学术论文引用他人观点无需注明出处。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "引用他人观点不注明出处属于抄袭行为，违反学术廉洁原则。"
        },
        {
            question: "营造廉洁校园氛围需要全体师生共同努力。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "师生共同营造廉洁氛围，才能打造风清气正的校园环境。"
        },
        {
            question: "接受同学赠送的小零食，帮助其在班级事务中谋取利益，不算腐败行为。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "这种行为破坏公平公正，属于腐败行为。"
        },
        {
            question: "廉洁教育可以培养大学生的社会责任感。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "廉洁教育让大学生明白自身责任，为社会发展贡献正能量。"
        },
        {
            question: "在勤工俭学中，虚报工作成果获取报酬是合理的。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "虚报工作成果违背诚实守信原则，违反廉洁要求。"
        },
        {
            question: "开展廉洁知识竞赛是廉洁教育的有效形式之一。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "知识竞赛可激发学生学习廉洁知识的积极性，传播廉洁文化。"
        },
        {
            question: "党员可以参加自发成立的老乡会、校友会。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "需经批准且无利益关系。"
        },
        {
            question: "党内监督的重点对象是全体党员。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "是党的领导机关和领导干部。"
        },
        {
            question: "党员受留党察看处分期满自动恢复权利。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "需经党组织批准。"
        },
        {
            question: "公职人员退休后不再受《政务处分法》约束。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "退休前违法行为仍可追责。"
        },
        {
            question: "收受可能影响公务的礼品需登记上交。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: ""
        },
        {
            question: "党员领导干部可借用管理对象钱款用于购房。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: ""
        },
        {
            question: "对抗组织审查的行为应从重处分。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: ""
        },
        {
            question: "党员可投资私募基金但需向组织报备。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "禁止违规从事营利活动。"
        },
        {
            question: "党员因过失犯罪被判处缓刑必须开除党籍。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: ""
        },
        {
            question: "公务接待可提供高档酒水但不得超标。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "严禁提供。"
        },
        {
            question: "党员可接受企业邀请参加免费旅游。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "可能影响公正执行公务。"
        },
        {
            question: "党员受严重警告处分后两年内不得提拔。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: ""
        },
        {
            question: "监察委员会对所有行使公权力的公职人员实施监察。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: ""
        },
        {
            question: "党员领导干部可安排亲属在其管辖企业任职。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "需回避。"
        },
        {
            question: "党员可参与民间借贷并收取合理利息。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "需合法合规。"
        },
        {
            question: "公职人员被留置期间可聘请律师辩护。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "监察机关调查期间不适用。"
        },
        {
            question: "党员有权拒绝执行党组织的错误决定。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: ""
        },
        {
            question: "党员领导干部个人事项报告包括子女留学情况。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: ""
        },
        {
            question: "公款购买赠送礼品无论金额大小均属违纪。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: ""
        },
        {
            question: "党员受撤销党内职务处分后三年内不得提拔。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "两年内。"
        },
        {
            question: "《中国共产党廉洁自律准则》是党执政以来第一部坚持正面倡导、面向全体党员的廉洁自律规范。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "2015年修订的《准则》首次以正面清单形式提出廉洁要求。"
        },
        {
            question: "“廉洁”一词最早出自《论语》，原意为“不受曰廉，不污曰洁”。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "最早见于《楚辞》，定义出自《周礼》。"
        },
        {
            question: "党员可以适当参加具有宗教色彩的民俗活动，但不得参与宗教事务管理。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "需区分民俗习惯与宗教活动的界限。"
        },
        {
            question: "《中国共产党纪律处分条例》规定，留党察看最长不超过三年。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "留党察看期最长二年。"
        },
        {
            question: "领导干部报告个人有关事项时，需要申报子女的婚姻状况。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "只需报告子女配偶从业情况，不要求报告婚姻状况。"
        },
        {
            question: "公务接待中提供家常菜和当地普通饮品不违反规定。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "但需注意不得提供高档菜肴和酒水。"
        },
        {
            question: "领导干部可以借公务差旅之机，顺道参观当地红色教育基地。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "需严格审批，不得借机旅游。"
        },
        {
            question: "党员领导干部退休后即可到与原业务相关的企业任职。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "需满三年冷却期，且需审批。"
        },
        {
            question: "同事间正常的人情往来收受500元以下的礼品不算违纪。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "不论金额大小，可能影响公正执行公务的都应拒收。"
        },
        {
            question: "纪委对同级党委主要负责人的问题可以直接立案审查。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "需报上级纪委批准。"
        },
        {
            question: "“第一种形态”包括诫勉谈话、通报批评等措施。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "体现抓早抓小。"
        },
        {
            question: "巡视组可以临时决定对重大问题进行深入了解。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "根据《巡视工作条例》授权。"
        },
        {
            question: "公务用车改革后，可以变相保留领导干部专车。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "属隐形变异‘四风’问题。"
        },
        {
            question: "领导干部操办婚宴，邀请20名管理服务对象参加不违纪。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "不得邀请管理服务对象。"
        },
        {
            question: "单位可以用工会经费发放人人有份的节日福利。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "需符合工会经费使用规定。"
        },
        {
            question: "通过电子红包收受管理对象500元礼金不算违纪。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "无论形式金额，均属违纪。"
        },
        {
            question: "在私人会所组织同学聚会不违反规定。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "党员干部不得出入私人会所。"
        },
        {
            question: "借用下属单位车辆办理私事需支付费用就不算违纪。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "公车私用一律禁止。"
        },
        {
            question: "“公生明，廉生威”是明代海瑞提出的廉政名言。",
            options: ["正确", "错误"],
            answer: "错误",
            explanation: "出自年富《官箴》。"
        },
        {
            question: "“杨震暮夜却金”典故体现的是廉洁自律精神。",
            options: ["正确", "错误"],
            answer: "正确",
            explanation: "东汉杨震拒收黄金的著名典故。"
        }
    ],
    shortAnswer: [
    {
        question: "请简述大学生廉洁教育的重要性。",
        answer: "大学生是国家未来的建设者，开展廉洁教育对大学生树立正确的世界观、人生观和价值观至关重要，可帮助他们提高辨别是非的能力，抵御各种诱惑，培养诚信、公正的品质。同时，这为大学生未来的职业发展奠定良好基础，防止踏入社会后陷入腐败泥潭。此外，大学生接受廉洁教育，能营造校园廉洁氛围，带动整个社会形成风清气正的环境，对国家的长远发展和社会的进步具有积极意义。",
        explanation: ""
    },
    {
        question: "作为大学生，在学术活动中应如何做到廉洁自律？",
        answer: "首先，要树立正确的学术观念，认识到学术研究的严肃性和重要性，尊重知识和知识产权。在撰写论文时，认真查阅文献，合理引用他人观点，并按规范注明出处，杜绝抄袭、剽窃等行为。在实验研究中，确保数据真实可靠，不篡改、伪造数据。积极参与学术讨论，以严谨的态度对待学术批评和建议，不通过不正当手段获取学术荣誉或利益。此外，当发现身边存在学术不端行为时，应勇敢地向学校相关部门举报，维护学术的纯洁性。",
        explanation: ""
    },
    {
        question: "校园中存在哪些常见的廉洁风险点？请举例说明。",
        answer: "在奖学金评定方面，可能存在评定标准不透明、个别学生干部或教师利用职权为特定学生谋取奖学金的情况；学生干部选举时，候选人可能通过贿赂、拉帮结派等方式破坏选举公平性；图书采购过程中，采购人员可能收受供应商贿赂，采购质次价高的图书；在校园工程建设中，可能出现违规招投标、施工方偷工减料并向相关负责人行贿的现象；考试环节，存在学生作弊、教师协助学生作弊等违反廉洁原则的行为。",
        explanation: ""
    },
    {
        question: "简述如何营造廉洁校园文化氛围。",
        answer: "学校层面，要开设廉洁教育课程，将廉洁教育纳入人才培养体系，通过课堂教学系统地向学生传授廉洁知识。举办廉洁主题讲座、演讲比赛、征文活动等，丰富廉洁教育形式。利用校园广播、宣传栏、校报等宣传阵地，宣传廉洁文化知识和先进典型事迹。建立健全学校监督机制，加强对学校各项工作的监督，对违规行为严肃处理。学生层面，学生自身要积极参与廉洁教育活动，传播廉洁知识，倡导廉洁行为。发现校园内的腐败行为，及时向学校相关部门举报，共同维护校园的廉洁环境。",
        explanation: ""
    },
    {
        question: "当发现身边同学有违反廉洁原则的行为时，你会如何处理？",
        answer: "首先，选择合适的时机与同学沟通，向其指出行为的错误性，说明违反廉洁原则可能带来的后果，引导其认识错误并主动改正。若同学不听劝阻，可向班级辅导员或学校相关部门反映情况，如实提供相关证据，由学校按照规定进行处理。在处理过程中，要注意保护自身安全，避免因举报行为遭受打击报复。同时，通过自身的言行，影响身边同学，倡导大家共同遵守廉洁原则，营造风清气正的校园环境。",
        explanation: ""
    },
    {
        question: "简述《中国共产党廉洁自律准则》中党员的‘四个坚持’。",
        answer: "① 坚持公私分明，先公后私；② 坚持崇廉拒腐，清白做人；③ 坚持尚俭戒奢，艰苦朴素；④ 坚持吃苦在前，享受在后。",
        explanation: ""
    },
    {
        question: "党的纪律处分工作应遵循哪些原则？",
        answer: "① 党要管党、从严治党；② 党纪面前一律平等；③ 实事求是；④ 民主集中制；⑤ 惩前毖后、治病救人。",
        explanation: ""
    },
    {
        question: "案例分析：某局长收受管理对象价值2万元礼品未上交，应如何定性处理？",
        answer: "违反廉洁纪律，构成受贿行为。处理：数额较大，给予撤销党内职务或留党察看处分；若涉嫌犯罪，移送司法机关。",
        explanation: ""
    },
    {
        question: "列举《中国共产党纪律处分条例》中应当从重或加重处分的五种情形。",
        answer: "① 对抗组织审查；② 强迫、唆使他人违纪；③ 拒不上交违纪所得；④ 违纪受处分后又故意违纪；⑤ 在集体违纪中起主要作用。",
        explanation: ""
    },
    {
        question: "简述‘三不腐’机制的内涵及相互关系。",
        answer: "内涵：不敢腐（震慑）、不能腐（制度）、不想腐（觉悟）。关系：三者相互衔接、协同推进，形成反腐败长效机制。",
        explanation: ""
    },
    {
        question: "简述《中国共产党廉洁自律准则》提出的‘四个必须’要求。",
        answer: "必须坚定共产主义理想和中国特色社会主义信念，必须坚持全心全意为人民服务根本宗旨，必须继承发扬党的优良传统和作风，必须自觉培养高尚道德情操。",
        explanation: ""
    },
    {
        question: "对党员的纪律处分种类为哪几类？",
        answer: "警告；严重警告；撤销党内职务；留党察看；开除党籍。",
        explanation: ""
    },
    {
        question: "中央纪委提出的‘二十四’字方针是什么？",
        answer: "事实清楚、证据确凿、定性准确、处理恰当、手续完备、程序合法。",
        explanation: ""
    },
    {
        question: "中央八项规定精神的核心要求是什么？",
        answer: "一、中央政治局全体同志要改进调查研究，到基层调研要深入了解真实情况，总结经验。二、要精简会议活动，切实改进会风，严格控制以中央名义召开的各类全国性会议和举行的重大活动，不开泛泛部署工作和提要求的会。三、要精简文件简报，切实改进文风，没有实质内容、可发可不发的文件、简报一律不发。四、要规范出访活动，从外交工作大局需要出发合理安排出访活动，严格控制出访随行人员，严格按照规定乘坐交通工具。五、要改进警卫工作，坚持有利于联系群众的原则，减少交通管制。六、要改进新闻报道，中央政治局同志出席会议和活动应根据工作需要、新闻价值、社会效果决定是否报道，进一步压缩报道的数量、字数、时长。七、要严格文稿发表，除中央统一安排外，个人不公开出版著作、讲话单行本。八、要厉行勤俭节约，严格遵守廉洁从政有关规定，严格执行住房、车辆配备等有关工作和生活待遇的规定。",
        explanation: ""
    },
    {
        question: "列举三个中国古代廉洁典故。",
        answer: "1. 杨震暮夜却金：东汉杨震任荆州刺史时，有人深夜送金，杨震严词拒绝，称‘天知、地知、你知、我知’，体现廉洁自律。2. 羊续悬鱼：汉代羊续为官清廉，有人送鱼贿赂，他将鱼挂于庭前警示，拒收贿赂。3. 陶母退鱼：晋代陶侃母亲见有人送鱼，退还并教导儿子清廉为官，维护官德。",
        explanation: ""
    }
]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;
let startTime;
let timerInterval;

function showModal() {
    document.getElementById('quizModal').style.display = 'flex';
}

function startQuizWithCounts() {
    const singleCount = parseInt(document.getElementById('singleCount').value) || 0;
    const multipleCount = parseInt(document.getElementById('multipleCount').value) || 0;
    const trueFalseCount = parseInt(document.getElementById('trueFalseCount').value) || 0;
    const shortAnswerCount = parseInt(document.getElementById('shortAnswerCount').value) || 0;

    if (singleCount % 10 !== 0 || multipleCount % 10 !== 0 || trueFalseCount % 10 !== 0 ||
        singleCount > questionBank.single.length || multipleCount > questionBank.multiple.length ||
        trueFalseCount > questionBank.trueFalse.length || shortAnswerCount > questionBank.shortAnswer.length) {
        alert('请确保单选题、多选题、判断题为10的倍数，且各题目不超过题库数量！');
        return;
    }

    if (singleCount + multipleCount + trueFalseCount + shortAnswerCount === 0) {
        alert('请至少选择一类题目！');
        return;
    }

    currentQuestions = [];
    userAnswers = [];
    quizStarted = true;

    let singleIndices = shuffle([...Array(questionBank.single.length).keys()]);
    currentQuestions.push(...singleIndices.slice(0, singleCount).map(i => ({
        ...questionBank.single[i],
        type: 'single'
    })));

    let multipleIndices = shuffle([...Array(questionBank.multiple.length).keys()]);
    currentQuestions.push(...multipleIndices.slice(0, multipleCount).map(i => ({
        ...questionBank.multiple[i],
        type: 'multiple'
    })));

    let trueFalseIndices = shuffle([...Array(questionBank.trueFalse.length).keys()]);
    currentQuestions.push(...trueFalseIndices.slice(0, trueFalseCount).map(i => ({
        ...questionBank.trueFalse[i],
        type: 'trueFalse'
    })));

    let shortAnswerIndices = shuffle([...Array(questionBank.shortAnswer.length).keys()]);
    currentQuestions.push(...shortAnswerIndices.slice(0, shortAnswerCount).map(i => ({
        ...questionBank.shortAnswer[i],
        type: 'shortAnswer'
    })));

    currentQuestionIndex = 0;
    document.getElementById('quizModal').style.display = 'none';
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    renderQuestion();
    renderQuestionNav();
    updateProgress();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderQuestionNav() {
    const nav = document.getElementById('questionNav');
    nav.innerHTML = '';
    currentQuestions.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.textContent = index + 1;
        if (userAnswers[index] && (Array.isArray(userAnswers[index]) ? userAnswers[index].length > 0 : userAnswers[index])) {
            btn.classList.add('answered');
        }
        btn.onclick = () => goToQuestion(index);
        nav.appendChild(btn);
    });
}

function renderQuestion() {
    const questionDiv = document.getElementById('question');
    const answerBox = document.getElementById('answerBox');
    const nextBtn = document.getElementById('nextBtn');
    answerBox.classList.remove('show');
    answerBox.innerHTML = '';

    if (currentQuestionIndex >= currentQuestions.length) return;

    const q = currentQuestions[currentQuestionIndex];
    let typeLabel = '';
    switch (q.type) {
        case 'single': typeLabel = '[单选题]'; break;
        case 'multiple': typeLabel = '[多选题]'; break;
        case 'trueFalse': typeLabel = '[判断题]'; break;
        case 'shortAnswer': typeLabel = '[简答题]'; break;
    }
    let html = `<div class="question-text">${currentQuestionIndex + 1}. ${typeLabel} ${q.question}</div>`;

    if (q.type === 'shortAnswer') {
        html += `<textarea id="shortAnswerInput" placeholder="请输入答案">${userAnswers[currentQuestionIndex] || ''}</textarea>`;
    } else {
        html += '<div class="options">';
        q.options.forEach((option, i) => {
            const optionLabel = String.fromCharCode(65 + i);
            const checked = userAnswers[currentQuestionIndex]?.includes(optionLabel) ? 'checked' : '';
            const inputType = q.type === 'multiple' ? 'checkbox' : 'radio';
            html += `
                <div class="option">
                    <input type="${inputType}" name="option" id="opt${i}" value="${optionLabel}" ${checked}>
                    <label for="opt${i}">${optionLabel}. ${option}</label>
                </div>
            `;
        });
        html += '</div>';
    }

    questionDiv.innerHTML = html;

    if (q.type === 'shortAnswer') {
        const textarea = document.getElementById('shortAnswerInput');
        if (textarea) {
            textarea.addEventListener('input', saveAnswer);
        }
    } else {
        const inputs = document.querySelectorAll('input[name="option"]');
        inputs.forEach(input => {
            input.addEventListener('change', saveAnswer);
        });
    }

    updateButtonState();
}

function saveAnswer() {
    const q = currentQuestions[currentQuestionIndex];
    let answer;

    if (q.type === 'shortAnswer') {
        const input = document.getElementById('shortAnswerInput');
        answer = input ? input.value.trim() : '';
        if (answer) {
            userAnswers[currentQuestionIndex] = answer;
        } else {
            delete userAnswers[currentQuestionIndex];
        }
    } else {
        const inputs = document.querySelectorAll('input[name="option"]:checked');
        answer = Array.from(inputs).map(input => input.value);
        if (answer.length > 0) {
            userAnswers[currentQuestionIndex] = answer;
        } else {
            delete userAnswers[currentQuestionIndex];
        }
    }

    renderQuestionNav();
    updateProgress();
    updateButtonState();
}

function updateButtonState() {
    const answeredCount = userAnswers.filter(ans => ans && (Array.isArray(ans) ? ans.length > 0 : ans)).length;
    const nextBtn = document.getElementById('nextBtn');
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.textContent = '交卷';
        nextBtn.disabled = answeredCount !== currentQuestions.length;
    } else {
        nextBtn.textContent = '下一题';
        nextBtn.disabled = false;
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestionIndex === currentQuestions.length - 1 && userAnswers.filter(ans => ans && (Array.isArray(ans) ? ans.length > 0 : ans)).length === currentQuestions.length) {
        showResults();
    } else {
        currentQuestionIndex++;
        renderQuestion();
    }
}

function goToQuestion(index) {
    saveAnswer();
    currentQuestionIndex = index;
    renderQuestion();
}

function showAnswer() {
    const q = currentQuestions[currentQuestionIndex];
    const answerBox = document.getElementById('answerBox');
    let answerText = '';

    if (q.type === 'shortAnswer') {
        answerText = `参考答案：${q.answer}`;
    } else if (q.type === 'single' || q.type === 'trueFalse') {
        answerText = `正确答案：${q.answer}`;
    } else {
        answerText = `正确答案：${q.answer.join(', ')}`;
    }

    if (q.explanation) {
        answerText += `<br>解析：${q.explanation}`;
    }

    answerBox.innerHTML = answerText;
    answerBox.classList.add('show');
}

function updateTimer() {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const seconds = String(elapsed % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `答题时间：${minutes}:${seconds}`;
}

function updateProgress() {
    const answeredCount = userAnswers.filter(ans => ans && (Array.isArray(ans) ? ans.length > 0 : ans)).length;
    const total = currentQuestions.length;
    const progress = (answeredCount / total) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function showResults() {
    clearInterval(timerInterval);
    const totalTime = document.getElementById('timer').textContent.replace('答题时间：', '');
    const resultsDiv = document.getElementById('results');
    let correctCount = 0;
    let html = '<h2>答题结果</h2>';

    currentQuestions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;

        if (q.type === 'shortAnswer') {
            isCorrect = true;
        } else if (q.type === 'multiple') {
            const userSet = new Set(userAnswer || []);
            const correctSet = new Set(q.answer);
            isCorrect = userSet.size === correctSet.size && [...userSet].every(val => correctSet.has(val));
            if (userSet.size > 0 && userSet.size <= correctSet.size && [...userSet].every(val => correctSet.has(val))) {
                isCorrect = true;
            }
        } else {
            isCorrect = userAnswer && userAnswer[0] === q.answer;
        }

        if (isCorrect) correctCount++;

        html += `
            <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <p>${index + 1}. ${q.question}</p>
                <p>你的答案：${userAnswer ? (q.type === 'shortAnswer' ? userAnswer : userAnswer.join(', ')) : '未作答'}</p>
                <p>正确答案：${q.type === 'shortAnswer' || q.type === 'single' || q.type === 'trueFalse' ? q.answer : q.answer.join(', ')}</p>
                ${q.explanation ? `<p>解析：${q.explanation}</p>` : ''}
            </div>
        `;
    });

    const correctRate = (correctCount / currentQuestions.length * 100).toFixed(2);
    let grade = '';
    let gradeClass = '';
    if (correctRate < 50) { grade = 'E'; gradeClass = 'grade-e'; }
    else if (correctRate <= 60) { grade = 'D'; gradeClass = 'grade-d'; }
    else if (correctRate <= 80) { grade = 'C'; gradeClass = 'grade-c'; }
    else if (correctRate <= 90) { grade = 'B'; gradeClass = 'grade-b'; }
    else if (correctRate <= 95) { grade = 'A'; gradeClass = 'grade-a'; }
    else { grade = 'S'; gradeClass = 'grade-s'; }

    html = `
        <p>总答题时间：${totalTime}</p>
        <p>本次答题情况：${correctCount}/${currentQuestions.length} 正确率${correctRate}%  等级：<span class="grade ${gradeClass}">${grade}</span></p>
        <button class="btn btn-primary" onclick="restartQuiz()">重新作答</button>
        ${html}
    `;

    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('show');
    document.getElementById('question').style.display = 'none';
    document.getElementById('questionNav').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    document.querySelector('.btn-secondary').style.display = 'none';
}

function restartQuiz() {
    clearInterval(timerInterval);
    quizStarted = false;
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById('results').classList.remove('show');
    document.getElementById('question').style.display = 'block';
    document.getElementById('questionNav').style.display = 'flex';
    document.getElementById('nextBtn').style.display = 'block';
    document.querySelector('.btn-secondary').style.display = 'block';
    document.getElementById('timer').textContent = '答题时间：00:00';
    document.getElementById('progress').style.width = '0%';
    showModal();
}

window.onload = showModal;
