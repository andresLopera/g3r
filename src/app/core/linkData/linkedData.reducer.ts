import { actionTypes } from '../../common/constant/actionTypes';
import { LinkDataEntity } from './linkedData.entity';


const createEmptyLinkData = (): LinkDataEntity => ({
  id: '-1',
  name: '',
  channels: []
});

export const linkDataReducer = (state: LinkDataEntity = createEmptyLinkData(), action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_LINKED_DATA_COMPLETED:
      return handleFetchLinkedDataCompleted(state, action.payload);
  }
  return state;
};

const handleFetchLinkedDataCompleted = (state: LinkDataEntity, payload: LinkDataEntity) => {
  return payload;
};
