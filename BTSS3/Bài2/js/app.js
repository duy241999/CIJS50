import create from './create.js'
import question_test2 from './question_test2.js';

let arrTest = [];
let arrQuestion = [];
let test = new create(arrTest);
let question = new question_test2(arrQuestion);

while (true) {
    let input = prompt(`
        Nhập yêu cầu của bạn
        (Add Question - AQ/ Fix Question - FQ/ Print Question - PQ/ Del Question - DQ)
        (Add Test - AT / Print Test - PT)
        (End - E)
    `);
    if (input == 'AQ')
        question.addQuestions();
    else if (input == 'FQ')
        question.editQuestions();
    else if (input == 'PQ')
        question.showQuestion();
    else if (input == 'DQ')
        question.deleteQuestions();
    else if (input == 'AT')
        test.create();
    else if (input == 'PT')
        test.showAllTest();
    else if (input == 'E')
        break;
    else {
        alert('Bạn đã nhập sai cú pháp');
    }



}