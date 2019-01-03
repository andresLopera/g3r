export interface BlockElement {
    id: string
    type: string
    name: string
    children: Array<BlockElement>
}