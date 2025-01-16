export type UValidator<Data, Error> =
  | { success: true; data: Data; error?: never }
  | { success: false; errors: Error; data?: never };
