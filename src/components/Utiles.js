import React from 'react'
import "./estilos.css"


const Utiles = () => {

    let escalones = [96216, 111085.5, 158366.5, 999999];
    let importes = [8471, 5713, 3454, 0];
    let monto = 0



    let calcula = (e) => {
        let bruto = document.getElementById('Bruto').value
        let noAfectado = document.getElementById('No Afectado').value
        let cantidad = document.getElementById('Cantidad').value

        let neto = bruto - noAfectado

        for (let i = 0; i < escalones.length; i++) {
            if (neto <= escalones[i]) {
                monto = importes[i]
                break;
            }
        }
        alert(`${monto * cantidad}`)
    }
    return (
        <div className='tablaIngreso' style={{width: '40vh'}}>
        <div style={{gridTemplateColumns: '150px 150px', display:'grid'}}>
            <div>Monto Bruto</div>
            <div><input id='Bruto' style={{ textAlign: 'right', width: '100px' }} /></div>
            <div>Monto no afectado</div>
            <div><input id='No Afectado' style={{ textAlign: 'right', width: '100px' }} /></div>
            <div>Cantidad de hijos</div>
            <div><input id='Cantidad' style={{ textAlign: 'right', width: '100px' }} /></div>
            <div><button onClick={calcula}>Calcular</button></div>
        </div>
        </div>
    )
}

export default Utiles