export class CommonComponent {
    private hello: string;

    constructor() {
        this.hello = '';
    }

    public setHello(_hello: string) {
        this.hello = _hello;
    }

    public getHello() {
        return this.hello;
    }
}