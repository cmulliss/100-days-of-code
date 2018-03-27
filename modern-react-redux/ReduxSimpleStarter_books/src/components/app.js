import React, { Component } from "react";
import BookList from "../containers/container_book-list";
import BookDetail from "../containers/container_book-detail";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
