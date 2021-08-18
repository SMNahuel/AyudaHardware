import React from "react";
import style from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={style.Container}>
      <div className={style.Navbar}>
        <div>
          <h4 className={style.NameWeb}>
            <a href="/" style={{ color: "#ff4c29", textDecoration: "none" }}>
              AyHa
            </a>
          </h4>
        </div>
        <div>
          <a href="/armar_pc" style={{ textDecoration: "none" }}>
            <h4 className={style.Option}>Armar PC</h4>
          </a>
        </div>
        <div>
          <a href="" style={{ textDecoration: "none" }}>
            <h4 className={style.Option}>Noticias</h4>
          </a>
        </div>
        <div>
          <a href="" style={{ textDecoration: "none" }}>
            <h4 className={style.Option}>PC Armadas</h4>
          </a>
        </div>
        <div>
          <a href="/login" style={{ textDecoration: "none" }}>
            <h4 className={style.Option}>Ingresar</h4>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
