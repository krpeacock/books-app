import React from "react";
import InfiniteScroll from "react-infinite-scroll";
import Book from "./Book";

import { bookGenerator } from "./helpers";

export default class BookCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  mapBooks() {
    return this.state.books.map(book => {
      return <Book book={book} />;
    });
  }

  loadFunc() {
    let nextBooks = bookGenerator.next();
    const books = this.setState({
      books: this.state.books.join(nextbooks.value),
      hasMore: nextBooks.done
    });
  }

  render() {
    const { books, hasMore } = this.state;
    return this.mapBooks();
  }
}
