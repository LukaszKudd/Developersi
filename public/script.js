function showNextQuestion() {
    fetch('/question', {
        method: 'GET',
    })
    .then( r =>  res.json())
    .then( data => {
        console.log(data);
    })
}

showNextQuestion();