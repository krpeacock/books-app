import { Component } from "./helpers";

const App = new Component({
  type: "div",
  attributes: { id: "App" },
  children: [{ type: "h1", children: ["Hello World"] }]
});

export default App;
