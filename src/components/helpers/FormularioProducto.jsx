import React from "react";
import Input from "./Input";

export default function FormularioProducto() {
  return (
    <aside className="contenedor-fomulario-producto">
      <form className="formulario-producto">

        <label className="label-nombre">{"Nombre planta"}</label>
        <Input placeholder="Nombre planta" type={"text"}/>

        <label className="label-sexo">{"Sexo"}</label>
        <Input placeholder="Sexo planta" type={"text"} />

        <label className="label-referencia">{"Referencia"}</label>
        <Input placeholder="Referencia" type={"number"} />

        <label className="label-tamaño">{"Tamaño"}</label>
        <Input placeholder="Tamaño" type={"text"} />

        <label className="label-cantidad">{"Cantidad"}</label>
        <Input placeholder="Correo" type={"number"} />

        <label className="label-descripcion">{"Descripcion"}</label>
        <textarea></textarea>
      </form>
    </aside>
  );
}
