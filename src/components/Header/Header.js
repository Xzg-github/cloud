import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Icon, Dropdown, Menu} from 'antd';
import './Header.less';

const imageUrl = (title) => {
  return `/imgs/${title}.png`;
};

class Header extends React.Component {
  static propTypes = {
    logoUrl: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  state = {visible: '', mobile: false};

  onMenuClick = () => {
    this.setState({visible: ''});
  };

  onMobileMenuClick = () => {
    this.setState({mobile: !this.state.mobile});
  };

  menuItem = (item) => {
    if (item.children) {
      return <Menu.SubMenu key={item.key} title={item.title}>{item.children.map(this.menuItem)}</Menu.SubMenu>;
    } else {
      return <Menu.Item key={item.key}><Link to={item.to}>{item.title}</Link></Menu.Item>;
    }
  };

  menu = (key, children) => {
    return (
      <Menu className='Header-menu' onClick={this.onMenuClick}>
        {children.map(this.menuItem)}
      </Menu>
    );
  };

  mobileMenu = (items) => {
    const onClick = (e) => {
      if (e.target.getAttribute('data-role') === 'mobile-menu') {
        this.setState({mobile: false});
      }
    };
    return (
      <div data-role='mobile-menu' onClick={onClick}>
        <Menu mode='inline' onClick={() => this.setState({mobile: false})}>
          {items.map(this.menuItem)}
        </Menu>
      </div>
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
          <img src={imageUrl(this.state.mobile ? 'close' : 'menu')} alt='menu' onClick={this.onMobileMenuClick} />
          {this.state.mobile ? this.mobileMenu(items) : null}
        </div>
      </header>
    );
  }
}

export default Header;