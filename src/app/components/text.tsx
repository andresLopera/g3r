import React, { Component } from 'react';
import { DefaultProps } from '../common/default.props';

export class TextComponent extends React.Component<DefaultProps,{}> {
  render() {
    return (
      <div>
        <h1>TextComponent</h1>
      </div>
    );
  }
}