import React from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router';
import App from '../App/App';
import Banner from '../../components/Banner';
import config from './config';
import './Case.less';

const clientHeader = (config) => {
  const description = config.description2 ? config.description + '\n' + config.description2 : config.description;
  return (
    <header data-role='header'>
      <div>
        <img src={config.logo} alt='logo' />
      </div>
      <div>
        <div>{config.title}</div>
        <div>{`属于行业: ${config.business}`}</div>
        <div>{`使用产品: ${config.product}`}</div>
        <div>{description}</div>
      </div>
    </header>
  );
};

const clientBody = (items) => {
  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <h1 data-role='title'>{item.title}</h1>
        {item.render(item)}
      </div>
    );
  };
  return (
    <div data-role='body'>
      {items.map(renderItem)}
    </div>
  );
};

const Client = ({config}) => {
  return (
    <div className='Case-client'>
      <Breadcrumb separator='>'>
        <Breadcrumb.Item><Link to='/case'>客户案例</Link></Breadcrumb.Item>
        <Breadcrumb.Item>{config.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        {clientHeader(config)}
        <i data-role='line' />
        {clientBody(config.content)}
      </div>
    </div>
  );
};

const Card = ({config}) => {
  return (
    <Link className='Case-card' to={config.url}>
      <div>
        <img src={config.logo} alt='logo' />
      </div>
      <div>
        <div>{config.title}</div>
        <div>{`属于行业: ${config.business}`}</div>
        <div>{`使用产品: ${config.product}`}</div>
        <div>{config.description}</div>
        <div>了解详情></div>
      </div>
    </Link>
  );
};

export default class Case extends React.Component {
  getCase = () => {
    const to = Number(this.props.params.to) || 0;
    if (to < 1 || to > config.items.length) {
      return -1;
    } else {
      return to - 1;
    }
  };

  index = (items) => {
    return (
      <div className='Case-index'>
        {items.map((item, index) => <Card key={index} config={item} />)}
      </div>
    );
  };

  content = (index) => {
    if (index < 0) {
      return this.index(config.items);
    } else {
      return <Client config={config.items[index]} />;
    }
  };

  banner = (config) => {
    return (
      <Banner data-role='banner' url={config.url}>
        <div>{config.title}</div>
        <div>{config.description}</div>
      </Banner>
    );
  };

  render() {
    const index = this.getCase();
    return (
      <App key={index} className='Case'>
        {this.banner(config.banner)}
        {this.content(index)}
      </App>
    );
  }
}