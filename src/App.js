import React, { Component } from 'react';
import './App.less';

const Header = ({logoUrl, items}) => {
  const renderItem = (item) => {
    return <span key={item.key} role='item'>{item.title}</span>;
  };
  return (
    <header className='Header'>
      <div>
        <img src={logoUrl} alt='logo'/>
        <span>{items.map(renderItem)}</span>
      </div>
    </header>
  );
};

class App extends Component {
  header = () => {
    const props = {
      logoUrl: '/imgs/cloudlink.png',
      items: [
        {key: 'home', title: '首页'},
        {key: 'key2', title: '产品显示'},
        {key: 'key3', title: '客户案例'},
        {key: 'key4', title: '公司动态'},
        {key: 'key5', title: '联系我们'},
      ]
    };
    return <Header {...props} />;
  };

  banner = () => {
    const props = {
      src: '/imgs/banner1.png',
      alt: 'banner',
      style: {
        width: '100%'
      }
    };
    return <div><img {...props} /></div>;
  };

  about = () => {
    const items = [
      {title: '零售行业', url: '/imgs/lingshou.png'},
      {title: '食品行业', url: '/imgs/shipin.png'},
      {title: '家居行业', url: '/imgs/jiaju.png'},
      {title: '医药行业', url: '/imgs/yiyao.png'},
      {title: '服装行业', url: '/imgs/fuzhuang.png'},
      {title: '电子行业', url: '/imgs/dianzi.png'},
      {title: '供应链3PL', url: '/imgs/gongyinglian.png'},
      {title: '更多其他行业', url: '/imgs/more.png'},
    ];
    const renderItem = (item, index) => {
      return (
        <div key={index}>
          <div><img src={item.url} alt='logo' /></div>
          <div>{item.title}</div>
        </div>
      );
    };
    return (
      <div role='about'>
        <div>
          <h1>关于我们</h1>
          <p>深圳市云恋科技有限公司是基于IT供应链平台的供应链综合服务商，核心产品为ePLD智能供应链平台。近15年的经验积累，为全球超过5000家涉及零售、食品、家居、医药、服装、电子以及供应链3PL等不同行业的客户，提供高效稳定并能创造价值的解决方案。</p>
          <p>云恋ePLD智能供应链平台是云恋科技基于多年行业经验打造的综合供应链信息管理平台，可供货主、物流公司、承运商、司机等多方协同使用，适用于商流订单管理、综合物流订单管理、配送、货代、跨境电商、内贸海运等多个供应链场景。</p>
          <p>云恋致力于对供应链的不断优化和革命，使合作伙伴不断获得更多的价值体现。</p>
          <div>{items.map(renderItem)}</div>
        </div>
      </div>
    );
  };

  business = () => {
    const items = [
      {title: 'ePLD智能供应链平台', url: '/imgs/business_pingtai.png', content: '全链全场景、点对点供应链管控，上下游业务对接无间隙，提高供应链运营效率'},
      {title: 'LLP领先物流服务', url: '/imgs/business_wuliufuwu.png', content: '专家级的物流管家服务，提供领先物流方案，建立优势物流资源池，优化物流采购和运作'},
      {title: '专业级业务赋能', url: '/imgs/business_funeng.png', content: '系统应用的高阶赋能，促进业务运作与软件系统的高度融合，呈现系统的最大价值'},
      {title: '精细化仓储管理系统', url: '/imgs/business_cangchu.png', content: '严谨的流程、精细化的库内管理，灵活强大的作业策略，完美覆盖B2B、B2C业务场景'}
    ];
    const renderItem = (item, index) => {
      return (
        <div key={index}>
          <div><img src={item.url} alt='business' /></div>
          <div>{item.title}</div>
          <div><i /></div>
          <div>{item.content}</div>
        </div>
      );
    };
    return (
      <div role='business'>
        <div>
          <h1>业务模块</h1>
          <div>{items.map(renderItem)}</div>
        </div>
      </div>
    );
  };

  advantage = () => {
    const items = [
      {title: '系统与业务融合', content: '开发团队具备十多年供应链和物流行业相关经验，系统设计更贴近实际业务场景'},
      {title: '精细化无缝管理', content: '平台级架构，链接上下游系统，实现各职能模块间的信息无缝对接，供应链管理全链透明化'},
      {title: '高效供应链管理', content: '供应链专家为客户业务运营赋能，帮助客户规范供应链管理、提高供应链效率、降低成本'},
    ];
    const renderItem = (item, index) => {
      return (
        <div key={index}>
          <div>{item.title}</div>
          <div>{item.content}</div>
        </div>
      );
    };
    return (
      <div role='advantage'>
        <div>
          <h1>我们的优势</h1>
          <div>{items.map(renderItem)}</div>
        </div>
      </div>
    );
  };

  case1 = () => {
    const items = [
      {title: '综合物流行业', url: '/imgs/case1_wuliu.png', bgUrl: '/imgs/case1_bg_wuliu.png'},
      {title: '大型零售行业', url: '/imgs/case1_lingshou.png', bgUrl: '/imgs/case1_bg_lingshou.png'},
      {title: '食品行业', url: '/imgs/case1_shiping.png', bgUrl: '/imgs/case1_bg_shiping.png'},
    ];
    const renderItem = (item, index) => {
      return (
        <div key={index} style={{backgroundImage: `url(${item.bgUrl})`}}>
          <div><img src={item.url} alt='logo'/></div>
          <div><i /></div>
          <div>{item.title}</div>
        </div>
      );
    };
    return (
      <div role='case1'>
        <div>
          <h1>精选行业案例</h1>
          <h2>为众多行业、领域提供基于IT供应链平台的供应链综合服务</h2>
          <div>{items.map(renderItem)}</div>
        </div>
      </div>
    );
  };

  case2 = () => {

  };

  footer = () => {

  };

  render() {
    return (
      <div className="App">
        {this.header()}
        {this.banner()}
        {this.about()}
        {this.business()}
        {this.advantage()}
        {this.case1()}
        {this.case2()}
        {this.footer()}
      </div>
    );
  }
}

export default App;
