import React, { Component } from "react";

class Subject extends Component {
    render() {
        return (
            <>
                <h2 className="s_tit1">
                    {this.props.title}
                </h2>
                {this.props.sub}
            </>
        )
    }
}

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </nav>
        )
    }
}

class Article extends Component {
    render() {
        return (
            <article>
                {this.props.desc}
            </article>
        )
    }
}

class nobdList extends Component {
    render(){
        return (
            <div>
                <section className="sub_wrap" >
                    <article className="s_cnt re_1 ct1">
                        <div className="li_top">
                            <Subject title="공지사항" sub="공지사항을 관리하는 게시판"></Subject>
                            <Nav></Nav>
                            <Article desc="by serim"></Article>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}
export default nobdList;