import React, { Component } from "react";
import Search from "./search";
import Content from "./Content";
import Control from "./Control";
import ReadContent from "./ReadContent";
import CreatContent from "./CreatContent";
import UpdateContent from "./UpdateContent";

class nobdList extends Component {
    constructor(props){
        super(props);
        this.max_content_id = 3; // TODO contents 크기 구하기

        this.state = {
            mode: "welcome",
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

    getReadContent(){
        var i = 0;
        while(i < this.state.contents.length){
            var data = this.state.contents[i];
            if(data.id === this.state.selected_content_id){
                return data;
            }
            i += 1;
        }
    }

    getContent() {
        var _titie, _desc, _article = null;
        if(this.state.mode === 'welcome'){
            _titie = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_titie} desc={_desc}></ReadContent>
        }else if (this.state.mode === 'read'){
            var _content = this.getReadContent();
            _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
        }else if(this.state.mode === 'create'){
            _article = <CreatContent 
                            onSubmit={function(_title, _desc){
                                this._max_content_id = this.max_content_id+1;
                                // 1. push
                                // this.state.contents.push(
                                //     {id: this._max_content_id, title: _title, desc: _desc}
                                // );

                                // 2. concat
                                // var _contents = this.state.contents.concat(
                                //     {id: this._max_content_id, title: _title, desc: _desc}
                                // )

                                // 3. Array.from
                                // var newContents = Array.from(this.state.contents);
                                // newContents.push(
                                //     {id: this._max_content_id, title: _title, desc: _desc}
                                // );

                                // 4. Array.from
                                var _contents = Array.from(this.state.contents);
                                _contents.push(
                                    {id: this._max_content_id, title: _title, desc: _desc}
                                )
                                this.setState({
                                    contents: _contents,
                                    mode: 'read',
                                    selected_content_id: this._max_content_id
                                });
                            }.bind(this)}
                        ></CreatContent>
        }else if(this.state.mode === 'update'){
            _content = this.getReadContent();
            _article = <UpdateContent
                            data={_content}
                            onSubmit={function(_id, _title, _desc){
                                var _contents = Array.from(this.state.contents);
                                var i = 0;
                                while(i < _contents.length){
                                    if(_contents[i].id === _id){
                                        _contents[i] = {id: _id, title: _title, desc: _desc}
                                        break;
                                    }
                                    i += 1;
                                }
                                this.setState({
                                    contents: _contents,
                                    mode: 'read'
                                });
                            }.bind(this)}
                        ></UpdateContent>
        }
        return _article;
    }

    render(){
        return (
            <div>
                <section className="sub_wrap">
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
                        {this.getContent()}
                        <Control onChangeMode={function(_mode){
                            if(_mode === "delete"){
                                if(window.confirm('삭제 하겠습니까?')){ // true, false
                                    var _contents = Array.from(this.state.contents);
                                    var i = 0 ;
                                    while(i < _contents.length){
                                        if(_contents[i].id === this.state.selected_content_id){
                                            _contents.splice(i, 1);
                                            break;
                                        }
                                        i += 1;
                                    }
                                }
                                this.setState({
                                    contents: _contents,
                                    mode: 'welcome'
                                });
                                alert("삭제 되었습니다.");
                            }else{
                                this.setState({
                                    mode: _mode
                                });
                            }
                        }.bind(this)}></Control>
                    </article>
                </section>
            </div>
        )
    }
}
export default nobdList;