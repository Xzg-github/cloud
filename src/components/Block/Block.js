import React from 'react';
import './Block.less';

const getStyle = (bkUrl, style={}) => {
  if (bkUrl) {
    return Object.assign({}, style, {background: `url(${bkUrl}) center no-repeat`});
  } else {
    return style;
  }
};

const Block = ({title, items, renderItem, bkUrl, children, style, ...props}) => {
  return (
    <div className='Block' {...props} style={getStyle(bkUrl, style)}>
      <div>
        <h1>{title}</h1>
        {children}
        {items ? <div className='Block-list'>{items.map(renderItem)}</div> : null}
      </div>
    </div>
  );
};

export default Block;