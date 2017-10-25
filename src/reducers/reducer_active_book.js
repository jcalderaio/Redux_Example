// All reducers get the current state and action as args
// State argument is not application state, only the state this reducer responsible for. The same state keeps flowing back into this reducer (ex. if start at state +=1, starts at 1)
export default function (state = null, action) {
  // If the state comes in as undefined (as it will on initial load), set it to null
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
