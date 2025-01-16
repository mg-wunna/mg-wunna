export namespace Contact {
  export type Schema = {
    _id: string;
    name: string;
    email: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export type Contact = Contact.Schema;
