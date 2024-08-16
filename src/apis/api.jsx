
import axios from "axios";
import React from "react";
import { useState } from "react";
import { REGISTER } from "../utils";

export function Registerapi({userdata})
{
    const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(REGISTER).then((response) => {
        setData(response.data);
    });
  }, []);

  if (!data) return null;

  return data
}