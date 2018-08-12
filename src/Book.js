import React, { Component, Fragment } from "react";
import imageSrc from "../static/images/window-close.svg";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.closeBook();
      //Do whatever when esc is pressed
    }
  }

  expandBook() {
    this.setState({ expanded: true }, () => {
      document.getElementById("close").focus();
      document.addEventListener("keydown", this.escFunction.bind(this), false);
    });
  }
  closeBook() {
    this.setState({ expanded: false }, () => {
      document.removeEventListener(
        "keydown",
        this.escFunction.bind(this),
        false
      );
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction.bind(this), false);
  }

  handleKeyPress(e) {
    if (e.key === "Enter" || e.key === " ") {
      if (e.target.id === "close") {
        this.closeBook();
      }
      if (e.target.className === "book-content") {
        this.expandBook();
      }
    }
  }

  render() {
    const { book } = this.props;
    const { expanded } = this.state;
    const expandBook = this.expandBook.bind(this);
    const closeBook = this.closeBook.bind(this);
    const handleKeyPress = this.handleKeyPress.bind(this);
    return (
      <div className={`book-wrapper ${expanded ? "expanded" : ""}`}>
        {expanded ? (
          <a
            id="close"
            onClick={closeBook}
            tabIndex={1}
            onKeyPress={handleKeyPress}
          >
            <img src={imageSrc} alt="close window" />
          </a>
        ) : null}
        <div
          className="book-content"
          onClick={expandBook}
          onKeyPress={handleKeyPress}
          tabIndex={0}
        >
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
          <img src={`/static/${book.imageLink}`} />
          {expanded ? (
            <Fragment>
              <h3>Book Info</h3>
              <p>{`${book.title} was written by ${book.author} in ${
                book.year
              }. It was initially released in ${
                book.language
              } and was published for distribution in ${book.country}.`}</p>
              <br />
              <p>Page count: {book.pages}</p>
              <p>
                Read more on <a href={book.link}>Wikipedia</a>
              </p>
            </Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}
