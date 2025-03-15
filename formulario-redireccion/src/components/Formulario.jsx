import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useNavigate } from "react-router-dom";


export default function Form() {

    let navigate=useNavigate();

    const schema= yup.object().shape({
        name: yup.string().required("necesitas un nombre"),
        apellido1: yup.string().required("necesitas un apellido paterno"),
        apellido2: yup.string().required("necesitas un apellido materno"),
        telefono: yup.string().required("necesitas un número de teléfono"),
        email: yup.string().required("necesitas un email").email("No es una dirección de correo válida"),
        edad: yup.number().required("requieres una edad").integer().min(18, "debes de tener minimo 18 años").typeError(""),
        pass: yup.string().required("requieres una contraseña").min(4, "al menos 4 caracteres").max(10, "maximo 10 caracteres"),
        confirmpass: yup.string().required("las contraseñas deben de coincidir").oneOf([yup.ref("pass"), null], "Tus contraseñas no son las mismas")
    }) 

    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function onSubmit (data) {
        console.log(data)

        //aqui va el redireccionamiento
        //Login.jsx

        //aqui mismo se pueden pasar los datos
        //te toca juan 
        navigate("/Login", {state: data})

    }
    

    return(
        <div>
            <h1>Menú de Registro</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputs">
                <input type="text" placeholder="Nombre"  {...register("name")}
                />
                <p>{errors.name?.message}</p>                
                <input type="text" placeholder="Apellido Paterno" {...register("apellido1")}
                />
                <p>{errors.apellido1?.message}</p>
                <input type="text" placeholder="Apellido Materno" {...register("apellido2")}
                />
                <p>{errors.apellido2?.message}</p>
                <input type="text" placeholder="Número de teléfono" {...register("telefono")}
                />
                <p>{errors.telefono?.message}</p>
                <input type="text" placeholder="email"  {...register("email")}
                />
                <p>{errors.email?.message}</p>
                <input type="number" placeholder="edad" {...register("edad")}
                />
                <p>{errors.edad?.message}</p>
                <input type="password" placeholder="Ingresa la contraseña" {...register("pass")}
                />
                <p>{errors.pass?.message}</p>
                <input type="password" placeholder="Debe de coincidir" {...register("confirmpass")}
                />
                <p>{errors.confirmpass?.message}</p>
                </div>
                <input type="submit"
                />

            </form>

        </div>
    )
}