import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDCRipple } from '@material/ripple';
import './RippleBadge.scss';

// import "@material/button/mdc-button";

class RippleBadge extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      toggled: false
    };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.props['name']);
    const buttonRipple = new MDCRipple(this.myRef.current);
  }


  onClick = () => {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    const rootClasses = ['button-badge'];

    if (this.state.toggled) {
      rootClasses.push('toggled');
    }

    return (
      <div className={rootClasses.join(' ')}>
        <button onClick={this.onClick} className="mdc-button" ref={this.myRef}>
          <span className="mdc-button__label">
            <span className="mdc-button__circle"></span>
            <p className="fuck">fuck</p>
            <span className="mdc-button__text"> {this.props.text} </span>
          </span>
        </button>


        <style jsx>{`
        h1, p {
  font-family: Lato;
}

.button-badge {
  margin: 8px 0px;
  --mdc-theme-primary: green;

  --text-primary-on-light: black;
  --text-primary-on-dark: white;
}

.mdc-button__label {
  display: flex;
  align-items: center;
}

.mdc-button__text {
  margin-left: 16px;
  display: block;
  transition: 300ms;
}

div.toggled .mdc-button__text {
  margin-left: 0px;
}

div.toggled .mdc-button__circle {
  transform: scale(50);
}

div.toggled .mdc-button__text {
  color: var(--text-primary-on-dark);
  z-index: 2;
}

.mdc-button__circle {
  border-radius: 50%;
  width: 7.5px;
  height: 7.5px;
  background-color: var(--mdc-theme-primary);
  transition: 300ms;
  position: absolute;
}

.fuck {
  color: red;
}
      `}</style>
      </div>
    );
  }
}


export default RippleBadge;