import * as React from 'react';
import ReactMapGL, {Popup, Marker} from 'react-map-gl';
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function App({cords, itemList}) {
  const [viewport, setViewport] = React.useState({
    longitude: parseInt(cords[0]),
    latitude: parseInt(cords[1]),
    zoom: 8
  });

  //console.log(itemList);

  const markers = itemList.map((item) => (
    (item.opening_hours != undefined && item.opening_hours.open_now) ? (
      <Marker longitude={item.geometry.location.lng} latitude={item.geometry.location.lat} >
        <img style={{width:'5vh'}} src="https://lh3.googleusercontent.com/proxy/uOCeCeEBK_1zpXC5arL4n9mIp8eBtHI8xUUVR4Bq3hE5Z3T8uCf9OVNoK854Z8xk0DtXPQ0Ut9WaGcmXo6Oh2pLnnizm6zkHGXnB8CVxd6IwWmZTvo2iAv2LYgxur8xD" onClick={() => togglePopup(item)}/>
      </Marker>) : <div></div>
  ), [itemList]);

  useEffect(() => {
    setViewport({
        longitude: parseInt(cords[0]),//-0.5,
        latitude: parseInt(cords[1]),//+0.03,
        zoom: 7/*13*/,
      });
  },[cords])

  const [showPopup, togglePopup] = React.useState(false);

  function genDir(item){
    const url = new URL("https://www.google.com/maps/search/?api=1");
    url.searchParams.append("query", (item.geometry.location.lat+','+item.geometry.location.lng));
    url.searchParams.append("query_place_id", (item.place_id));
    //url.searchParams.append("origin", (parseInt(cords[1])+','+parseInt(cords[0])));
    window.open(url.href);
  }


  return (
    <div>   
            <ReactMapGL {...viewport} 
              onViewportChange={setViewport}
              width='35vw'
              height='32vw'
            >
            {
                (showPopup && (<Popup 
                latitude= {showPopup.geometry.location.lat-0.002}
                longitude={showPopup.geometry.location.lng+0.0005}
                
                closeButton={true}
                closeOnClick={false}
                onClose={() => togglePopup(false)}
                anchor="top" >
                <div>
                    <p>{showPopup['name']}</p>
                    <Button
                        variant="contained" 
                        color="primary"
                        onClick={()=>genDir(showPopup)}
                        >View Directions
                    </Button>
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