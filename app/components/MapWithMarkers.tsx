// src/components/MapWithMarkers.tsx

'use client'

import React from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const geoUrl = "https://raw.githubusercontent.com/datasets/geo-boundaries-world-110m/master/countries.geojson";

const impactLocations = [
  { name: 'Delhi, India', coordinates: [77.2090, 28.6139] },
  { name: 'New York, USA', coordinates: [-74.0060, 40.7128] },
  { name: 'London, UK', coordinates: [-0.1278, 51.5074] },
  { name: 'Sydney, Australia', coordinates: [151.2093, -33.8688] },
  { name: 'Nairobi, Kenya', coordinates: [36.8219, -1.2921] },
  { name: 'Buenos Aires, Argentina', coordinates: [-58.3816, -34.6037] },
]

const MapWithMarkers = () => {
  return (
    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 160 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEA" stroke="#FFFFFF" />
          ))
        }
      </Geographies>
      {impactLocations.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={8} fill="#FF6347" />
          <text textAnchor="middle" y={-10} style={{ fontFamily: "Poppins", fontSize: "10px", fill: "#333" }}>
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  )
}

export default MapWithMarkers
