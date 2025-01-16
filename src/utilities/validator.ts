/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';

const validator = <T extends z.ZodSchema>(schema: T, data: unknown) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const formatted = result.error.format();

    const cleanFormatted = (obj: any): any => {
      const cleaned: any = {};

      for (const [key, value] of Object.entries(obj)) {
        if (key === '_errors') continue;

        if (typeof value === 'object' && value !== null) {
          const nestedCleaned = cleanFormatted(value);
          if (Object.keys(nestedCleaned).length > 0) {
            cleaned[key] = nestedCleaned;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
          } else if (value._errors?.length) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            cleaned[key] = value._errors[0];
          }
        }
      }

      return cleaned;
    };

    const errors = cleanFormatted(formatted);
    return { success: false, errors } as const;
  }

  return {
    success: true,
    data: result.data as z.infer<T>,
  } as const;
};

export default validator;
