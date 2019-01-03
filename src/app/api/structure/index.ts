import { structures } from './structure.mock.data';
import { StructureEntity } from '../../model/structure.entity';

const baseURL = 'https://api.github.com/';
let mockStructure = structures;

const fetchStructure = (): Promise<StructureEntity[]> => {
  return Promise.resolve(mockStructure);
};

const fetchStructureAsync = (): Promise<StructureEntity[]> => {
  const structureURL = `${baseURL}/structure`;

  return fetch(structureURL)
    .then((response) => (response.json()))
    .then(mapToStructures);
};

const mapToStructures = (structures: any[]): StructureEntity[] => {
  return structures.map(mapToStructure);
};

const mapToStructure = (structure : StructureEntity): StructureEntity => {
  return {
    id: structure.id,
    rootPage: structure.rootPage,
    pages: structure.pages
  };
};

const saveStructure = (structure: StructureEntity): Promise<boolean> => {
  const index = mockStructure.findIndex(m => m.id === structure.id);

  index >= 0 ?
    updateStructure(structure, index) :
    insertStructure(structure);

  return Promise.resolve(true);
};

const updateStructure = (structure: StructureEntity, index: number) => {
  mockStructure = [
    ...mockStructure.slice(0, index),
    structure,
    ...mockStructure.slice(index + 1),
  ];
};

const insertStructure = (structure: StructureEntity) => {
  structure.id = mockStructure.length + '';

  mockStructure = [
    ...mockStructure,
    structure,
  ];
};

const fetchStructureById = (id: string): Promise<any> => {
  let strucutre = mockStructure.find(m => m.id == id);
  return Promise.resolve(strucutre);
}

export const structureAPI = {
  fetchStructure,
  fetchStructureAsync,
  saveStructure,
  fetchStructureById,
};
