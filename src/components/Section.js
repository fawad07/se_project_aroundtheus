export class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderer = renderer;
        this._renderItems = items;
        this._selector = documrnt.querySelector(containerSelector);
    }//end const
}//end class