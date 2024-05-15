import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker2x from "leaflet/dist/images/marker-icon-2x.png";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconMarkerShadow from "leaflet/dist/images/marker-shadow.png";
import { Icon } from "@iconify/react";
import Link from "next/link";
const Map = ({ store, activeStore }) => {
  const initialZoom = window.innerWidth <= 768 ? 5 : 6;
  const position = [41.87194, 12.56738];

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconMarker2x.src,
      iconUrl: iconMarker.src,
      shadowUrl: iconMarkerShadow.src,
    });
  }, []);

  return (
    <MapContainer
      className="h-full w-full"
      center={position}
      zoom={initialZoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {store.map((el) => {
        const { latitudine, longitudine } = el.location;
        return (
          <Marker position={[latitudine, longitudine]} key={el.id}>
            <Popup>
              {el.img && (
                <img src={el.img} className="w-full h-full" alt={el.name} />
              )}

              <p className="text-base font-bold ">{el.name}</p>
              <p className="!text-main !font-medium">{el.address}</p>
              <div className="w-full h-[0.02rem] bg-main"></div>
              <div className="flex justify-between w-full items-center">
                <p className="flex items-center gap-1">
                  <Icon icon="ph:phone-fill" /> {el.phone}
                </p>
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&destination=${latitudine},${longitudine}`}
                  target="_blank"
                  rel="noreferrer"
                  className="!text-main !font-bold uppercase"
                >
                  Indicazioni
                </Link>
              </div>
            </Popup>
            <MapEffect store={store} activeStore={activeStore} />
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;

const MapEffect = ({ store, activeStore }) => {
  const map = useMap();

  useEffect(() => {
    if (!activeStore) return;
    const { location } = store.find(({ id }) => id === activeStore);
    map.setView([location.latitudine, location.longitudine], 20);
  }, [activeStore, store]);
  return null;
};
