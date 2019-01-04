export class BlockComponent {
    typeId : string;
    component: any;

    constructor(_typeId: string, _component: any) {
        this.typeId = _typeId;
        this.component = _component;
    }
}