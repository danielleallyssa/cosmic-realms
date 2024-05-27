let keyword = "Holiday";
let newImage =
  "https://assets-global.website-files.com/660dd53af0e8545859e78b82/6615b80bc988841c8404c0d5_Screenshot%202024-02-08%20at%2010.16.48%20AM.png";

let containerEl = document.querySelectorAll(".grid_element");
let imgArr = Array.from(document.querySelectorAll(".grid_element img"));
let imgSrc = imgArr.map((x) => x.src),
  imgAlts = imgArr.map((x) => x.alt);
let filterAlts = imgAlts.filter((x) => x.includes(keyword));

function replace() {
  for (i = 0; i < imgArr.length; i++) {
    if (imgAlts[i].includes(keyword)) {
      imgSrc[i] = newImage;
    }
  }
}

function replaceTest() {
  for (i = 0; i < imgArr.length; i++) {
    if (imgAlts[i].includes(keyword)) {
      console.log(imgAlts[i]);
    }
  }
}

function replace3(arr) {
  for (i = 0; i < imgArr.length; i++) {
    if (imgAlts[i].includes(keyword)) {
      arr[i].src = newImage;
    }
  }
}
