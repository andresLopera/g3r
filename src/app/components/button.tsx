import React from 'react';
import { DefaultProps } from '../common/default.props';

export class ButtonComponent extends React.Component<DefaultProps,{}> {


  handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
    console.log('The button was clicked.');
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Enviar</button>
      </div>
    );
  }
}