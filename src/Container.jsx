import React, { Component } from 'react';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './styles/global.css';

// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './views/Home';
import Why from './views/Why';



function Container() {
  return (
    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <div style={{ zIndex: 2 }}>
        {/* <Header /> */}
      </div>

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={600}
            >
              <Switch location={location}>
                <Route
                  exact path="/why"
                  component={Why}
                />
                <Route
                  path="/"
                  component={Home}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      {/* </div> */}

      {/* zIndex: 2 <-- configurado dentro del componente Footer */}
      {/* <Footer /> */}
    </div>
  );
}


export default Container;
