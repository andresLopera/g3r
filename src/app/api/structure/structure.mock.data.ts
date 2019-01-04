import { StructureEntity } from "../../model/structure.entity";

export const structures: StructureEntity[] = [{
        id: "idStructure",
        rootPage: "idRootPage",
        pages: [
            {
                id : "idRootPage",
                type: "",
                name: "home",
                root: {
                    id: "idBlockElement",
                    type: "text",
                    name: "inputName",
                    children : []
                }
            }
        ]
},{
    id: '200',
    rootPage: 'rootPage200',
    pages: []
},{
    id: '300',
    rootPage: 'rootPage300',
    pages: []
}];