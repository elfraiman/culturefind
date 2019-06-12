import React, { Component } from 'react';
import { MDCRipple } from '@material/ripple';
import './RippleBadge.scss';
// import "@material/button/mdc-button";

class RippleBadge extends Component<any, any> {
  public myRef: any = React.createRef();

  constructor(props: any) {
    super(props);
    this.state = {
      name: 'React',
      toggled: false
    };

    
  }

  componentDidMount() {
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
            <span className="mdc-button__text"> {this.props.text} </span>
          </span>
        </button>
      </div>
    );
  }
}


export default RippleBadge;