import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import $ from 'jquery';
import Swal from 'sweetalert2'

class UserApprovalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useremail: props.match.params.useremail
        }
    }

    componentDidMount () {
        this.callUserApprovaApi()
        // if(this.state.useremail === ''){
        //     $('.modifyclass').hide()
        // }else{
        //     this.callSwToolInfoApi()
        //     $('.saveclass').hide()
        // }
    }

    callUserApprovaApi = async () => {
        axios.post('/api/userAdmin?type=list', {
            is_useremail: this.state.useremail,
        })
        .then( response => {
            try {
                var data = response.data.json[0]
                $('#is_useremail').val(data.useremail);
                $('#is_username').val(data.username);
                $('#is_userphone').val(data.userphone);
                $('#is_usermajor').val(data.usermajor);
                $('#is_userorg').val(data.userorg);
                $('#is_userflag').val(data.userflag);
            } catch (error) {
                alert('5. 작업중 오류가 발생하였습니다.')
            }
        })
        .catch( error => {alert('6. 작업중 오류가 발생하였습니다.');return false;} );
    }

    render () {
        return (
            <section className="sub_wrap">
                <article className="s_cnt mp_pro_li ct1">
                    <div className="li_top">
                        <h2 className="s_tit1">사용자 상세정보</h2>
                    </div>
                    <div className="bo_w re1_wrap re1_wrap_writer">
                        <form name="frm" id="frm" action="" method="post">
                            <article className="res_w">
                                <div className="tb_outline">
                                    <table className="table_ty1">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <label htmlFor="is_useremail">이메일<span className="red">(*)</span></label>
                                                </th>
                                                <td>
                                                    <input type="text" name="is_useremail" id="is_useremail" className="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <label htmlFor="is_username">이름<span className="red">(*)</span></label>
                                                </th>
                                                <td>
                                                    <input type="text" name="is_username" id="is_username" className="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <label htmlFor="is_userphone">전화번호<span className="red">(*)</span></label>
                                                </th>
                                                <td>
                                                    <input type="text" name="is_userphone" id="is_userphone" className="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <label htmlFor="is_usermajor">전공<span className="red">(*)</span></label>
                                                </th>
                                                <td>
                                                    <input type="text" name="is_usermajor" id="is_usermajor" className="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <label htmlFor="is_userorg">소속기관<span className="red">(*)</span></label>
                                                </th>
                                                <td>
                                                    <input type="text" name="is_userorg" id="is_userorg" className="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <label htmlFor="is_userflag">승인여부<span className="red">(*)</span></label>
                                                </th>
                                                <td>
                                                    <input type="text" name="is_userflag" id="is_userflag" className="" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="btn_confirm mt20" style={{"marginBottom": "44px"}}>
                                        <Link to={'/UserApproval'} className="bt_ty bt_ty1 cancel_ty1">취소</Link>
                                    </div>
                                </div>
                            </article>
                        </form>	
                    </div> 
                </article>
            </section>
        );
    }
}

export default UserApprovalView;