const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arr1 = expr.match(/\d{10}|\*{10}/g);
  const arr2 = arr1.map((i) => {
    return i.match(/\d{2}/g)
      ? i
          .match(/\d{2}/g)
          .map((j) => {
            return j === "10" ? "." : j === "11" ? "-" : null;
          })
          .join("")
      : " ";
  });
  const morseArr = arr2
    .map((i) => {
      if (i === " ") {
        return i;
      } else {
        for (const key in MORSE_TABLE) {
          if (key === i) {
            return MORSE_TABLE[key];
          }
        }
      }
    })
    .join("");

  return morseArr;
}

module.exports = {
  decode,
};
