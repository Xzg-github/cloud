import React from 'react';
import App from '../App/App';
import Banner from '../../components/Banner';
import './Contact.less';

const imageUrl = (title) => {
  return `/imgs/contact/${title}.png`;
};

const banner = () => {
  return (
    <Banner data-role='banner' url={imageUrl('banner')}>
      <div>联系我们</div>
      <div>云恋科技，期待与您共创无限未来</div>
    </Banner>
  );
};

const contact = () => {
  const items = [
    {
      title: '公司地址',
      icon: imageUrl('address'),
      description: ['深圳市福田保税区黄槐道深福保工业区B栋301F']
    },
    {
      title: '联系电话',
      icon: imageUrl('phone'),
      description: ['咨询 / 招商 / 投诉电话：0755-83580000-8800']
    },
    {
      title: '邮箱',
      icon: imageUrl('phone'),
      description: ['运营部：zhangxiaobo@cloudlinkscm.com', '人事部：daiman@hercules-logistics.com']
    },
    {
      title: 'QQ',
      icon: imageUrl('qq'),
      description: ['QQ咨询顾问4884558']
    },
    {
      title: '工作时间',
      icon: imageUrl('clock'),
      description: ['工作日: 9:00~18:00 （工作时间外您有任何问题可以给我们留言，我们的咨询顾问会在24小时之内给您回复。）']
    }
  ];
  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <img src={item.icon} alt='clock' />
        <div>
          <h1>{item.title}</h1>
          <div>{item.description.join('\n')}</div>
        </div>
      </div>
    );
  };
  return (
    <div data-role='contact'>
      <div>
        <div>{items.map(renderItem)}</div>
        <div>
          <img className='img-responsive' src={imageUrl('map')} alt='map'/>
          <img className='img-responsive' src={imageUrl('map_small')} alt='map'/>
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <App className='Contact'>
      {banner()}
      {contact()}
    </App>
  );
};
