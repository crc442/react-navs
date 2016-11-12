import React, { Component, PropTypes } from 'react';
import NavItem from '../NavItem'

export default class index extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.headerStyle = {
      display: 'flex',
      flexWrap: 'nowrap',
      overflow: 'auto'
    }

    this.navStyle = {
      display: 'flex',
      'flexWrap': 'nowrap'
    }
  }

  render() {
    const { items, selected, onSelection } = this.props;
    const navitems = items.map((item, i) => {
      return <NavItem key={i} id={item.id} url={item.url} active={item.id === selected} title={item.title} onSelect={onSelection} />
    });

    return (
      <div>
      	<header style={this.headerStyle}>
          <nav style={this.navStyle}>
            { navitems }
          </nav> 
        </header>
      </div>
    );
  }
}
