import React, { Component } from "react";
import Header from "./Header";
import Hero from "./Hero";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    const toggleMenu = this.toggleMenu.bind(this);
    const { isMenuOpen } = this.state;
    return (
      <div>
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Hero />
      </div>
    );
  }
}

export default App;
