import axios from 'axios';
import React, { Component } from 'react';

class floatingPopulationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: '',
            append_FPList: ''
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi = async() => {
        axios.get('https://t-data.seoul.go.kr/apig/apiman-gateway/tapi/v2xBusStationCrowdedInformation/1.0?apiKey=c6aa2791-eb11-46be-b44a-bea3cb9d180a&type=json&pageNo=1&numOfRows=10')
        .then((response) => {
            try {
                //this.setState({ responseFPList: response });
                this.setState({ append_FPList: this.FloatPopulListAppend(response) });
            } catch (error) {
                alert(error)
            }
        })
        .catch( error => {alert(error);return false;} );
    }

    FloatPopulListAppend = (response) => {
        let result = []
        //var json = this.state.responseFPList.data
        var json = response.data;
        //var jsonString = JSON.stringify(FPList)
        //var json = JSON.parse(jsonString)

        for(let i=0; i<json.length; i++){
            var data = json[i]
            var idx = i+1

            result.push(
                <table key={idx} className="table_ty2 fp_tlist">
                    <tbody>
                        <tr className="hidden_type">
                            <td>{idx}</td>
                            <td>{data.cameraId}</td>
                            <td>{data.itisCd}</td>
                            <td>{data.trsmUtcTime}</td>
                            <td>{data.trsmYear}</td>
                            <td>{data.trsmTm}</td>
                            <td>{data.trsmMs}</td>
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
                        <h2 className="s_tit1">버스 승강장 혼잡 정보 서비스</h2>
                    </div>
                    <div className="list_cont list_cont_admin">
                        <table className="table_ty1 fp_tlist">
                            <thead>
                                <tr>
                                    <th>Row</th>
                                    <th>카메라ID</th>
                                    <th>ITIS코드</th>
                                    <th>전송UTC시간</th>
                                    <th>패킷전송일자</th>
                                    <th>패킷전송시간</th>
                                    <th>패킷전송밀리초</th>
                                </tr>
                            </thead>
                        </table>
                        {this.state.append_FPList}
                    </div>
                </article>
            </section>
        );
    }
}

export default floatingPopulationList;