export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action (an object with a type property)
  return {
    type: 'BOOK_SELECTED', // an action always contains a type (always UPPERCASE, usually a string, separated by '_' and has keywords)
    payload: book // an action sometimes contains a payload
  };
}
