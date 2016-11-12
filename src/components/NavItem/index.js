import React from 'react';

export default class NavElement extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    id: React.PropTypes.number,
    url: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.elementstyle = {
      flex: '0 0 auto',
      padding: '10px 10px',
      WebkitOverflowScrolling: 'touch'
    };

  }

  handleClick = () => {
    this.props.onSelect(this.props)
  }

  render() {
    const { id, title, url } = this.props;

    const buttonStyle = {
      background: 'none',
      border: 'none',
      outline: 'none',
      fontSize: '18px',
      fontWeight: '300',
      color: this.props.active ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)' 
    }

    return (
      <span style={this.elementstyle}>
        <button style={buttonStyle} key={id} onClick={this.handleClick}>{title}</button>
      </span>
    );
  }
}
