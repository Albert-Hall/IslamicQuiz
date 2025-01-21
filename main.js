const questions = [
	{
	  question: 'Кто возглавил первый в истории военный отряд мусульман?',
	  answers: ['Абу Бакр', 'Са\'д ибн Абу Ваккас', 'Хамза', 'АбдуЛлах ибн Джахш', 'Абу \'Убайда ибн аль-Джаррах', 'Зайд ибн аль-Харис'],
	  correct: 3
	},
	{
	  question: 'Са\'д ибн Раби\'а предложил одному из сподвижников, что он разведётся с одной из своих двух жён и предложит её ему в жёны. Кому? ',
	  answers: ['Умар', 'Усман', 'Абу Бакр', 'АбдуРахман ибн \'Ауф', 'Али', 'Абу ль-\'Ас ибн Раби\''],
	  correct: 4
	},
	{
	  question: 'Сколько основных крепостей было в Хайбаре?',
	  answers: ['10', '9', '8', '7', '6', '5', '4', '3'],
	  correct: 3
	},
	{
	  question: 'В хадисах Бухари и Муслима сообщается, что Анас ибн Малик и ибн Умар на вопрос о том, сколько раз пророк совершал Умру, отвечали: "#? раз(а)"',
	  answers: ['1', '2', '3', '4', '5', '6'],
	  correct: 4
	},
	{
	  question: 'Каким качеством должен обладать любой пророк, посланный к людям? <br> Это качество предшествует всем другим качествам',
	  answers: ['Храбость', 'Щедрость', 'Сообразительность', 'Решительность', 'Сострадательность', 'Аккуратность', 
			'Дружба и Непричастность/الولاء والبراء'],
	  correct: 5
	},
	{
	  question: 'Полная дата битвы при Бадре?',
	  answers: ['7 Рамадана 1 г.х.', '10 Рамадана 1 г.х.','17 Рамадана 1 г.х.', '7 Рамадана 2 г.х.','10 Рамадана 2 г.х.', '17 Рамадана 2 г.х.', '7 Рамадана 3 г.х.', '10 Рамадана 3 г.х.', '17 Рамадана 3 г.х.'],
	  correct: 6
	},
	{
	  question: 'Какой род курайшитов был хранителем ключей Ка\'бы и военного знамени?',
	  answers: ['Бану Умайя', 'Бану Абду Дарр', 'Бану Абду Щамс', 'Бану Хашим', 'Бану Махзум', 'Бану Зухра'],
	  correct: 2
	},
	{
	  question: 'В каком году состоялся поход на Хайбар?',
	  answers: ['в 3 году по х.', 'в 4 году по х.', 'в 5 году по х.', 'в 6 году по х.', 'в 7 году по х.', 'в 8 году по х.', 'в 9 году по х.'],
	  correct: 5
	},
  {
	  question: 'Обычно посланник Аллаха صلى الله عليه وسلم скрывал от широкой общественности и врага, куда он направляется в поход. Но в этот раз он НЕ скрывал ни направление похода, ни цель. Что за поход?',
	  answers: ['поход на Мекку', 'поход на Табук', 'поход на Бану Лихьян', 'поход в Даумат аль-Джандаль', 'поход в Худайбию', 'поход на Муту'],
	  correct: 2
	},
	{
	  question: 'К посланнику Аллаха пришла делегация одного племени и попросила дать им разрешение прелюбодействовать, пить вино, заниматься ростовщичеством и оставить им их идола!  Из какого племени были эти странные люди? :)',
	  answers: ['Бану Сакиф/ ﺑﻧﻮ ﺛﻘﻴﻒ', 'племя Гатафан', 'племя Хауазин/ هَوَازِن', 'Бану Тамим', 'Бану Лихьян', 'племя Даус', 'Курайшиты', 'Гассаниды'],
	  correct: 1
	},
	{
	  question: 'Известно из Сунны, что если умирает человек, то рекомендуется, чтобы семье, понесшей утрату приготовили еду (а не наоборот). Из смерти  какого сподвижника мы узнали данный наказ пророка??',
	  answers: ['Са\'д ибн Му\'аз', 'Мус\'аб ибн \'Умайр', 'Ас\'ад ибн Зурара', '\'Усман ибн Маз\'ун', 'Джа\'фар ибн Абу Талиб', 'Зайд ибн Хариса', 'АбдуЛлах ибн Джубайр'],
	  correct: 5
	},
	{
	  question: 'Какое фундаментальное, обязательное и ежедневное предписание религии изначально изошло ни из Корана,  ни от пророка?',
	  answers: ['Молитва', 'Милостыня', 'Малое Омовение', 'Большое омовение/ гъусль/ غسل', 'Рибат/защита границ', 'Азан'],
	  correct: 6
	},
	{
	  question: 'Кому приснился Азан во сне? После чего он рассказал об этом сне пророку, а Умар подтвердил это, сказав, что ему приснилось нечто похожее.',
	  answers: ['АбдуЛлах ибн Зайд', 'АбдуЛлах ибн Мас\'уд', 'АбдуЛлах ибн \'Аббас', 'АбдуЛлах ибн Джубайр', 'АбдуЛлах ибн \'Амр ибн аль-\'Ас', 'АбдуЛлах ибн \'Умар'],
	  correct: 1
	},
  ];
  
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.addEventListener('click', checkAnswer)
  
function clearPage() {
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
  }

function showQuestion() {
	submitBtn.disabled = false;
	headerContainer.innerHTML = `<h2 class="title">№${questionIndex +1} (из ${questions.length}) <br> ${questions[questionIndex]['question']}</h2>`;

	for ( let [index, answer] of questions[questionIndex]['answers'].entries() ) {  //метод .entries() позволяет нам вытащить ИНДЕКС элемента массива
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



function checkAnswer() {
	const radioBtnAnswer= document.querySelector('input[type="radio"]:checked');
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

	if (questionIndex + 1 !== questions.length) {
		setTimeout(() => {
			questionIndex++;
			clearPage();
			showQuestion();
			} , 2000);
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
