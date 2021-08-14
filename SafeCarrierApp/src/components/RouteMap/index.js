import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';



const RouteMap = ({ origin, destination }) => {

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };
  

  const GOOGLE_MAPS_APIKEY = 'AIzaSyDANvBmYEYZxFyGAwRXuHLYvdo4HIkBhyM';


  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      // showsUserLocation={true}
      initialRegion={{
        // latitude: 0.3451,
        // longitude: 32.5216,
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
      >
      <MapViewDirections
        lineDashPattern={[0]}
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
        // coordinate={origin}
        coordinate={{
          latitude: origin.details.geometry.location.lat,
          longitude: origin.details.geometry.location.lng,
        }}
        title={'Origin'}
      />
      <Marker
        // coordinate={destination}
        coordinate = {{
          latitude: destination.details.geometry.location.lat,
          longitude: destination.details.geometry.location.lng,
        }}
        title={"Destination"}
      />
    </MapView>
  );
};

export default RouteMap;
