import { multiply } from "./multiply.js";

const nodeInputOne = document.querySelector(".inputOne");
const nodeInputTwo = document.querySelector(".inputTwo");
const nodeBtn = document.querySelector(".btn");



nodeBtn.addEventListener("click", ()=>{
    let result = multiply(nodeInputOne.value, nodeInputTwo.value);
    console.log(multiply(nodeInputOne.value, nodeInputTwo.value));
});