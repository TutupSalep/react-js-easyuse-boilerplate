import React from 'react'
import './Search.css'
import SearchLogo from "../../../../assets/images/Search.png";

const ColoredLine = () => (
    <hr
        style={{
            color: "red",
            backgroundColor: "red",
            height: 1,
            width: window.innerWidth * 85 / window.innerWidth + "%",
            borderWidth: 0
        }}
    />
);

class Search extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <div className='search'>
                    <img src={SearchLogo} className="iconSearch" />
                    <input type="text"
                           className="searchBar"
                           style={{width: window.innerWidth * 80 /window.innerWidth + "%"}}
                           placeholder="Search for employee Email"
                        // onChange={event => {this.setState({query: event.target.value})}}
                           onKeyDown={this._handleKeyDown}/>
                </div>
                <ColoredLine/>
            </div>
        );
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.searchData(e.target.value);
            // console.log(this.props);
        }
    }
}

Search.propTypes = {};

export default Search;