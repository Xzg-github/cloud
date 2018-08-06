import React from 'react';
import './Banner.less';

export default function Banner({url, children, ...props}) {
  const style = {background: `url(${url}) center`};
  return (
    <div className='Banner' style={style}>
      <div {...props}>
        {children}
      </div>
    </div>
  );
};