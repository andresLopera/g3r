export class BlockComponent {
    name : string;
    component: any;

    constructor(_name: string, _component: any) {
        this.name = _name;
        this.component = _component;
    }
}