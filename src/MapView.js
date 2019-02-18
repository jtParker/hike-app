import React, {Component} from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { Marker } from 'react-mapbox-gl';
import { ZoomControl } from "react-mapbox-gl";
import { Layer } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoianBhcmtlcmRldiIsImEiOiJjanF2dWo1Y28wejd5M3htaGg5aXdvbG45In0.67gA97wJ4xIWV9Mg5rYTxg",
  scrollZoom: false
});

class MapView extends Component {

  render() {

    return (
      <div className="map-container">
        <Map
          style="mapbox://styles/mapbox/streets-v8"
          containerStyle={{ height: "600px", width: "100%"}}
          center={[ -111.876183, 40.758701 ]}
          zoom={[9]}
          >
            <Layer type="symbol" >
              
            </Layer>
            <ZoomControl />
        </Map>
      </div>
    )
  }

}

export default MapView;
