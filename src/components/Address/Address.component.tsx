import React, { useState, useEffect } from "react";

interface Props {
  coords: number[];
}

const Address: React.FC<Props> = () => {
  const [addressText, setAddressText] = useState("Loading...");
  useEffect(() => {
    setTimeout(() => {
      setAddressText("Placeholder");
    }, 2000);
  }, []);
  return <div>{addressText}</div>;
};

export default Address;
