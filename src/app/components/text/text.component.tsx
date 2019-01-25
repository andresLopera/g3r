import React from 'react';
import { DefaultProps } from '../../common/default.props';

export class TextComponent extends React.Component<DefaultProps,{}> {
  render() {
    console.log("text.compoent: ")
    console.log(this.props.channel);
    return (
      <div>
        <span>{ this.props.channel.value }</span>
      </div>
    );
  }
}

export default TextComponent;