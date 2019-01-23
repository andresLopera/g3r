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
                    channelId: "id-1",
                    children : []
                },{
                    id: "2",
                    type: "buttonId",
                    name: "button",
                    channelId: "id-1",
                    children: []
                },{
                    id: "3",
                    type: "inputId",
                    name: "input",
                    channelId: "id-1",
                    children: []
                }]
            }
}];