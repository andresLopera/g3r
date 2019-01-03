import { BlockElement } from "./blockElement";

export interface Page {
    id: string
    type: string
    name: string
    root: BlockElement
}