/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  let randomChoise = () => Math.floor(Math.random() * 6);

  const generateExcuse = () => {
    let who = [
      "My dog ",
      "My cat ",
      "My Grandma ",
      "My uncle ",
      "My girlfriend ",
      "My horse "
    ];
    let action = [
      "ate ",
      "peed ",
      "jumped over ",
      "took ",
      "squeezed ",
      "sat over "
    ];
    let what = [
      "a blowfish ",
      "the keys ",
      "the car ",
      "the rubber duck ",
      "the cactus ",
      "a bottle "
    ];
    let when = [
      "before the class.",
      "right on time.",
      "when I arrived.",
      "during my lunch.",
      "while I was praying.",
      "during the night."
    ];

    return (
      who[randomChoise()] +
      action[randomChoise()] +
      what[randomChoise()] +
      when[randomChoise()]
    );
  };

  document.querySelector("#excuse").innerHTML = generateExcuse();
};
