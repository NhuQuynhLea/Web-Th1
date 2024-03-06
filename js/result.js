const storedCorrectCount = localStorage.getItem("correctCount");

if (storedCorrectCount !== null) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Bạn đã làm đúng ${storedCorrectCount} câu.`;
}
