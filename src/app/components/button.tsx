import React from 'react';
import { DefaultProps } from '../common/default.props';

export class ButtonComponent extends React.Component<DefaultProps,{}> {
  render() {
    return (
      <div>
        <button>Enviar</button>
      </div>
    );
  }
}