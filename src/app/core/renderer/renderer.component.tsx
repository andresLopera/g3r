import React from 'react';
import { RendererProps } from './renderer.props';
import { BlockComponent } from '../../model/blockComponent';
import { References } from '../references';


class RendererComponent extends React.Component<RendererProps,{}> {
  components: Array<BlockComponent> = new Array<BlockComponent>();

  references = References.getInstance()

  state: {
    currentStructureId: string
  };

  constructor(props: RendererProps) {
    super(props)

    this.state = {
      currentStructureId: '200',
    }
  }


  public componentDidMount() {
    this.props.fetchStructureById(this.state.currentStructureId)
  }

  private rendererAction = (currentComponent: string) => {
    let COMPONENT = this.references.getComponentByName(currentComponent)
    return (
      <div>
        <COMPONENT />
      </div>
    )
  }

  private rendererPage = (_pageId: string) => {
    if (_pageId == "") return;
    let PAGE = this.references.getPageById(_pageId)
    return (
      <div>
        <PAGE blockId={_pageId} type="page" />
      </div>
    )
  }

  public render() {
    return (
      <div>
        { this.rendererPage(this.props.structure.rootPage) }
      </div>
    );
  }
}


export default RendererComponent;
