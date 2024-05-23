const jsInput = document.querySelector("#js-input");

document.querySelector("#js-button").addEventListener("click", checkWord);

function checkWord() {
  const word = jsInput.value;
  const reverseWord = word.split("").reverse().join("");
  const state = word === reverseWord ;
  

  if (state) {
     alert("its a pallindrome");
  } else {
      alert("sorry")
  }
  jsInput.value = "";
}