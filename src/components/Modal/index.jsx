import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './style.css';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

const Form = ({  datoNombre, datoEmail, datoCel, datoApellido }) => {


    const MySwal = withReactContent(Swal)

    const enviarForm = (e) => {
        e.preventDefault()
        if (e.target.email.value === e.target.email2.value) {
            datoNombre(e.target.nombre.value)
            datoApellido(e.target.apellido.value)
            datoEmail(e.target.email.value)
            datoCel(e.target.cel.value)
            
        } else {
            MySwal.fire({
                title: 'El email no coicide',
                icon: 'warning',
            })
        }
    }
    const sendDatos = () => {
        Toastify({
            text: "Gracias por ingresar sus datos ya puede finalizar la compra",
            duration: 3000
            }).showToast();
    }

    return (
        <div>
            <form onSubmit={enviarForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name='nombre' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" name='apellido' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">Reingrese su Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" name='email2' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cel" className="form-label">Celular</label>
                    <input type="number" className="form-control" id="cel" name='cel' required />
                </div>
                <button type='submit' className='btn border-success' onClick={sendDatos}>Enviar datos</button>
            </form>
        </div>
    )
}

export default Form