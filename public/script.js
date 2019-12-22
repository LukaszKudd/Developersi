function showNextQuestion() {
    fetch('/question', {
        method: 'GET',
    }).then(data => {
        console.log(data);
    });
}

showNextQuestion();