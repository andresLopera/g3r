import { Page } from "./page";


export interface StructureEntity {
    id: string
    rootPage: string
    pages: Array<Page>
}