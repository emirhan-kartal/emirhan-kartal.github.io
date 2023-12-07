let order = 0;
const go_back_button = document.getElementById("go-back");
const menu_bar = document.getElementById("menu-bar");
const next_step_button = document.getElementById("next-step");

function nextPage(bool) {
    if (bool === false) {
        return;
    }
    checkButtonProperties(order + 1);
    menu_bar.children[order].children[0].classList.remove("selected");
    if (order+1 !== 4)
        menu_bar.children[order + 1].children[0].classList.add("selected");
    hideExcept(order + 1);
    getDatas(order);
    order++;
}
function previousPage() {
    checkButtonProperties(order - 1);

    menu_bar.children[order].children[0].classList.remove("selected");
    menu_bar.children[order - 1].children[0].classList.add("selected");
    hideExcept(order - 1);
    order--;
}
function checkButtonProperties(x) {
    if (x !== 0) {
        go_back_button.classList.remove("hidden");
    } else {
        go_back_button.classList.add("hidden");
    }
    if (x === 3) {
        next_step_button.textContent = "Confirm";
    } else {
        next_step_button.textContent = "Next Step";
    }
}

function hideExcept(order) {
    for (let i = 0; i < 5; i++) {
        const selectedClass = document.querySelector(".t" + i);
        if (i === order) {
            //currently_selected_class
            selectedClass.classList.remove("hidden");
            continue;
        } //hide all other classes
        selectedClass.classList.add("hidden");
    }
}
