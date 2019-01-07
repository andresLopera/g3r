import { StructureEntity } from "../../model/structure.entity";

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
                    children : []
                },{
                    id: "2",
                    type: "headId",
                    name: "Head",
                    children : []
                },{
                    id: "3",
                    type: "inputId",
                    name: "Input",
                    children: []
                }, {
                    id: "4",
                    type: "buttonId",
                    name: "button",
                    children: []
                }]
            }
}];