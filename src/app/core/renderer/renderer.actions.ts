import { structureAPI } from '../../api/structure';
import { StructureEntity } from '../../model/structure.entity';
import { actionTypes } from '../../common/constant/actionTypes';

export const fetchStructureByIdAction = (structureId: string) => (dispatch: any) => {
    console.log('fetchStructuresAction init' + structureId);
    structureAPI.fetchStructureById(structureId).then( (structure) => {
        console.log('fetchStructuresAction complete');
        console.log(structure);
        dispatch(fetchStructureComplete(structure))
    })
};

const fetchStructureComplete = (structure: StructureEntity) => ({
  type: actionTypes.FETCH_STRUCTURE_COMPLETED,
  payload: structure,
});
