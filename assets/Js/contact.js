let submitComment = document.getElementById("submit");

function submitBton() {
  console.log(document.getElementById("Fname").value);
  document.getElementById("Centering").innerHTML =
    "Thank you for your message " + document.getElementById("Fname").value;
}

submitComment.addEventListener("click", submitBton);
