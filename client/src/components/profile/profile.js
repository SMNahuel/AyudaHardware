import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actionCreaton.js";
import style from "./profile.module.css";
import Pen from "../../assets/create.png";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //Iniciamos un estado para poder guardar los datos de los inputs y damos estado de inicio con UseState
  const [input, setInput] = useState({
    id: useSelector((state) => state.id),
    name: useSelector((state) => state.name),
    email: useSelector((state) => state.email),
    photoUrl: useSelector((state) => state.photo_url),
    password: "",
    cofirmPassword: ""
  });

  const handleProfile = async () => {
    //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
    try {
      const response = await axios.put("http://localhost:5000/user/update", {
        id: input.id,
        name: input.name,
        password: input.password,
        email: input.email,
        photoUrl: input.photoUrl,
      });
      if (response.status === 200) {
        dispatch(login(input));
        history.push("/");
        return alert("Cambios guardados");
      }
      if (response.status !== 200) return alert("Error revise los datos");
    } catch (error) {
      console.log(error);
    }
  };

  /* Subida de foto*/
  const fileChange = async () => {
    /*Capturamos el archivo */
    var file = document.getElementById("input_img");

    /*Guardamos los datos */
    let body = new FormData();
    /*Guardamos la Api Key */
    body.set("key", "3b8489ea2bc0ad9ee80ec4ca5a1dfb27");
    /*Guardamos la Api Key */
    body.append("image", file.files[0]);

    /*Guardamos la respuesta de la API Rest */
    const url = await axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    });

    setInput({
      ...input,
      photoUrl: url.data.data.url,
    });
  };

  return (
    <div className={style.Container}>
      <div className={style.Profile}>
        <div className={style.Left}>
          <div className={style.BackgroundPhoto}>
            <img
              className={style.PhotoProfile}
              src={input.photoUrl}
              alt="ProfileUser"
            />
          </div>
          <label className={style.custom_file_upload}>
            <input
              type="file"
              id="input_img"
              onChange={() => fileChange()}
              accept="image/*"
            />
          </label>
          <button className={style.Button} onClick={() => handleProfile()}>
            EDITAR INFO
          </button>
        </div>
        <div className={style.Right}>
          <div className={style.ContainerInputs}>
            <input
              className={style.Inputs}
              type="text"
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  email: e.target.value,
                })
              }
            />
            <img src={Pen} alt="Edit" className={style.Pencil} />
          </div>
          <div className={style.ContainerInputs}>
            <input
              className={style.Inputs}
              type="password"
              value={input.password}
              placeholder="Ingrese nuevo password"
              onChange={(e) =>
                setInput({
                  ...input,
                  password: e.target.value,
                })
              }
            />
            <img src={Pen} alt="Edit" className={style.Pencil} />
          </div>
          <div className={style.ContainerInputs}>
            <input
              className={style.Inputs}
              type="password"
              value={input.cofirmPassword}
              placeholder="Repita nuevo password"
              onChange={(e) =>
                setInput({
                  ...input,
                  cofirmPassword: e.target.value,
                })
              }
            />
            <img src={Pen} alt="Edit" className={style.Pencil} />
          </div>
        </div>
      </div>
      <div className={style.PC}>
        <h4 className={style.Title}>PC ARMADAS</h4>
        <div className={style.ContainerPC}></div>
      </div>
    </div>
  );
};

export default Profile;
