import React, { Component } from "react";
import Search from "./search";
import Content from "./content";

class nobdList extends Component {
    constructor(props){
        super(props);
        this.state = {
            subject: {title: '공지사항', sub: '공지사항을 관리하는 게시판'}
        }
    }

    render(){
        return (
            <div>
                <section className="sub_wrap" >
                    <article className="s_cnt re_1 ct1">
                        <div className="li_top">
                            <Search 
                                title={this.state.subject.title}
                                sub={this.state.subject.sub}>
                            </Search>
                            <Content></Content>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}
export default nobdList;