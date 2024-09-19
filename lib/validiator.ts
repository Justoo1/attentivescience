import { z } from "zod"

  export const contactFormSchema = z.object({
    name: z.string().min(3, {
      message: "Name must be at least 3 characters",
    }),
    email: z.string().email({
      message: "Invalid email address",
    }),
    company: z.string().optional(), // Optional if not mandatory
    phone: z.string()
      .min(10, {
        message: "Phone must be at least 10 characters",
      })
      .max(14, {
        message: "Phone must be less than 14 characters",
      })
      .regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Invalid phone number format",
      }),
      message: z.string().min(10, {
        message: "Message must be at least 10 characters",
      }).max(400, {
        message: "Message must be less than 400"
    }),

  });
  


  export const eventFormSchema = z.object({
    title: z.string().min(3, {
      message: "Title must be at least 3 characters",
    }),
    description: z.string().min(3, {
        message: "Description must be at least 3 characters",
      }).max(400, {
        message: "Description must be less than 400"
    }),
    location: z.string().min(3, {
        message: "Location must be at least 3 characters",
      }).max(400, {
        message: "Location must be less than 400"
    }),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    content: z.string(),
    published: z.boolean().default(false),
  })

  
  export const blogFormSchema = z.object({
    title: z.string().min(3, {
      message: "Title must be at least 3 characters",
    }),
    description: z.string().min(3, {
        message: "Description must be at least 3 characters",
      }).max(400, {
        message: "Description must be less than 400"
    }),
    content: z.string(),
    imageUrl: z.string(),
    videoUrl: z.string().default(""),
    createdAt: z.date(),
    categoryId: z.string(),
    createdBy: z.string(),
    published: z.boolean().default(false),
  })