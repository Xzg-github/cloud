import React from 'react';
import App from '../App/App';
import Block from '../../components/Block';
import './Home.less';

const imageUrl = (title) => {
  return `/imgs/home/${title}.png`;
};

const about = () => {
  const items = [
    {title: '零售行业', url: imageUrl('lingshou')},
    {title: '食品行业', url: imageUrl('shipin')},
    {title: '家居行业', url: imageUrl('jiaju')},
    {title: '医药行业', url: imageUrl('yiyao')},
    {title: '服装行业', url: imageUrl('fuzhuang')},
    {title: '电子行业', url: imageUrl('dianzi')},
    {title: '供应链3PL', url: imageUrl('gongyinglian')},
    {title: '更多其他行业', url: imageUrl('more')},
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
    <Block data-role='about' title='关于我们' items={items} renderItem={renderItem}>
      <p>深圳市云恋科技有限公司是基于IT供应链平台的供应链综合服务商，核心产品为ePLD智能供应链平台。近15年的经验积累，为全球超过5000家涉及零售、食品、家居、医药、服装、电子以及供应链3PL等不同行业的客户，提供高效稳定并能创造价值的解决方案。</p>
      <p>云恋ePLD智能供应链平台是云恋科技基于多年行业经验打造的综合供应链信息管理平台，可供货主、物流公司、承运商、司机等多方协同使用，适用于商流订单管理、综合物流订单管理、配送、货代、跨境电商、内贸海运等多个供应链场景。</p>
      <p>云恋致力于对供应链的不断优化和革命，使合作伙伴不断获得更多的价值体现。</p>
    </Block>
  );
};

const business = () => {
  const items = [
    {title: 'ePLD智能供应链平台', url: imageUrl('business_pingtai'), content: '全链全场景、点对点供应链管控，上下游业务对接无间隙，提高供应链运营效率'},
    {title: 'LLP领先物流服务', url: imageUrl('business_wuliufuwu'), content: '专家级的物流管家服务，提供领先物流方案，建立优势物流资源池，优化物流采购和运作'},
    {title: '专业级业务赋能', url: imageUrl('business_funeng'), content: '系统应用的高阶赋能，促进业务运作与软件系统的高度融合，呈现系统的最大价值'},
    {title: '精细化仓储管理系统', url: imageUrl('business_cangchu'), content: '严谨的流程、精细化的库内管理，灵活强大的作业策略，完美覆盖B2B、B2C业务场景'}
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
  return <Block data-role='business' title='业务模块' items={items} renderItem={renderItem} bkUrl={imageUrl('bg_business')}/>;
};

const advantage = () => {
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
  return <Block data-role='advantage' title='我们的优势' items={items} renderItem={renderItem} bkUrl={imageUrl('bg_advantage')} />;
};

const case1Hover = (title, description, items) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
      <div>了解详情</div>
    </div>
  );
};

const case1 = () => {
  const items = [{
    title: '综合物流行业',
    url: imageUrl('case1_wuliu'),
    bgUrl: imageUrl('case1_bg_wuliu'),
    description: '业务涵盖港口、航运管理、铁路及公路多式联运、仓储等综合物流服务',
    children: [
      '系统集成化',
      '业务协同化',
      '操作透明化',
      '作业标准化',
      '财务结算统一化'
    ]
  }, {
    title: '大型零售行业',
    url: imageUrl('case1_lingshou'),
    bgUrl: imageUrl('case1_bg_lingshou'),
    description: '随时掌握库存与订单发货情况，提供线上业务支持',
    children: [
      '自动接收PO，划分物流责任；',
      '供货商能发起出货预约，检测出货预约的准确性；',
      '能根据预约生成物流订单，能对物流订单进行拆分、计划；',
      '能向DC发起交货预约；',
      '能自动分派供应商、并对运输执行过程进行监控'
    ]
  }, {
    title: '食品行业',
    url: imageUrl('case1_shiping'),
    bgUrl: imageUrl('case1_bg_shiping'),
    description: '精细化仓库管理，自动化仓储操作',
    children: [
      '多层级、多货主、多策略管理，实现库存货权精确管理',
      '批属性管理以及个性化功能，实现对效期、库龄等多维度管理',
      '基于库存效期、渠道发货要求，实现自动管理效期并区分库存，实现不同渠道发货自动拣选库存，波次分拣策略',
      '自动化设备集成，件分拣机、箱分拣机、DPS、流水线'
    ]
  },
  ];
  const renderItem = (item, index) => {
    return (
      <div key={index} style={{backgroundImage: `url(${item.bgUrl})`}}>
        <div><img src={item.url} alt='logo'/></div>
        <div style={{lineHeight: 0}}><i /></div>
        <div>{item.title}</div>
        {case1Hover(item.title, item.description, item.children)}
      </div>
    );
  };
  return (
    <Block data-role='case1' title='精选行业案例' items={items} renderItem={renderItem}>
      <h2>为众多行业、领域提供基于IT供应链平台的供应链综合服务</h2>
    </Block>
  );
};

const case2 = () => {
  const items = (new Array(12)).fill(0).map((item, index) => imageUrl(`case2_logo${index + 1}`));
  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <img src={item} alt='logo'/>
      </div>
    );
  };
  return <Block data-role='case2' title='更多成功案例' items={items} renderItem={renderItem} bkUrl={imageUrl('bg_case2')} />;
};

export default function Home() {
  const bannerItems = (new Array(1)).fill(0).map((item, index) => imageUrl(`banner${index + 1}`));
  return (
    <App className='Home' bannerItems={bannerItems}>
      {about()}
      {business()}
      {advantage()}
      {case1()}
      {case2()}
    </App>
  );
};