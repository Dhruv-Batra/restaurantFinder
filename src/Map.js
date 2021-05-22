import BingMapsReact from "bingmaps-react";
import { ReactBingmaps } from 'react-bingmaps-plus';
const MAP_KEY = process.env.REACT_APP_MAP_ACCESS_TOKEN;

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
            />
        </div>
    )
}
