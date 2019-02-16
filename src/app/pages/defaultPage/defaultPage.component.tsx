import React from 'react';
import { DefaultPageProps } from '../../common/defaultPage.props';
import { DefaultPageRenderer } from '../../model/defaultPageRenderer';


export class DefaultPageComponent extends  DefaultPageRenderer  {

  constructor(props: DefaultPageProps) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Page: {this.props.page.name }</h1>
        {
          this.props.page.children.map((blockElement) =>
            this.rendererComponent(blockElement)
          )
        }
      </div>
    );
  }
}
