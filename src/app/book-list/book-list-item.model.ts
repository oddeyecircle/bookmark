export class BookListItem {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public totalPages: number,
        public currentPage: number,
        public image: string
    ) {}
}
