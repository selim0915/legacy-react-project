import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

class UserApproval extends Component {
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
                            <th>
                                <Link to={'/UserApprovalView/'+data.useremail}>{data.useremail}</Link>
                            </th>
                            <th>{data.username}</th>
                            <th>{data.userphone}</th>
                            <th>{data.usermajor}</th>
                            <th>{data.userorg}</th>
                            <th>{data.userflag}</th>
                            <th>{data.reg_user}</th>    
                            <th>{data.reg_date}</th>
                            <th>{data.update_user}</th> 
                            <th>{data.update_date}</th>
                        </tr>
                    </tbody>
                </table>
            )
        }
        return result
    }

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
                                    <th>이메일</th>
                                    <th>이름</th>
                                    <th>전화번호</th>
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

export default UserApproval;