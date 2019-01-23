import { actionTypes } from "../../common/constant/actionTypes";
import { ChannelEntity } from "./channel.entity";

export class DataLinkService {
    private static _instance: DataLinkService;
    private store: any;
    private next: any;

    constructor() {
    }

    public setStore(_store: any) {
        this.store = _store;
        this.next = this.store.dispatch;
        return this.dispatch
    }

    private dispatch(action: any) {
        return this.next(action)
    }

    public getState() {
        return this.store.getState();
    }

    public changeValueOfChannel(channel: ChannelEntity) {
        this.dispatch( { type: actionTypes.CHANGE_VALUE_TO_CHANNEL, payload: channel })
    }



    static getInstance() {
        if (!DataLinkService._instance) {
            DataLinkService._instance = new DataLinkService();
            // ... any one time initialization goes here ...
        }
        return DataLinkService._instance;
    }

}