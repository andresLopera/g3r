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
  fetchStructures(): void;
}


class RendererComponent extends React.Component<Props,{}> {
  components: Array<Block> = new Array<Block>();

  state: { currentComponent: string };

  constructor(props: Props) {
    super(props)

    let blockHead: Block = new Block('head', HeadComponent)
    let blockText: Block = new Block('text', TextComponent)

    this.components.push(blockHead)
    this.components.push(blockText)
    this.state = {
      currentComponent : 'text'
    }
    console.log('this.props')
    console.log(this.props.structure);
  }


  public componentDidMount() {
    console.log('componentDidMount');
    this.props.fetchStructures();
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
    console.log(`Option selected:`, event.target.value);
  }

  public render() {
    return (
      <div>
        <select value={this.state.currentComponent} onChange={this.handleChange}>
          <option value="text">Text</option>
          <option value="head">Head</option>
        </select>
        { this.memberRow(this.state.currentComponent) }
      </div>
    );
  }
}


export default RendererComponent;
