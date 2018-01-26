import Base from "./Base";

export default class Label extends Base {
    constructor(
        public name: string = "",
        public isActive: boolean = true,
        public color: string = "#000000",
        public _id: string = "",
        public createdAt: Date,
    ) {
        super(_id, createdAt);
    }
}