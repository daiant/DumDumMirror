import React, { useEffect } from "react";
import { API_URL } from "./background.lib";

export default function Background() {
  const [img, setImg] = React.useState('')
  useEffect(() => {
    fetch(API_URL).then(response => response.json()).then(data => {
      if (!data?.urls?.full) return;
      setImg(data.urls.full);
    });
  }, []);
  return <img src={img} width={600} height={300} style={{ objectFit: 'cover' }} ></img>
}