import React from 'react'
import { Table } from 'react-bootstrap'

export const AssignatureComp = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "100vh"}}>
            <h1 style={{fontSize: "25px"}}>Materias del semestre</h1>
            <Table striped variant="dark">
                <thead>
                    <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Comisión</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Matematica</td>
                    <td>Libre</td>
                    <td>1k22</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Fisica</td>
                    <td>Regular</td>
                    <td>1k22</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Analisis de sistemas</td>
                    <td>Apro. Directa</td>
                    <td>2k13</td>
                    </tr>
                </tbody>
        </Table>
        </div>
    </div>
  )
}
