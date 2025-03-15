import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

import './Login.css'


export default function Login() {
    const [intentos, setIntentos] = useState(0);
    const [btnBloqueado, setBtnBloqueado] = useState(false); // Para bloquear el botón

    // Usamos useLocation para obtener todos los datos enviados desde el formulario de registro
    const location = useLocation();
    const formData = location.state || {};

    let navigate=useNavigate();

    console.log("Datos recibidos del formulario:", formData)

    // Extraemos los datos que necesitamos (email y contraseña)
    const correo = formData.email;
    const contra = formData.pass;

    const schema = yup.object().shape({
        email: yup.string().required("Correo requerido").email("Formato incorrecto"),
        password: yup.string().required("Contraseña requerida")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function onSubmit(data) {
        console.log(schema)
        if (btnBloqueado) {
            return;
        } else if (data.email === correo && data.password === contra) {
            // Dani aca entras tu bro
            console.log("Inicio de sesión exitoso:", data)
            console.log("Todos los datos recibidos del formulario:", formData)
            navigate("/Perfil", {state: {...formData}})
        } else {
            if (intentos >= 3) {
                setBtnBloqueado(true)
            }
            setIntentos(intentos + 1);
            console.log("Intentos fallidos:", intentos)
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Correo" {...register("email")} />
                <p>{errors.email?.message}</p>
                <input type="password" placeholder="Contraseña" {...register("password")} />
                <p>{errors.password?.message}</p>
                <input type="submit" disabled={btnBloqueado} />
            </form>
        </div>
    )
}