import React, { useEffect } from "react";
import { API_URL } from "./background.lib";
import styles from './background.module.css';

export default function Background() {
  const [img, setImg] = React.useState('')
  useEffect(() => {
    fetch(API_URL).then(response => response.json()).then(data => {
      if (!data?.urls?.full) return;
      setImg(data.urls.full);
    });
  }, []);
  return <div className={styles.background}>
    {Boolean(img) && <img src={img}></img>}
  </div>
}