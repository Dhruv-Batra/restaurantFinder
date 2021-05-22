import BingMapsReact from "bingmaps-react";
const MAP_KEY = process.env.REACT_APP_MAP_ACCESS_TOKEN;

var map = new BingMapsReact.Map('#myMap', {
    credentials: {MAP_KEY},
    center: new BingMapsReact.Location(47.6149, -122.1941)
});

var center = map.getCenter();

//Create custom Pushpin
var pin = new BingMapsReact.Pushpin(center, {
    title: 'Microsoft',
    subTitle: 'City Center',
    text: '1'
});

//Add the pushpin to the map
map.entities.push(pin);


export default function Maps(){

    return(
        <div>
            <BingMapsReact
                bingMapsKey={MAP_KEY}
                height="500px"
                mapOptions={{
                navigationBarMode: "square"
                }}
                width="450px"
                viewOptions={{
                    center: { latitude: 42.360081, longitude: -71.058884 },
                }}
                pushPins = {
                    [
                      {
                        title: 'Microsoft',
                        subTitle: 'City Center',
                        text: '1',
                        location:'[42.360081, -71.058884]'
                      }
                    ]
                  }
            />
            <div id="myMap" style="position:relative;width:600px;height:400px;"></div>
        </div>
    )
}
