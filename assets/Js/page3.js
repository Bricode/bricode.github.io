/*Declaration of constant document elements*/
let displayToDo = document.getElementById("Unitname");
let unitDetails = document.getElementById("unitDetails");
let starOne = document.getElementById("star1");
let starTwo = document.getElementById("star2");
let starThree = document.getElementById("star3");
let starFour = document.getElementById("star4");
let starFive = document.getElementById("star5");
const xhr = new XMLHttpRequest();
var unit;
let starValue = document.getElementById("starValue");
let commentsBtn = document.getElementById("commentBtn");
let currentUnit = "";

//The code to populate the page with the unit element. This was so that the page could grow based on the json file size
xhr.open("GET", "units2.json", true);
xhr.onload = () => {
  if (xhr.status === 200) {
    unit = JSON.parse(xhr.responseText);
    for (var key in unit) {
      //the creation and then appending of each element based on the number of sections in the JSON file
      Li = document.createElement("p");
      profileImage = document.createElement("img");
      profileImage.src = unit[key].imageLink;
      profileImage.height = 100;
      Li.id = unit[key].name;
      Li.append(document.createTextNode(unit[key].name));
      Li.append(profileImage);
      unit[key].comment = "";
      displayToDo.append(Li);
      Li.addEventListener("click", print);
    }
  }
  //returns an error if the JSON cant be found
  if (xhr.status === 404) {
    header = document.createElement("h1");
    header.append(document.createTextNode("Error 404: File not found"));
    displayToDo.append(header);
  }
};
xhr.send();

//this function inserts the text from the JSON based on the div that is clicked
function print() {
  document.getElementById("name").innerHTML = unit[this.id].name;
  document.getElementById("cost").innerHTML = unit[this.id].cost;
  document.getElementById("unitDescription").innerHTML =
    unit[this.id].unitDescription;
  document.getElementById("flavorText").innerHTML = unit[this.id].flavorText;
  document.getElementById("imageLink").src = unit[this.id].imageLink;
  starValue.innerHTML =
    "This model is rated " + unit[this.id].starRating + " out of five stars";
  document.getElementById("Comments").innerHTML = unit[this.id].comment;
  currentUnit = this.id;
  //this applies a default star rating as gathered from the JSON
  switch (unit[this.id].starRating) {
    case "1":
      ratingOne();
      starValue.innerHTML =
        "This model is rated " +
        unit[this.id].starRating +
        " out of five stars";
      break;
    case "2":
      ratingTwo();
      starValue.innerHTML =
        "This model is rated " +
        unit[this.id].starRating +
        " out of five stars";
      break;
    case "3":
      ratingThree();
      starValue.innerHTML =
        "This model is rated " +
        unit[this.id].starRating +
        " out of five stars";
      break;
    case "4":
      ratingFour();
      starValue.innerHTML =
        "This model is rated " +
        unit[this.id].starRating +
        " out of five stars";
      break;
    case "5":
      ratingFive();
      starValue.innerHTML =
        "This model is rated " +
        unit[this.id].starRating +
        " out of five stars";
      break;
  }
}
//this is used to clear the star value
function clearStars() {
  starTwo.className = "fa fa-star-o";
  starThree.className = "fa fa-star-o";
  starFour.className = "fa fa-star-o";
  starFive.className = "fa fa-star-o";
  starOne.className = "fa fa-star-o";
}
//this is user to give a star rating of one
const ratingOne = () => {
  starTwo.className = "fa fa-star-o";
  starThree.className = "fa fa-star-o";
  starFour.className = "fa fa-star-o";
  starFive.className = "fa fa-star-o";
  starOne.className = "fa fa-star";
  starValue.innerHTML = "You rated this model 1 out of five stars";
};
//this is user to give a star rating of two
const ratingTwo = () => {
  starThree.className = "fa fa-star-o";
  starFour.className = "fa fa-star-o";
  starFive.className = "fa fa-star-o";
  starOne.className = "fa fa-star";
  starTwo.className = "fa fa-star";
  starValue.innerHTML = "You rated this model 2 out of five stars";
};
//this is user to give a star rating of three
const ratingThree = () => {
  starFour.className = "fa fa-star-o";
  starFive.className = "fa fa-star-o";
  starOne.className = "fa fa-star";
  starTwo.className = "fa fa-star";
  starThree.className = "fa fa-star";
  starValue.innerHTML = "You rated this model 3 out of five stars";
};
//this is user to give a star rating of four
const ratingFour = () => {
  starFive.className = "fa fa-star-o";
  starOne.className = "fa fa-star";
  starTwo.className = "fa fa-star";
  starThree.className = "fa fa-star";
  starFour.className = "fa fa-star";
  starValue.innerHTML = "You rated this model 4 out of five stars";
};
//this is user to give a star rating of five
const ratingFive = () => {
  starOne.className = "fa fa-star";
  starTwo.className = "fa fa-star";
  starThree.className = "fa fa-star";
  starFour.className = "fa fa-star";
  starFive.className = "fa fa-star";
  starValue.innerHTML = "You rated this model 5 out of five stars";
};

//these are all the onclick events for when the star rating system is clicked
starOne.onclick = function() {
  ratingOne();
};
starTwo.onclick = function() {
  ratingTwo();
};
starThree.onclick = function() {
  ratingThree();
};
starFour.onclick = function() {
  ratingFour();
};
starFive.onclick = function() {
  ratingFive();
};

//this is the code for the comment submit button
function submitBtn() {
  const userName = document.getElementById("userName").value;
  var timeSubmit = new Date();
  var commentData = document.getElementById("message").value;
  br = document.createElement("br");
  backgroundDiv = document.createElement("div");
  backgroundDiv.innerHTML =
    userName +
    " posted at " +
    timeSubmit.getDate() +
    "/" +
    (timeSubmit.getMonth() + 1) +
    "/" +
    timeSubmit.getFullYear() +
    " " +
    timeSubmit.getHours() +
    ":" +
    timeSubmit.getMinutes() +
    " " +
    commentData;
  document.getElementById("Comments").append(backgroundDiv);
  unit[currentUnit].comment = document.getElementById("Comments").innerHTML;
}
commentsBtn.addEventListener("click", submitBtn);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Unitname");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  clearStars();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    clearStars();
  }
};
