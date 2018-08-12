import React, { Component, Fragment } from "react";
import Header from "./Header";
import Hero from "./Hero";
import BookCollection from "./BookCollection";
import Footer from "./Footer";

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
      <Fragment>
        <div className="content-wrapper">
          <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          <Hero />
          <BookCollection />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
