import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import cookie from 'react-cookies';
import $ from 'jquery';
import Swal from 'sweetalert2';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernm:'',
            userid:''
        };
    }
    componentDidMount() {
        var cookie_userid = cookie.load('userid')
        var cookie_usernm = cookie.load('username')
        var cookie_password = cookie.load('userpassword')

        if(cookie_userid !== undefined){
            const expires = new Date()
            expires.setMinutes(expires.getMinutes() + 60)

            cookie.save('userid', cookie_userid
            , { path: '/', expires })
            cookie.save('username', cookie_usernm
            , { path: '/', expires })
            cookie.save('userpassword', cookie_password
            , { path: '/', expires })

            $('.menulist').show()
            $('.hd_top').show()
        }else{
            $('.menulist').hide()
            $('.hd_top').hide()
        }
        this.callSessionInfoApi()
    }

    callSessionInfoApi = (type) => {
        axios.post('/api/LoginForm?type=SessionConfirm', {
            token1 : cookie.load('userid') 
            , token2 : cookie.load('username') 
        })
        .then( response => {
            this.setState({userid : response.data.token1})
            this.setState({usernm : response.data.token2})
        })
        .catch( error => {
            this.sweetalert('작업중 오류가 발생하였습니다.', error, 'error', '닫기');
        });
    }

    sweetalert = (title, contents, icon, confirmButtonText) => {
        Swal.fire({
            title: title,
            text: contents,
            icon: icon,
            confirmButtonText: confirmButtonText
          })
    }

    logout = async e => {
        cookie.remove('userid', { path: '/'});
        cookie.remove('username', { path: '/'});
        cookie.remove('userpassword', { path: '/'});
        window.location.href = '/login';
    }

    myInfoHover () {
        $(".hd_left > li > .box1").stop().fadeIn(400);
    }
    
    myInfoLeave () {
        $(".hd_left > li > .box1").stop().fadeOut(400);
    }

    menuNobdHover () {
        $(".menu_toggle.menu_nobd").stop().fadeIn(400);
    }
    
    menuNobdLeave () {
        $(".menu_toggle.menu_nobd").stop().fadeOut(400);
    }

    menuSystemHover () {
        $(".menu_toggle.menu_system").stop().fadeIn(400);
    }
    
    menuSystemLeave () {
        $(".menu_toggle.menu_system").stop().fadeOut(400);
    }

    render () {
        return(
            <header className="gnb_box">
            <div className="hd_top">
                <div className="top_wrap ct1 af">
                    <ul className="hd_left af">
                        <li className="my1" onMouseEnter={this.myInfoHover} onMouseLeave={this.myInfoLeave}><b>MyPage</b>
                            <div className="box0 box1">
                                <ul>
                                    <li><Link to={'/user/admin/'+this.state.userid}>프로필</Link></li>
                                    <li><Link to={'/mypage/diary'}>다이어리</Link></li>
                                    <li><Link to={'/mypage/todo'}>Todo</Link></li>
                                    <li><a href="/#" onClick={this.logout}>로그아웃</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="my2"><b><span>0</span>알림</b>
                        </li>
                    </ul>
                    <div className="hd_right">
                        <p><span>'{this.state.usernm}'</span>님 반갑습니다.</p>
                    </div>
                </div>
            </div>
                <div className="h_nav ct1 af">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src={process.env.PUBLIC_URL + `/assets/png/logo.png`} height="40px" width="200px" style={{"marginTop": "20px"}} alt=""/>
                        </Link>
                    </div>
                    <nav className="gnb gnb_admin">
                        <ul className="af">
                            <li className="menulist" onMouseEnter={this.menuNobdHover} onMouseLeave={this.menuNobdLeave}>
                                <a href="/#">
                                    게시판
                                </a>
                                <div className="menu_toggle menu_nobd">
                                    <ul>
                                        <li><Link to={'/blog'}>Blog</Link></li>
                                        <li><Link to={'/memo'}>메모장</Link></li>
                                        <li><Link to={'/prac'}>자유게시판</Link></li>
                                        {/* <li><Link to={'/ReduxEx'}>Redux</Link></li> */}
                                    </ul>
                                </div>
                            </li>
                            <li className="menulist">
                                <Link to={'/user/admin'}>사용자 관리</Link>
                            </li>
                            <li className="menulist" onMouseEnter={this.menuSystemHover} onMouseLeave={this.menuSystemLeave}>
                                <a href="/#">
                                    시스템관리
                                </a>
                                <div className="menu_toggle menu_system">
                                    <ul>
                                        <li><Link to={'/SoftwareList'}>Software</Link></li>
                                        <li><Link to={'/floatingPopulationList'}>버스승강장</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;