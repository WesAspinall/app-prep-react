import React, { Component } from 'react';
import axios from 'axios';

import { buildSearchURI } from '../../utils';

import ResultsGrid from './ResultsGrid';

class SearchResults extends Component {

  state = {
    repos: []
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { language, stars, searchInProgress } = this.props;

    if (prevState.repos !== this.state.repos) {
      this.props.resetSearch();
      return;
    }

    //A search in progress
    if (searchInProgress) {
      // We want to build the URI to send out
      const encodedURI = buildSearchURI({ language, stars});
      const githubResponse = await axios.get(encodedURI);
      const repos = githubResponse.data.items.slice(0, 15);
      // We want to get a valid response from the API
      // Maybe we do something else, like parsing something
      // Set the state of this component to populate  'repos'

      console.log(repos);
      this.setState({ repos });

    }

  }

  render() {
    return  <ResultsGrid repos={this.state.repos}/>    
  }
}


export default SearchResults;