import React from 'react';
import { DefaultProps } from '../../common/default.props';

export class TextComponent extends React.Component<DefaultProps,{}> {
  render() {
    console.log("text.compoent: " + this.props.value);
    return (
      <div>
        <h1>TextComponent  { this.props.value }</h1>
      </div>
    );
  }
}

export default TextComponent;