
const form_one_inputs = document.querySelectorAll(".t0 input");

const form_two_inputs = document.querySelectorAll(".t1 input");
const form_two_labels = document.querySelectorAll(".t2 label");


form_one_inputs.forEach((temp) => {
    temp.addEventListener("focus", function () {
        if (temp.style.border === "1px solid red") {
            temp.style.removeProperty("border")

        }
    });
})

form_two_labels.forEach((temp) => {
    temp.addEventListener("click", function () {
        form_two_labels.forEach(
            (temp2) =>
                temp2.style.border === "1px solid red" ? temp2.style.removeProperty("border") :
                    temp2)
    });

});

function validateForm() {
    let toReturn = true;
    if (order === 0) {
        form_one_inputs.forEach((temp) => {
            if (temp.value === "") {
                temp.style.border = "1px solid red";
                toReturn = false;
            }
        });
    }
    if (order === 1) {
        toReturn = false;
        form_two_inputs.forEach((temp) => {
            temp.checked ? toReturn = true : toReturn
        });

        if (!toReturn) { form_two_labels.forEach((temp) => temp.style.border = "1px solid red") }

    }
    if (order === 2) {
        toReturn = true;
    }
    return toReturn;
}