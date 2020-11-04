let score = ""

function myQuiz1() {
  var myStart = document.getElementById('start');
  myStart.remove();
  document.getElementById('intro').innerHTML = 'Commonly used data types do NOT include...'
  let quest1 = document.createElement('button');
  quest1.setAttribute('id', 'btn1')
  let quest1node = document.createTextNode('1. Strings');
  quest1.appendChild(quest1node);
  let quizBod = document.getElementById('quiz');
  quizBod.appendChild(quest1);
  quest1.addEventListener('click', myQuiz2);
  quest4.onclick = function () {
    let wrongDiv2 = document.getElementById('rightOrWrong')
    let wrong2 = document.createElement('p')
    let wrong2Node = document.createTextNode('C O R R E C T')
    wrong2.appendChild(wrong2Node)
    wrongDiv2.appendChild(wrong2)
    score++

    let quest2 = document.createElement('button');
    quest2.setAttribute('id', 'btn2');
    let quest2node = document.createTextNode('2. Boolean');
    quest2.appendChild(quest2node);
    let btnSec2 = document.getElementById('btnSec2');
    btnSec2.appendChild(quest2);
    quest2.addEventListener('click', myQuiz2);
    quest4.onclick = function () {
      let wrongDiv3 = document.getElementById('rightOrWrong')
      let wrong3 = document.createElement('p')
      let wrong3Node = document.createTextNode('C O R R E C T')
      wrong3.appendChild(wrong3Node)
      wrongDiv3.appendChild(wrong3)
      score++


      let quest3 = document.createElement('button');
      quest3.setAttribute('id', 'btn3');
      let quest3node = document.createTextNode('3. Alerts');
      quest3.appendChild(quest3node);
      let btnSec3 = document.getElementById('btnSec3');
      btnSec3.appendChild(quest3);
      quest3.addEventListener('click', myQuiz2);
      quest3.onclick = function () {
        let wrongDiv1 = document.getElementById('rightOrWrong')
        let wrong1 = document.createElement('p')
        let wrong1Node = document.createTextNode('W R O N G')
        wrong1.appendChild(wrong1Node)
        wrongDiv1.appendChild(wrong1)
      }

      let quest4 = document.createElement('button');
      quest4.setAttribute('id', 'btn4');
      let quest4node = document.createTextNode('4. Arrays');
      quest4.appendChild(quest4node);
      let btnSec4 = document.getElementById('btnSec4');
      btnSec4.appendChild(quest4);
      quest4.addEventListener('click', myQuiz2);
      quest4.onclick = function () {
        let wrongDiv2 = document.getElementById('rightOrWrong')
        let wrong2 = document.createElement('p')
        let wrong2Node = document.createTextNode('C O R R E C T')
        wrong2.appendChild(wrong2Node)
        wrongDiv2.appendChild(wrong2)
        score++
      }
    }

    function myQuiz2() {
      document.getElementById('btn1').remove()
      document.getElementById('btn2').remove()
      document.getElementById('btn3').remove()
      document.getElementById('btn4').remove()
      document.getElementById('intro').innerHTML = 'The condition in an if/else statement is closed in...'
      let questi1 = document.createElement('button');
      questi1.setAttribute('id', 'bton1');
      let questi1node = document.createTextNode('1. Quotes');
      questi1.appendChild(questi1node);
      let quizBod = document.getElementById('quiz');
      quizBod.appendChild(questi1);
      questi1.addEventListener('click', myQuiz3);

      let questi2 = document.createElement('button');
      questi2.setAttribute('id', 'bton2');
      let questi2node = document.createTextNode('2. Curly Brackets');
      questi2.appendChild(questi2node);
      let btnSec2 = document.getElementById('btnSec2');
      btnSec2.appendChild(questi2);
      questi2.addEventListener('click', myQuiz3);

      let questi3 = document.createElement('button');
      questi3.setAttribute('id', 'bton3');
      let questi3node = document.createTextNode('3. Parenthesis');
      questi3.appendChild(questi3node);
      let btnSec3 = document.getElementById('btnSec3');
      btnSec3.appendChild(questi3);
      questi3.addEventListener('click', myQuiz3);

      let questi4 = document.createElement('button');
      questi4.setAttribute('id', 'bton4');
      let questi4node = document.createTextNode('4. Square Brackets');
      questi4.appendChild(questi4node);
      let btnSec4 = document.getElementById('btnSec4');
      btnSec4.appendChild(questi4);
      questi4.addEventListener('click', myQuiz3);
    }

    function myQuiz3() {
      document.getElementById('bton1').remove()
      document.getElementById('bton2').remove()
      document.getElementById('bton3').remove()
      document.getElementById('bton4').remove()
      document.getElementById('intro').innerHTML = 'Arrays in JavaScript can be used to store...'
      let questio1 = document.createElement('button');
      questio1.setAttribute('id', 'butn1');
      let questio1node = document.createTextNode('1. Numbers and Strings');
      questio1.appendChild(questio1node);
      let quizBod = document.getElementById('quiz');
      quizBod.appendChild(questio1);
      questio1.addEventListener('click', myQuiz4);

      let questio2 = document.createElement('button');
      questio2.setAttribute('id', 'butn2');
      let questio2node = document.createTextNode('2. Other Arrays');
      questio2.appendChild(questio2node);
      let btnSec2 = document.getElementById('btnSec2');
      btnSec2.appendChild(questio2);
      questio2.addEventListener('click', myQuiz4);

      let questio3 = document.createElement('button');
      questio3.setAttribute('id', 'butn3');
      let questio3node = document.createTextNode('3. Booleans');
      questio3.appendChild(questio3node);
      let btnSec3 = document.getElementById('btnSec3');
      btnSec3.appendChild(questio3);
      questio3.addEventListener('click', myQuiz4);

      let questio4 = document.createElement('button');
      questio4.setAttribute('id', 'butn4');
      let questio4node = document.createTextNode('4. All of the above');
      questio4.appendChild(questio4node);
      let btnSec4 = document.getElementById('btnSec4');
      btnSec4.appendChild(questio4);
      questio4.addEventListener('click', myQuiz4);
    }

    function myQuiz4() {
      document.getElementById('butn1').remove()
      document.getElementById('butn2').remove()
      document.getElementById('butn3').remove()
      document.getElementById('butn4').remove()
      document.getElementById('intro').innerHTML = 'String values must be closed within _____ when being assigned to variables...'
      let question1 = document.createElement('button');
      question1.setAttribute('id', 'bttn1');
      let question1node = document.createTextNode('1. Commas');
      question1.appendChild(question1node);
      let quizBod = document.getElementById('quiz');
      quizBod.appendChild(question1);
      question1.addEventListener('click', myQuiz5);

      let question2 = document.createElement('button');
      question2.setAttribute('id', 'bttn2');
      let question2node = document.createTextNode('2. Curly Brackets');
      question2.appendChild(question2node);
      let btnSec2 = document.getElementById('btnSec2');
      btnSec2.appendChild(question2);
      question2.addEventListener('click', myQuiz5);

      let question3 = document.createElement('button');
      question3.setAttribute('id', 'bttn3');
      let question3node = document.createTextNode('3. Quotes');
      question3.appendChild(question3node);
      let btnSec3 = document.getElementById('btnSec3');
      btnSec3.appendChild(question3);
      question3.addEventListener('click', myQuiz5);

      let question4 = document.createElement('button');
      question4.setAttribute('id', 'bttn4');
      let question4node = document.createTextNode('4. Parenthesis');
      question4.appendChild(question4node);
      let btnSec4 = document.getElementById('btnSec4');
      btnSec4.appendChild(question4);
      question4.addEventListener('click', myQuiz5);
    }

    function myQuiz5() {
      document.getElementById('bttn1').remove()
      document.getElementById('bttn2').remove()
      document.getElementById('bttn3').remove()
      document.getElementById('bttn4').remove()
      document.getElementById('intro').innerHTML = 'A very useful tool during development and debugging for printing content to the debugger is...'
      let questione1 = document.createElement('button');
      let questione1node = document.createTextNode('1. JavaScript');
      questione1.appendChild(questione1node);
      let quizBod = document.getElementById('quiz');
      quizBod.appendChild(questione1);
      questione1.addEventListener('click', fin);

      let questione2 = document.createElement('button');
      let questione2node = document.createTextNode('2. Terminal');
      questione2.appendChild(questione2node);
      let btnSec2 = document.getElementById('btnSec2');
      btnSec2.appendChild(questione2);
      questione2.addEventListener('click', fin);

      let questione3 = document.createElement('button');
      let questione3node = document.createTextNode('3. For Loops');
      questione3.appendChild(questione3node);
      let btnSec3 = document.getElementById('btnSec3');
      btnSec3.appendChild(questione3);
      questione3.addEventListener('click', fin);

      let questione4 = document.createElement('button');
      let questione4node = document.createTextNode('4. Console.log');
      questione4.appendChild(questione4node);
      let btnSec4 = document.getElementById('btnSec4');
      btnSec4.appendChild(questione4);
      questione4.addEventListener('click', fin);
    }

    function fin() {
      let finalScore = createElement('p');
      let finalScoreNode = document.createTextNode(`Your Score Was:`);
    }

    document.getElementById('start').addEventListener("click", myQuiz1)
