import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions';
import BeerDetails from './beer_details';
import Loader from './loader';
import _ from 'lodash';

class BeerList extends Component {
  handleLoadMore(page) {
    this.props.fetchBeers(page);
  }

  getBeerDetails(id) {
    this.props.history.push(`/${id}`);
  }

  renderBeerDetails() {
    const { id } = this.props.match.params;
    if (id) return <BeerDetails
      id = { id }
      history = { this.props.history }
    />
  }

  renderListEnd() {
    if (!this.props.infiniteScroll) {
      return (
        <div className='loader-container'>
          <div>
            <p> That's all folks!</p>
          </div>
        </div>
      )
    }
    return null;
  }

  renderBeers() {
    return _.map(this.props.beers, beer => {
      return (
        <div
          onClick={() => this.getBeerDetails(beer.id)}
          key={ beer.id }
          className='tile' >
          <div className='tile-image'>
            <img src={ beer.image_url } alt={`image of ${ beer.name }`} className='tile-thumbnail' />
          </div>
          <div className='tile-details'>
            <h3 className='tile-details-title'>{ beer.name }</h3>
            <span className='tile-details-tagline'> { beer.tagline } </span>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div >
        <InfiniteScroll
          loadMore = { this.handleLoadMore.bind(this) }
          threshold = { 250 }
          hasMore = { this.props.infiniteScroll }
          loader={ Loader }
          className='container'
          >
          {this.renderBeers()}
        </InfiniteScroll>
        {this.renderListEnd()}
        {this.renderBeerDetails()}
      </div>
    );
  }
}

function mapStateToProps({ beers, infiniteScroll }) {
  return { beers, infiniteScroll }
}

export default connect(mapStateToProps, { fetchBeers })(BeerList);