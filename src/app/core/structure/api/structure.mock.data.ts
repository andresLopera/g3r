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
                    id: "5",
                    type: "formId",
                    name: "form",
                    channelId: "id-5",
                    children: [{
                        id: "5-1",
                        type: "inputId",
                        name: "name",
                        channelId: "id-5-1",
                        children: []
                    },{
                        id: "5-2",
                        type: "inputId",
                        name: "lastName",
                        channelId: "id-5-2",
                        children: []
                    },{
                        id: "5-3",
                        type: "buttonId",
                        name: "button",
                        channelId: "id-5-2",
                        children: []
                    }]
                },{
                    id: "4",
                    type: "listId",
                    name: "list",
                    channelId: "id-2",
                    children: []
                }]
            }
}];