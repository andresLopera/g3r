export class BlockComponent {
    id: string;
    name : string;
    component: any;

    constructor(_id: string, _name: string, _component: any) {
        this.id = _id;
        this.name = _name;
        this.component = _component;
    }
}