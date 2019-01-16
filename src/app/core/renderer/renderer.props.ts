import { StructureEntity } from "../structure/structure.entity";
import { DataLinkEntity } from "../dataLink/dataLink.entity";

export interface RendererProps {
    dataLink: DataLinkEntity
    structure: StructureEntity
    fetchStructureById(structureId: string): void
    fetchDataLinkById(dataLinkId: string) : void
}