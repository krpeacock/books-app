import App from "./src/App";

const rootDiv = document.getElementById("root");
let content = App.render(); //?
rootDiv.innerHTML = "";
rootDiv.appendChild(content);
