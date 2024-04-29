// will need to use the date key from the data objects
// will also need the copyright

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=VOSTZf0ZJD4sNYKog0o0JLPV6vOTwWPt27cVxa04"
)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    // returns an object with some keys
    console.log(data);
    swapDOMContent(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

function swapDOMContent(obj) {
  document.querySelector("h2").textContent = obj.title;
  document.querySelector("img").src = obj.url;
  document.querySelector("p").textContent = obj.explanation;
}
