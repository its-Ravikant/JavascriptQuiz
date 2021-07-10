const QuizDB=[
    {

        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q2: What is the full form of HTTP?",
        a: "Hypertext transfer Product",
        b: "Hypertext test Protocol",
        c: "Hey transfer Protocol",
        d: "Hypertext transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JavaShop",
        d: "JavaSoap",
        ans: "ans1"
    }

];

let questionCount = 0;
let score=0;
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const Submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

const loadQuestion = () => {
    const questionList = QuizDB[questionCount];
    question.innerHTML = questionList.question;
    
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}
Submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer == QuizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll();
    if(questionCount < QuizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${QuizDB.length} ✌ <h3>
        <button class ="btn" onclick="location.reload()" >Play again</button>
        `; 
        showScore.classList.remove('scoreArea');
    }
}); 