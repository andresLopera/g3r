import { ChannelEntity } from "./channel.entity";

export interface DataLinkEntity {
    id: string
    name: string
    channels:  ChannelEntity[]
}