import { DataLinkEntity } from "../dataLink.entity";
import { ChannelEntity } from "../channel.entity";

var channel : Map<string, ChannelEntity> = new Map();
channel.set('id-1', {id: 'id-1', name: 'name_person', value: 'andres lopera' });
channel.set('id-2', {id: 'id-2', name: 'age_person', value: 1 });


export const dataLinks: DataLinkEntity[] = [{
    id: "id-1",
    name: "dataLinks",
    channels: channel
}];