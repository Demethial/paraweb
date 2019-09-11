import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import posed from 'react-pose';

import PlatformPng from '../assets/images/cross-platform.png';
import '../styles/global.css';


const CircleSolid = (props) =>
    <div onClick={props.onClick} style={{
        width: 20,
        height: 20,
        marginBottom: 10,
        backgroundColor: colorArrowNavigation,
        borderRadius: '50%'
    }} />


class WhatIs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div id="is">
                    <div className="container reverse">
                        <div className="wrapper-50">
                            <div className="text">
                                <h3>What is Paradigma CrossCheck</h3>
                                <p>
                                    It is a decentralized application platform that
                                    facilitates business development with professionals,
                                    in a monitorized environment using Blockchain.
                                </p>
                            </div>
                        </div>
                        <img className="logo" src={PlatformPng} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = () => {

}

export default (withStyles(styles, { withTheme: true })(WhatIs));