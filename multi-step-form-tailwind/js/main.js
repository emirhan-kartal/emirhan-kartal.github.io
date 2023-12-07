const sub_plans = {
    arcade: { name: "Arcade", price: { monthly: "9", yearly: "90" } },
    advanced: { name: "Advanced", price: { monthly: "12", yearly: "120" } },
    pro: { name: "Pro", price: { monthly: "15", yearly: "150" } },
};
const extra_services = {
    "online-service": {
        name: "Online Service",
        price: { monthly: "1", yearly: "10" },
    },
    "larger-storage": {
        name: "Larger storage",
        price: { monthly: "1", yearly: "10" },
    },
    "customizable-profile": {
        name: "Customizable profile",
        price: { monthly: "1", yearly: "10" },
    },
};

const data_to_send = { name: "", email: "", phone_number: "" };
const bill_to_pay = { plan: "", duration: "monthly", extras: [] };

const sub_plan_dom = document.getElementById("sub-plan");
const sub_plan_price_dom = document.getElementById("sub-plan-price");

const extra_services_dom = document.getElementById("extra-services");
let service_containers = document.querySelectorAll(".service-container");

const total_pay_dom = document.getElementById("total-pay");

const monthly_or_yearly = document.getElementById("m-or-y");

function getDatas(order) {
    const inputs = document.querySelectorAll(".t" + order + " input");
    if (order === 0) {
        inputs.forEach((temp) => {
            data_to_send[temp.id] = temp.value;
        });
    }
    if (order === 1) {
        inputs.forEach((temp) => {
            if (temp.checked && temp.type === "radio") {
                bill_to_pay.plan = temp.id;
                console.log(temp.id);
                if (monthly_or_yearly.checked) {
                    bill_to_pay.duration = "yearly";
                }
            }
        });
    }
    if (order === 2) {
        inputs.forEach((temp) => {
            if (temp.checked === true) {
                if (bill_to_pay.extras.includes(temp.id) === false) {
                    bill_to_pay.extras.push(temp.id);
                }
            } else {
                console.log("2")
                if (bill_to_pay.extras.includes(temp.id) === true) {
                    console.log(""+bill_to_pay.extras.indexOf(temp.id))
                    
                    bill_to_pay.extras.splice(
                        bill_to_pay.extras.indexOf(temp.id),
                        1
                    );

                }
            }
            console.log(bill_to_pay.extras);

        });
        finalPage();
    }
    if (order === 3) {
        next_step_button.classList.add("hidden");
        go_back_button.classList.add("hidden");
    }
}

function finalPage() {
    const sub_plan = sub_plans[bill_to_pay.plan];
    const sub_plan_name = sub_plan.name;
    const sub_plan_price = sub_plan.price[bill_to_pay.duration];

    let total_pay = parseInt([sub_plan_price][0]);

    sub_plan_dom.textContent =
        sub_plan_name + " (" + bill_to_pay.duration + ")";
    sub_plan_price_dom.textContent =
        sub_plan_price + "$/" + bill_to_pay.duration.substring(0, 1);

    let service_container_length =
        service_containers === null ? 0 : service_containers.length;
        for (let temp of service_containers) {
            temp.remove();
        }
        bill_to_pay.extras.forEach((element) => {

            const extra_services_to_add = generateExtraServiceDom(
                element,
                bill_to_pay.duration
            ); 
            extra_services_dom.appendChild(extra_services_to_add);
            total_pay += parseInt(
                extra_services[element].price[bill_to_pay.duration]
            );
            console.log(parseInt(
                extra_services[element].price[bill_to_pay.duration]
            )+"=önemli");
        });
    
    total_pay_dom.textContent =
        total_pay + "$/" + bill_to_pay.duration.substring(0, 1);
    service_containers = document.querySelectorAll(".service-container");
}

function generateExtraServiceDom(service_id, duration) {
    const service_data = extra_services[service_id];

    const service_container = document.createElement("div");
    service_container.classList.add("service-container");

    const service_name_dom = document.createElement("div");
    service_name_dom.classList.add("service-name");

    const service_price_dom = document.createElement("div");
    service_price_dom.classList.add("service-price");

    const service_name = service_data.name;
    const service_price =
        service_data.price[duration] + "$/" + duration.substring(0, 1);

    service_name_dom.textContent = service_name;

    service_price_dom.textContent = service_price;

    service_container.appendChild(service_name_dom);
    service_container.appendChild(service_price_dom);

    return service_container;
}

function changeSubDuration() {
    const priceTags = document.querySelectorAll(".sub-price");
    priceTags.forEach((temp) => {
        const dom_text = temp.textContent;
        let sub_price = dom_text.substring(0, dom_text.indexOf("$"));
        if (monthly_or_yearly.checked) {
            temp.textContent = parseInt(sub_price) * 10 + "$/yr";
            temp.classList.remove("price-tag-monthly");
            temp.classList.add("price-tag-yearly");
        } else {
            temp.textContent = parseInt(sub_price) / 10 + "$/mo";
            temp.classList.remove("price-tag-yearly");
            temp.classList.add("price-tag-monthly");
        }
    });
    const extraServicePriceTags = document.querySelectorAll(
        ".extras .text-blue-400"
    );
    extraServicePriceTags.forEach((temp) => {
        const dom_text = temp.textContent;
        let extra_price = dom_text.substring(1, dom_text.indexOf("$"));
        if (monthly_or_yearly.checked) {
            temp.textContent = "+" + parseInt(extra_price) * 10 + "$/yr";
        } else {
            temp.textContent = "+" + parseInt(extra_price) / 10 + "$/mo";
        }
    });
}
