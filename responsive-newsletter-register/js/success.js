const para = document.querySelector(".container p");
let valueOfPara = para.textContent;

const urlParams = new URLSearchParams(window.location.search);

para.textContent = valueOfPara.replace('{email}', urlParams.get('email'));
console.log(valueOfPara)