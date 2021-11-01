import react from "react";
import "./estilos.css"
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

                    </tbody>
                    <tfoot>

                        <tr>
                            <td colSpan={2}>
                                <button onClick={() => {
                                    
                                }}>

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