const quiz = [

{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Multi Language",
        "Home Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
},

{
    question: "Which language is used to style web pages?",
    options: [
        "Java",
        "Python",
        "CSS",
        "C++"
    ],
    answer: "CSS"
},

{
    question: "Which language is used to add interactivity to web pages?",
    options: [
        "HTML",
        "CSS",
        "JavaScript",
        "SQL"
    ],
    answer: "JavaScript"
},

{
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
        "<img>",
        "<a>",
        "<link>",
        "<button>"
    ],
    answer: "<a>"
},

{
    question: "Which CSS property changes the text color?",
    options: [
        "font-color",
        "text-color",
        "color",
        "background-color"
    ],
    answer: "color"
},

{
    question: "Which command initializes a Git repository?",
    options: [
        "git start",
        "git init",
        "git create",
        "git begin"
    ],
    answer: "git init"
},

{
    question: "Which command uploads your local commits to GitHub?",
    options: [
        "git pull",
        "git commit",
        "git push",
        "git clone"
    ],
    answer: "git push"
},

{
    question: "Which JavaScript library is commonly used for building user interfaces?",
    options: [
        "React",
        "Express",
        "Node.js",
        "MongoDB"
    ],
    answer: "React"
},

{
    question: "Which database is commonly used in the MERN Stack?",
    options: [
        "MySQL",
        "Oracle",
        "MongoDB",
        "SQLite"
    ],
    answer: "MongoDB"
},

{
    question: "What does API stand for?",
    options: [
        "Application Programming Interface",
        "Advanced Program Interaction",
        "Application Process Integration",
        "Automated Programming Interface"
    ],
    answer: "Application Programming Interface"
}

];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");

const options = document.getElementById("options");

const nextBtn = document.getElementById("nextBtn");

const scoreText = document.getElementById("score");

function showQuestion(){

    let q = quiz[currentQuestion];

    question.innerText = q.question;

    options.innerHTML = "";

    q.options.forEach(option=>{

        let button = document.createElement("button");

        button.innerText = option;

        button.onclick = ()=>checkAnswer(button,option);

        options.appendChild(button);

    });

}

function checkAnswer(button,option){

    if(option===quiz[currentQuestion].answer){

        button.classList.add("correct");

        score++;

    }
    else{

        button.classList.add("wrong");

    }

    Array.from(options.children).forEach(btn=>{

        btn.disabled=true;

    });

}

nextBtn.onclick=function(){

    currentQuestion++;

    if(currentQuestion<quiz.length){

        showQuestion();

    }
    else{

        question.innerText="Quiz Completed!";

        options.innerHTML="";

        scoreText.innerText="Your Score : "+score+" / "+quiz.length;

        nextBtn.style.display="none";

    }

}
showQuestion();