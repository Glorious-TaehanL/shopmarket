import {z} from 'zod'

export const productSchema = z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(["draft","published","archived"]),
    price: z.number().min(1),
    images: z.array(z.string()).min(1, "하나이상의 이미지가 반드시 등록되어야 합니다."),
    category: z.enum(["men","women","kids"]),
    isFeatured: z.boolean().optional(),
});

export const bannerSchema = z.object({
    title: z.string(),
    imageString: z.string(),
});