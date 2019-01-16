export interface BlockElement {
    id: string
    type: string
    name: string
    channelId: string
    children: Array<BlockElement>
}