import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import $ from 'jquery';
import Swal from 'sweetalert2';

const UserView = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        callUserApprovaApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const callUserApprovaApi = async () => {
        axios.post('/api/userAdmin?type=list', {
            is_useremail: id,
        })
        .then( response => {
            try {
                var data = response.data.json[0]
                $('#is_useremail').val(data.useremail);
                $('#is_username').val(data.username);
                $('#is_userphone').val(data.userphone);
                $('#is_usermajor').val(data.usermajor);
                $('#is_userorg').val(data.userorg);
            } catch (error) {
                alert('5. 작업중 오류가 발생하였습니다.')
            }
        })
        .catch( error => {
            alert('6. 작업중 오류가 발생하였습니다.');
            return false;
        });
    }

    const deleteUser = (e) => {
        sweetalertDelete('삭제 하시겠습니까?', function() {
            axios.post('/api/userAdmin?type=delete', {
                is_useremail : id, //e.target.getAttribute('id'),
            })
            .then( response => {
                navigate("/user/admin");
            }).catch( error => {
                alert('작업중 오류가 발생하였습니다.');
                return false;
            });
        });
    }

    const sweetalertDelete = (title, callbackFunc) => {
        Swal.fire({
            title: title,
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                'Deleted!',
                '삭제되었습니다.',
                'success'
                )
        }else{
            return false;
        }
        callbackFunc()
        })
    }

    return (
        <div className="li_top">
            <h2 className="s_tit1">사용자 상세정보</h2>
            <form name="frm" id="frm" action="" method="post">
                <div className="re1_wrap">
                    <div className="re_cnt ct2">
                        <table className="table_ty1">
                            <tbody>
                                <tr>
                                    <th>이메일</th>
                                    <td>
                                        <input type="text" id="is_useremail" name="is_useremail" disabled="disabled" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>성명</th>
                                    <td>
                                        <input type="text" id="is_username" name="is_username" disabled="disabled" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>소속 기관</th>
                                    <td>
                                        <input type="text" id="is_userorg" name="is_userorg" disabled="disabled" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>전공</th>
                                    <td>
                                        <input type="text" id="is_usermajor" name="is_usermajor" disabled="disabled" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>핸드폰</th>
                                    <td>
                                        <input type="text" name="is_userphone" id="is_userphone" disabled="disabled" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="btn_confirm_c mt-5">
                            <Link to={`/user/admin/${id}/edit`} className="bt_ty bt_ty2">수정</Link>
                            <a href="#n" id={id} className="bt_ty bt_ty1" onClick={(e) => deleteUser(e)}>삭제</a>
                        </div>
                    </div>
                </div> 
            </form>	
        </div>
    );
}

export default UserView;