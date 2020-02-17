import React from 'react';
import Context from './context';

export default function withAppState(WrappedComponent) {
  return props => (
    <Context.Consumer>
      {connectData => <WrappedComponent {...props} {...connectData} />}
    </Context.Consumer>
  );
}
