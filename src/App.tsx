import { useEffect } from "react";
import * as maplibregl from 'maplibre-gl';
import { Protocol } from 'pmtiles';
import Map, {Marker} from "react-map-gl/maplibre";

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
          latitude: 45.2621,
          longitude: -75.3554,
          zoom: 13
        }}
        style={{width: "100vw", height: "100vh"}}
        mapStyle="/protomaps/maplibre.style.json"
      >
        <Marker longitude={-75.3554} latitude={45.2621} color="red" />
      </Map>
    </div>
  );
}
