import React from 'react';
import App from '../App/App';
import Banner from '../../components/Banner';
import Block from '../../components/Block';
import List from '../../components/List';
import './ProductWMS.less';

const imageUrl = (title) => {
  return `/imgs/wms/${title}.png`;
};

const banner = () => {
  return (
    <Banner data-role='banner' url={imageUrl('banner')}>
      <div>Infor WMS系统</div>
      <div>Infor WMS供应链执行套件产品，是一套操作简便的端对端物流管理解决方案软件；包括移动应用程序、语音功能、可视化，满足仓储管理、运输管理、劳动力管理和第三方物流账单管理（3PL billing）需求提供一体化的解决方案。</div>
    </Banner>
  );
};

const architecture = () => {
  return (
    <Block data-role='architecture' title='Infor WMS产品功能架构' smallTitle>
      <h2>具有专业物流系统规划与设定，紧密结合实际物流业务与作业达成实物与账面一致的精确商品管理；用Exceed Fulfilment实现完成物流策略</h2>
      <div>
        <img className='img-responsive' src={imageUrl('architecture')} alt='wms architecture' />
      </div>
    </Block>
  );
};

const Block2 = ({config}) => {
  return (
    <div className='ProductWMS-block2'>
      <div>
        <h2>{config.title}</h2>
        {config.description ? <p>{config.description}</p> : null}
        <div>
          <img src={config.url} alt='feature' />
          <div>
            <h3>解决的业务痛点</h3>
            <List items={config.keyPoint} />
          </div>
        </div>
      </div>
    </div>
  );
};

const feature = () => {
  const items = [
    {
      title: '支持与其他系统、平台协同集成',
      url: imageUrl('feature1'),
      keyPoint: [
        '避免WMS数据孤岛',
        '出入库指令来源准确、自动接入，无需人工手工录入',
        '系统上下游协调作业'
      ]
    },
    {
      title: '系统支持横向拓展，多仓、多货主运作',
      url: imageUrl('feature2'),
      keyPoint: [
        '避免一个仓库多种业务多套系统',
        '避免多个仓库数据报表来源，可以在企业级看到各仓库数据'
      ]
    },
    {
      title: '系统支持单仓多种模式、策略运作',
      description: '多种模式-不同的单据类型及出库流程选择：B2B模式和B2C模式。策略运作-可配置性强：收货校验策略、' +
      '上架策略、拣货库存分配策略、订单组建波次策略、补货策略。',
      url: imageUrl('feature3'),
      keyPoint: [
        '可应对一个仓库多种业务模式，多场景情况',
        '解决客户不同客户不同的上架、拣货逻辑'
      ]
    },
    {
      title: '系统支持多批属性管理',
      description: '系统支持12个批属性管理，包含日期格式、文本格式等各种格式；【货主】+【物料】+【批属性】' +
      '生成批次码进行批次管理，系统根据批量属性或次号进行周转，并作为先进先出或后进先出的依据；出库作业时，' +
      '系统根据批次号进行先进先出或后进先出进行分配指引拣货下架，系统也可指定批次号或者批属性进行分配拣货下架。',
      url: imageUrl('feature4'),
      keyPoint: [
        '多批次管理库存，满足不同客户的仓库精细化管理',
        '按批要求做出库周转（FIFO/LIFO），库内管理'
      ]
    },
  ];
  const renderItem = (item, index) => {
    return <Block2 key={index} config={item} />;
  };
  return (
    <div data-role='feature'>
      <h1>Infor WMS特色</h1>
      {items.map(renderItem)}
    </div>
  );
};

export default function ProductWMS() {
  return (
    <App className='ProductWMS'>
      {banner()}
      {architecture()}
      {feature()}
    </App>
  );
};