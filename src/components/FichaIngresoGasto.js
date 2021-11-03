import react from "react";
import "./estilos.css"
<<<<<<< HEAD
import {nanoid} from 'nanoid'


function Ficha() {
    const yourDate = new Date(new Date() - new Date(10800000))

    var gasto = {
        id: nanoid(),
        fecha: "02/11/2021",
        hora: "",
        monto: "",
        descripcion: "",
        tipo_pago: "",
        toString: (fecha) =>{
            return fecha
        }
    };


    return (
        <article className="articulo_ingreso">
            <table className="tablaIngreso">
                <thead>
                    <tr>
                        <th colSpan="2">
                            Ingresar Gasto
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fecha</td>
                        <td><input id="fechaGasto" className="derecha" type="text" defaultValue={yourDate.toISOString().split('T')[0]} /></td>
                    </tr>
                    <tr>
                        <td>Hora</td>
                        <td><input id="horaGasto" className="derecha" type="text" defaultValue={yourDate.toISOString().split('T')[1].substring(0, 5)} /></td>
                    </tr>
                    <tr>
                        <td>Monto</td>
                        <td><input id="montoGasto" className="derecha" type="number" defaultValue="0.0" /></td>
                    </tr>
                    <tr>
                        <td>Descripcion</td>
                        <td><input id="descripcionGasto" defaultValue="" type="text" /></td>
                    </tr>
                    <tr>
                        <td>Tipo Pago</td>
                        <td>
                            <select id="tipoPagoGasto" name="tipo_pago">

                                <option value="Efectivo" selected> Efectivo</option>
                                <option value="Debito" > Debito</option>
                                <option value="Transferencia" > Transferencia</option>
                                <option value="Credito" > Credito</option>
                                <option value="Prestado" > Prestado</option>
                                

                            </select></td>
                    </tr>
                    {/* <tr>
                        <td>Deudor</td>
                        <td><input id="deudorGasto" type="text" /></td>
                    </tr>
                    <tr>
                        <td>Cancelado</td>
                        <td><input id="canceladoGasto" type="text" /></td>
                   </tr>*/}
=======
import { useState}  from 'react'


function Ficha() {
    const yourDate = new Date()
    const [form, setForm] = useState({});

    return (
        <article className="articulo_ingreso">
            <form>
                <table className="tablaIngreso">
                    <thead>
                        <tr>
                            <th colSpan="2">
                                Ingresar Gasto
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Fecha</td>
                            <td><input id="FechaGasto" type="text" value={yourDate.toISOString().split('T')[0]} /></td>
                        </tr>
                        <tr>
                            <td>Hora</td>
                            <td><input id="HoraGasto" type="text" value={yourDate.toISOString().split('T')[1].substring(0, 5)} /></td>
                        </tr>
                        <tr>
                            <td>Monto</td>
                            <td><input id="MontoGasto" type="number" value={0.0} /></td>
                        </tr>
                        <tr>
                            <td>Descripcion</td>
                            <td><input id="DescripcionGasto" type="text" /></td>
                        </tr>
                        <tr>
                            <td>Tipo Pago</td>
                            <td>
                                <select>
                                    <option value="Efectivo" selected> Efectivo</option>
                                    <option value="Debito" > Debito</option>
                                    <option value="Credito" > Credito</option>
                                    <option value="Prestado" > Prestado</option>
                                    <option value="Otro" > Otro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Deudor</td>
                            <td><input id="DeudorGasto" type="text" /></td>
                        </tr>
                        <tr>
                            <td>Cancelado</td>
                            <td><input id="CanceladoGasto" type="text" /></td>
                        </tr>
>>>>>>> 2dd61331e0ece6afb260a96c1a40e77f78463bda

                    </tbody>
                    <tfoot>

<<<<<<< HEAD
                    <tr>
                        <td colSpan={2}>
                            <button onClick={() => {
                                gasto.fecha = document.getElementById("fechaGasto").value;
                                gasto.hora = document.getElementById("horaGasto").value;
                                gasto.monto = document.getElementById("montoGasto").value;
                                gasto.descripcion = document.getElementById("descripcionGasto").value;
                                gasto.tipo_pago = document.getElementById("tipoPagoGasto").value;
                                alert(JSON.stringify(gasto));
                            }}>
=======
                        <tr>
                            <td colSpan={2}>
                                <button onClick={() => {
                                    
                                }}>
>>>>>>> 2dd61331e0ece6afb260a96c1a40e77f78463bda

                                    Registrar

                                </button>
                            </td>
                        </tr>
                    </tfoot>

                </table>

            </form>
        </article>
    )

}

export default Ficha