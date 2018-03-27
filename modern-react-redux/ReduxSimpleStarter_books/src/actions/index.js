// create single action creator: selectBook
// only argument is book, an object with a title
// needs to run through all our redcuers, so
// need to connect it to Redux

//selectBook is an ActionCreator, in needs to return
// an object with a type property
export function selectBook(book) {
  //console.log('A book has been selected', book.title)
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
