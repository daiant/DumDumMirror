import React, { useEffect } from "react";
import { API_URL } from "./background.lib";
import styles from './background.module.css';

export default function Background() {
  const [img, setImg] = React.useState('');
  const [user, setUser] = React.useState('');
  const [description, setDescription] = React.useState('')
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setImg('https://images.unsplash.com/photo-1682686581295-7364cabf5511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
    } else {
      fetch(API_URL).then(response => {
        if (response.ok) {
          return response.json();
        }
        else console.log(response);
      }).then(data => {
        console.log(data);
        if (!data?.urls?.full) return;
        setUser(data.user.username);
        setDescription(data.description);
        setImg(data.urls.full);
      });
    }
  }, []);
  return <>
    {Boolean(user && description) &&
      <span>{description} - {user}</span>
    }
    <div className={styles.background}>
      {Boolean(img) && <img src={img}></img>}
    </div>
  </>
}