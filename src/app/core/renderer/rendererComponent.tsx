import React from 'react';
import HeadComponent from '../../components/head';
import TextComponent from '../../components/text';
import { runInThisContext } from 'vm';
import PlaceholderComponent from '../../components/placeholder';
import { StructureEntity } from '../../model/structure.entity';

export class Block {
  name: string;
  component: any;


  constructor (_name: string, _component: any) {
    this.name = _name;
    this.component = _component;
  }
}


interface Props {
  structure: StructureEntity;
  fetchStructureById(structureId: string): void;
}


class RendererComponent extends React.Component<Props,{}> {
  components: Array<Block> = new Array<Block>();

  state: { currentComponent: string, currentStructureId: string };

  constructor(props: Props) {
    super(props)

    let blockHead: Block = new Block('head', HeadComponent)
    let blockText: Block = new Block('text', TextComponent)

    this.components.push(blockHead)
    this.components.push(blockText)
    this.state = {
      currentComponent : 'text',
      currentStructureId: '200'
    }
    console.log('this.props')
    console.log(this.props.structure);
  }


  public componentDidMount() {
    console.log('componentDidMount');
    this.props.fetchStructureById('200');

    console.log('this.props  2')
    console.log(this.props.structure);

  }

  memberRow = (currentComponent: string) => {
    let COMPONENT = PlaceholderComponent;
    this.components.forEach(block => {
      if (block.name == currentComponent) {
        COMPONENT = block.component
      };
    })
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

    console.log('this.props 3 ')
    console.log(this.props.structure);

    return (
      <div>
        <select value={this.state.currentComponent} onChange={this.handleChange}>
          <option value="text">Text</option>
          <option value="head">Head</option>
        </select>
        { this.memberRow(this.state.currentComponent) }
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
