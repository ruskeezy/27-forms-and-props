'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      results: '',
    };
  }

  render() {
    return()
  }
}

class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return()
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: null,
      error: null,
    };
  }

  render() {
    return()
  }
}