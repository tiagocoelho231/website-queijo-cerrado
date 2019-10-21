import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const pontoCentralizacao = { 
  lat: 47.444, 
  lng: -122.176
}

class Mapa_Teste extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={pontoCentralizacao}
          >
          <Marker 
            position={{ lat: 48.00, lng: -122.00}} 
            name={'Marcador 1'}
            icon={Marker.icon}
          />
          <Marker 
            position={{ lat: 47.00, lng: -122.00}} 
            name={'Marcador 2'}
          />
          <Marker 
            position={{ lat: 46.00, lng: -122.00}} 
            name={'Marcador 3'}
          />
          
        </Map>   
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBh-EzKBwTiGYVRoDQqXQGBNgf6q4HD9Pk'
})(Mapa_Teste);