const buttonSub = document.querySelector(".buttonSub");
const textField = document.querySelector("#email");

buttonSub.addEventListener("click", function () {

    let content = textField.value;

    if (content.length !== 0 && !content.startsWith('@') && content.includes(".") && content.includes("@")) {
        window.location.href = "/success.html?email=" + content;
    } else {
        textField.classList.add("buttonError");
    }
});

textField.addEventListener("click", function () {
    if (textField.classList.contains("buttonError")) {
        textField.classList.remove("buttonError")
    }
});