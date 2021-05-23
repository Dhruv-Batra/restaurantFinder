import * as React from "react";
import { TileLayer, Marker, Popup, MapContainer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
export default function Maps () {
    const L = require("leaflet");

    var redIcon = L.icon({
      iconUrl: '/leaf-red.png',
      shadowUrl: '/leaf-shadow.png',

      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "70vh" ,width: "70vh"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={redIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};