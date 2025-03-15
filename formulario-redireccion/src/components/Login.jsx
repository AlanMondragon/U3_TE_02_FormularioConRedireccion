import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";



export default function Login() {


    const [intentos, setIntentos] = useState(0);
    const [btnBloqueado, setBtnBloqueado] = useState(false); //Para bloquear el boton

    const correo = "20233tn066@utez.edu.mx" //Aca blo lo sustituyes con lo que traigas del props 
    const contra = "123456789"


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
            console.log(data)
        } else {
            if (intentos >= 3) {
                setBtnBloqueado(true)
            }
            setIntentos(intentos + 1);
            console.log(intentos)
        }

    }

    return (
        <div>
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