import { z } from "zod";

// schema
const productSchema = z.object({
    name: z.string().max(5).optional().nullable(),
    price: z.number().optional().nullable()
})

// unlimited adding object
const productSchemaRecord = z.record(z.union([z.string().nullable().optional(), z.number().nullable().optional()]))

const productSchemaWithoutPrice = productSchema.omit({price: true})
const productSchemaWithPriceOnly = productSchema.pick({price: true})

// infer
type productType = z.infer<typeof productSchema>

export { productSchema }
export type { productType }
