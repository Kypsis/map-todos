import React, { useState, useEffect } from "react";
import axios from "axios";

import { AddressTextContainer } from "./Address.styles";

interface Props {
  coords: number[];
}

const Address: React.FC<Props> = props => {
  const [addressText, setAddressText] = useState("Loading address...");
  useEffect(() => {
    axios
      .get(
        `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${props.coords[0]}%2C${props.coords[1]}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=${process.env.REACT_APP_HERE_API_KEY}`
      )
      .then(res => {
        setAddressText(
          res?.data?.Response?.View[0]?.Result[0]?.Location?.Address?.Label ??
            "Can't find the address"
        );
      })
      .catch(err => console.log(err));
  }, [props.coords]);

  return <AddressTextContainer>{addressText}</AddressTextContainer>;
};

export default Address;
