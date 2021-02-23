export class Skill {
    constructor(private _name: string, private _logo: string, private _site: string) { }

    get name() {
        return this._name;
    }
    set name(_name: string) {
        this._name = _name;
    }
    get logo() {
        return this._logo;
    }
    set logo(_logo: string) {
        this._logo = _logo;
    }
    get site() {
        return this._site;
    }
    set site(_site: string) {
        this._site = _site;
    }
}
