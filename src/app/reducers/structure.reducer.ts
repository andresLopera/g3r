import { actionTypes } from '../common/constant/actionTypes';
import { StructureEntity } from '../model/structure.entity';


const createEmptyStructure = (): StructureEntity => ({
  id: '-1'
});

export const structureReducer = (state: StructureEntity = createEmptyStructure(), action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_STRUCTURE_COMPLETED:
      return handleFetchStructureCompleted(state, action.payload);
  }
  return state;
};

const handleFetchStructureCompleted = (state: StructureEntity, payload: StructureEntity) => {
  return payload;
};
