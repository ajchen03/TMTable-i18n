let langName = "English"

let lang = {
    'changelog': `
		<br><br><br><h1>ChangeLog:</h1><br>(No<span style='color: red'><s> Spoiler Warning!</s></span>)<br><br>
		<span style="font-size: 17px;">
			<h3><s>NO, YOU SHOULD WRITE THIS YOURSELF</s></h3><br><br>
			<h3>v3.0 - Unprecedented changes</h3><br>
				- Developed The Modding Table, Which, you could say, is another form of TMT<br>
			<br><br>
	`,
    'systemComponent': {
        'name': 'Modding tree', //CHANGE THIS
        'versionName': '1',//this is just for display, you need to write the number in the old position
        'modInfo': {//dont change things under!
            'Authors': 'Authors', //or actually you can change any of this, i'm not in charge i'm just a commit lol
            'modAuthor': 'Mod Author',
            'basedOn': 'Based On Shinwmyste\'s The Modding Table',
            'TMTableAuthor': 'The Modding Table Author',
            'currentVersion': 'Current Version',
            'TMTableSecondAuthor': 'TMTable Secondary Author',
            'someMinorChanges': 'Made Some Minor Changes',
            'TMTableI18NSupport': 'TMTable I18N Support',
            'rainyWillKillMeForThis': '\"With generous help from Rainy\"',
            'originalTMT': 'Original TMT Author',
            'statistics': 'Statistics',
            'gameTime': 'Game Time',
            'otherPages': 'Other Pages',
            'changeLog': 'Changelog',
            'clickHere': 'Click Here',
            'TTVBM': 'The Top-Right Version Button Matters',
            'TMTDiscord': 'The Modding Tree Discord',
        },
        'options': {
            'save': 'Save',
            'autoSave': 'AutoSave',
            'hardReset': 'HardReset',
            'export': 'Export',
            'import': 'Import',
            'offlineProd': 'Offline Progress',
            'hideChallenge': 'Completed Challenges',
            'showMilestone': 'Show Milestones',
            'betterMouseOperation':'Optimized mouse operation',

        },
        'main-display': {
            'youHave': 'You have',
            'reach':'Reach ',
            'toUnlock': 'to unlock (You have ',
        },
        'resource-display':{
            'baseAmount': 'You have',
            "passiveGeneration":'You are gaining ',
            'afterPassiveGeneration':' per second',
            'showBest':'Your best resource this layer is ',
            'showTotal':'You have made a total of ',
        },
        'achievement': {
            'doneTooltip': 'Completed!',
            'locked':'Locked',
        },
        'upgrade': {
            'cost': 'Cost',
            'currently': 'Currently',
        },
        'challenge': {
            'goal': 'Goal',
            'reward': 'Reward',
            'currently': 'Currently',
        },
        'toggle': {
            'on': 'ON',
            'off': 'OFF',
        },
        'otherTab':'↓ Other Tab ↓',
        'setting':'Setting',
    },
}

export { langName, lang }
