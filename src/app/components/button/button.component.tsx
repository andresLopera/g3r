import React from 'react';
import { DefaultProps } from '../../common/default.props';
import { DataLinkService } from '../../core/dataLink/dataLink.service';

export class ButtonComponent extends React.Component<DefaultProps,{}> {

  public dataLinkService = DataLinkService.getInstance();
  name = 'andres';



  handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('The button was clicked.');
    console.log('state',this.dataLinkService.getState() );
  }


  render() {
    console.log("button.compoent: ")
    console.log(this.props.channel);
    return (
      <div>
        <button onClick={this.handleClick}>Enviar</button>
      </div>
    );
  }
}