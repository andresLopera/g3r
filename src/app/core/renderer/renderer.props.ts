import { StructureEntity } from "../../model/structure.entity";

export interface RendererProps {
    structure: StructureEntity;
    fetchStructureById(structureId: string): void;
}