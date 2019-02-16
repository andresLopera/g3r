import React from "react";
import { DefaultPageProps } from "../common/defaultPage.props";
import { References } from "../common/references";
import { BlockElement } from "./blockElement";
import { ChannelEntity } from "../core/dataLink/channel.entity";

export class DefaultPageRenderer extends React.Component<DefaultPageProps,{}> {
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
      let _defaultChannel: ChannelEntity = { id: '-1', value: null };
      return this.props.dataLink.channels.reduce( function (previewChannel: ChannelEntity, channel: ChannelEntity) {
        return (channel.id == _channelId) ? channel : previewChannel;
      }, { id: '-1', value: null });
    }

  }