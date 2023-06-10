//on click the button, check all lbs with for each and if it is empty get parent element
//after getting parent element use querySelector method to get text-input class of it
//then make it red also make it appear a text under it "field is empty" with red color
//make it disappear when the button is clicked once again
//let


const button = document.querySelector(".button");
const textInputs = document.querySelectorAll(".text-input");
button.addEventListener("click", function () {
    const dmy = [];

    const lbsList = textInputs.forEach(temp => {
        if (temp.value === "") {
            const parentElementOf = temp.parentElement;
            parentElementOf.querySelector(".lbl").style = "color:red;";
            temp.style = "border:1px solid red;";
            const requiredLabel = parentElementOf.querySelector(".required");
            requiredLabel.style = "visibility:visible;";
            return;
        } else {
            dmy.push(temp.value);
        }
    });
    console.log("test");
    let dateNow = new Date();

    let dayDif = dateNow.getDate() - dmy[0],
        monthDif = dateNow.getMonth() - dmy[1] + 1,
        yearDif = dateNow.getFullYear() - dmy[2];

    if (monthDif < 0) {
        yearDif--;
        monthDif += 12;
        console.log(yearDif)
        console.log(monthDif)

    }
    if (dayDif < 0) {
        monthDif -= 1;
        dayDif += 30;
    }
    console.log(document.querySelector("#dayResult").textContent);
    document.querySelector("#dayResult").textContent = dayDif;
    document.querySelector("#monthResult").textContent = monthDif;
    document.querySelector("#yearResult").textContent = yearDif;




});

textInputs.forEach(temp => {
    temp.addEventListener("click", function () {
        if (temp.style.border === "1px solid red") {
            const parentElementOf = temp.parentElement;
            temp.style.border = "1px solid #e6e4e4";
            parentElementOf.querySelector(".required").style = "visibility:hidden";
            parentElementOf.querySelector(".lbl").style = "color:gray;";

        }

    })
})

