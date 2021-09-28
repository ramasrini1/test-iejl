import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: 15,
    name: "South Bay",
    coordinates: [37.4603776, -121.9166208],
  },
];

const MapChart = () => {
  return (
    <div
      style={{ zIndex: "-20" }}
      className="absolute w-full h-full -top-32 -right-96 overflow-hidden"
    >
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [70.0, -20.0, 0],
          scale: 150,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#2f3744"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
