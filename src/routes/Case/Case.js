import React from 'react';
import {Breadcrumb} from 'antd';
import App from '../App/App';
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

const Client = ({config, onClick}) => {
  return (
    <div className='Case-client'>
      <Breadcrumb separator='>'>
        <Breadcrumb.Item><a onClick={onClick}>客户案例</a></Breadcrumb.Item>
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

const Card = ({config, ...props}) => {
  return (
    <div className='Case-card' {...props}>
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
    </div>
  );
};

export default class Case extends React.Component {
  state = {route: -1};

  onClick = (route) => {
    this.setState({route});
  };

  index = (items) => {
    return (
      <div className='Case-index'>
        {items.map((item, index) => <Card key={index} config={item} onClick={this.onClick.bind(null, index)} />)}
      </div>
    );
  };

  content = () => {
    if (this.state.route < 0) {
      return this.index(config.items);
    } else {
      return <Client config={config.items[this.state.route]} onClick={this.onClick.bind(null, -1)} />;
    }
  };

  render() {
    return (
      <App className='Case' bannerItems={config.bannerItems}>
        {this.content()}
      </App>
    );
  }
}