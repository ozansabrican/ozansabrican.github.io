import * as React from 'react';
import Home from './home/home'
import NavigationBar from './navbar/navbar'
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NavigationBar />
        <Home />
      </div>
    );
  }
}

export default App;