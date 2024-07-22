import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMarkerShadow from "leaflet/dist/images/marker-shadow.png";
import { Icon } from "@iconify/react";
import Link from "next/link";
const Map = ({ store, activeStore }) => {
  const initialZoom = window.innerWidth <= 768 ? 5 : 6;
  const position = [41.87194, 12.56738];

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/assets/puntatore.svg",
      iconUrl: "/assets/puntatore.svg",
      shadowUrl: iconMarkerShadow.src,
      iconSize: [38, 95],
    });
  }, []);

  return (
    <MapContainer
      className="w-full h-full"
      center={position}
      zoom={initialZoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {store.map((el) => {
        const { latitudine, longitudine } = el.location;
        return (
          <Marker position={[latitudine, longitudine]} key={el.id}>
            <Popup>
              {/* {el.img && (
                <img src={el.img} className="w-full h-full" alt={el.name} />
              )} */}

              <a
                href={el.link}
                target="_blank"
                className="hover:underline hover:underline-offset-2 hover:decoration-main hover:transition-all hover:ease-linear hover:duration-300"
              >
                <p className="text-base font-bold ">{el.name}</p>
              </a>
              <address className="!text-main !font-medium">
                {el.address}
              </address>
              <div className="w-full h-[0.02rem] bg-main/50 mt-4"></div>
              <div className="flex items-center justify-between w-full">
                <p className="flex items-center gap-1 font-bold">
                  <Icon icon="ph:phone-fill" /> {el.phone}
                </p>
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&destination=${latitudine},${longitudine}`}
                  target="_blank"
                  rel="noreferrer"
                  className="!text-main !font-bold uppercase"
                >
                  <Icon icon="bxs:direction-right" className="w-7 h-7" />
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
