import { StructureEntity } from "../structure.entity";

export const structures: StructureEntity[] = [{
        id: "idStructure",
        rootPage:
            {
                id : "idRootPage",
                type: "defaultPageId",
                name: "home",
                children: [{
                    id: "1",
                    type: "textId",
                    name: "inputName",
                    channelId: "",
                    children : []
                },{
                    id: "2",
                    type: "headId",
                    name: "Head",
                    channelId: "",
                    children : []
                },{
                    id: "3",
                    type: "inputId",
                    name: "Input",
                    channelId: "",
                    children: []
                }, {
                    id: "4",
                    type: "buttonId",
                    name: "button",
                    channelId: "",
                    children: []
                }]
            }
}];