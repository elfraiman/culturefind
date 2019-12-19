import React, { Component } from 'react';
// import { MDCRipple } from '@material/ripple';
import css from './RippleBadge.module.scss';

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
    // const buttonRipple = new MDCRipple(this.myRef.current);
  }

  onClick = () => {
    this.setState({
      toggled: !this.state.toggled
    });
  };

  render() {
    const rootClasses = [css['button-badge']];

    if (this.state.toggled) {
      rootClasses.push(css['toggled']);
    }

    console.log(this.props.disabled, 'disabled');

    return (
      <div className={css.tooltip}>
        {this.props.description ? (
          <span
            className={css.tooltiptext}
            style={{ backgroundColor: this.props.color }}
          >
            {this.props.description}
          </span>
        ) : (
          <></>
        )}

        <div className={rootClasses.join(' ')}>
          <button
            onClick={this.onClick}
            className="mdc-button"
            ref={this.myRef}
            disabled={this.props.disabled}
          >
            <span className={css['mdc-button__label']}>
              <span
                className={css['mdc-button__circle']}
                style={{ backgroundColor: this.props.color }}
              ></span>
              <span
                className={css['mdc-button__text']}
                style={{
                  color: this.state.toggled ? 'white' : this.props.color
                }}
              >
                {' '}
                {this.props.text}{' '}
              </span>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default RippleBadge;
