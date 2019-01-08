import { ChannelEntity } from "./channel.entity";

export interface LinkDataEntity {
    id: string
    name: string
    channels: Array<ChannelEntity>
}