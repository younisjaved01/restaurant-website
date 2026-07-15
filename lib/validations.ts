import { z } from 'zod';
import type { FieldErrors, Resolver } from 'react-hook-form';

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name.')
    .max(80, 'Name is too long.'),
  email: z.string().trim().min(1, 'Please enter your email.').email('Enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .max(20, 'Phone number is too long.')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(10, 'Message should be at least 10 characters.')
    .max(1000, 'Message is too long.'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Manual react-hook-form resolver for the schema above. Avoids pulling in the
// @hookform/resolvers package for a single small form.
export const contactFormResolver: Resolver<ContactFormValues> = (values) => {
  const result = contactFormSchema.safeParse(values);
  if (result.success) {
    return { values: result.data, errors: {} };
  }

  const errors: FieldErrors<ContactFormValues> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof ContactFormValues;
    if (!errors[field]) {
      errors[field] = { type: issue.code, message: issue.message };
    }
  }

  return { values: {}, errors };
};
