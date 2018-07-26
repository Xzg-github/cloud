import React from 'react';
import App from '../App/App';
import Block from '../../components/Block';
import './ProductionEPLD.less';

const imageUrl = (title) => {
  return `/imgs/epld/${title}.png`;
};

const banner1Content = () => {
  return (
    <div data-role='banner1'>
      <div>ePLD云平台</div>
      <div>基于互联网和SaaS技术建立的全网互联互动、共享协同的可视化云平台；链接采购商、销售商、收货人、发货人、物流公司、承运商、司机、仓库、报关行等多方实体的上下游贯通，平行交织互动的新型物流网。</div>
    </div>
  );
};

const tongdian = () => {
  const items = [
    {title: '货主企业', content: ['订单全程监管难', '因为物流原因，影响终端客户体验']},
    {title: '物流公司', content: ['对综合物流业务管控力度弱', '缺乏承运商考核数据']},
    {title: '承运商', content: ['无法在线接单', '物流执行无法及时反馈']},
    {title: '司机', content: ['话语权低,处于链条底层，利益无法保证']},
    {title: '收货人', content: ['无货物跟踪信息', '被动收货']},
  ];
  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <div>{item.title}</div>
        <ul>{item.content.map((subItem, index) => <li key={index}>{subItem}</li>)}</ul>
      </div>
    );
  };
  return (
    <Block data-role='tongdian' title='物流行业痛点' items={items} renderItem={renderItem}>
      <h2>物流行业至今大面积的存在操作以纸质单据为主的现状，造成执行信息断层，物流成本高居不下的行业痛点。 </h2>
    </Block>
  );
};

const analysis = () => {
  const items = [
    {title: '基于订单的物流执行全景可视化', url: imageUrl('analysis1')},
    {title: '主动、实时的异常预警、监控', url: imageUrl('analysis2')},
    {title: '客户满意度提升', url: imageUrl('analysis3')},
    {title: '物流成本下降', url: imageUrl('analysis4')},
  ];
  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <img src={item.url} alt='logo' />
        <span>{item.title}</span>
      </div>
    );
  };
  return (
    <Block data-role='analysis' title='物流行业需求分析' items={items} renderItem={renderItem}>
      <h2>随着业务的迅速增长, 迫切需要利用现代化供应链管理水平，在订单管理，物流管控及信息系统等方面全方位进行改造。 </h2>
    </Block>
  );
};

export default function ProductionEPLD() {
  const bannerItems = [
    {url: imageUrl('banner1'), content: banner1Content()}
  ];
  return (
    <App className='ProductionEPLD' bannerItems={bannerItems}>
      {tongdian()}
      {analysis()}
    </App>
  );
};
