import React from 'react';
import List from '../../components/List';

const imageUrl = (title) => {
  return `/imgs/case/${title}.png`;
};

const renderBanner1 = () => {
  return (
    <div data-role='banner1'>
      <div>客户案例</div>
      <div>结合各企业的发展情况，为客户提供完整的企业信息化以及物流解决方案。</div>
    </div>
  );
};

const renderCase1Target = ({list}) => {
  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <div>{item.title}</div>
        <div>{item.description}</div>
      </div>
    );
  };
  return <div data-role='case1-target'>{list.map(renderItem)}</div>;
};

const renderCase1Solution = ({url}) => {
  return <div data-role='case1-solution'><img src={url} alt='solution' /></div>;
};

const renderCase2Demand = ({url, list}) => {
  return (
    <div data-role='case2-demand'>
      <img src={url} alt='solution' />
      <List items={list} />
    </div>
  );
};

const renderCase2Solution = ({url}) => {
  return <div data-role='case2-solution'><img src={url} alt='solution' /></div>;
};

const renderCase3Introduction = ({list}) => {
  return <List items={list} style={{color: '#666'}} />;
};

const renderCase3Solution = ({list}) => {
  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <div>{item.title}</div>
        <div>{item.description}</div>
      </div>
    );
  };
  return <div data-role='case3-solution'>{list.map(renderItem)}</div>;
};

const case1 = [
  {
    title: '目标',
    list: [
      {
        title: '目标一：业务协同化',
        description: '构建统一的信息化操作平台，实现总部、分公司（办事处）的协同作业，并与财务对接，' +
        '推进财务业务一体化的管理，提供工作效率，降低经营管理的风险；与外部客户、供应商协同，合作共赢，共同推进供应链的协同。'
      },
      {
        title: '目标二：操作透明化',
        description: '通过互联网、系统接口，实现在线的下单、查单，同时内部的作业信息及时的反馈，' +
        '在客户、北港、供应商，及时进行信息互动，实现订单的可视化管理，降低风险，提高客户的满意度。' +
        '从公司经营管理的角度看，构建统一的控制塔，管控所有的物理订单的接入、分配、指定。'
      },
      {
        title: '目标三：作业标准化',
        description: '建立标准化、规范化的运作管理流程，规范业务操作过程，明确流程上各点的职责分工，' +
        '提升管理水平，提高业务的快速扩展能力。'
      },
      {
        title: '目标四：财务结算统一化',
        description: '实现成本精确核算功能，能核算到单船单航次、单票等，并形成标准报价的依据；' +
        '实现应收应付自动化结算,实现单票核算，实现业务数据与财务数据集成。'
      },
      {
        title: '目标五：系统集成化',
        description: '建立财务、业务等各方面集成、高效、一体化的业务平台；加强与物流技术的无缝集成，' +
        '并提高数据及时性准确性，从而使企业管理决策和业务操作建立在统一的准确的及时的信息基础之上。'
      },
    ],
    render: renderCase1Target
  },
  {
    title: '解决方案',
    url: imageUrl('case1'),
    render: renderCase1Solution
  }
];

const case2 = [
  {
    title: '实现客户需求',
    url: imageUrl('case2_demand'),
    list: [
      '自动接收沃尔玛PO， 过滤沃尔玛责任的PO；',
      '供货商能发起出货预约，检测出货预约的准确性；',
      '能根据预约生成物流订单，能对物流订单进行拆分、计划；',
      '能向DC发起交货预约；',
      '能自动分派供应商、并对运输执行过程进行监控；'
    ],
    render: renderCase2Demand
  },
  {
    title: '解决方案',
    url: imageUrl('case2_solution'),
    render: renderCase2Solution
  }
];

const case3 = [
  {
    title: '简介',
    list: [
      '产品以高端食品为主，对产品的效期、批次要求严格；',
      '仓库不同货权、批次货品混放，恒温仓与常温仓分区管理；',
      '不同渠道（KA、经销商、电商渠道）对效期有严格要求，不同的渠道管控供货库存的效期' +
        '（KA配送的效期为效期1/2以内，电商出货位近效期15天的）；',
      '对近效期、过期商品等进行分区/分类管理；',
      '仓库中含有多个货主的库存，恒康达担当物流服务角色，为品牌食品提供仓储服务；'
    ],
    render: renderCase3Introduction
  },
  {
    title: '云恋基于INFOR WMS系统为恒康达提供个性化解决方案',
    list: [
      {
        title: '1.个性化接口承接恒康达 B2BSCM系统，打通上下游系统数据流',
        description: '云恋客制化系统接口对接恒康达的B2BSCM系统，实现采购管理/销售管理与仓库无缝衔接，提升管理效率。'
      },
      {
        title: '2.通过系统多层级、多货主、多策略管理，实现库存货权精确管理',
        description: '基于系统特色的货主管理结合现场管理优化，实现对库存货权、效期等精确管理。'
      },
      {
        title: '3.基于INFOR批属性管理以及个性化功能，实现对效期、库龄等维度管理',
        description: '基于INFOR基础功能以及客制化页面，实现同时对商品效期管理、库龄管理' +
        '（含效期/库龄预警、报表自动发送等），结合系统策略以及管理要求，货主完全掌握仓库库存信息。'
      },
      {
        title: '4.基于库存效期、渠道发货要求，实现自动管理效期并区分库存，实现不同渠道发货自动拣选库存',
        description: '客制化自动计算效期并系统自动区分隔离库存，根据不同渠道订单要求系统自动检索不同效期库存并指引拣货；' +
        '实现不同渠道库存检索、发货要求，实现库存结构使用最优。'
      }
    ],
    render: renderCase3Solution
  }
];

export default {
  bannerItems: [
    {url: imageUrl('banner1'), content: renderBanner1()}
  ],
  items: [
    {
      logo: imageUrl('logo1'),
      title: '广西北部湾国际港务集团有限公司',
      business: '综合物流管理',
      product: 'ePLD',
      description: '广西北部湾国际港务集团有限公司是广西自治区政府直属大型国有独资企业， ' +
      '业务涵盖广西防城港、钦州港、北海港，包括航运管理、铁路及公路多式联运、仓储等综合物流服务。',
      content: case1
    },
    {
      logo: imageUrl('logo2'),
      title: '沃尔玛',
      business: '大型零售商',
      product: 'ePLD',
      description: '沃尔玛是一家美国的世界性连锁企业，以营业额计算为全球最大的公司；沃尔玛的业务之所以能够迅速增长，' +
      '并且成为知名公司之一，是因为沃尔玛在节省成本以及在物流配送系统与供应链管理方面取得了巨大的成就。',
      content: case2
    },
    {
      logo: imageUrl('logo3'),
      title: '恒康达',
      business: '食品行业',
      product: 'infor WMS',
      description: '恒康达专注进口品牌食品行业，为国内全渠道经销商。',
      content: case3
    },
    {
      logo: imageUrl('logo4'),
      title: '佳裕达项目',
      business: '第三方物流',
      product: 'infor WMS',
      description: '佳裕达集团为深圳民营第三方物流企业，提供的服务范围包含海运、陆运、空运报关、仓储等一条龙服务。' +
      '其主要仓储客户为湖南海翼电商，海翼电商专业从事智能移动周边产品、智能生活周边产品及计算机周边产品的研发和销售。',
      description2: '海翼电商仓库原仓储管理以手工Excel台账、物料卡等手段进行仓库管理。海翼电商于2017年3月将仓储业务' +
      '外部至佳裕达公司。云恋科技承接佳裕达IT系统建设，协助佳裕达从零开始搭建仓储服务，实现仓储管理的信息化、流程标准化' +
      '以及仓储团队组建等。现仓储管理超过10000㎡仓库、43000个SKU、450万PCS的库存管理。',
      content: []
    },
    {
      logo: imageUrl('logo5'),
      title: '海格物流',
      business: '综合物流行业',
      product: 'infor WMS',
      description: '作为国内领先的供应链管理服务企业,主要为国际采购商及其制造商、大型零售商及其供货商、' +
      '品牌商及其分销商等客户提供国际国内、线上线下的供应链管理服务。',
      content: []
    },
  ]
};
