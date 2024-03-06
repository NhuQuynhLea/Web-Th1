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

function renderQuestion(questions) {
  formContainer.innerHTML = "";
  questions.forEach((fixedQuestion, index) => {
    const item = document.createElement("li");
    const form = document.createElement("form");
    form.setAttribute("id", `quizForm-${index}`);
    form.setAttribute("class", "quizForm");

    const containerForm = document.createElement("div");
    containerForm.setAttribute("class", "containerForm");

    const question = document.createElement("div");
    question.textContent = fixedQuestion.question;

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
      optionInput.setAttribute("data-correct", fixedQuestion.answerText); // Store the correct answer

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

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit Answers";
  submitButton.addEventListener("click", checkAnswers);
  formContainer.appendChild(submitButton);
}

function checkAnswers() {
  const forms = document.querySelectorAll(".quizForm");
  let correctCount = 0;

  forms.forEach((form, index) => {
    const selectedAnswer = form.querySelector(
      'input[name="answer-' + index + '"]:checked'
    );
    if (selectedAnswer) {
      const correctAnswer = selectedAnswer.getAttribute("data-correct");
      if (correctAnswer === "true" && selectedAnswer.value === "true") {
        correctCount++;
      } else if (
        correctAnswer === "false" &&
        selectedAnswer.value === "false"
      ) {
        correctCount++;
      }
    }
  });
  console.log(correctCount);
  localStorage.setItem("correctCount", correctCount);
  window.location.href = "./result.html";
}

const formContainer = document.getElementById("form-container");
renderQuestion(questionFixed);
