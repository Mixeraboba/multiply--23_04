import { multiply } from "./multiply.js";

const nodeInputOne = document.querySelector(".inputOne");
const nodeInputTwo = document.querySelector(".inputTwo");
const nodeBtn = document.querySelector(".btn");



nodeBtn.addEventListener("click", ()=>{
    document.getElementById("result").innerHTML = multiply(nodeInputOne.value, nodeInputTwo.value);
    console.log(multiply(nodeInputOne.value, nodeInputTwo.value));
    if (multiply(nodeInputOne.value, nodeInputTwo.value) == "ПОСХАААЛКООООООООООООООООООООООООООООOOO") {
        document.getElementById("dooo").src = "https://i.pinimg.com/1200x/c0/db/a8/c0dba857ad7be753f6d765b48e4bfb92.jpg";
    }
    else {
        document.getElementById("dooo").src = "https://i.pinimg.com/1200x/ee/c2/b6/eec2b6e5177bf7b19695aa2a0c7e7383.jpg";
    }
});