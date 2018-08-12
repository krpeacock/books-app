import books from "../books.json";

export const bookGenerator = () => {
  function* fetchBooks(start = 0, end = books.length, step = 10) {
    let n = 0; //?
    for (let i = start; i <= end; i += step) {
      yield books.slice(i, i + step);
    }
    return n;
  }
  return fetchBooks();
};
