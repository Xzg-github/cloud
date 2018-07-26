import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Carousel} from 'antd';
import Header from '../../components/Header';
import './App.less';

const imageUrl = (title) => {
  return `/imgs/${title}.png`;
};

class App extends Component {
  static propTypes = {
    className: PropTypes.string,
    bannerItems: PropTypes.array
  };

  header = () => {
    const props = {
      logoUrl: imageUrl('cloudlink'),
      items: [
        {key: 'home', title: '首页'},
        {key: 'production', title: '产品', children: [{key: 'p1', title: 'ePLD系统'}, {key: 'p2', title: 'WMS系统'}]},
        {key: 'client', title: '客户案例'},
        {key: 'company', title: '公司动态'},
        {key: 'contact', title: '联系我们'},
      ]
    };
    return <Header {...props} />;
  };

  banner = () => {
    const renderItem = (item, index) => {
      const style = {width: '100%', verticalAlign: 'top'};
      return <img key={index} src={item} style={style} alt='banner' />;
    };
    return (
      <Carousel autoplay>
        {this.props.bannerItems.map(renderItem)}
      </Carousel>
    );
  };

  footer = () => {
    return (
      <footer>
        <div>
          <div>
            <div><img src={imageUrl('footer_logo')} alt='logo'/></div>
            <div>深圳市云恋科技有限公司</div>
          </div>
          <div>
            <div>地址：深圳市福田保税区黄槐道3号深福保科技工业园B栋301F单元</div>
            <div>联系电话：+8675583580000</div>
            <div>传真：+8675523807500</div>
          </div>
          <div>
            <img src={imageUrl('footer_2d_code')} alt='2d code'/>
            <div>
              <div>扫一扫关注云恋科技</div>
              <div>更多详情</div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  extra = () => {
    return (
      <div data-role='extra'>
        <div>
          <img src={imageUrl('extra_phone')} alt='phone'/>
          <div style={{display: 'none'}}>
            <div>联系电话：</div>
            <div>+8675583580000</div>
            <div>传真：</div>
            <div>+8675523807500</div>
          </div>
        </div>
        <div>
          <img src={imageUrl('extra_2dcode')} alt='2dcode'/>
          <div style={{display: 'none'}}>
            <div><img src={imageUrl('footer_2d_code')} alt='2dcode'/></div>
            <div>扫一扫关注云恋科技</div>
            <div>更多详情</div>
          </div>
        </div>
        <div onClick={() => ReactDOM.findDOMNode(this).scrollTop = 0}>
          <img src={imageUrl('extra_top')} alt='top'/>
        </div>
      </div>
    );
  };

  componentDidMount() {
    // 对于不支持黏性布局的浏览器做兼容处理
    const root = ReactDOM.findDOMNode(this);
    const header = root.firstChild;
    if (window.getComputedStyle(header).position === 'static') {
      header.style.position = 'relative';
      root.onscroll = () => {
        header.style.transform = `translateY(${root.scrollTop}px)`;
      }
    }
  }

  render() {
    const {className, bannerItems, children} = this.props;
    return (
      <div className={className ? `App ${className}` : 'App'}>
        {this.header()}
        {bannerItems ? this.banner(bannerItems) : null}
        {children}
        {this.footer()}
        {this.extra()}
      </div>
    );
  }
}

export default App;
