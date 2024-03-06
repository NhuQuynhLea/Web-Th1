function onSave() {
  var name = document.getElementById("inputFullname").value;
  var dob = document.getElementById("inputDob").value;
  var cccd = document.getElementById("inputId").value;
  var address = document.getElementById("inputAddress").value;
  console.log(dob, "dob");
  if (name != "" && dob != "" && cccd != "" && address != "") {
    alert("Lưu thông tin thành công!");
    window.location.href = "./question.html";
  } else {
    alert("Cần điền đầy đủ thông tin!");
  }
}
