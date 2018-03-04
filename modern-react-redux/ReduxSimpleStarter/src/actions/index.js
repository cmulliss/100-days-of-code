// create single action creator: selectBook
// only argument is book, an object with a title
// needs to run through all our redcuers, so
// need to connect it to Redux

export function selectBook(book) {
    console.log('A book has been selected', book.title)
}