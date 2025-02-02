const questions = [
	
	{
		question: `Как звали животное, на котором Пророк صلى الله عليه و سلم  совершил аль-Исра (ночной перенос)? <br> Впишите ответ.`,
		type: 'open',
		answers: ['бурак'],
	},
	{
		question: 'Кто тот сквернейший, который кинул на спину Пророка صلى الله عليه و سلم внутренности верблюда ?',
		type: 'normal',
		answers: ['‘Укба ибн Абу Му‘айт', 'Абу Джахль', 'Щайба ибн Раби\'а', '‘Утба ибн Раби\'а', 'Абу Ляхаб', 'аль-Уалид ибн Мугира'],
		correct: 1
	},
	{
		question: `Обычно посланник Аллаха صلى الله عليه وسلم скрывал от широкой общественности и врага, куда он направляется в поход.<br> Но в этот раз он НЕ скрывал ни направление похода, ни цель. Что за поход?`,
		type: 'normal',
		answers: ['поход на Мекку', 'поход на Табук', 'поход на Бану Лихьян', 'поход в Даумат аль-Джандаль', 'поход в Худайбию', 'поход на Муту'],
		correct: 2
	},
	{
		question: `История какого пророка изображена на картинке?`,
		type: 'image',
		img: './photos/Nuh.jpg',
		answers: ['Ной', 'Нух', 'Нох', 'nuh'],
	},
	{
		question: 'Кто впервые привёз идола в Мекку ?',
		type: 'normal',
		answers: ['Фихр ибн ‘Амр', 'Киляб ибн Мурра', 'Кусай ибн Киляб', '‘Амр ибн Люхай', 'Люай ибн Ка‘б', 'Галиб ибн Фихр'],
		correct: 4
	},
	{
		question: 'В каком походе впервые принял участие посланник Аллаха صلى الله عليه و سلم ?',
		type: 'normal',
		answers: ['поход на Нахлю', 'поход в местечко аль-Абва (иначе поход на Ваддан)', 'поход в местечко Рабиг', 'поход на аль-\'Ущайра', 'первый(малый) поход на Бадр'],
		correct: 2
	},
	{
		question: `Один из иудеев сказал Умару, что будь у них в Торе такой аят, они бы обязательно сделали день его ниспосылания праздником? <br><br> Из какой Суры этот аят? <br>впишите номер Суры, либо название. пример: Бакара / Корова `,
		type: 'open',
		answers: ['Маида', 'Трапеза', '5', 'аль-маида', 'альмаида', 'аль маида' ],
	},
	{
		question: `Какое племя вошло в союз с МУСУЛЬМАНАМИ при Худайбии ?`,
		type: 'normal',
		answers: ['Гатафан', 'Бану Бакр', 'Бану Сакиф', 'Хуза\'а', 'Бану Суляйм', 'Хауазин', 'Бану Умайя' ],
		correct: 4
	},
	{
		question: `Закончить фразу: "Коран записали в Мекке, читали в Каире, переписывали в Стамбуле, а напечатали в ..?" <br><br> Вписать город`,
		type: 'image',
		img: './photos/Kazan.jpg',
		answers: ['Казань', 'казани', 'казане', 'в казани', 'в казане'],
	},
	{
		question: `Когда мусульмане открыли Мекку?<br><br> Вписать год [по хиджре] цифрой и название месяца через пробел?`,
		type: 'open',
		answers: ['8 Рамадан', '8 Рамадана' ],
	},
	{
		question: `Сура 28 "Рассказ/ القصص", аят 56:<br>
		إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ  وَلَكِنَّ اللَّهَ يَهْدِي مَن يَشَاءُ  وَ هُوَ أَعْلَمُ بِالْمُهْتَدِينَ
		<br>"Воистину, ты не сможешь наставить на прямой путь тех, кого возлюбил. Однако Аллах наставляет на прямой путь тех, кого пожелает. И Он лучше знает тех, кто следует прямым путем." <br>
		<br>В двух «Сахихах» сообщается, что ниспослание этого аята связано с ***?`,
		type: 'normal',
		answers: ['Хадиджа', 'Абу Ляхаб', 'Абу Талиб', 'Хамза', 'Абду-ль-Мутталиб', 'Абу Джахль'],
		correct: 3
	},
	{
		question: `Какая Сура начинается с 7 аятов-клятв? <br> <br> варианты записи: "Бакара" или "Корова" <br> Писать без приставки аль`,
		type: 'open',
		answers: ['Щамс', 'Шамс', 'Солнце', 'АшШамс'],
	},
	{
		question: `Хадис: <br> С каким предметом домашнего быта был сравнен верующий по отношению к другому верующему?  Впишите одно слово!`,
		type: 'open',
		answers: ['зеркало'],
	},
	{
		question: `Иисусу عليه السلام присягнули апостолы.<br>   
		А пророку صلى الله عليه و سلم  присягнули старейшины ансаров, которых он велел им избрать между собой во время 2-ой клятвы при ‘Акабе?<br>
		Сколько было этих старейшин? Вписать число`,
		type: 'open',
		answers: ['12'],
	},
	{
		question: 'Кто возглавил первый в истории военный отряд мусульман?',
		type: 'normal',
		answers: ['Абу Бакр', 'Са\'д ибн Абу Ваккас', 'Хамза', 'АбдуЛлах ибн Джахш', 'Абу \'Убайда ибн аль-Джаррах', 'Зайд ибн аль-Харис'],
		correct: 3
	},
	{
		question: 'Са\'д ибн Раби\'а предложил одному из сподвижников, что он разведётся с одной из своих двух жён и предложит её ему в жёны. Кому? ',
		type: 'normal',
		answers: ['Умар', 'Усман', 'Абу Бакр', 'АбдуРахман ибн \'Ауф', 'Али', 'Абу ль-\'Ас ибн Раби\''],
		correct: 4
	},
	{
		question: 'Сколько основных крепостей было в Хайбаре?',
		type: 'normal',
		answers: ['10', '9', '8', '7', '6', '5', '4', '3'],
		correct: 3
	},
	{
		question: `История какого пророка изображена на картинке?`,
		type: 'image',
		img: './photos/Suliayman.jpg',
		answers: ['Сулейман', 'Суляйман', 'Сулиман', 'Сулеман'],
	},
	{
		question: 'В хадисах Бухари и Муслима сообщается, что Анас ибн Малик и ибн Умар на вопрос о том, сколько раз пророк совершал Умру, отвечали: "#? раз(а)"',
		type: 'normal',
		answers: ['1', '2', '3', '4', '5', '6'],
		correct: 4
	},
	{
		question: 'Каким качеством должен обладать любой пророк, посланный к людям? <br> Это качество предшествует всем другим качествам',
		type: 'normal',
		answers: ['Храбость', 'Щедрость', 'Сообразительность', 'Решительность', 'Сострадательность', 'Аккуратность',
			'Дружба и Непричастность/الولاء والبراء'],
			correct: 5
		},
		{
			question: 'Полная дата битвы при Бадре?',
			type: 'normal',
			answers: ['7 Рамадана 1 г.х.', '10 Рамадана 1 г.х.', '17 Рамадана 1 г.х.', '7 Рамадана 2 г.х.', '10 Рамадана 2 г.х.', '17 Рамадана 2 г.х.', '7 Рамадана 3 г.х.', '10 Рамадана 3 г.х.', '17 Рамадана 3 г.х.'],
			correct: 6
		},
	{
		question: 'Какой род курайшитов был хранителем ключей Ка\'бы и военного знамени?',
		type: 'normal',
		answers: ['Бану Умайя', 'Бану Абду Дарр', 'Бану Абду Щамс', 'Бану Хашим', 'Бану Махзум', 'Бану Зухра'],
		correct: 2
	},
	{
		question: `История какого пророка изображена на картинке?`,
		type: 'image',
		img: './photos/Musa.jpg',
		answers: ['Муса', 'Моисей', 'Мусаа', 'musa'],
	},
	{
		question: `Джубайр ибн Мут'им, будучи многобожником, услышал как посланник Аллаха читает во время Магриб-намаза эти аяты, сказал: "«Сердце мое чуть не вылетело, и это было первым из того, что глубоко запало в мое сердце из веры» [Бухари 4854] <br><br> Какая Сура, вписать номер или название ? <br>
		36. أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ
		<br>37. أَمْ خَلَقُوا السَّمَاوَاتِ وَالْأَرْضَ بَل لَّا يُوقِنُونَ
		`,
		type: 'open',
		answers: ['52', 'Гора', 'АтТур', 'Ат-Тур', 'Тур', 'Ат Тур'],
	},
	{
		question: 'В каком году состоялся поход на Хайбар?',
		type: 'normal',
		answers: ['в 3 году по х.', 'в 4 году по х.', 'в 5 году по х.', 'в 6 году по х.', 'в 7 году по х.', 'в 8 году по х.', 'в 9 году по х.'],
		correct: 5
	},
	{
		question: `К посланнику Аллаха пришла делегация одного племени и попросила дать им разрешение прелюбодействовать, пить вино, заниматься ростовщичеством и оставить им их идола!<br> Из какого племени были эти странные люди? :)`,
		type: 'normal',
		answers: ['Бану Сакиф/ ﺑﻧﻮ ﺛﻘﻴﻒ', 'племя Гатафан', 'племя Хауазин/ هَوَازِن', 'Бану Тамим/ بنو تميم', 'Бану Лихьян', 'племя Даус', 'Курайшиты/ قُرَيْش', 'Гассаниды'],
		correct: 1
	},
	{
		question: 'Известно из Сунны, что если умирает человек, то рекомендуется, чтобы семье, понесшей утрату приготовили еду (а не наоборот). Из смерти  какого сподвижника мы узнали данный наказ пророка??',
		type: 'normal',
		answers: ['Са\'д ибн Му\'аз', 'Мус\'аб ибн \'Умайр', 'Ас\'ад ибн Зурара', '\'Усман ибн Маз\'ун', 'Джа\'фар ибн Абу Талиб', 'Зайд ибн Хариса', 'АбдуЛлах ибн Джубайр'],
		correct: 5
	},
	{
		question: 'Какое фундаментальное, обязательное и ежедневное предписание религии изначально изошло ни из Корана,  ни от пророка?',
		type: 'normal',
		answers: ['Молитва', 'Милостыня', 'Малое Омовение', 'Большое омовение/ гъусль/ غسل', 'Рибат/защита границ', 'Азан'],
		correct: 6
	},
	{
		question: 'Кому приснился Азан во сне? После чего он рассказал об этом сне пророку, а Умар подтвердил это, сказав, что ему приснилось нечто похожее.',
		type: 'normal',
		answers: ['АбдуЛлах ибн Зайд', 'АбдуЛлах ибн Мас\'уд', 'АбдуЛлах ибн \'Аббас', 'АбдуЛлах ибн Джубайр', 'АбдуЛлах ибн \'Амр ибн аль-\'Ас', 'АбдуЛлах ибн \'Умар'],
		correct: 1
	},
	{
		question: 'В какой последовательности в битве при Муте главнокомандующие войска мусульман держали знамя?',
		type: 'normal',
		answers: ['Джа\'фар, Зайд, АбдуЛлах ибн Раваха, Халид', 'Зайд, Джа\'фар, АбдуЛлах ибн Раваха, Халид', 'Зайд, АбдуЛлах ибн Раваха, Джа\'фар, Халид', 'АбдуЛлах ибн Раваха, Зайд, Джа\'фар, Халид', 'Джа\'фар, АбдуЛлах ибн Раваха, Зайд, Халид'],
		correct: 2
	},
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');
const divForOpen = document.querySelector('.forOpenQuestion');

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.addEventListener('click', checkAnswer)

function clearPage() {
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
	divForOpen.innerHTML = '';
}

function showQuestion() {
	submitBtn.disabled = false;
	headerContainer.innerHTML = `<h2 class="title">№${questionIndex + 1} (из ${questions.length}) <br> ${questions[questionIndex]['question']}</h2>`;

	if (questions[questionIndex].type === 'normal') {
		for (let [index, answer] of questions[questionIndex]['answers'].entries()) {  //метод .entries() позволяет нам вытащить ИНДЕКС элемента массива
			const questionTemplate = `<li>
					<label>
					<input value="%number%" type="radio" class="answer" name="answer" />   
					<span>%answer%</span>
					</label>
				</li>`;
			const answerHTML = questionTemplate
				.replace('%number%', index + 1)
				.replace('%answer%', answer)
			listContainer.innerHTML += answerHTML;   // Формируем список вариантов ответа
		}
		// записываем в INPUT Номер текущего ОТВЕТА = ИНДЕКС + 1, чтобы потом можно было взять это значение, когда пользователь выберет один из вариантов, и сравнить с номером правильного ответа
	}

	if (questions[questionIndex].type === 'open') {
			const input = document.createElement('input');
			document.querySelector('.forOpenQuestion').append(input);
			input.placeholder = "Впишите свой вариант ответа";
			input.focus();
	}

	if (questions[questionIndex].type === 'image') {
		const image = document.createElement('img'); 
		document.querySelector('.forOpenQuestion').append(image);
		image.src = `${questions[questionIndex].img}`;
		image.alt = 'Здесь должна быть картинка';
		const input = document.createElement('input');
		document.querySelector('.forOpenQuestion').append(input);
		input.placeholder = "Впишите Одно Слово ";
		input.focus();
	}
}

function checkAnswer() {
	const type = questions[questionIndex].type;

	if (type === 'normal') {
		const radioBtnAnswer = document.querySelector('input[type="radio"]:checked');
		const parent = radioBtnAnswer.parentNode;
	
		if (!radioBtnAnswer) {
			submitBtn.blur()
			return
		} else {
			submitBtn.disabled = true;
		}
	
		const userAnswer = parseInt(radioBtnAnswer.value);
	
		if (questions[questionIndex]['correct'] === userAnswer) {
			score++;
			parent.classList.add('bingo');
		} else {
			parent.classList.add('wrong');
		}
	}

	if (type === 'open' || type === 'image') {
		let input = document.querySelector('input');
		if (input.value) submitBtn.disabled = true;
		else {
			submitBtn.blur()
			return
		};

		let flag = false;
		for (let answer of questions[questionIndex].answers) {
			if (answer.toLowerCase() === input.value.toLowerCase().trim()) {
				score++;
				input.value = `Верно!`;
				input.setAttribute('style', 'border: 4px solid green') 
				flag = true;
			}
		}

		if (!flag)  {
			input.value = `Неверно!`;
			input.setAttribute('style', 'border: 4px solid red') 
		}
	}

	if (questionIndex + 1 !== questions.length) {
		setTimeout(() => {
			questionIndex++;
			clearPage();
			showQuestion();
		}, 2000);
	}
	else {
		setTimeout(() => {
			clearPage();
			showResult();
		}, 2000)
	}
}

function showResult() {
	submitBtn.disabled = false;
	headerContainer.innerHTML = `<h2 class="title">Ваш итоговый балл: ${score} из ${questions.length}</h2>`;
	submitBtn.textContent = 'Начать заново';
	submitBtn.onclick = () => history.go();
}
