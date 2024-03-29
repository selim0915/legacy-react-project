import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from 'sweetalert2';
import $ from 'jquery';
import prototypes from "prop-types";

const UserForm = ({ editing }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const submitClick = async (type, e) => {
        const email_val_checker = $('#email_val').val();
        const email2_val_checker = $('#email2_val').val();
        const pwd_val_checker = $('#pwd_val').val();
        const pwd_cnf_val_checker = $('#pwd_cnf_val').val();
        const name_val_checker = $('#name_val').val();
        const org_val_checker = $('#org_val').val();
        const major_val_checker = $('#major_val').val();
        const phone1_val_checker = $('#phone1_val').val();
        const phone2_val_checker = $('#phone2_val').val();
        const phone3_val_checker = $('#phone3_val').val();

        const fnValidate = (e) => {
            var pattern1 = /[0-9]/;
            var pattern2 = /[a-zA-Z]/;
            var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;

            if(email_val_checker === '') {
                $('#email_val').addClass('border_validate_err');
                sweetalert('이메일 주소를 다시 확인해주세요.', '', 'info', '닫기')
                return false;
            }
            if(email_val_checker.search(/\s/) !== -1) {
                $('#email_val').addClass('border_validate_err');
                sweetalert('이메일 공백을 제거해 주세요.', '', 'info', '닫기')
                return false;
            }
            $('#email_val').removeClass('border_validate_err');

            if(email2_val_checker ==='') {
                $('#email2_val').addClass('border_validate_err');
                sweetalert('이메일 주소를 다시 확인해주세요.', '', 'info', '닫기')
                return false;
            }
            $('#email2_val').removeClass('border_validate_err');

            if(!editing){
                if(pwd_val_checker ==='') {
                    $('#pwd_val').addClass('border_validate_err');
                    sweetalert('비밀번호를 입력해주세요.', '', 'info', '닫기')
                    return false;
                }
                if(pwd_val_checker !=='') {
                    var str = pwd_val_checker;
                    if(str.search(/\s/) !== -1) {
                        $('#pwd_val').addClass('border_validate_err');
                        sweetalert('비밀번호 공백을 제거해 주세요.', '', 'info', '닫기')
                        return false;
                    } 
                    if(!pattern1.test(str) || !pattern2.test(str) || !pattern3.test(str)
                    || str.length < 8 || str.length > 16) {
                        $('#pwd_val').addClass('border_validate_err');
                        sweetalert('8~16자 영문 대 소문자\n숫자, 특수문자를 사용하세요.', '', 'info', '닫기')
                        return false; 
                    } 
                }

                $('#pwd_val').removeClass('border_validate_err');
    
                if(pwd_cnf_val_checker ==='') {
                    $('#pwd_cnf_val').addClass('border_validate_err');
                    sweetalert('비밀번호 확인을 입력해주세요.', '', 'info', '닫기')
                    return false;
                }
                if(pwd_val_checker !== pwd_cnf_val_checker) {
                    $('#pwd_val').addClass('border_validate_err');
                    $('#pwd_cnf_val').addClass('border_validate_err');
                    sweetalert('비밀번호가 일치하지 않습니다.', '', 'info', '닫기')
                    return false;
                }
                $('#pwd_cnf_val').removeClass('border_validate_err');
            }

            if(name_val_checker ==='') {
                $('#name_val').addClass('border_validate_err');
                sweetalert('성명을 입력해주세요.', '', 'info', '닫기')
                return false;
            }
            if(name_val_checker.search(/\s/) !== -1) {
                $('#name_val').addClass('border_validate_err');
                sweetalert('성명에 공백을 제거해 주세요.', '', 'info', '닫기')
                return false;
            }
            $('#name_val').removeClass('border_validate_err');
    
            if(org_val_checker ==='') {
                $('#org_val').addClass('border_validate_err');
                sweetalert('소속기관을 입력해주세요.', '', 'info', '닫기')
                return false;
            }
            if(org_val_checker.search(/\s/) !== -1) {
                $('#org_val').addClass('border_validate_err');
                sweetalert('소속기관에 공백을 제거해 주세요.', '', 'info', '닫기')
                return false;
            }
            $('#org_val').removeClass('border_validate_err');
            if(major_val_checker ==='') {
                $('#major_val').addClass('border_validate_err');
                sweetalert('전공을 입력해주세요.', '', 'info', '닫기')
                return false;
            }
            if(major_val_checker.search(/\s/) !== -1) {
                $('#major_val').addClass('border_validate_err');
                sweetalert('전공에 공백을 제거해 주세요.', '', 'info', '닫기')
                return false;
            }
            $('#major_val').removeClass('border_validate_err');
            if(phone1_val_checker ==='' || phone2_val_checker ===''
            || phone3_val_checker ==='') {
                $('#phone1_val').addClass('border_validate_err');
                $('#phone2_val').addClass('border_validate_err');
                $('#phone3_val').addClass('border_validate_err');
                sweetalert('휴대전화 번호를 입력해주세요.', '', 'info', '닫기')
                return false;
            }
            $('#phone1_val').removeClass('border_validate_err');
            $('#phone2_val').removeClass('border_validate_err');
            $('#phone3_val').removeClass('border_validate_err');
            return true;
        }

        if(fnValidate()){
            var jsonstr = $("form[name='frm']").serialize();
            jsonstr = decodeURIComponent(jsonstr);
            var Json_form = JSON.stringify(jsonstr).replace(/\"/gi,'')
            Json_form = "{\"" +Json_form.replace(/\&/g,'\",\"').replace(/=/gi,'\":"')+"\"}";
        
            if(editing){
                try {
                    const response = await fetch('/api/userAdmin?type=modify', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: Json_form,
                    });
                    const body = await response.text();
                    if(body === "succ"){
                        sweetalert('회원정보가 수정되었습니다.', '', 'info', '닫기')
                        navigate(`/user/admin/`+id);
                    }else{
                        alert('3. 작업중 오류가 발생하였습니다.')
                    }
                } catch (error) {
                    alert('4. 작업중 오류가 발생하였습니다.')
                }
            }else{
                //this.state.full_email = this.email_val_checker+'@'+this.email2_val_checker
                axios.post('/api/register?type=dplicheck', {
                    is_Email: email_val_checker+'@'+email2_val_checker
                })
                .then((response) => {
                    try {
                        const dupli_count = response.data.json[0].num;
                        if(dupli_count !== 0){
                            $('#email_val').addClass('border_validate_err');
                            $('#email2_val').addClass('border_validate_err');
                            sweetalert('이미 존재하는 이메일입니다.', '', 'info', '닫기')
                        }else{
                            $('#email_val').removeClass('border_validate_err');
                            $('#email2_val').removeClass('border_validate_err');
                            fnSignInsert('signup', e)
                        }
                    } catch (error) {
                        sweetalert('작업중 오류가 발생하였습니다.', error, 'error', '닫기')
                    }
                })
                .catch( response => { 
                    return false; 
                });
            }
        }

        const fnSignInsert = async (type, e) => {
            try {
                const response = await fetch('/api/register?type='+type, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: Json_form,
                });
                const body = await response.text();
                if(body === "succ"){
                    sweetalert('회원가입이 완료되었습니다.', '', 'info', '닫기')
                    navigate('/user/admin');
                }else{
                    sweetalert('작업중 오류가 발생하였습니다.', body, 'error', '닫기');            
                }  
            } catch (error) {
                sweetalert('작업중 오류가 발생하였습니다.', error, 'error', '닫기');
            }
        }
    };

    useEffect(() => {
        if(editing){ // 수정
            axios.post('/api/userAdmin?type=list', {
                is_useremail: id,
            })
            .then( response => {
                try {
                    var data = response.data.json[0]
                    $('#email_full_val').val(data.useremail);
                    $('#email_val').val((data.useremail).split("@")[0]);
                    $('#email2_val').val((data.useremail).split("@")[1]);
                    $('#name_val').val(data.username);
                    $('#phone1_val').val((data.userphone).split("-")[0]);
                    $('#phone2_val').val((data.userphone).split("-")[1]);
                    $('#phone3_val').val((data.userphone).split("-")[2]);
                    $('#major_val').val(data.usermajor);
                    $('#org_val').val(data.userorg);
                } catch (error) {
                    alert('작업중 오류가 발생하였습니다.')
                }
            })
            .catch( error => {
                alert('작업중 오류가 발생하였습니다.');
                return false;
            });
        }
    }, [editing, id]); // []: 디펜져싱
    
    const emailKeyPress = (e) => {
        $('#email_val').removeClass('border_validate_err');
    };

    const pwdKeyPress = (e) => {
        $('#pwd_val').removeClass('border_validate_err');
    };

    const pwdCnfKeyPress = (e) => {
        $('#pwd_cnf_val').removeClass('border_validate_err');
    };

    const nameKeyPress = (e) => {
        $('#name_val').removeClass('border_validate_err');
    };
    
    const mustNumber = (id) => {
        var pattern1 = /[0-9]/;
        var str = $('#'+id).val();
        if(!pattern1.test(str.substr(str.length - 1, 1))){
            $('#'+id).val(str.substr(0, str.length-1));
        }
    }

    const sweetalert = (title, contents, icon, confirmButtonText) => {
        Swal.fire({
            title: title,
            text: contents,
            icon: icon,
            confirmButtonText: confirmButtonText
          })
    }
    
    return (
        <div className="li_top">
            <h2 className="s_tit1">{editing ? '사용자 수정' : '회원가입'}</h2>
            <form method="post" name="frm">
                <input id="email_full_val" type="hidden" name="is_UseremailFull" />
                <div className="re1_wrap">
                    <div className="re_cnt ct2">
                        <table className="table_ty1">
                            <tbody>
                                <tr className="re_email">
                                    <th>이메일</th>
                                    <td>
                                        <input id="email_val" type="text" name="is_Useremail1"  placeholder="이메일을 입력해주세요." onKeyPress={emailKeyPress} disabled={editing ? 'disabled' : ''} />
                                        <span className="e_goll">@</span>
                                        <select id="email2_val" name="is_Useremail2" className="select_ty1" disabled={editing ? 'disabled' : ''} >
                                                <option value="">선택하세요</option>
                                                <option value='naver.com'>naver.com</option>
                                                <option value='hanmail.net'>hanmail.net</option>
                                                <option value='nate.com'>nate.com</option>
                                                <option value='hotmail.com'>hotmail.com</option>
                                                <option value='gmail.com'>gmail.com</option>
                                                <option value='yahoo.co.kr'>yahoo.co.kr</option>
                                                <option value='yahoo.com'>yahoo.com</option>
                                        </select>
                                    </td>
                                </tr>
                                {!editing && <tr>
                                    <th>비밀번호</th>
                                    <td>
                                        <input id="pwd_val" type="password" name="is_Password"
                                        placeholder="비밀번호를 입력해주세요." onKeyPress={pwdKeyPress} />
                                    </td>
                                </tr>}
                                {!editing && <tr>
                                    <th>비밀번호 확인</th>
                                    <td>
                                        <input id="pwd_cnf_val" type="password" name="is_Password"
                                        placeholder="비밀번호를 다시 입력해주세요." onKeyPress={pwdCnfKeyPress}/>
                                    </td>
                                </tr>}
                                <tr>
                                    <th>성명</th>
                                    <td>
                                        <input id="name_val" type="text" name="is_Username"
                                        placeholder="성명을 입력해주세요." onKeyPress={nameKeyPress}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>소속 기관</th>
                                    <td>
                                        <input id="org_val" type="text" name="is_Organization"
                                        placeholder="소속 기관명을 입력해주세요." />
                                    </td>
                                </tr>
                                <tr>
                                    <th>전공</th>
                                    <td>
                                        <input id="major_val" type="text" name="is_Usermajor"
                                        placeholder="전공을 입력해주세요." />
                                    </td>
                                </tr>
                                <tr className="tr_tel">
                                    <th>핸드폰</th>
                                    <td>
                                        <select id="phone1_val" name="is_Userphone1" className="select_ty1">
                                            <option value="">선택</option>
                                            <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="016">016</option>
                                            <option value="017">017</option>
                                            <option value="018">018</option>
                                            <option value="019">019</option>
                                        </select>
                                        <span className="tel_dot">-</span>
                                        <input id="phone2_val" name="is_Userphone2" max="9999" maxLength="4" onChange={(e) => mustNumber("phone2_val")}/>
                                        <span className="tel_dot">-</span>
                                        <input id="phone3_val" name="is_Userphone3" max="9999" maxLength="4" onChange={(e) => mustNumber("phone3_val")}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="btn_confirm_c mt-5">
                        <div className="bt_ty bt_ty2 submit_ty1" onClick={(e) => submitClick('signup', e)}>{editing ? '수정' : '회원가입'}</div>
                    </div>
                </div>
            </form>
        </div>
    );
}

UserForm.prototypes = {
    editing: prototypes.bool,
}

UserForm.defaultProps = {
    editing: false,
}

export default UserForm;