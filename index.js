import React, { Component } from 'react';
import { render } from 'react-dom';
import Navigation from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      links: [ {label: 'Link A', url:'/linkA'}, 
      {label: 'Link B', url:'/linkB'}, 
      {label: 'Link C', url:'/linkC'},  ]
    };
  }

  render() {
    return (
      <div>
        <Navigation name={this.state.name} links={this.state.links} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
