import React, { Component } from "react";
import Search from "./search";
import Content from "./content";
import Content2 from "./content2";

class nobdList extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode: "read",
            selected_content_id: 2,
            welcome: {title: 'welcome', desc:'hello'},
            subject: {title: '게시판', sub: '게시글을 관리하는 메뉴'},
            contents: [
                {id:1, title:'공지사항', desc:'HTML is information'},
                {id:2, title:'자유게시판', desc:'CSS is information'},
                {id:3, title:'덧글게시판', desc:'JavaScript is information'},
            ]
        }
    }

    render(){
        var _titie, _desc = null;
        if(this.state.mode === 'welcome'){
            _titie = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }else if (this.state.mode === 'read'){
            var i = 0;
            while(i < this.state.contents.length){
                var data = this.state.contents[i];
                if(data.id === this.state.selected_content_id){
                    _titie = data.title;
                    _desc = data.desc;
                    break;
                }
                i += 1;
            }
        }

        return (
            <div>
                <section className="sub_wrap" >
                    <article className="s_cnt re_1 ct1">
                        <Search 
                            title={this.state.subject.title}
                            sub={this.state.subject.sub}
                            onChangePage={function(){
                                this.setState({
                                    mode: 'welcome'
                                });
                            }.bind(this)}>
                        </Search>
                        <Content 
                            data={this.state.contents}
                            onChangePage={function(id){
                                this.setState({
                                    mode: 'read',
                                    selected_content_id: Number(id)
                                });
                            }.bind(this)}>
                        </Content>
                        <Content2 title={_titie} desc={_desc}></Content2>
                    </article>
                </section>
            </div>
        )
    }
}
export default nobdList;