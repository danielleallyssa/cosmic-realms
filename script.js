// will need to use the date key from the data objects
// can use any date after 1995-06-16
// will also need the copyright

const inputButton = document.querySelector("button");

// Input event listeners
inputButton.addEventListener("click", getImage);
window.addEventListener("keyup", function (e) {
  if (e.code === "Enter") getImage();
});

// Page load listeners
window.addEventListener("load", getTodaysImage);

function getImage() {
  const userInput = document.querySelector("input").value;
  // THIS WORKS -------------------------------------------------
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=VOSTZf0ZJD4sNYKog0o0JLPV6vOTwWPt27cVxa04&date=${userInput}`
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // returns an object with some keys
      swapDOMContent(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function getTodaysImage() {
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=VOSTZf0ZJD4sNYKog0o0JLPV6vOTwWPt27cVxa04&date=${getTodaysDate()}`
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // returns an object with some keys
      swapDOMContent(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function getTodaysDate() {
  const currentDate = new Date();

  // Ensure that the month and date are always 2 digit (even if less than 10)
  const twoDigitValue = (x) => x.toString().padStart(2, 0);

  const year = currentDate.getFullYear();
  const month = twoDigitValue(currentDate.getMonth() + 1);
  const date = twoDigitValue(currentDate.getDate());

  // Returns date in needed format
  return `${year}-${month}-${date}`;
}

function swapDOMContent(obj) {
  document.querySelector("h2").textContent = obj.title;
  document.querySelector("img").src = obj.hdurl;
  document.querySelector("img").alt = obj.title;
  document.querySelector("#description").textContent = obj.explanation;
}
