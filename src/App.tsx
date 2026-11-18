import { useEffect } from "react";
import * as maplibregl from 'maplibre-gl';
import { Protocol } from 'pmtiles';
// import Map, {Marker} from "react-map-gl/maplibre";
import Map from "react-map-gl/maplibre";

const longitude = undefined;
const latitude = undefined;
// <Marker longitude={longitude} latitude={latitude} color="red" />

export default function App() {
  useEffect(() => {
    let protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);
    console.debug("Protocol added");
    return () => {
      maplibregl.removeProtocol("pmtiles");
    };
  }, []);

  return (
    <div className="App">
      <Map
        initialViewState={{
          latitude,
          longitude,
          zoom: 13
        }}
        style={{width: "100vw", height: "100vh"}}
        mapStyle="/maps/maplibre.style.json"
      >
      </Map>
    </div>
  );
}
