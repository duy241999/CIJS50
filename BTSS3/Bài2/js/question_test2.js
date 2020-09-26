import question from './question.js';

class question_test2 {
    questions = [];
    constructor(questions) {
        this.questions = questions;
    }
    showQuestion() {
        for (let i = 0; i < this.questions.length; i++) {
            console.log(this.questions[i]);
        }
    }
    addQuestions() {
        let id = prompt("id = ?");
        let content = prompt("Content: ");
        let correctAnswer = prompt("Correct Answer: ");
        let newQuest = new question(id, content, correctAnswer);
        this.questions.push(newQuest);
    }
    editQuestions() {
        let inputId = prompt("Enter the question: ");
        let inputEdit = prompt("Enter the properties(content, correctAnswer)")
        let inputContent = prompt("Enter the content:");
        this.questions[inputId - 1][inputEdit] = inputContent;
    }
    deleteQuestions() {
        let inputDel = prompt("Enter the question");
        this.questions.splice(inputDel - 1, 1);
    }
}

export default question_test2;