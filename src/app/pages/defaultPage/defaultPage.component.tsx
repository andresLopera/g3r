import React, { Children } from 'react';
import { References } from '../../common/references';
import { DefaultPageProps } from '../../common/defaultPage.props';
import { BlockElement } from '../../model/blockElement';
import { ChannelEntity } from '../../core/dataLink/channel.entity';

export class DefaultPageComponent  extends React.Component<DefaultPageProps,{}> {

  references = References.getInstance()
  state = {
    dommyValue: ''
  }

  constructor(props: DefaultPageProps) {
    super(props)
    this.state = {
      dommyValue: 'lorem ipsum'
    }
    this.handleChange = this.handleChange.bind(this);
  }


  private rendererComponent = (_blockElement: BlockElement) => {
    let COMPONENT = this.references.getComponentByTypeId(_blockElement.type)
    return (
      <div key={_blockElement.id}>
        <COMPONENT channel={this.getChannelById(_blockElement.channelId)}/>
      </div>
    )
  }

  private getChannelById(_channelId: string): ChannelEntity {
    let _defaultChannel: ChannelEntity = { id: '-1', name: '', value: null };
    return this.props.dataLink.channels.reduce( function (previewChannel: ChannelEntity, channel: ChannelEntity) {
      return (channel.id == _channelId) ? channel : previewChannel;
    }, { id: '-1', name: '', value: null });
  }

  handleChange(event: any) {
    this.setState( { dommyValue: event.target.value });
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
