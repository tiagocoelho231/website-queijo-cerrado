import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { compose } from 'redux';
import { connect } from 'react-redux';

const apiKey = 'AIzaSyBh-EzKBwTiGYVRoDQqXQGBNgf6q4HD9Pk';

const pontoCentralizacao = {
  lat: -18.5872541,
  lng: -46.5147373
}

const mapStyles = {
  width: '70%',
  left: 'auto',
  right: 'auto',
};

class Mapa extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { markers } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={pontoCentralizacao}
        style={mapStyles}
      >
        {markers.map(({ name, latitude, longitude }) => (
          <Marker
            position={{ lat: latitude, lng: longitude }}
            name={name}
            icon={Marker.icon}
          />
        ))}
      </Map>
    );
  }
}

const mapStateToProps = ({ markers: { data: markers } }) => ({ markers });

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch.markers.fetch()
})

export default compose(
  GoogleApiWrapper({ apiKey }),
  connect(mapStateToProps, mapDispatchToProps)
)(Mapa)