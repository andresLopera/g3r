import { actionTypes } from '../../common/constant/actionTypes';
import { DataLinkEntity } from './dataLink.entity';
import { ChannelEntity } from './channel.entity';


const createEmptyDataLink = (): DataLinkEntity => ({
  id: '-1',
  name: '',
  channels: []
});

export const DataLinkReducer = (state: DataLinkEntity = createEmptyDataLink(), action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_LINK_COMPLETED:
      return handleFetchDataLinkCompleted(state, action.payload);

    case actionTypes.CHANGE_VALUE_TO_CHANNEL:
      return handleChangeValueToChannel(state, action.payload);
  }
  return state;
};

const handleFetchDataLinkCompleted = (state: DataLinkEntity, payload: DataLinkEntity) => {
  return payload;
};

const handleChangeValueToChannel = (state: DataLinkEntity, channel: ChannelEntity) =>  {
  let _channels = state.channels.map(_channel => {
    if (_channel.id == channel.id) {
      return {
        ..._channel,
        value: channel.value
      }
    } else {
      return _channel
    }
  });

  return {
    ...state,
    channels: _channels
  }
}
