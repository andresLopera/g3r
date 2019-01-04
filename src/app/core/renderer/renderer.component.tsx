import React from 'react';
import PlaceholderComponent from '../../components/placeholder';
import { RendererProps } from './renderer.props';
import { BlockComponent } from '../../model/blockComponent';
import { References } from '../references';


class RendererComponent extends React.Component<RendererProps,{}> {
  components: Array<BlockComponent> = new Array<BlockComponent>();

  references = References.getInstance();

  state: { currentComponent: string, currentStructureId: string };

  constructor(props: RendererProps) {
    super(props)

    this.state = {
      currentComponent : 'text',
      currentStructureId: '200'
    }
  }


  public componentDidMount() {
    this.props.fetchStructureById(this.state.currentStructureId);
  }

  rendererAction = (currentComponent: string) => {
    let COMPONENT = this.references.getComponentByName(currentComponent);
    return (
      <div>
        <COMPONENT />
      </div>
    )
  }

  handleChange = (event: any) => {
    this.setState({ currentComponent: event.target.value });
  }

  handleChangeStructureId = (event: any) => {
    this.setState( { currentStructureId : event.target.value });
    this.props.fetchStructureById(event.target.value);
  }

  public render() {
    return (
      <div>
        <select value={this.state.currentComponent} onChange={this.handleChange}>
          <option value="text">Text</option>
          <option value="head">Head</option>
        </select>
        { this.rendererAction(this.state.currentComponent) }
        <p>id : { this.props.structure.id }</p>

        <select value={this.state.currentStructureId} onChange={this.handleChangeStructureId}>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
        </select>
      </div>
    );
  }
}


export default RendererComponent;
