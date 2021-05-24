import * as React from 'react';
import ReactMapGL, {Popup, Marker} from 'react-map-gl';
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";

export default function App({cords, itemList}) {
  const [viewport, setViewport] = React.useState({
    longitude: parseInt(cords[0]),
    latitude: parseInt(cords[1]),
    zoom: 8
  });

  console.log(itemList);

  const markers = itemList.map((item) => (
      <Marker longitude={item.geometry.location.lng} latitude={item.geometry.location.lat} >
        <img src="https://img.icons8.com/color/48/000000/map-pin.png" onClick={() => togglePopup(item)}/>
      </Marker>
  ), [itemList]);

  useEffect(() => {
    setViewport({
        longitude: parseInt(cords[0])-0.5,
        latitude: parseInt(cords[1])+0.03,
        zoom: 7/*13*/,
        width:"35vw",
        height:"75vh"
      });
  },[cords])

  const [showPopup, togglePopup] = React.useState(false);


  return (
    <div>   
            <ReactMapGL {...viewport} onViewportChange={setViewport}>
            {
                (showPopup && (<Popup 
                latitude= {showPopup.geometry.location.lat-0.001}
                longitude={showPopup.geometry.location.lng+0.00018}
                closeButton={true}
                closeOnClick={false}
                onClose={() => togglePopup(false)}
                anchor="top" >
                <div>
                    <p>{showPopup['name']}</p>
                </div>
                </Popup>)
                )}
            {markers}
            </ReactMapGL>
    </div>
  );

  /*
    <Marker longitude={parseInt(cords[0])-0.5} latitude={parseInt(cords[1])+0.03} >
        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
    </Marker>
  */
}