export namespace Comment {
  export type Schema = {
    _id: string;
    slug: string;
    name: string;
    email: string;
    rating: number;
    comment: string;
    date: Date;
  };
}

export type Comment = Comment.Schema;
