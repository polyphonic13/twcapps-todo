export default class Base {
    constructor(
        public _id: string = "",
        public createdAt?: Date,
        public updatedAt?: Date,
    ) {}
}