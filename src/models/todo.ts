import Base from "./base";

export default class Todo extends Base {
    constructor(
        public name: string = "",
        public decription: string = "",
        public isCompleted: boolean = false,
        public _id: string = "",
        public createdAt: Date,
    ) {
        super(_id, createdAt);
    }
}