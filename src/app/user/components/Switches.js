// Switches.js
import React from "react";
import { Switch } from "@nextui-org/react";

const Switches = ({ nsfw, spoiled, onNsfwChange, onSpoiledChange }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center mb-6">
        <span className="mr-4 text-gray-700 font-bold">NSFW:</span>
        <Switch color="secondary" isSelected={nsfw} onChange={onNsfwChange} />
      </div>
      <div className="flex items-center mb-6">
        <span className="mr-4 text-gray-700 font-bold">
          Spoiled Content:
        </span>
        <Switch color="secondary" isSelected={spoiled} onChange={onSpoiledChange} />
      </div>
    </div>
  );
};

export default Switches;
