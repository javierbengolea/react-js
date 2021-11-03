import "./estilos.css"
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

                </tbody>
                <tfoot>

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

                                Registrar

                            </button>
                        </td>
                    </tr>
                </tfoot>

            </table>


        </article>
    )

}

export default Ficha