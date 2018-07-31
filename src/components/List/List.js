import React from 'react';
import './List.less';

export default function({items, ...props}) {
  return (
    <ul className='List' {...props}>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};
