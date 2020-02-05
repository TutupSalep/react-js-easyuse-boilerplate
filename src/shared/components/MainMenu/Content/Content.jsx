import React, {Component} from 'react';
// import './Content.css'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {Doughnut} from "react-chartjs-2";


let monthList = [
    { "name": "January",  "target": 0, "achievement": 0 },
    { "name": "February",  "target": 0, "achievement": 0 },
    { "name": "March",  "target": 0, "achievement": 0 },
    { "name": "April",  "target": 0, "achievement": 0 },
    { "name": "Mei",  "target": 0, "achievement": 0 },
    { "name": "June",  "target": 0, "achievement": 0 },
    { "name": "July",  "target": 0, "achievement": 0 },
    { "name": "August",  "target": 0, "achievement": 0 },
    { "name": "September",  "target": 0, "achievement": 0 },
    { "name": "October",  "target": 0, "achievement": 0 },
    { "name": "November",  "target": 0, "achievement": 0 },
    { "name": "December", "target": 0, "achievement": 0 },
];

const data = {
    labels: [
        'Total Achievement',
        'Total Target',
    ],
    datasets: [{
        data: [9, 30],
        backgroundColor: [
            '#ff0617',
            '#aba6a5',
        ],
        hoverBackgroundColor: [
            '#ff0617',
            '#aba6a5',
        ]
    }]
};

class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:null
        }
    }

    componentWillMount() {

    }

    async componentDidMount() {
        console.log("data dari app", this.props.data.response.body);
        // let datas = this.props.data.response.body;
        // for (let i = 0; i < datas.achivement; i++) {
        //     datas.splice();
        // }
        this.setState({data:this.props.data.response.body})
    }

    componentWillReceiveProps(nextProps) {
        this.setState({data:nextProps.data.response.body});
    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        let objToday = new Date(),
            weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayOfWeek = weekday[objToday.getDay()],
            domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
            dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            curMonth = months[objToday.getMonth()],
            curYear = objToday.getFullYear(),
            curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
            curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
            curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
            curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
        let today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ", " + curYear + ", " +  curHour + ":" + curMinute + curMeridiem;
        console.log("ini ukuran layar", window.innerWidth);
        if (this.state.data !== null) {
            console.log("ada data");
            return (
                <div style={{backgroundColor:"#ffffff", marginTop:10, width: '100%'}}>
                    <Box
                        flexWrap="wrap"
                        display="flex"
                        flexDirection="row"
                        bgcolor="#ffffff"
                        style={{padding:10}}
                    >
                        {this.state.data.achivements.map((month, i) => {
                            if (window.innerWidth >= 768) {
                                return (
                                    <Grid item xs={9} sm={4}
                                          container
                                          wrap={"wrap"}
                                          direction="row"
                                          justify="center"
                                          alignItems="center">
                                        <div style={{height:100, width:300, margin:2, backgroundColor:'#ffffff',border: month.name === curMonth ? '1px solid red' : '1px solid gray', borderRadius:10, textAlign:'center', justifyContent:'center'}} key={i}>
                                            <text>{month.name}</text>
                                            <div style={{textAlign:'left'}}>
                                                <Box
                                                    flexWrap="wrap"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <text style={{fontSize:12,marginTop:5, marginBottom:5, marginLeft:5}}>Target : </text>
                                                    <text style={{fontSize:12,marginTop:5, marginBottom:5, marginLeft:5}}>{month.target}</text>
                                                </Box>
                                                <Box
                                                    flexWrap="stretch"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <div style={{width:'75%', height:10, backgroundColor:"#ffffff", border: '1px solid gray', marginLeft:5}}>
                                                        <div style={{width:"100%", height:10, backgroundColor:"gray"}}> </div>
                                                    </div>
                                                    <text style={{fontSize:10, marginLeft:5}}>100 %</text>
                                                </Box>
                                            </div>
                                            <div style={{textAlign:'left'}}>
                                                <Box
                                                    flexWrap="wrap"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <text style={{fontSize:12,marginTop:5, marginBottom:5, marginLeft:5}}>Achievement : </text>
                                                    <text style={{fontSize:12,marginTop:5, marginBottom:5, marginLeft:5}}>{month.achivement}</text>
                                                </Box>
                                                <Box
                                                    flexWrap="stretch"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <div style={{width:'75%', height:10, backgroundColor:"#ffffff", border: '1px solid gray', marginLeft:5}}>
                                                        <div style={{width: month.achivement * 100 / month.target + "%", height:10, backgroundColor:"#ff0a16"}}> </div>
                                                    </div>
                                                    <text style={{fontSize:10, marginLeft:5}}>{(month.achivement * 100 / month.target).toFixed(2)} %</text>
                                                </Box>
                                            </div>
                                        </div>
                                    </Grid>
                                )
                            } else {
                                return (
                                    <Grid item xs={4} sm={2}
                                          container
                                          wrap={"wrap"}
                                          direction="row"
                                          justify="center"
                                          alignItems="center">
                                        <div style={{height:70, width:200, margin:2, backgroundColor:'#ffffff',border: month.name === curMonth ? '1px solid red' : '1px solid gray', borderRadius:10, textAlign:'center', justifyContent:'center'}} key={i}>
                                            <text>{month.name}</text>
                                            <div style={{textAlign:'left'}}>
                                                <Box
                                                    flexWrap="wrap"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <text style={{fontSize:8, marginLeft:5}}>Target : </text>
                                                    <text style={{fontSize:8, marginLeft:5}}>{month.target}</text>
                                                </Box>
                                                <Box
                                                    flexWrap="stretch"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <div style={{width:'65%', height:5, backgroundColor:"#ffffff", border: '1px solid gray', marginLeft:5}}>
                                                        <div style={{width:"100%", height:5, backgroundColor:"gray"}}> </div>
                                                    </div>
                                                    <text style={{fontSize:5, marginLeft:5}}>100 %</text>
                                                </Box>
                                            </div>
                                            <div style={{textAlign:'left'}}>
                                                <Box
                                                    flexWrap="wrap"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <text style={{fontSize:8, marginLeft:5}}>Achievement : </text>
                                                    <text style={{fontSize:8, marginLeft:5}}>{month.achivement}</text>
                                                </Box>
                                                <Box
                                                    flexWrap="stretch"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <div style={{width:'65%', height:5, backgroundColor:"#ffffff", border: '1px solid gray', marginLeft:5}}>
                                                        <div style={{width: month.achivement * 100 / month.target + "%", height:5, backgroundColor:"#ff0a16"}}> </div>
                                                    </div>
                                                    <text style={{fontSize:5, marginLeft:5}}>{(month.achivement * 100 / month.target).toFixed(2)} %</text>
                                                </Box>
                                            </div>
                                        </div>
                                    </Grid>
                                )
                            }
                        })}
                    </Box>
                    <Box
                        flexWrap="wrap"
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                    >
                        <div>
                            <text>Performance Accumulation</text>
                            <Box
                                flexWrap="wrap"
                                display="flex"
                                flexDirection="column"
                                textAlign="center"
                            >
                                <div style={{height:300, width:300, justifyContent:'center', alignSelf:'center', flex:1}}>
                                    <div style={{position:'relative', top:100, bottom:100}}>
                                        <text style={{fontSize:20, fontWeight:'bold'}}>30%</text>
                                    </div>
                                    <Doughnut data={data}/>
                                    <text style={{color:"#8a8a8a", fontSize:10}}>{today}</text>
                                </div>
                            </Box>
                        </div>
                    </Box>
                </div>
            )
        } else {
            console.log("belum ada data");
            return (
                <div style={{backgroundColor:"#ffffff", marginTop:10, width: '100%'}}>
                    <Box
                        flexWrap="wrap"
                        display="flex"
                        flexDirection="row"
                        bgcolor="#ffffff"
                        style={{padding:10}}
                    >
                        {monthList.map((month, i) => {
                            if (window.innerWidth >= 768) {
                                return (
                                    <Grid item xs={9} sm={4}
                                          container
                                          wrap={"wrap"}
                                          direction="row"
                                          justify="center"
                                          alignItems="center">
                                        <div style={{height:100, width:300, margin:2, backgroundColor:'#ffffff',border: month.name === curMonth ? '1px solid red' : '1px solid gray', borderRadius:10, textAlign:'center', justifyContent:'center'}} key={i}>
                                            <text>{month.name}</text>
                                            <div style={{textAlign:'left'}}>
                                                <Box
                                                    flexWrap="wrap"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <text style={{fontSize:12,marginTop:5, marginBottom:5, marginLeft:5}}>Target : </text>
                                                    <text style={{fontSize:12,marginTop:5, marginBottom:5, marginLeft:5}}>{month.target}</text>
                                                </Box>
                                                <Box
                                                    flexWrap="stretch"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <div style={{width:'75%', height:10, backgroundColor:"#ffffff", border: '1px solid gray', marginLeft:5}}>
                                                        <div style={{width:"100%", height:10, backgroundColor:"gray"}}> </div>
                                                    </div>
                                                    <text style={{fontSize:10, marginLeft:5}}>100 %</text>
                                                </Box>
                                            </div>
                                            <div style={{textAlign:'left'}}>
                                                <Box
                                                    flexWrap="wrap"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <text style={{fontSize:12,marginTop:5, marginBottom:5, marginLeft:5}}>Achievement : </text>
                                                    <text style={{fontSize:12,marginTop:5, marginBottom:5, marginLeft:5}}>{month.achievement}</text>
                                                </Box>
                                                <Box
                                                    flexWrap="stretch"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <div style={{width:'75%', height:10, backgroundColor:"#ffffff", border: '1px solid gray', marginLeft:5}}>
                                                        <div style={{width: month.achievement * 100 / month.target + "%", height:10, backgroundColor:"#ff0a16"}}> </div>
                                                    </div>
                                                    <text style={{fontSize:10, marginLeft:5}}>{(month.achievement * 100 / month.target).toFixed(2)} %</text>
                                                </Box>
                                            </div>
                                        </div>
                                    </Grid>
                                )
                            } else {
                                return (
                                    <Grid item xs={4} sm={2}
                                          container
                                          wrap={"wrap"}
                                          direction="row"
                                          justify="center"
                                          alignItems="center">
                                        <div style={{height:70, width:200, margin:2, backgroundColor:'#ffffff',border: month.name === curMonth ? '1px solid red' : '1px solid gray', borderRadius:10, textAlign:'center', justifyContent:'center'}} key={i}>
                                            <text>{month.name}</text>
                                            <div style={{textAlign:'left'}}>
                                                <Box
                                                    flexWrap="wrap"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <text style={{fontSize:8, marginLeft:5}}>Target : </text>
                                                    <text style={{fontSize:8, marginLeft:5}}>{month.target}</text>
                                                </Box>
                                                <Box
                                                    flexWrap="stretch"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <div style={{width:'65%', height:5, backgroundColor:"#ffffff", border: '1px solid gray', marginLeft:5}}>
                                                        <div style={{width:"100%", height:5, backgroundColor:"gray"}}> </div>
                                                    </div>
                                                    <text style={{fontSize:5, marginLeft:5}}>100 %</text>
                                                </Box>
                                            </div>
                                            <div style={{textAlign:'left'}}>
                                                <Box
                                                    flexWrap="wrap"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <text style={{fontSize:8, marginLeft:5}}>Achievement : </text>
                                                    <text style={{fontSize:8, marginLeft:5}}>{month.achievement}</text>
                                                </Box>
                                                <Box
                                                    flexWrap="stretch"
                                                    display="flex"
                                                    flexDirection="row"
                                                    textAlign="left"
                                                    justify="flex-start"
                                                >
                                                    <div style={{width:'65%', height:5, backgroundColor:"#ffffff", border: '1px solid gray', marginLeft:5}}>
                                                        <div style={{width: month.achievement * 100 / month.target + "%", height:5, backgroundColor:"#ff0a16"}}> </div>
                                                    </div>
                                                    <text style={{fontSize:5, marginLeft:5}}>{(month.achievement * 100 / month.target).toFixed(2)} %</text>
                                                </Box>
                                            </div>
                                        </div>
                                    </Grid>
                                )
                            }
                        })}
                    </Box>
                    <Box
                        flexWrap="wrap"
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                    >
                        <div>
                            <text>Performance Accumulation</text>
                            <Box
                                flexWrap="wrap"
                                display="flex"
                                flexDirection="column"
                                textAlign="center"
                            >
                                <div style={{height:300, width:300, justifyContent:'center', alignSelf:'center', flex:1}}>
                                    <div style={{position:'relative', top:100, bottom:100}}>
                                        <text style={{fontSize:20, fontWeight:'bold'}}>30%</text>
                                    </div>
                                    <Doughnut data={data}/>
                                    <text style={{color:"#8a8a8a", fontSize:10}}>{today}</text>
                                </div>
                            </Box>
                        </div>
                    </Box>
                </div>
            )
        }
    }
}

export default Content