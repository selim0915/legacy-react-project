import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';
import moment from 'moment';

class SoftwareList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseUserList: '',
            append_UserList: '',
        }
    }

    componentDidMount() {
        this.callUserListApi()
    }

    callUserListApi = async () => {
        axios.post('/api/userAdmin?type=list', {
        })
        .then( response => {
            try {
                this.setState({ responseUserList: response });
                this.setState({ append_UserList: this.UserListAppend(response) });
            } catch (error) {
                alert('1. 작업중 오류가 발생하였습니다.');
            }
        })
        .catch( error => {alert('2. 작업중 오류가 발생하였습니다.');return false;} );
    }

    UserListAppend = (response) => {
        let result = []
        var UserList = response.data;
        
        for(let i=0; i<UserList.json.length; i++){
            var data = UserList.json[i];

            result.push(
                <table key={i} className="table_ty2">
                    <tbody>
                        <tr className="hidden_type">
                            <th>{data.useremail}</th>
                            <th>{data.username}</th>
                            <th>{data.userphone}</th>
                            {/* <th>{data.userpassword}</th> */}
                            <th>{data.usermajor}</th>
                            <th>{data.userorg}</th>
                            <th>{data.userflag}</th>
                            <th>{data.reg_user}</th>    
                            <th>{data.reg_date}</th>
                            <th>{data.update_user}</th> 
                            <th>{data.update_date}</th>
                            {/* <td>
                                <Link to={'/SoftwareView/'+data.swt_code} className="bt_c1 bt_c2 w50_b">수정</Link>
                                <a href="#n" className="bt_c1 w50_b" id={data.swt_code} onClick={(e) => this.deleteUser(e)}>삭제</a>
                            </td> */}
                        </tr>
                    </tbody>
                </table>
            )
        }
        return result
    }

    // deleteUser = (e) => {
    //     var event_target = e.target
    //     this.sweetalertDelete('정말 삭제하시겠습니까?', function() {
    //         axios.post('/api/userAdmin?type=delete', {
    //             is_SwtCd : event_target.getAttribute('id')
    //         })
    //         .then( response => {
    //             this.callUserListApi()
    //         }).catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
    //     }.bind(this))
    // }

    // sweetalertDelete = (title, callbackFunc) => {
    //     Swal.fire({
    //         title: title,
    //         text: "",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes'
    //     }).then((result) => {
    //         if (result.value) {
    //             Swal.fire(
    //             'Deleted!',
    //             '삭제되었습니다.',
    //             'success'
    //             )
    //     }else{
    //         return false;
    //     }
    //     callbackFunc()
    //     })
    // }

    render () {
        return (
            <section className="sub_wrap" >
                <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div className="li_top">
                        <h2 className="s_tit1">사용자 목록</h2>
                    </div>

                    <div className="list_cont list_cont_admin">
                        <table className="table_ty1">
                            <thead>
                                <tr>
                                    <th>이름</th>
                                    <th>이메일</th>
                                    <th>전화번호</th>
                                    {/* <th>비밀번호</th> */}
                                    <th>전공</th>
                                    <th>소속기관</th>
                                    <th>승인여부</th>
                                    <th>등록자</th>    
                                    <th>등록날짜</th>
                                    <th>수정자</th> 
                                    <th>수정날짜</th>
                                </tr>
                            </thead>
                        </table>	
                        {this.state.append_UserList}
                    </div>
                </article>
            </section>
        );
    }
}

export default SoftwareList;