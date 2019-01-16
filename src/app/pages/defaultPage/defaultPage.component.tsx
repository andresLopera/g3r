import React, { Children } from 'react';
import { References } from '../../common/references';
import { DefaultPageProps } from '../../common/defaultPage.props';
import { BlockElement } from '../../model/blockElement';

export class DefaultPageComponent  extends React.Component<DefaultPageProps,{}> {

  references = References.getInstance()

  constructor(props: DefaultPageProps) {
    super(props)
  }


  private rendererComponent = (_blockElement: BlockElement) => {
    let COMPONENT = this.references.getComponentByTypeId(_blockElement.type)
    return (
      <div key={_blockElement.id}>
        <COMPONENT value="lorem ipsum"/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>{this.props.page.name }</h1>
        {
          this.props.page.children.map((blockElement) =>
            this.rendererComponent(blockElement)
          )
        }
        <p> value : { JSON.stringify(this.props.dataLink.channels.get('id-1')) }</p>
      </div>
    );
  }
}
