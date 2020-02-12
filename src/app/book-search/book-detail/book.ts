export class Book {
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public imageUrl: string,
        public publicationYear: string,
        public publicationMonth: string,
        public publicationDay: string,
        public description: string,
        public numPages: string,
        public seriesWorks?: string
    ) {}
}
