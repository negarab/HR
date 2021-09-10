import React, {Component} from "react";
import {Text,View} from "react-native";
import {Router,Scene} from 'react-native-router-flux';
 
import LoginForm from './LoginForm';
import LoadingScene from './scenes/LoadingScene';
import AuthScene from './scenes/AuthScene';

export default function App() {
  render(); {
  return (
  <Router>
  <Scene key="root">
    <Scene key="loading" Component={LoginForm} initial={true}></Scene>
    <Scene key="auth" Component={AuthScene}></Scene>
  </Scene>
  </Router>
  );
}
}
//export default App;