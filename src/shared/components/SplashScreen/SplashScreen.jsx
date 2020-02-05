import React, {Component} from 'react';
import Box from "@material-ui/core/Box";
import Logo from "../../../assets/images/logo-pruden.png";

class SplashScreen extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div style={{backgroundColor:'red', width: window.innerWidth, height:window.innerHeight}}>
                <Box
                    flexWrap="wrap"
                    display="flex"
                    flexDirection="column"
                    textAlign="center"
                >
                    <div style={{marginTop: window.innerHeight * 25 / window.innerHeight + "%"}}>
                        <div>
                            <text style={{fontSize:50, fontWeight:'bold', color:'white'}}>EDP</text>
                        </div>
                        <div>
                            <text style={{fontSize:18, fontWeight:'light', color:'white'}}>Enterpreneur Development Program</text>
                        </div>
                    </div>
                    <div style={{marginTop: window.innerHeight * 80 / window.innerHeight + "%"}}>
                        <img src={Logo} width="120" alt="Bossjob"/>
                    </div>
                </Box>
            </div>
        );
    }
}

SplashScreen.propTypes = {};

export default SplashScreen;