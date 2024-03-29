const questionFixed = [
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["true", "false"],
    answerText: "true",
  },
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["true", "false"],
    answerText: "false",
  },
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["true", "false"],
    answerText: "true",
  },
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["true", "false"],
    answerText: "false",
  },
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["true", "false"],
    answerText: "true",
  },
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["true", "false"],
    answerText: "false",
  },
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["true", "false"],
    answerText: "true",
  },
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["true", "false"],
    answerText: "false",
  },
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["true", "false"],
    answerText: "true",
  },
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["true", "false"],
    answerText: "false",
  },
];
const questionFixed2 = [
  {
    question: "Ai là người sáng lập của Microsoft?",
    options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
    answerText: "Bill Gates",
  },
  {
    question:
      "Trong hệ mặt trời, hành tinh nào là hành tinh thứ tư từ Mặt Trời?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    answerText: "Mars",
  },
  {
    question: "Thủ đô của Pháp là gì?",
    options: ["Madrid", "Rome", "Paris", "Berlin"],
    answerText: "Madrid",
  },
  {
    question:
      "Trong hệ mặt trời, hành tinh nào là hành tinh thứ tư từ Mặt Trời?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    answerText: "Mars",
  },
  {
    question: "Thủ đô của Pháp là gì?",
    options: ["Madrid", "Rome", "Paris", "Berlin"],
    answerText: "Madrid",
  },
  {
    question:
      "Trong hệ mặt trời, hành tinh nào là hành tinh thứ tư từ Mặt Trời?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    answerText: "Mars",
  },
  {
    question: "Thủ đô của Pháp là gì?",
    options: ["Madrid", "Rome", "Paris", "Berlin"],
    answerText: "Madrid",
  },
  {
    question:
      "Trong hệ mặt trời, hành tinh nào là hành tinh thứ tư từ Mặt Trời?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    answerText: "Mars",
  },
  {
    question: "Thủ đô của Pháp là gì?",
    options: ["Madrid", "Rome", "Paris", "Berlin"],
    answerText: "Madrid",
  },
  {
    question:
      "Trong hệ mặt trời, hành tinh nào là hành tinh thứ tư từ Mặt Trời?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    answerText: "Mars",
  },
];
const questionFixed4 = [
  {
    question: "Ai là người sáng lập của Microsoft?",
    answerText: "Bill Gates",
  },
  {
    question:
      "Trong hệ mặt trời, hành tinh nào là hành tinh thứ tư từ Mặt Trời?",
    answerText: "Mars",
  },
  {
    question: "Thủ đô của Pháp là gì?",
    answerText: "Madrid",
  },
  {
    question:
      "Trong hệ mặt trời, hành tinh nào là hành tinh thứ tư từ Mặt Trời?",
    answerText: "Mars",
  },
  {
    question: "Thủ đô của Pháp là gì?",
    answerText: "Madrid",
  },
  {
    question:
      "Trong hệ mặt trời, hành tinh nào là hành tinh thứ tư từ Mặt Trời?",
    answerText: "Mars",
  },
  {
    question: "Thủ đô của Pháp là gì?",
    answerText: "Madrid",
  },
  {
    question:
      "Trong hệ mặt trời, hành tinh nào là hành tinh thứ tư từ Mặt Trời?",
    answerText: "Mars",
  },
  {
    question: "Thủ đô của Pháp là gì?",
    answerText: "Madrid",
  },
  {
    question:
      "Trong hệ mặt trời, hành tinh nào là hành tinh thứ tư từ Mặt Trời?",
    answerText: "Mars",
  },
];

function renderQuestion(questions) {
  // formContainer.innerHTML = "";
  questions.forEach((fixedQuestion, index) => {
    const item = document.createElement("li");

    const form = document.createElement("form");
    form.setAttribute("id", `quizForm-${index}`);
    form.setAttribute("class", "quizForm");

    const containerForm = document.createElement("div");
    containerForm.setAttribute("class", "containerForm");

    const question = document.createElement("div");
    question.textContent = fixedQuestion.question;
    question.setAttribute("class", "question");

    containerForm.appendChild(question);
    form.appendChild(containerForm);

    fixedQuestion.options.forEach((option, optionIndex) => {
      const container = document.createElement("div");
      container.setAttribute("class", "newContainer");

      const optionInput = document.createElement("input");
      optionInput.setAttribute("type", "radio");
      optionInput.setAttribute("name", `answer-${index}`);
      optionInput.setAttribute("class", "option-radio");
      optionInput.setAttribute("value", option);
      optionInput.setAttribute("data-correct", fixedQuestion.answerText);
      optionInput.setAttribute("class", "option");

      const textField = document.createElement("input");
      textField.setAttribute("type", "text");
      textField.setAttribute("placeholder", "Enter text here");
      textField.value = option;
      textField.style.border = "none";
      textField.disabled = true;

      container.appendChild(optionInput);
      container.appendChild(textField);

      form.appendChild(container);
    });

    item.appendChild(form);
    formContainer.appendChild(item);
  });
}
function renderQuestion4(questions) {
  questions.forEach((fixedQuestion, index) => {
    const item = document.createElement("li");

    const form = document.createElement("form");
    form.setAttribute("id", `quizForm-${index}`);
    form.setAttribute("class", "quizForm");

    const containerForm = document.createElement("div");
    containerForm.setAttribute("class", "containerForm");

    const question = document.createElement("div");
    question.textContent = fixedQuestion.question;
    question.setAttribute("class", "question4");

    containerForm.appendChild(question);
    form.appendChild(containerForm);

    const container = document.createElement("div");
    container.setAttribute("class", "newContainer");

    const textField = document.createElement("input");
    textField.setAttribute("type", "text");
    textField.setAttribute("name", `answer`);
    textField.setAttribute("class", `textInput`);
    textField.setAttribute("data-correct", fixedQuestion.answerText);

    container.appendChild(textField);

    form.appendChild(container);

    item.appendChild(form);
    formContainer.appendChild(item);
  });
}
//
function onSave() {
  const forms = document.querySelectorAll(".quizForm");
  let correctCount = 0;
  var ques = [];
  forms.forEach((form, index) => {
    var questionInput = "";

    if (form.querySelector(".question") != null) {
      questionInput = form.querySelector(".question").textContent;
    } else {
      questionInput = form.querySelector(".question4").textContent;
    }

    const selectedAnswer = form.querySelector(
      'input[name="answer-' + index + '"]:checked'
    );
    const selectedAnswer4 = form.querySelector('input[name="answer"]');

    if (selectedAnswer) {
      const correctAnswer = selectedAnswer.getAttribute("data-correct");
      if (correctAnswer === selectedAnswer.value) {
        correctCount++;
      }
    }
    if (selectedAnswer4) {
      const correctAnswer = selectedAnswer4.getAttribute("data-correct");
      if (correctAnswer === selectedAnswer4.value) {
        correctCount++;
      }
    }
    var answerInput = "";
    var answerText = "";
    if (selectedAnswer != null) {
      answerInput = selectedAnswer.value;
      answerText = selectedAnswer.getAttribute("data-correct");
    }

    if (selectedAnswer4 != null) {
      answerInput = selectedAnswer4.value;
      answerText = selectedAnswer4.getAttribute("data-correct");
    }
    ques.push({
      question: questionInput,
      answerInput: answerInput,
      answerText: answerText,
    });
  });
  console.log(ques);
  localStorage.setItem("correctCount", correctCount);
  localStorage.setItem("data", ques);
  window.location.href = "./result.html";
}

const formContainer = document.getElementById("form-container");
const btn = document.getElementById("btn");
renderQuestion(questionFixed);
renderQuestion(questionFixed2);
renderQuestion4(questionFixed4);
