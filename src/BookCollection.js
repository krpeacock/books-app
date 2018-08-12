import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Book from "./Book";
import "babel-polyfill";

import { fetchBooks } from "./helpers";

export default class BookCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [], hasMore: true };
    this.bookGenerator = fetchBooks();
  }

  mapBooks() {
    if (this.state.books) {
      return this.state.books.map(book => {
        return <Book book={book} />;
      });
    }
    return null;
  }

  async loadFunc() {
    let nextBooks = await this.bookGenerator.next();
    this.setState({
      books: [...this.state.books, ...nextBooks.value],
      hasMore: !nextBooks.done
    });
  }

  render() {
    const { hasMore } = this.state;
    const loadFunc = this.loadFunc.bind(this);
    const mapBooks = this.mapBooks.bind(this);
    return (
      <div className="book-collection">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={hasMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {mapBooks()}
        </InfiniteScroll>
      </div>
    );
  }
}
