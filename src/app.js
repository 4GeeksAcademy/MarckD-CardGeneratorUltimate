/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let numbersCard = ["As", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Rey", "Reina", "Jota"];

  let stickCard = [
    { Icon: "♦", color: "red" },
    { Icon: "♥", color: "red" },
    { Icon: "♣", color: "black" },
    { Icon: "♠", color: "black" }
  ];

  document.querySelector(".value").innerHTML =
    numbersCard[Math.floor(Math.random() * numbersCard.length)];

  let stickCard2 = stickCard[Math.floor(Math.random() * stickCard.length)];
  document.querySelectorAll(".palo").forEach(element => {
    element.innerHTML = stickCard2.Icon;
    element.style.color = stickCard2.color;
  });
};
