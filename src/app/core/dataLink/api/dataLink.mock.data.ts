import { DataLinkEntity } from "../dataLink.entity";


export const dataLinks: DataLinkEntity[] = [{
    id: "id-1",
    name: "dataLinks",
    channels: [
        {id: 'id-1', value: 'andres lopera' },
        {id: 'id-2', value: [
            { id: '100', value: 'andres'},
            { id: '102', value: 'santiago'}
            ]
        }
    ]
}];