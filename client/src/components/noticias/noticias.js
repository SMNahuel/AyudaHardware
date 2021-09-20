import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./noticias.module.css";

const Noticias = (post) => {
  const [state, setState] = useState("");

  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const id = window.location.href.split("/").pop();
    const post = await axios
      .get(`http://localhost:5000/post/${id}`)
      .then(({ data }) => {
        return data[0];
      });

    setState(post);

    await fetchUser();
  };

  const fetchUser = async () => {
    const author = await axios
      .get(`http://localhost:5000/user/${state.userId}`)
      .then(({ data }) => {
        return data;
      });

    setAuthor(author);
  };

  return (
    <div className={style.Container}>
      <div className={style.Notice}>
        <div className={style.Title}>{state.post_title}</div>
        <div className={style.ContainerPhoto}>
          <img src={post.Img} className={style.PhotoNotice} />
        </div>
        <div className={style.Content}>{state.post_text}</div>
      </div>
      <div className={style.Author}>
        <div className={style.PhotoAutor}></div>
        <h4 className={style.About}>Nunito</h4>
        <h4 className={style.About}>Acerca de: </h4>
        <div className={style.AboutAuthor}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </div>
      </div>
    </div>
  );
};

export default Noticias;
