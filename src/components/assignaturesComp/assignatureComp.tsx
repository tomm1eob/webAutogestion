import React from 'react'
import { Button, Table } from 'react-bootstrap'
import "./assignatureComp.css"
import ModalModComp from '../modalModComp/modalModComp'

export const AssignatureComp = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ paddingTop: "35px"}}>
            <h4>Plan de estudio</h4>
            <Table className='table-custom' striped variant="dark">
                <thead>
                    <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Nota final</th>
                    <th>Correlativas</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Matematica</td>
                    <td>Libre</td>
                    <td>-</td>
                    <td>-</td>
                    <td><ModalModComp></ModalModComp></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Fisica</td>
                    <td>Regular</td>
                    <td>-</td>
                    <td>-</td>
                    <td><ModalModComp></ModalModComp></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Analisis de sistemas</td>
                    <td>Apro. Directa</td>
                    <td>-</td>
                    <td>9</td>
                    <td><ModalModComp></ModalModComp></td>
                    </tr>
                </tbody>
        </Table>
        </div>
    </div>
  )
}
