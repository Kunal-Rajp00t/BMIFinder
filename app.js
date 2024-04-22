const weight = document.querySelector("#input-weight");
const height = document.querySelector("#input-height");
const h_unit = document.querySelector("#hunit");
const w_unit = document.querySelector("#wunit");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");

let result = document.querySelector(".display");
let displayMsg = document.querySelector("#ex-msg");

reset.addEventListener("click", () => {
    result.classList.add("hidden");
    weight.value = '';
    height.value = '';

    h_unit.value = 'cm';
    w_unit.value = 'kg';

});
submit.addEventListener("click", () => {

    let heightVal, weightVal; let bmi;
    result.classList.remove("hidden");
    result.innerHTML = '<span>Invalid/Empty Input</span>';
    let wt = Number(weight.value);
    let ht = Number(height.value);
    if (isNaN(wt) || isNaN(ht)) { displayMsg.innerText = "Please Enter Correct Information."; }
    else {
        //height value
        if (h_unit.value == 'cm') {
            heightVal = height.value / 100.0;
        } else if (h_unit.value == 'in') {
            heightVal = height.value * 0.0254;
        } else if (h_unit.value == 'ft') {
            heightVal = height.value * 0.3048;
        } else {
            heightVal = height.value;
        }
        //weight value
        if (w_unit.value == 'pound') {
            weightVal = weight.value * 0.453592;
        } else if (w_unit.value == 'gm') {
            weightVal = weight.value * 0.001;
        } else if (w_unit.value == 'st') {
            weightVal = weight.value * 6.35029;
        } else {
            weightVal = weight.value;
        }
        bmi = weightVal / (heightVal * heightVal);
        if (isNaN(bmi)) bmi = "InValid";
        bmi = bmi.toFixed(2);
        result.innerHTML = `<span>Your BMI is: </span> ${bmi}`;

        if (result.innerText === "Infinity") {
            result.innerHTML = '<span>Invalid/Empty Input</span>';
        }

    }
});
