const question = document.querySelector('#question');
const gameBoard = document.querySelector('#game-board');
const h2 = document.querySelector('h2');

function fillQuestionElements(data) {
    if (data.winner === true) {
        gameBoard.style.display = 'none';
        h2.innerText = 'WYGRANA!';
        var btn = document.createElement("BUTTON");   
        btn.innerText = "JESZCZE RAZ"; 
        btn.id = "buton";
        document.body.appendChild(btn);         
        
        // btn.addEventListener('click', (event) => {
        //     // ----------------------------------------------
        //     // tu musi się ładować na nowo strona z pytaniami
        //     // skasować licznik poprawnych odpowiedzi
        //     fetch('/reset', {
        //         method: 'GET',
        //     }) 
        //   }  // ______________________________________________
        // );

        
        return;
    }

    if (data.loser === true) {
        gameBoard.style.display = 'none';
        var btn = document.createElement("BUTTON");   
        btn.innerText = "JESZCZE RAZ";                   
        document.body.appendChild(btn);  
 
        return;
    }

    question.innerText = data.question;

    for (const i in data.answers) {
        const answerEl = document.querySelector (`#answer${Number(i) + 1}`);
        answerEl.innerText = data.answers[i];
    }
}

function showNextQuestion() {
    fetch('/question', {
        method: 'GET',
    })
    .then( r =>  r.json())
    .then( data => {
        fillQuestionElements(data);
    });
}

showNextQuestion();

let goodAnswersSpan = document.querySelector('#good-answers');

function handleAnswerFeedback(data) {
    goodAnswersSpan.innerText = data.goodAnswers;
    showNextQuestion();
}

function sendAnswer(answerIndex) {
    fetch(`/answer/${answerIndex}`, {
        method: 'POST',
    })
    .then( r =>  r.json())
    .then( data => {
        handleAnswerFeedback(data);
    });
}

const buttons = document.querySelectorAll('answer-bun');

for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const answerIndex = event.target.dataset.answer;
        sendAnswer(answerIndex);
        console.log('klik');
    });
}

function callToAFriend() {
    fetch('/help/friend', {
        method: 'GET',
    })
        .then(r => r.json())
        .then(data => {
            console.log(data);
        })
};

document.querySelector('#callToAFriend').addEventListener('click', callToAFriend);