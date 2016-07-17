import { Greet } from "./greet";
const elt = document.getElementById("greeting");
elt.innerText = new Greet().sayHello("TypeScript");
console.log("${workspaceRoot}");