export namespace Blog {
  export type Schema = {
    _id: string;
    image: string;
    slug: string;
    title: string;
    description: string;
    category: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  };
}

export type Blog = Blog.Schema;
