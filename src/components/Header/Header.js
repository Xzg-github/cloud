import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Icon, Dropdown, Menu} from 'antd';
import './Header.less';

class Header extends React.Component {
  static propTypes = {
    logoUrl: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  state = {visible: ''};

  onMenuClick = () => {
    this.setState({visible: ''});
  };

  menu = (key, children) => {
    return (
      <Menu className='Header-menu' onClick={this.onMenuClick}>
        {children.map((item) => <Menu.Item key={item.key}><Link to={item.to}>{item.title}</Link></Menu.Item>)}
      </Menu>
    );
  };

  navItem = (item) => {
    if (item.children) {
      const props = {
        key: item.key,
        overlay: this.menu(item.key, item.children),
        placement: 'bottomCenter',
        onVisibleChange: (visible) => this.setState({visible: visible ? item.key : ''})
      };
      return (
        <Dropdown {...props}>
          <span data-role='item' className={this.state.visible === item.key ? 'Header-item-hover' : null}>
            {item.title}<Icon type="down" style={{marginLeft: '3px'}} />
          </span>
        </Dropdown>
      );
    } else {
      return <Link key={item.key} to={item.to} data-role='item'>{item.title}</Link>;
    }
  };

  render() {
    const {logoUrl, items} = this.props;
    return (
      <header className='Header'>
        <div>
          <Link to='/'><img src={logoUrl} alt='logo'/></Link>
          <span>{items.map(this.navItem)}</span>
        </div>
      </header>
    );
  }
}

export default Header;