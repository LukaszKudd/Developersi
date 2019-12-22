const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000/');
});

let goodAnswers = 0;
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
    
})