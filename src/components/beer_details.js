import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeer } from '../actions';
import ReactModal from 'react-modal';
import Loader from './loader';


class BeerDetails extends Component {

  componentDidMount() {
    const { id } = this.props;
    const beer = this.props.beers[id];
    if (!beer) this.props.fetchBeer(id);
  }

  renderFoodPairing(beer) {
    return _.map(beer.food_pairing, food => {
      return (
        <li key={ beer.food_pairing.indexOf(food)} >
          {food}
        </li>
      );
    })
  }

  renderBeerDetails(beer) {
    if (!beer) {
      console.log(this.props.beerError);
      if (this.props.beerError.error) {
        return <h1>There is no such beer</h1>
      }
      return Loader
    }
    return (
      <div className='details'>
        <div className='details-image details-section'>
          <img src={beer.image_url} alt={`image of ${beer.name}`} />
        </div>
        <div className='details-description details-section'>
          <h2 className='details-description-title'> {beer.name} </h2>
          <h3 className='details-description-tagline'> {beer.tagline} </h3>
          <span className='bold-title'> IBU: </span><span> {beer.ibu} </span>
          <span className='bold-title'> ABV: </span><span> {beer.abv} </span>
          <span className='bold-title'> EBC: </span><span> {beer.ebc} </span>
          <p> {beer.description}</p>
          <h3 className='bold-title'>Best served with:</h3>
          <ul className='details-description-food-list'>
            {this.renderFoodPairing(beer)}
          </ul>
        </div>
        <div className='details-suggestions details-section'>

        </div>
      </div>
    )
  }

  render() {
    const { id } = this.props;
    const beer = this.props.beers[id];

    return (
      <ReactModal
        isOpen = { true }
        appElement={document.querySelector('#root') }
        onRequestClose={() => this.props.history.push('/')}
        className='modal'
        overlayClassName='overlay'
      >
        { this.renderBeerDetails(beer) }
      </ReactModal>
    );
  }
}

function mapStateToProps({ beers, beerError }) {
  return { beers, beerError }
}

export default connect(mapStateToProps, { fetchBeer })(BeerDetails);
