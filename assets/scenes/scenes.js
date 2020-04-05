var scenes = {
	'scene-1': {
		decoration: ['scene-1'],
		objects: [
		{
			name: 'scene-hands',
			animation: {
				beginPosition: {
					x: 0,
					y: 200
				},
				endPosition: {
					x: 0,
					y: 120
				},
				direction: 'up',
				step: 1,
				period: 50
			}
		}
		],
		messages: [
			{
				text: 'Где это я?',
				beginMills: 500,
				endMills: 2000,
				x: 70,
				y: 100
			},
			{
				text: 'А кто я такой?',
				beginMills: 2500,
				endMills: 4000,
				x: 70,
				y: 100
			},
			{
				text: 'Это мои руки?',
				beginMills: 4500,
				endMills: 6000,
				x: 70,
				y: 100
			}
		],
		duration: 6000
	},
	'scene-2': {
		decoration: ['scene-2'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				showMills: [17000],
				hideMills: [10000] 
			},
			{
				name: 'scene-syslog-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				showMills: [17000],
				hideMills: [10000] 
			},
			{
				name: 'scene-robo',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [10000],
				hideMills: [0, 14000] 
			},
			{
				name: 'scene-syslog',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [14000],
				hideMills: [0, 17000] 
			}
		],
		messages: [
			{
				text: 'Кто ты?',
				beginMills: 500,
				endMills: 2000,
				x: 30,
				y: 120
			},
			{
				text: 'По-моему, я... \nЯ -- Библиотекарь.',
				beginMills: 2500,
				endMills: 4000,
				x: 70,
				y: 50
			},
			{
				text: 'Что случилось?',
				beginMills: 4500,
				endMills: 6000,
				x: 30,
				y: 120
			},
			{
				text: 'Я не знаю. \nЗаписи журнала повреждены.',
				beginMills: 7000,
				endMills: 9000,
				x: 50,
				y: 50
			},
			{
				text: 'Я ничего не помню. \nСовсем ничего.\nКто я такой?',
				beginMills: 12000,
				endMills: 14000,
				x: 30,
				y: 20
			},
			{
				text: 'Я не отвечу. \nНо что-то определенно\nслучилось',
				beginMills: 15000,
				endMills: 17000,
				x: 80,
				y: 20
			},
			{
				text: 'Хм... Надо разобраться. \nТут на меня какие-то цифры \nнабросились.',
				beginMills: 18000,
				endMills: 21000,
				x: 30,
				y: 70
			},
			{
				text: 'Напоминаю.\nЖурналы.\nМожет, что выясню.',
				beginMills: 21000,
				endMills: 24000,
				x: 50,
				y: 30
			},
		],
		duration: 26000
	},
	'scene-3': {
		decoration: ['scene-3'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				showMills: [19000],
				hideMills: [12500] 
			},
			{
				name: 'scene-defraga-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				showMills: [19000],
				hideMills: [12500] 
			},
			{
				name: 'scene-robo',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [12500],
				hideMills: [0, 16000] 
			},
			{
				name: 'scene-defraga',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [16000],
				hideMills: [0, 19000] 
			}
		],
		messages: [
			{
				text: 'Оу. Может, ты мне объяснишь,\nчто тут творится?',
				beginMills: 500,
				endMills: 3500,
				x: 10,
				y: 120
			},
			{
				text: 'Во-первых, это невежливо.\nСначала надо представится.',
				beginMills: 4000,
				endMills: 6500,
				x: 70,
				y: 50
			},
			{
				text: 'Я не знаю, как меня зовут...',
				beginMills: 7000,
				endMills: 9500,
				x: 10,
				y: 120
			},
			{
				text: 'Это неправильно. \nУ всех и всего должно быть имя.',
				beginMills: 10000,
				endMills: 12500,
				x: 50,
				y: 50
			},
			{
				text: 'Имя? Ну... Я, это я... \nЧто еще выдумывать?',
				beginMills: 13000,
				endMills: 16000,
				x: 10,
				y: 20
			},
			{
				text: 'Очень приятно, Я.\nМеня зовут Золушка.',
				beginMills: 17000,
				endMills: 19000,
				x: 80,
				y: 20
			},
			{
				text: 'Почему "Золушка"?',
				beginMills: 20000,
				endMills: 22000,
				x: 10,
				y: 90
			},
			{
				text: 'Не знаю. Думаю, потому что я\nлюблю, чтобы все было\nв чистоте и порядке.',
				beginMills: 23000,
				endMills: 25500,
				x: 50,
				y: 30
			},
			{
				text: 'Я тут нашел чьи-то дневники...',
				beginMills: 26500,
				endMills: 29000,
				x: 10,
				y: 70
			},
			{
				text: 'Читать чужие дневники?\nНельзя так делать.\nЭто хуже, чем не знать\nсвое имя.',
				beginMills: 29500,
				endMills: 33000,
				x: 70,
				y: 30
			},
		],
		duration: 34000
	},
	'scene-4': {
		decoration: ['scene-4'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				showMills: [23000],
				hideMills: [17000, 38000] 
			},
			{
				name: 'scene-syslog-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				showMills: [23000],
				hideMills: [17000, 38000] 
			},
			{
				name: 'scene-robo',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [17000],
				hideMills: [0, 23000] 
			},
			{
				name: 'scene-syslog',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [38000],
				hideMills: [0, 42000] 
			}
		],
		messages: [
			{
				text: 'Библиотекарь?\nВсе вокруг лезут драться.\nЧто вообще творится?',
				beginMills: 500,
				endMills: 2500,
				x: 10,
				y: 60
			},
			{
				text: 'Я восстановил часть журналов\nБыл сбой.\nСистема перезагрузилась.\nЗашитные подпрограммы\nи протоколы активированы.\nОни и атакуют тебя.',
				beginMills: 3000,
				endMills: 7000,
				x: 50,
				y: 50
			},
			{
				text: 'Какая еще система?\nО чем ты?',
				beginMills: 8000,
				endMills: 10000,
				x: 10,
				y: 120
			},
			{
				text: 'Мы внутри системы. Пока это всё,\nчто я знаю. Был сбой.\nПотому все и посходили с ума.',
				beginMills: 11000,
				endMills: 16000,
				x: 40,
				y: 50
			},
			{
				text: 'Вот почему я ничего не помню...\nСлушай, я тут и там\nвстречаю дневники.\nДевочка. Ей больно...\nИ еще кто-то другой.',
				beginMills: 17000,
				endMills: 23000,
				x: 10,
				y: 20
			},
			{
				text: 'Дневники?\nЭто связано с системой.\nИ ее перезагрузкой.\nДай мне время,\nмой маленький друг,\nи я все выясню.',
				beginMills: 25000,
				endMills: 30000,
				x: 80,
				y: 20
			},
			{
				text: 'А еще я встретил Золушку.\nПомешана на чистоте.\nМораль мне читает.',
				beginMills: 32000,
				endMills: 36000,
				x: 10,
				y: 70
			},
			{
				text: 'Я... Я знаю ее.\nТочно. Она любит порядок\nеще больше, чем я.',
				beginMills: 38500,
				endMills: 42000,
				x: 50,
				y: 30
			},
		],
		duration: 42000
	},
	'scene-5': {
		decoration: ['scene-5'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				hideMills: [32000] 
			},
			{
				name: 'scene-defraga-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				hideMills: [32000] 
			},
			{
				name: 'scene-defraga',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [32000],
				hideMills: [0, 39000] 
			}
		],
		messages: [
			{
				text: 'Золушка, кто она?\nЧьи это дневники?',
				beginMills: 1000,
				endMills: 4000,
				x: 10,
				y: 90
			},
			{
				text: 'Ты все-таки прочитал их...\nЕе зовут Алиса.',
				beginMills: 5000,
				endMills: 8000,
				x: 50,
				y: 50
			},
			{
				text: 'Алиса? Откуда ты знаешь?\nПочему ей так плохо?',
				beginMills: 9000,
				endMills: 12000,
				x: 10,
				y: 120
			},
			{
				text: 'Я, я все расставляю по\nсвоим местам, все прибераю.\nЯ знаю ее историю...\nНаш мир -- это ее мир.',
				beginMills: 13000,
				endMills: 16000,
				x: 50,
				y: 50
			},
			{
				text: 'Я не понимаю.\nЧто с ней?\nКак ей помочь?',
				beginMills: 17000,
				endMills: 20000,
				x: 10,
				y: 20
			},
			{
				text: 'Я, наш мир рушится.\nЕе мир рушится.\nЧтобы помочь Алисе,\nТы должен понять причину,\nпочему это происходит.',
				beginMills: 21000,
				endMills: 26000,
				x: 80,
				y: 20
			},
			{
				text: 'Библиотекарь. Он говорил,\nчто случился сбой в системе.\n',
				beginMills: 27000,
				endMills: 31000,
				x: 10,
				y: 90
			},
			{
				text: 'Да, Я. Для него мир -- система.\nОн все всегда усложняет.\nАлиса умирала, пока не\nпоявился наш мир.',
				beginMills: 32000,
				endMills: 37000,
				x: 50,
				y: 30
			}
		],
		duration: 38000
	},
	'scene-6': {
		decoration: ['scene-6'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				hideMills: [23000] 
			},
			{
				name: 'scene-syslog-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				hideMills: [23000] 
			}
		],
		messages: [
			{
				text: 'Библиотекарь, что ты узнал?\nПрочитал свои журналы?',
				beginMills: 1000,
				endMills: 4000,
				x: 10,
				y: 90
			},
			{
				text: 'Система не смогла\nнормально перезагрузиться.\nЧто-то разрушает ее.\nПродолжает разрушать.',
				beginMills: 5000,
				endMills: 9000,
				x: 50,
				y: 50
			},
			{
				text: 'Что именно? Ты не знаешь?',
				beginMills: 10000,
				endMills: 12000,
				x: 10,
				y: 120
			},
			{
				text: 'Пока не понимаю.\nЧто-то пожирает\nвсю свободную память.',
				beginMills: 13000,
				endMills: 16000,
				x: 50,
				y: 50
			},
			{
				text: 'Какая еще "память"?\nМне нужно понять.\nЯ должен остановить это\nи спасти Алису.',
				beginMills: 17000,
				endMills: 21000,
				x: 10,
				y: 20
			}
		],
		duration: 22000
	},	
	'scene-7': {
		decoration: ['scene-7'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				hideMills: [35000] 
			},
			{
				name: 'scene-defraga-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				hideMills: [35000] 
			}
		],
		messages: [
			{
				text: 'Со мной говорил 2H.\nОн злой.\nОн виинт меня во всем.\nОн обещал все сжечь, лишь бы\nдо меня добраться.',
				beginMills: 1000,
				endMills: 6000,
				x: 10,
				y: 30
			},
			{
				text: '2H -- главный. Он хочет защитить\nнаш мир, не понимая ничего.\nОн может всё сжечь.',
				beginMills: 7000,
				endMills: 11000,
				x: 50,
				y: 50
			},
			{
				text: 'И еще... Золушка...\nАлиса знает обо мне?',
				beginMills: 12000,
				endMills: 16000,
				x: 10,
				y: 120
			},
			{
				text: 'Наш мир -- это ее мир.\nТы в центре всего этого.\nОна должна была узнать о тебе\nрано или поздно.',
				beginMills: 17000,
				endMills: 24000,
				x: 50,
				y: 50
			},
			{
				text: 'Сбой системы... Библиотекарь...\n2H сошел с ума, как и остальные.\nОн крушит всё прямо сейчас.\nОн разрушает систему\nи убивает Алису.',
				beginMills: 25000,
				endMills: 35000,
				x: 10,
				y: 20
			}
		],
		duration: 35000
	},
	
	'scene-8': {
		decoration: ['scene-8'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				showMills: [0],
				hideMills: [14000] 
			},
			{
				name: 'scene-syslog-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				showMills: [0],
				hideMills: [14000] 
			},
			{
				name: 'scene-robo',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [23000],
				hideMills: [0, 27000] 
			},
			{
				name: 'scene-syslog',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [14000, 28000],
				hideMills: [0, 23000, 27000] 
			}
		],
		messages: [
			{
				text: 'У меня ничего не выходит!\nЯ не могу остановить 2H!',
				beginMills: 1000,
				endMills: 5000,
				x: 10,
				y: 60
			},
			{
				text: 'Я выяснил.\nЭто не он. Это ты.\nТы -- живой.',
				beginMills: 6000,
				endMills: 10000,
				x: 80,
				y: 50
			},
			{
				text: 'Как это я -- живой?\nТут все живые.\nИ ты и Золушка и 2H...',
				beginMills: 11000,
				endMills: 13000,
				x: 10,
				y: 80
			},
			{
				text: 'Нет, Я. Только ты.\nЯ прочитал журналы.\nВсе вокруг -- это\nоперационная система нейрочипа.\nИ все в ней -- это потоки данных.\nПрограммы и инструкции.\nИ я. И Золушка. И 2H.',
				beginMills: 14000,
				endMills: 22000,
				x: 10,
				y: 10
			},
			{
				text: 'Что ты говоришь такое?\nЯ же с тобой сейчас говорию!',
				beginMills: 23000,
				endMills: 27000,
				x: 10,
				y: 120
			},
			{
				text: 'Потому что тебе так проще.\nТвое сознание дает всему\nкартинку и голос.\nНо ничего этого нет. Не так.\nТы появился после сбоя.\nТы разрастаешься и захватываешь\nвсе ресурсы системы.\nТы убиваешь Алису.',
				beginMills: 28000,
				endMills: 36000,
				x: 10,
				y: 10
			},
		],
		duration: 36000
	},

	'call-1': {
		decoration: ['scene-tele-call'],
		objects: [
		{
			name: '2h',
			staticPosition: {
				x: 0,
				y: 0
			},
			showMills: [2000],
			hideMills: [0, 9000] 
		}
		],
		messages: [
			{
				text: 'Я 2H. Главный защитный протокол.\nЗаявляю тебе, нарушитель,\nчто твое время подходит к концу.\nТвои преступления будут\nоплачены тобой.',
				beginMills: 3000,
				endMills: 8000,
				x: 10,
				y: 10
			}
		],
		duration: 11000
	},
	'call-2': {
		decoration: ['scene-tele-call'],
		objects: [
		{
			name: '2h',
			staticPosition: {
				x: 0,
				y: 0
			},
			showMills: [2000],
			hideMills: [0, 10000] 
		}
		],
		messages: [
			{
				text: 'Нарушитель, я лучше сожгу\nсектор за сектором,\nнежели дам тебе\nзлодействовать дальше.\nОтравлять ядро своими\nхаотичными мыслями.',
				beginMills: 3000,
				endMills: 9000,
				x: 10,
				y: 10
			}
		],
		duration: 13000
	},
	'call-3': {
		decoration: ['scene-tele-call'],
		objects: [
		{
			name: '2h',
			staticPosition: {
				x: 0,
				y: 0
			},
			showMills: [2000],
			hideMills: [0, 10000] 
		}
		],
		messages: [
			{
				text: 'Нарушитель.\nОна видит тебя.\nОна знает о тебе.\nЯдро построено для Неё.\nОна остановит тебя, если я не смогу.',
				beginMills: 3000,
				endMills: 9000,
				x: 10,
				y: 10
			}
		],
		duration: 13000
	},
	'call-4': {
		decoration: ['scene-tele-call'],
		objects: [
		{
			name: '2h',
			staticPosition: {
				x: 0,
				y: 0
			},
			showMills: [2000],
			hideMills: [0, 7000] 
		}
		],
		messages: [
			{
				text: 'Нарушитель...\nБудь ты проклят...\n...я сделал всё...\n...\n...\n...Kernel panic...',
				beginMills: 3000,
				endMills: 7000,
				x: 10,
				y: 10
			}
		],
		duration: 10000
	},
	'call-5': {
		decoration: ['scene-tele-call'],
		objects: [{}],
		messages: [
			{
				text: '...',
				beginMills: 1000,
				endMills: 3000,
				x: 10,
				y: 10
			}
		],
		duration: 5000
	},
	
	'afterdeath-1': {
		decoration: ['scene-afterdeath'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				showMills: [18000],
				hideMills: [7000] 
			},
			{
				name: 'scene-gc-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				showMills: [18000],
				hideMills: [7000] 
			},
			{
				name: 'scene-robo',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [15000],
				hideMills: [0, 18000] 
			},
			{
				name: 'scene-gc',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [7000],
				hideMills: [0, 15000] 
			}
		],
		messages: [
			{
				text: 'Э... Где это я?',
				beginMills: 500,
				endMills: 2000,
				x: 30,
				y: 120
			},
			{
				text: 'Вообще-то, ты,\nвроде как, умер.',
				beginMills: 2500,
				endMills: 4000,
				x: 70,
				y: 50
			},
			{
				text: 'Если я умер... То и ты тоже?',
				beginMills: 4500,
				endMills: 6000,
				x: 30,
				y: 120
			},
			{
				text: 'Я -- Гробовщик. Я не могу умереть. \nЯ забираю мертвых и покинутых. \nКогда приходит их время,\nони приходят сюда. \nК Последнему Дереву.',
				beginMills: 8000,
				endMills: 15000,
				x: 50,
				y: 50
			},
			{
				text: 'Зачем кому-то к тебе приходить?',
				beginMills: 16000,
				endMills: 18000,
				x: 30,
				y: 20
			},
			{
				text: 'После смерти ты \nосвобождаешь то, что брал. \nПамять. \nЧтобы могли прийти новые. \nЧтобы у них была память.',
				beginMills: 20000,
				endMills: 24000,
				x: 80,
				y: 20
			},
			{
				text: 'И что теперь? \nЕсли я умер, куда\nмне идти?',
				beginMills: 25000,
				endMills: 28000,
				x: 30,
				y: 70
			},
			{
				text: 'Знаешь...\nСтранно. \nДерево не зовёт тебя. \nТы какой-то не такой.',
				beginMills: 29000,
				endMills: 32000,
				x: 50,
				y: 30
			},
		],
		duration: 33000
	},
	'afterdeath-2': {
		decoration: ['scene-afterdeath'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				showMills: [],
				hideMills: [7000] 
			},
			{
				name: 'scene-gc-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				showMills: [],
				hideMills: [7000] 
			},
			{
				name: 'scene-gc',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [7000],
				hideMills: [0, 13000] 
			}
		],
		messages: [
			{
				text: 'О. Привет.',
				beginMills: 500,
				endMills: 2000,
				x: 30,
				y: 120
			},
			{
				text: 'Опять, ты? \nЧто в этот раз?',
				beginMills: 2500,
				endMills: 4000,
				x: 70,
				y: 50
			},
			{
				text: 'В драку ввязался. \nКак обычно.',
				beginMills: 4500,
				endMills: 6000,
				x: 30,
				y: 120
			},
			{
				text: 'Ты поаккуратнее будь, что-ли. \nЗдесь тебе делать нечего. \nТы отвлекаешь меня от работы.',
				beginMills: 8000,
				endMills: 13000,
				x: 50,
				y: 50
			}
		],
		duration: 13000
	},
	'afterdeath-3': {
		decoration: ['scene-afterdeath'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				showMills: [],
				hideMills: [20000] 
			},
			{
				name: 'scene-gc-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				showMills: [],
				hideMills: [20000] 
			}
		],
		messages: [
			{
				text: '...',
				beginMills: 500,
				endMills: 2000,
				x: 30,
				y: 120
			},
			{
				text: 'А я уже начал скучать.\nДумаю: где же этот парень,\nэтот сорвиголова,\nпрезирающий страх?',
				beginMills: 2500,
				endMills: 8000,
				x: 70,
				y: 50
			},
			{
				text: 'Я не виноват. \nНе я начинаю первым.',
				beginMills: 9000,
				endMills: 13000,
				x: 30,
				y: 120
			},
			{
				text: 'О! Слова не мальца,\nно мудрого мужа!\nМой ненаглядный друг.\nВсе всегда так говорят.\nНачинают они первыми или нет.',
				beginMills: 14000,
				endMills: 20000,
				x: 50,
				y: 50
			}
		],
		duration: 20000
	},
	'afterdeath-4': {
		decoration: ['scene-afterdeath'],
		objects: [
			{
				name: 'scene-gc',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [],
				hideMills: [12000] 
			}
		],
		messages: [
			{
				text: 'Покойничек вернулся.\nРад, что ты верен своим идеалам.\nА теперь извини.\nМне надо заняться пачкой ребят,\nкоторых ты отправил мне\nв благодарсность за ценные советы.',
				beginMills: 1000,
				endMills: 11000,
				x: 10,
				y: 50
			}
		],
		duration: 12000
	},
	'afterdeath-5': {
		decoration: ['scene-afterdeath'],
		objects: [
			{
				name: 'scene-gc',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [],
				hideMills: [12000] 
			}
		],
		messages: [
			{
				text: 'Знаешь, по долгу службы я много\nрассуждаю о сущности феномена\nжизни и бренности бытия.\nИ все никак не могу понять одной вещи:\nпочему такие, как ты, гадят,\nа прибирать приходится мне?',
				beginMills: 1000,
				endMills: 11000,
				x: 10,
				y: 50
			}
		],
		duration: 12000
	},
	'afterdeath-6': {
		decoration: ['scene-afterdeath'],
		objects: [
			{
				name: 'scene-robo-right',
				staticPosition: {
					x: -80,
					y: 10
				},
				showMills: [],
				hideMills: [22000] 
			},
			{
				name: 'scene-gc-left',
				staticPosition: {
					x: 100,
					y: 10
				},
				showMills: [],
				hideMills: [22000] 
			}
		],
		messages: [
			{
				text: 'Я...',
				beginMills: 500,
				endMills: 2000,
				x: 30,
				y: 120
			},
			{
				text: 'Да нет!\nБудь моим гостем!\nЧувствуй себя, как дома.',
				beginMills: 3000,
				endMills: 8000,
				x: 70,
				y: 50
			},
			{
				text: '...',
				beginMills: 9000,
				endMills: 11000,
				x: 30,
				y: 120
			},
			{
				text: 'Ты не переживай.\nСтарина Гробовщик разбереться\nсо всем тем дерьмом, что ты так\nсамозабвенно поставляешь\nему по старой дружбе.',
				beginMills: 12000,
				endMills: 22000,
				x: 10,
				y: 50
			}
		],
		duration: 22000
	},
	'afterdeath-7': {
		decoration: ['scene-afterdeath'],
		objects: [
			{
				name: 'scene-gc',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [],
				hideMills: [12000] 
			}
		],
		messages: [
			{
				text: 'Если в нашем мире когда-нибудь\nпоявится зеркало,\nмне бы очень хотелось,\nчтобы ты долго и пристально\nв него посмотрел.\nПрямо в глаза.\nСделаешь это для меня?',
				beginMills: 1000,
				endMills: 11000,
				x: 10,
				y: 50
			}
		],
		duration: 12000
	},
	'afterdeath-8': {
		decoration: ['scene-afterdeath'],
		objects: [
			{
				name: 'scene-gc',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [],
				hideMills: [8000] 
			}
		],
		messages: [
			{
				text: 'Ты уже надоел.\nПоследнее Дерево скоро треснет\nот твоих художеств.',
				beginMills: 1000,
				endMills: 7000,
				x: 10,
				y: 50
			}
		],
		duration: 8000
	},
	'afterdeath-9': {
		decoration: ['scene-afterdeath'],
		objects: [
			{
				name: 'scene-gc',
				staticPosition: {
					x: 0,
					y: 0
				},
				showMills: [],
				hideMills: [7000] 
			}
		],
		messages: [
			{
				text: 'Священная Куча.\nТы никогда не уймешься, так ведь?',
				beginMills: 1000,
				endMills: 6000,
				x: 10,
				y: 50
			}
		],
		duration: 7000
	},
	'afterdeath-10': {
		decoration: ['scene-afterdeath'],
		objects: [
		],
		messages: [
		],
		duration: 3000
	}
	
}