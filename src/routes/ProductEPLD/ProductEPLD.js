import React from 'react';
import App from '../App/App';
import Banner from '../../components/Banner';
import Block from '../../components/Block';
import List from '../../components/List';
import './ProductEPLD.less';

const imageUrl = (title) => {
  return `/imgs/epld/${title}.png`;
};

const banner = () => {
  return (
    <Banner data-role='banner' url={imageUrl('banner')}>
      <div>ePLD云平台</div>
      <div>基于互联网和SaaS技术建立的全网互联互动、共享协同的可视化云平台；链接采购商、销售商、收货人、发货人、物流公司、承运商、司机、仓库、报关行等多方实体的上下游贯通，平行交织互动的新型物流网。</div>
      <img src={imageUrl('banner_ball')} alt='ball' />
    </Banner>
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
        <List items={item.content} />
      </div>
    );
  };
  return (
    <Block data-role='tongdian' title='物流行业痛点' items={items} renderItem={renderItem} smallTitle>
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
    <Block data-role='analysis' title='物流行业需求分析' items={items} renderItem={renderItem} smallTitle>
      <h2>随着业务的迅速增长, 迫切需要利用现代化供应链管理水平，在订单管理，物流管控及信息系统等方面全方位进行改造。 </h2>
    </Block>
  );
};

const advantage = () => {
  const items = [
    {
      title: '商流订单管理，协同收货人和发货人',
      content: [
        '对接上游ERP的采购订单、销售订单，基于供采双方约定的出货规则配置预约规则，供货商出货预约信息与采购订单自动匹配；',
        '界定供采双方的物流责任和现场交接时的费用，完成商流订单向物流订单的转换'
      ]
    },
    {
      title: '全品类物流订单管理，兼容多类型需求',
      content: [
        '订单类型：支持运输、仓储、报关、单证服务等全产品类型的物流订单接入',
        '订单拆分：支持基于货量纵向订单拆分和基于业务类型的横向订单拆分'
      ]
    },
    {
      title: '供应商/司机绩效评价，聪明派单选择',
      content: ['多维度的供应商/司机评价指标；基于静态（资质）和动态（业务）数据进行供应商/司机的绩效评价，为派单提供支持'],
    },
    {
      title: '多层级费用处理，让利润更加精准',
      content: [
        '基本费用：计费引擎根据报价和计费规则自动计费',
        '实报实销费用：供应商端或APP申请，结算人员审核确认',
        '费用改单：费用'
      ]
    },
    {
      title: '可视化的执行过程、主动的异常管理',
      content: [
        '基于客户需求的跟踪节点配置和信息采集',
        '基于采购订单、销售订单、物流订单、执行任务单的跟踪和查询',
        '支持按照异常执行条'
      ]
    },
    {
      title: '消息管理',
      content: ['消息产生节点、推送人员、推送方式可自主配置']
    },
    {
      title: 'TCP运力平台，协同运输实体',
      content: [
      '改善运输执行，管理多层级运单流转',
      '运输协同管理，货物对上下游同步在途可视化',
      '降低成本，增加核心竞争力，获取更多订单'
      ]
    },
    {
      title: 'APP/GIS跟踪，可视化运输过程',
      content: [
        '支持国内主流GPS：G7/畅行、易流',
        '根据基础档案收发货人经纬度半径形成电子围栏',
        '运输节点APP采集反馈',
        '执行信息监控',
        '根据定位信息锁定操作环节'
      ]
    },
  ].map((item, index) => Object.assign({}, item, {url: imageUrl(`advantage${index + 1}`), hoverUrl: imageUrl(`advantage${index + 1}_hover`)}));
  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <div>
          <img src={item.url} alt='logo' />
          <img src={item.hoverUrl} alt='logo'/>
        </div>
        <div>{item.title}</div>
        <div>
          <div><i /></div>
          <List items={item.content} />
        </div>
      </div>
    );
  };
  return <Block data-role='advantage' title='产品优势' items={items} renderItem={renderItem} smallTitle />;
};

const architecture = () => {
  return (
    <Block data-role='architecture' title='ePLD产品功能架构' smallTitle>
      <div>
        <img className='img-responsive' src={imageUrl('architecture')} alt='epld architecture' />
      </div>
    </Block>
  );
};

class SolutionTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeKey: props.activeKey, expand: ''};
  }

  onTabChange = (activeKey) => {
    this.setState({activeKey});
  };

  isActive = (key) => {
    return key === this.state.activeKey ? true : null;
  };

  isExpand = (key) => {
    return key === this.state.expand ? true : null;
  };

  genTab = (tab) => {
    const active = this.isActive(tab.key);
    const onClick = this.onTabChange.bind(null, tab.key);
    return (
      <div key={tab.key} data-active={active} onClick={onClick}>
        <div><img src={tab.iconUrl} alt='icon' /></div>
        <div><span>{tab.title}</span></div>
      </div>
    );
  };

  content = (tab) => {
    const active = this.isActive(tab.key);
    const expand = this.isExpand(tab.key);
    return (
      <div key={tab.key} data-expand={expand}>
        <div onClick={() => this.setState({expand: this.state.expand === tab.key ? '' : tab.key})}>
          <span>{tab.title}</span>
          <img src={imageUrl(expand ? 'arrow_up' : 'arrow_down')} alt='arrow' />
        </div>
        <div data-active={active}>
          <div>
            <img className='img-responsive' src={tab.contentUrl} alt='flow' />
          </div>
          <div>
            <h1>{tab.h1}</h1>
            <p>{tab.p}</p>
            <h2>{tab.h2}</h2>
            <List items={tab.ul}/>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const {tabs} = this.props;
    return (
      <div className='Solution-tab'>
        <div>{tabs.map(this.genTab)}</div>
        <div>{tabs.map(this.content)}</div>
      </div>
    );
  }
}

const solution = () => {
  const genTab = (item, index) => {
    return Object.assign({}, item, {
      key: `${index + 1}`,
      iconUrl: imageUrl(`solution${index + 1}`),
      contentUrl: imageUrl(`solution${index + 1}_content`)
    });
  };
  const tabs = [
    {
      title: '商流订单',
      h1: 'ePLD基于商流订单的解决方案',
      p: '承接商流订单，完成商流订单到物流订单的转化，物流订单向执行单的转化和执行',
      h2: '核心价值',
      ul: ['基于采购订单、销售订单的全流程跟踪、监控', '线上预约、协同发货人、收货人', '丰富的KPI指标体系,收货人、发货人']
    },
    {
      title: '货主类',
      h1: 'ePLD面向货主的解决方案',
      p: '支持货主向单一承运商派单，以及综合业务拆单、计划后派给多个物流公司，货主、物流公司、承运商可以在同一平台执行',
      h2: '核心价值',
      ul: ['支持货主、物流公司、承运商协同：货主、物流公司、承运商在一套系统内协同运作，执行数据实时共享',
        '多维度供应商考核体系：物流费用、份额占比，绩效等多维度的供应商考核体系，便于货主派单时选择最合适的供应商',
        '综合业务管理，支持不同类型：系统支持全品类、全渠道的物流业务管理，货主在一个系统可以管理所有的业务类型',
        '订单控制塔：支持以物流订单为唯一标识追踪、结算、查看异常'
      ]
    },
    {
      title: '物流公司',
      h1: 'ePLD面向物流公司的解决方案',
      p: '支持物流公司向单一承运商派单，以及综合业务拆单、计划后派给多个物流公司，货主、物流公司、承运商可以在同一平台执行',
      h2: '核心价值',
      ul: [
        '异常管理，主动异常预警，及时发现并处理问题',
        '协同货主、下游物流公司、不需要单独客户、供应商门户',
        '货量拆分、业务类型'
      ]
    },
    {
      title: '承运商',
      h1: 'ePLD面向承运商的解决方案',
      p: '支持承运商接单、计划、派单给司机，并且通过GIS、APP、后台人工多种方式跟踪执行过程',
      h2: '核心价值',
      ul: [
        '订单拆分、计划，最大化优化承运商成本',
        '运输节点自定义，按照客户/自身需求定义节点',
        'APP、GIS、后台人工多种方式'
      ]
    },
  ].map(genTab);
  return (
    <Block data-role='solution' title='解决方案' smallTitle>
      <SolutionTab activeKey='1' tabs={tabs} />
    </Block>
  );
};

export default function ProductEPLD() {
  return (
    <App className='ProductEPLD'>
      {banner()}
      {tongdian()}
      {analysis()}
      {advantage()}
      {architecture()}
      {solution()}
    </App>
  );
};
