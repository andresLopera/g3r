import React from 'react';
import { DefaultProps } from '../../common/default.props';

export class TextComponent extends React.Component<DefaultProps,{}> {
  render() {
    console.log("text.compoent: ")
    console.log(this.props.channel);
    return (
      <div>
        <h1>TextComponent  { this.props.channel.value }</h1>
      </div>
    );
  }
}

export default TextComponent;