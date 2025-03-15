import React from 'react'
import { useLocation } from "react-router-dom";
import './Perfil.css'

export default function Perfil() {
    // Usamos useLocation para obtener todos los datos enviados desde el formulario de login
    const location = useLocation();
    const formData = location.state;

    console.log("Datos recibidos del perfil:", formData)
  return (
    <div>
        Bienvenido a tu perfil
        <h1>{formData.name}{" "}{formData.apellido1} {" "}{formData.apellido2}</h1>
        <h2>Edad: {formData.edad}</h2>
        <div>   
            <h3>Contacto:</h3> <br />
            <p><strong>Correo:</strong> {formData.email} </p>
            <p><strong>Telefono:</strong> {formData.telefono} </p>
        </div>
    </div>
  )
}
