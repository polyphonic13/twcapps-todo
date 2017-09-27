import Base from "./base";

export default class Label extends Base {
    constructor(
        public name: string = "",
        public isActive: boolean = true,
        public _id: string = "",
        public createdAt: Date,
    ) {
        super(_id, createdAt);
    }
}