import React from "react";

const Contatti = () => {
  return (
    <div className="w-[90%] mx-auto">
      <iframe
        src="https://my.atlist.com/map/bbe0b840-43b7-4547-b089-6bbdfff6d763?share=true"
        allow="geolocation 'self' https://my.atlist.com"
        width="100%"
        height="400px"
        loading="lazy"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Contatti;
