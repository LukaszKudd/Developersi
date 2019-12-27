function gameRoutes(app) {
let goodAnswers = 0;
let isGameOver = false;
let callToAFriendUsed = false;
let questionToTheCrowdUsed = false;
let halfOnHalfUsed = false;

const questions = [
    {
        question: 'W tym pytaniu odpowiedzią poprawną jest A',
        answers: ['A', 'B', 'C', 'D'],
        correctAnswer: 0,
    },
    {
        question: 'W tym pytaniu odpowiedzią poprawną jest C',
        answers: ['A', 'B', 'C', 'D'],
        correctAnswer: 2,
    },
    {
        question: 'W tym pytaniu odpowiedzią poprawną jest D',
        answers: ['A', 'B', 'C', 'D'],
        correctAnswer: 3,
    },
];

app.get('/question', (req, res) => {
    if (goodAnswers === questions.length) {
         res.json( {
             winner: true,
         });

    } else if (isGameOver){
        res.json( {
            loser: true,
        });

    } else {
        const nextQuestion = questions[goodAnswers];
        const {question, answers} = nextQuestion;

         res.json({
            question, answers,
         });
    }
});

app.post('/answer/:index', (req, res) => {
    const {index} = req.params;
    const question = questions[goodAnswers];
    const isGoodAnswer = question.correctAnswer === Number(index);

    if (isGameOver) {
         res.json({
             loser: true,
         });
    }

    if (isGoodAnswer) {
        goodAnswers ++;
    } else {
        isGameOver = true;
    }
    
    res.json({
         correct: isGoodAnswer,
         goodAnswers,
    });
});
}

module.exports = gameRoutes;