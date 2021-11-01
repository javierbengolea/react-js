import "./estilos.css"


function Ficha() {
    const yourDate = new Date()

    return (
        <article>
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
                        <td><input type="text" value={yourDate.toISOString().split('T')[0]} /></td>
                    </tr>
                    <tr>
                        <td>Hora</td>
                        <td><input type="text" value={yourDate.toISOString().split('T')[1].substring(0,5)} /></td>
                    </tr>
                    <tr>
                        <td>Monto</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Descripcion</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Tipo Pago</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Deudor</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Cancelado</td>
                        <td><input type="text" /></td>
                    </tr>

                </tbody>
                <tfoot>

                    <tr>
                        <td colSpan={2}>
                            <button>

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