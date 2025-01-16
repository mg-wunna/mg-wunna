export namespace Blog {
  export type Schema = {
    _id: string;
    image: string;
    slug: string;
    title: string;
    description: string;
    categories: string[];
    content: string;
    createdAt: string;
    updatedAt: string;
  };
}

export type Blog = Blog.Schema;
