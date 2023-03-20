let password = "";
const allCharacterNumber = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "_",
  "+",
  ".",
  "/",
  ",",
  "|",
  ";",
  ":",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const uppercaseText = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseText = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numberText = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialText = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "_",
  "+",
  ".",
  "/",
  ",",
  "|",
  ";",
  ":",
];

// modify for password
const uppercase = document.querySelector("#for_uppercase");
const lowercase = document.querySelector("#for_lowercase");
const number = document.querySelector("#for_number");
const specialCaracter = document.querySelector("#for_specialCaracter");
//

const changeValue = document.querySelector("#modify_length");
const showChangedValue = document.querySelector("#modify_box");
const outputPassword = document.querySelector("#input_box_pass");
const genaratePass = document.querySelector("#genarate_password");
// copy my password
const copyText = document.querySelector("#copy_password");

changeValue.addEventListener("change", function () {
  showChangedValue.value = changeValue.value;
});
genaratePass.addEventListener("click", function () {
  const inputRangeValue = changeValue.value;

  // for everyone
  if (
    !uppercase.checked &&
    !lowercase.checked &&
    !number.checked &&
    !specialCaracter.checked
  ) {
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(
        Math.random() * allCharacterNumber.length
      );
      password += allCharacterNumber[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  //only for uppercase
  if (
    uppercase.checked &&
    !lowercase.checked &&
    !number.checked &&
    !specialCaracter.checked
  ) {
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * uppercaseText.length);
      password += uppercaseText[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for lowercase
  if (
    !uppercase.checked &&
    lowercase.checked &&
    !number.checked &&
    !specialCaracter.checked
  ) {
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * lowercaseText.length);
      password += lowercaseText[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for number
  if (
    !uppercase.checked &&
    !lowercase.checked &&
    number.checked &&
    !specialCaracter.checked
  ) {
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * numberText.length);
      password += numberText[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for special character
  if (
    !uppercase.checked &&
    !lowercase.checked &&
    !number.checked &&
    specialCaracter.checked
  ) {
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * specialText.length);
      password += specialText[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for uppercase and lowercase
  if (
    uppercase.checked &&
    lowercase.checked &&
    !number.checked &&
    !specialCaracter.checked
  ) {
    const upperPlusLower = [...uppercaseText, ...lowercaseText];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * upperPlusLower.length);
      password += upperPlusLower[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for uppercase and number
  if (
    uppercase.checked &&
    !lowercase.checked &&
    number.checked &&
    !specialCaracter.checked
  ) {
    const upperPlusNum = [...uppercaseText, ...numberText];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * upperPlusNum.length);
      password += upperPlusNum[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for uppercase and special character
  if (
    uppercase.checked &&
    !lowercase.checked &&
    !number.checked &&
    specialCaracter.checked
  ) {
    const upperPlusSpecial = [...uppercaseText, ...specialText];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * upperPlusSpecial.length);
      password += upperPlusSpecial[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for lowercase and number
  if (
    !uppercase.checked &&
    lowercase.checked &&
    number.checked &&
    !specialCaracter.checked
  ) {
    const lowerPlusNumber = [...lowercaseText, ...numberText];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * lowerPlusNumber.length);
      password += lowerPlusNumber[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for lowercase and special
  if (
    !uppercase.checked &&
    lowercase.checked &&
    !number.checked &&
    specialCaracter.checked
  ) {
    const lowerPlusSpecial = [...lowercaseText, ...specialText];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * lowerPlusSpecial.length);
      password += lowerPlusSpecial[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for number and special
  if (
    !uppercase.checked &&
    !lowercase.checked &&
    number.checked &&
    specialCaracter.checked
  ) {
    const numberPlusSpecial = [...numberText, ...specialText];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * numberPlusSpecial.length);
      password += numberPlusSpecial[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for uppercase lowercase & number
  if (
    uppercase.checked &&
    lowercase.checked &&
    number.checked &&
    !specialCaracter.checked
  ) {
    const upperLowerNumber = [
      ...numberText,
      ...lowercaseText,
      ...uppercaseText,
    ];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * upperLowerNumber.length);
      password += upperLowerNumber[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for uppercase lowercase & special
  if (
    uppercase.checked &&
    lowercase.checked &&
    !number.checked &&
    specialCaracter.checked
  ) {
    const specialLowerUpper = [
      ...specialText,
      ...lowercaseText,
      ...uppercaseText,
    ];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * specialLowerUpper.length);
      password += specialLowerUpper[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for uppercase number & special
  if (
    uppercase.checked &&
    !lowercase.checked &&
    number.checked &&
    specialCaracter.checked
  ) {
    const specialNumUpper = [...specialText, ...numberText, ...uppercaseText];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * specialNumUpper.length);
      password += specialNumUpper[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // only for lowercase number special
  if (
    !uppercase.checked &&
    lowercase.checked &&
    number.checked &&
    specialCaracter.checked
  ) {
    const specialNumLower = [...specialText, ...numberText, ...lowercaseText];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * specialNumLower.length);
      password += specialNumLower[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
  // for all
  if (
    uppercase.checked &&
    lowercase.checked &&
    number.checked &&
    specialCaracter.checked
  ) {
    const forall = [
      ...specialText,
      ...numberText,
      ...lowercaseText,
      ...uppercaseText,
    ];
    for (let i = 0; i < inputRangeValue; i++) {
      const randomNumber = Math.floor(Math.random() * forall.length);
      password += forall[randomNumber];
    }
    outputPassword.value = password;
    password = "";
  }
});
copyText.onclick = function () {
  outputPassword.select();
  document.execCommand("copy");
};
