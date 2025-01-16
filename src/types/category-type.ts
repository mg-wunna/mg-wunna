export namespace Category {
  export type Schema = {
    _id: string;
    name: string;
    type: 'project' | 'blog';
    createdAt: string;
    updatedAt: string;
  };
}

export type Category = Category.Schema;
