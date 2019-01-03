import { structureAPI } from '../../api/structure';
import { StructureEntity } from '../../model/structure.entity';
import { actionTypes } from '../../common/constant/actionTypes';

export const fetchStructuresAction = () => (dispatch: any) => {
    console.log('fetchStructuresAction init');
    structureAPI.fetchStructure().then( (structures) => {
        console.log('fetchStructuresAction complete');
        console.log(structures);
        dispatch(fetchStructureComplete(structures))
    })
};

const fetchStructureComplete = (structures: StructureEntity[]) => ({
  type: actionTypes.FETCH_STRUCTURE_COMPLETED,
  payload: structures,
});
