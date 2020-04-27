// 1. Create an HTML page that displays an ordered list of tracks to the webpage using Document Object Model API.

let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

function displayOrderedList() {
  for (let i = 0; i < playList.length; i++) {
    document.getElementById(
      "listItem"
    ).innerHTML += `<li>Author: ${playList[i].author}, song: ${playList[i].song}.</li>`;
  }
}

displayOrderedList();

// 2. Create an HTML page with OPEN button and a modal box. The modal box should have text and a CLOSE button. The modal box is not displayed from the beginning. It appears when clicking the OPEN button and disappears when clicking CLOSE.

// 3. Create an HTML page with traffic lights and a button that switches the color to the next one.
// Do not forget to use CSS
