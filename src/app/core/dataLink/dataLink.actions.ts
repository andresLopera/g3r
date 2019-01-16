import { dataLinkAPI } from "./api/dataLink.api";
import { DataLinkEntity } from "./dataLink.entity";
import { actionTypes } from "../../common/constant/actionTypes";

export const fetchDataLinkByIdAction = (dataLinkId: string) => (dispatch: any) => {
    dataLinkAPI.fetchDataLinkById(dataLinkId).then( (dataLink) => {
        dispatch(fetchDataLinkComplete(dataLink))
    })
};

const fetchDataLinkComplete = (dataLink: DataLinkEntity) => ({
  type: actionTypes.FETCH_DATA_LINK_COMPLETED,
  payload: dataLink,
});
