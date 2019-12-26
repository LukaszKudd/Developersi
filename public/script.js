const question = document.querySelector('#question');

function fillQuestionElements(data) {
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

function sendAnswer(answerIndex) {
    fetch(`/answer/${answerIndex}`, {
        method: 'POST',
    })
    .then( r =>  r.json())
    .then( data => {
        console.log(data);
    });
}