import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { changeIndexHome } from '../redux/rootActions'
import { connect } from "react-redux";
import WheelReact from 'wheel-react';
import { Typography } from '@material-ui/core';
import posed from 'react-pose';
import SwipeableViews from 'react-swipeable-views';

import Title from '../views/title';
import WhatIs from '../views/whatIs';

import blockchainSvg from '../assets/images/blockchain.png';
import whatIs from '../views/whatIs';


const CircleSolid = (props) =>
  <div onClick={props.onClick} style={{
    width: 20,
    height: 20,
    marginBottom: 10,
    backgroundColor: colorArrowNavigation,
    borderRadius: '50%'
  }} />


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }

    WheelReact.config({
      up: () => {
        this.movement('down');
        console.log('Down');
      },
      down: () => {
        this.movement('up');
        console.log('Up');
      },
    });
  }

  movement = (move) => {
    if (move === 'up' && this.props.presentationIndex > 0) {
      this.props.changeIndexHome(this.props.presentationIndex - 1);
    }
    if (move === 'down' && this.props.presentationIndex < 1) {
      this.props.changeIndexHome(this.props.presentationIndex + 1);
    }
  }

  componentDidMount() {

  }

  render() {
    console.log(this.props.presentationIndex)
    return (

      <SwipeableViews
        resistance
        containerStyle={{ height: '100vh', width: '100vw' }}
        axis={'y'} index={this.props.presentationIndex}
        {...WheelReact.events}>

        <Title />
        <WhatIs />
        
      </SwipeableViews>

    );
  }
}

const styles = () => {

}

const mapStateToProps = store => {
  return { presentationIndex: store.presentationIndex };
};

export default connect(mapStateToProps, { changeIndexHome })(withStyles(styles, { withTheme: true })(HomeScreen));