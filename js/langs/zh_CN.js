let langName = "简体中文"

let lang = {
    'changelog': `
		<br><br><br><h1>更新日志:</h1><br>(不存在<span style='color: red'><s>剧透警告</s></span>)<br><br>
		<span style="font-size: 17px;">
			<h3><s>不,你应该自己写这个</s></h3><br><br>
			<h3>v3.0 - 史无前例的改动</h3><br>
				- 开发了 The Modding Table, 这何尝不是一种TMT<br>
			<br><br>
		`,
    'systemComponent': {
        'name': '模组树', //CHANGE THIS
        'versionName': '1',//this is just for display, you need to write the number in the old position
        'modInfo': {//dont change things under!
            'Authors': '参与人员', //or actually you can change any of this, i'm not in charge i'm just a commit lol
            'modAuthor': '本模组作者',
            'basedOn': '本Mod基于Shinwmyste的The Modding Table制作',
            'TMTableAuthor': 'The Modding Table 作者',
            'currentVersion': '当前版本',
            'TMTableSecondAuthor': 'TMTable 第二作者',
            'someMinorChanges': '一些零碎的改动',
            'TMTableI18NSupport': 'TMTable 国际化支持',
            'rainyWillKillMeForThis': '\"Rainy你是我的神！！\"',
            'originalTMT': '模板支持',
            'statistics': '统计数据',
            'gameTime': '游戏时长',
            'otherPages': '其他页面',
            'changeLog': '更新日志',
            'clickHere': '点击跳转',
            'TTVBM': '其实也可以点右上角的版本号',
            'TMTDiscord': '模组树Discord',
        },
        'options': {
            'save': '本地存档',
            'autoSave': '自动存档',
            'hardReset': '硬重置(删除存档)',
            'export': '导出存档(复制到黏贴板)',
            'import': '导入存档',
            'offlineProd': '离线进度',
            'hideChallenge': '已完成挑战',
            'showMilestone': '显示里程碑',
            'betterMouseOperation':'优化鼠标操作',
        },
        'main-display': {
            'youHave': '你有',
            'reach':'达到 ',
            'toUnlock': '以解锁 (你有 ',
        },
        'resource-display':{
            'baseAmount': '你有',
            "passiveGeneration":'你每秒获得 ',
            'afterPassiveGeneration':'',
            'showBest':'你最高拥有',
            'showTotal':'你总共拥有',
        },
        'achievement': {
            'doneTooltip': '已完成!',
            'locked':'锁定',
        },
        'upgrade': {
            'cost': '价格',
            'currently': '当前效果',
        },
        'challenge': {
            'goal': '目标',
            'reward': '奖励',
            'currently': '当前效果',
        },
        'toggle': {
            'on': '开',
            'off': '关',
        },
        'otherTab':'↓ 其他页面 ↓',
        'setting':'设置',
    },
}

export { langName, lang }
