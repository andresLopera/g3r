import React from "react";
import { References } from "../common/references";
import { BlockElement } from "./blockElement";
import { ChannelEntity } from "../core/dataLink/channel.entity";
import { DefaultProps } from "../common/default.props";

export class DefaultComponentRenderer extends React.Component<DefaultProps,{}> {
    references = References.getInstance()

    public rendererComponent = (_blockElement: BlockElement) => {
      let COMPONENT = this.references.getComponentByTypeId(_blockElement.type)
      return (
        <div key={_blockElement.id}>
          <COMPONENT block={_blockElement} channel={this.getChannelById(_blockElement.channelId)}/>
        </div>
      )
    }



    private getChannelById(_channelId: string): ChannelEntity {
    /*
      let _defaultChannel: ChannelEntity = { id: '-1', value: null };
      return this.props.channel.reduce( function (previewChannel: ChannelEntity, channel: ChannelEntity) {
        return (channel.id == _channelId) ? channel : previewChannel;
      }, );
      */

      return { id: '-1', value: null };
    }

  }