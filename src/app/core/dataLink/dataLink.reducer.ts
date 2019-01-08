import { actionTypes } from '../../common/constant/actionTypes';
import { DataLinkEntity } from './dataLink.entity';


const createEmptyDataLink = (): DataLinkEntity => ({
  id: '-1',
  name: '',
  channels: []
});

export const DataLinkReducer = (state: DataLinkEntity = createEmptyDataLink(), action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_LINK_COMPLETED:
      return handleFetchDataLinkCompleted(state, action.payload);
  }
  return state;
};

const handleFetchDataLinkCompleted = (state: DataLinkEntity, payload: DataLinkEntity) => {
  return payload;
};
