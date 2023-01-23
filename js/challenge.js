//////// See the timer increment every second once the page has loaded ////////
let counter = document.querySelector("#counter");
let t = 0;

function counterFunction() {
  t = setInterval(() => {
    counter.textContent++;
  }, 1000);
}
counterFunction();

////////// Manually increment and decrement the counter using the plus and minus buttons ///////////
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
function manuallyCount() {
  minusBtn.addEventListener("click", (e) => {
    counter.textContent--;
  });
  plusBtn.addEventListener("click", (e) => {
    counter.textContent++;
  });
}
manuallyCount();

// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed //
const likeBtn = document.querySelector("#heart");
const likesList = document.querySelector("ul.likes");
let numberOfLikes = 1;

function likeNumber() {
  likeBtn.addEventListener("click", (e) => {
    const li = document.createElement("li");
    likesList.appendChild(li);
    li.textContent = counter.innerText + " liked";
    likesCounter();
  });
  function likesCounter() {
    numberOfLikes += 1;
    const likesli = document.createElement("li");
    likesList.appendChild(likesli);
    likesli.textContent =
      counter.innerText + " was liked " + numberOfLikes + " times.";
  }
}
likeNumber();

//// Pause the counter /// disable all buttons except the pause button /// switch the label on the button from "pause" to "resume" ////
function pause() {
  const pauseBtn = document.querySelector("#pause");
  pauseBtn.addEventListener("click", () => {
    clearInterval(t);
    const resumeBtn = document.querySelector("#pause");
    pauseBtn.textContent = "resume";
    minusBtn.disabled = true;
    plusBtn.disabled = true;
    likeBtn.disabled = true;
    resumeBtn.addEventListener("click", () => {
      pauseBtn.textContent = "pause";
      minusBtn.disabled = false;
      plusBtn.disabled = false;
      likeBtn.disabled = false;
      pause();
      counterFunction();
    });
  });
}
pause();

////////// Click the "restart" button to restart the counter and re-enable the buttons //////////
////////////////////// There isn't a "restart" button in the html ? ////////////////////////////

////////// Leave comments on my gameplay, such as: "Wow, what a fun game this is." //////////
const comments = document.querySelector("div#list");
const form = document.querySelector("#comment-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newComment = document.createElement("p");
  comments.appendChild(newComment);
  const comment = event.target.comment.value;
  newComment.textContent = comment;
  form.reset();
});
