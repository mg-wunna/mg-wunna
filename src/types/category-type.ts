export namespace Category {
  export type Schema = {
    name: string;
    type: 'project' | 'blog';
  };
}

export type Category = Category.Schema;
