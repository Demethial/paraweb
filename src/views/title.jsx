import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import posed from 'react-pose';
import SwipeableViews from 'react-swipeable-views';
import { showPresentationView } from '../redux/rootActions'
import { connect } from "react-redux";

import blockchainSvg from '../assets/images/blockchain.png';


const CircleSolid = (props) =>
    <div onClick={props.onClick} style={{
        width: 20,
        height: 20,
        marginBottom: 10,
        backgroundColor: colorArrowNavigation,
        borderRadius: '50%'
    }} />


class Title extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className='landing'>
                    <div className="landingText">
                        <h1>BUSINESS DEVELOPMENT</h1>
                        <h2>BASED IN SMART CONTRACTS AND IOT DEVICES</h2>
                        <p>POWERED BY BLOCKSTACK</p>
                    </div>
                    <img className="logo" src={blockchainSvg} alt="" />
                    <div className="wall">
                    </div>
                </div>
            </div>
        );
    }
}

const styles = () => {

}

const mapStateToProps = state => {
    return { presentationIndex: state.presentationIndex };
};

export default withStyles(styles, { withTheme: true })(Title);