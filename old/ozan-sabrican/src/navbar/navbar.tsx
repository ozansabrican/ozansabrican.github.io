import * as React from 'react';
import './navbar.css';

const twitter = require('../twitter.svg');
const linkedin = require('../linkedin.svg');
const github = require('../github.svg');

class NavigationBar extends React.Component {
  public render() {
    return (
      <div className='navigation'>
        <div>
          <a className="link" href="#">About</a>
          <a className="link" href="#">Work</a>
          <a className="link" href="#">Contact</a>
        </div>
        <div className='sm-icons'>
          <img src={twitter} className="sm-icon" alt="logo" />
          <img src={linkedin} className="sm-icon" alt="logo" />
          <img src={github} className="sm-icon" alt="logo" />
        </div>
      </div>
    );
  }
}

export default NavigationBar;


