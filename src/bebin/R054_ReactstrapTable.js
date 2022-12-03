import React, { Component } from "react";
import { Table } from "reactstrap";

class R054_ReactstrapTable extends Component{
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>number1</th>
                        <th>number2</th>
                        <th>number3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>100</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>200</td>
                        <td>2000</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default R054_ReactstrapTable;