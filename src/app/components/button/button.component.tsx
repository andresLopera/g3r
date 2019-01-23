import React from 'react';
import { DefaultProps } from '../../common/default.props';
import { DataLinkService } from '../../core/dataLink/dataLink.service';
import { ChannelEntity } from '../../core/dataLink/channel.entity';

export class ButtonComponent extends React.Component<DefaultProps,{}> {

  public dataLinkService = DataLinkService.getInstance()


  handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('The button was clicked.')
    this.dataLinkService.changeValueOfChannel({id: 'id-1', name: 'name_person', value: 'Lorem ipsum' })
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Enviar</button>
      </div>
    );
  }
}