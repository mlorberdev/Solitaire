!(function () {
  const play = document.getElementById("playArea");
  const rank = "A234567891JQK";
  const suit = "♥♣♦♠";
  const deck = [];
  let n = 0; // generic iterator

  // CREATE DECK AND SHUFFLE IT
  for (let i = 0; i < 4; i++) for (let j = 0; j < 13; j++) deck.push(`${rank.charAt(j)}${suit.charAt(i)}`);
  deck.sort(() => Math.random() - 0.5);
  console.log(deck);

  // LAY OUT GAME
  for (let i = 0; i < 7; i++) {
    let ele = document.createElement("div");
    ele.classList.add("card");
    ele.innerHTML = `<div><div class="rank">${deck[n].charAt(0) === "1" ? "10" : deck[n].charAt(0)}</div><div class="suit">${deck[n].charAt(1)}</div></div>`;
    play.appendChild(ele);
    n++;
  }
})();