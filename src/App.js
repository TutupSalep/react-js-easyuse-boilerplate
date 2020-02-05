import React, { Component } from 'react';
import './App.css';

import Header from './shared/components/MainMenu/Header'
// import Search from './shared/components/MainMenu/Search'
import Content from './shared/components/MainMenu/Content'
import Search from './shared/components/MainMenu/Search'
import SplashScreen from './shared/components/SplashScreen/SplashScreen'
import {connect} from "react-redux";
import {searchEmployeeAchievement} from "./reducers/app-redux";
import {QueryString} from "./helper/Helper";


const mapStateToProps = (state) => ({
    dataSearch: state.dataSearch
});

const mapDispatchToProps = (dispatch) => ({
    searchEmployeeAchievement: (body) => {dispatch(searchEmployeeAchievement(body))}
});

let timer;

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataSearch: null,
            searchText:'',
            splashScreen:true
        }
    }

    componentDidMount() {
        const body = {
            userId:"barrans@barrans.co.id",
            year:"2019"
        };
        this.props.searchEmployeeAchievement(body);
        timer = setInterval(() => {
            this.setState({
               splashScreen:false
            });
            clearInterval(timer);
        }, 5000);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps);
        this.setState({
            dataSearch: nextProps.dataSearch
        })
    }

    componentWillUnmount() {
        clearInterval(timer)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('ganti props',nextProps,nextState);
        if (this.state.splashScreen !== nextState.splashScreen) {
            return true
        }
    }

    render() {
        if (this.state.splashScreen === true && this.state.dataSearch === null) {
            return (
                <div className="App">
                    <div className="App-Wrapper">
                        <SplashScreen />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <div className="App-Wrapper">
                        <Header/>
                        {/*<Search searchData={this.handleSearch}/>*/}
                        <Content data={this.state.dataSearch}/>
                    </div>
                </div>
            )
        }
    }

    handleSearch = (value) => {
        console.log(value);
        this.setState({searchText: value});
        const body = {
            userId:value,
            year:"2019"
        };
        this.props.searchEmployeeAchievement(body);
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
