import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import style from "./noticias.module.css";

const mapStateToProps = (state) => {
  return { store: state };
};

const Noticias = ({ store }) => {
  console.log(store);
  const [state, setState] = useState({
    post: [""],
    author: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const id = window.location.href.split("/").pop();
    if (Number(id)) {
      const post = await axios
        .get(`http://localhost:5000/post/${id}`)
        .then(({ data }) => {
          return data;
        });
      setState(post);
    } else {
      selectLast();
    }
  };

  const selectLast = async () => {
    const id = store.noticies[0].id;
    const post = await axios
      .get(`http://localhost:5000/post/${id}`)
      .then(({ data }) => {
        return data;
      });
    setState(post);
  };
  return (
    <div className={style.Container}>
      <div className={style.Notice}>
        <div className={style.ContainerPhoto}>
          <div className={style.Title}>{state.post.post_title}</div>
        </div>
        <div className={style.Content}>{state.post.post_text}</div>
      </div>
      <div className={style.Author}>
        <div className={style.PhotoAutor}></div>
        <h4 className={style.About}>{state.author.name}</h4>
        <h4 className={style.About}>Acerca de: </h4>
        <div className={style.AboutAuthor}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Noticias);
