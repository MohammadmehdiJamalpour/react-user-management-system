import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function UserLocation({ isOpen, onClose, location }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-5   ">
        <div className="flex items-center justify-between pb-3">
          <h3>موقعیت کاربر :</h3>
          <button className="  hover:text-gray-700" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7  bg-gray-400 hover:bg-gray-600 transition duration-300 rounded-full  text-white p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={13}
          className="min-h-72 min-w-60 rounded-xl"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>
              User Location: {location.latitude}, {location.longitude}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default UserLocation;
