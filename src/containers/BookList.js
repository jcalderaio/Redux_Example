// BookList started out as a component, but we upgraded to container (smart-component) when we decided it needed access to the state of our application
// Container (smart-component) is just a component that has direct access to the state produced by Redux. Containters connect the View to the State. In general, the most parent component that care about a particular piece of state to be a container

import React, { Component } from 'react';
import { connect } from 'react-redux'; // Glue from React to Redux. This is what connects the state (reducers) to props
import * as actions from '../actions/index';

class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.props.books.map(book => (
          <li
            onClick={() => this.props.selectBook(book)}
            key={book.title}
            className="list-group-item"
          >
            {book.title}
          </li>
        ))}
      </ul>
    );
  }
}

// This is the glue between react and redux. It returns an object that becomes available in this component (BookList)
function mapStateToProps(state) {
  // Whatever is returned here will show up as props in BookList
  // If the state ever changes, this container will instantly re-render
  return {
    books: state.books
  };
}

// Takes a function [mapStateToProps] and a Component [BookList] and produces a container
// This container is a component that's aware of the state in redux
export default connect(mapStateToProps, actions)(BookList);
