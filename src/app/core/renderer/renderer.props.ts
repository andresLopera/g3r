import { StructureEntity } from "../structure/structure.entity";

export interface RendererProps {
    structure: StructureEntity;
    fetchStructureById(structureId: string): void;
}