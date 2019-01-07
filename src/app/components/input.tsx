import React from 'react';
import { DefaultProps } from '../common/default.props';

export class InputComponent extends React.Component<DefaultProps,{}> {
  render() {
    return (
      <div>
        <input type="text"></input>
      </div>
    );
  }
}