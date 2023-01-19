import React, { Component } from "react";
import Swal from "sweetalert2";

class R058_Sweetalert2Confirm extends Component{
    deletAlert = (e) => {
        Swal.fire({
            title: '정말 삭제하겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4B088A',
            cancelButtonColor: '#01DF01',
            confirmButtonText: 'yes',
            cancelButtonText: 'no'
        }).then((result) => {
            if (result.value){
                document.getElementById('deleteId').remove();
                Swal.fire(
                    'Deleted',
                    'sweetalet2 삭제',
                    'success'
                )
            }
        })
    }

    render() {
        return(
            <>
                <h2>R058_Sweetalert2Confirm</h2>
                <button onClick={e => this.deletAlert()}>삭제</button>
            </>
        )
    }
}

export default R058_Sweetalert2Confirm;