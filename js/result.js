const storedCorrectCount = localStorage.getItem("correctCount");
const questionData = localStorage.getItem("data");

if (storedCorrectCount !== null) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Bạn đã làm đúng ${storedCorrectCount} câu.`;
}
renderQuestion(questionData);
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

const formContainer = document.getElementById("form-container");
