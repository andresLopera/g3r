import React from 'react';
import { DefaultProps } from '../common/default.props';

export class DefaultPageComponent  extends React.Component<DefaultProps,{}> {

  constructor(props: DefaultProps) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>DefaultPage</h1>
      </div>
    );
  }
}
