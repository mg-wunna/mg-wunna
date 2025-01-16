export namespace Project {
  export type Schema = {
    _id: string;
    image: string;
    slug: string;
    title: string;
    description: string;
    categories: string[];
    content: string;
    links: {
      title: string;
      url: string;
    }[];
    createdAt: string;
    updatedAt: string;
  };
}

export type Project = Project.Schema;
