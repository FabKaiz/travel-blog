import mapboxGl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef } from 'react'

const Map = ({ longitude, latitude }) => {
  mapboxGl.accessToken = process.env.NEXT_PUBLIC_MAP_API

  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    if (map.current) return

    if ((longitude, latitude)) {
      map.current = new mapboxGl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 5,
      })
    }
  }, [longitude, latitude])

  return <div ref={mapContainer} className="map" />
}

export default Map
