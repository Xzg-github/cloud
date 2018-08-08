import React, { Component } from 'react';
import Header from '../../components/Header';
import './App.less';

const imageUrl = (title) => {
  return `/imgs/${title}.png`;
};

class App extends Component {
  header = () => {
    const props = {
      logoUrl: imageUrl('cloudlink'),
      items: [
        {key: 'home', title: '首页', to: '/'},
        {
          key: 'production',
          title: '产品',
          children: [
            {key: 'p1', title: 'ePLD系统', to: '/product/epld'},
            {key: 'p2', title: 'WMS系统', to: '/product/wms'}
          ]
        },
        {key: 'client', title: '客户案例', to: '/case'},
        //{key: 'company', title: '公司动态', to: '/company'},
        {key: 'contact', title: '联系我们', to: '/contact'},
      ]
    };
    return <Header {...props} />;
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
        <div onClick={() => window.scrollTo(0, 0)}>
          <img src={imageUrl('extra_top')} alt='top'/>
        </div>
      </div>
    );
  };

  render() {
    const {className, children} = this.props;
    return (
      <div className={className ? `App ${className}` : 'App'}>
        {this.header()}
        {children}
        {this.footer()}
        {this.extra()}
      </div>
    );
  }
}

export default App;
