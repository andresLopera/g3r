import { StructureEntity } from './structure.entity';
import { actionTypes } from '../../common/constant/actionTypes';
import { structureAPI } from './api/structure.api';

export const fetchStructureByIdAction = (structureId: string) => (dispatch: any) => {
    structureAPI.fetchStructureById(structureId).then( (structure) => {
        dispatch(fetchStructureComplete(structure))
    })
};

const fetchStructureComplete = (structure: StructureEntity) => ({
  type: actionTypes.FETCH_STRUCTURE_COMPLETED,
  payload: structure,
});
