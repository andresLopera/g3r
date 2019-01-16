import React from 'react';
import { RendererProps } from './renderer.props';
import { BlockComponent } from '../../model/blockComponent';
import { References } from '../../common/references';


class RendererComponent extends React.Component<RendererProps,{}> {
  components: Array<BlockComponent> = new Array<BlockComponent>()

  references = References.getInstance()

  state: {
    currentStructureId: string,
    currentDataLinkId: string
  };

  constructor(props: RendererProps) {
    super(props)
    this.state = {
      currentStructureId: 'idStructure',
      currentDataLinkId: 'id-1'
    }
  }

  public componentDidMount() {
    this.props.fetchStructureById(this.state.currentStructureId)
    this.props.fetchDataLinkById(this.state.currentDataLinkId)
  }

  private rendererPage = () => {
    if (this.props.structure.rootPage == undefined ||
      this.props.structure.rootPage.type == '') return
    let PAGE = this.references.getPageByTypeId(this.props.structure.rootPage.type)
    return (
      <div>
        <PAGE page={ this.props.structure.rootPage } dataLink={ this.props.dataLink }/>
      </div>
    )
  }

  public render() {
    return (
      <div>
        { this.rendererPage() }
      </div>
    );
  }
}
export default RendererComponent;