// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const products = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/productos",
  }), 

  schema: z.object({
    nombre: z.string(),
    contenido: z.string(),
    ingredientes: z.array(z.string()),
    puntos: z.number(),
    precio_publico: z.number(),
    tipo: z.number(),
    img: z.string(),
    precio_distribuidor: z.array(
      z.object({
        descuento: z.string(),
        precio: z.number()
      })
    ),
    category: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    beneficios: z.array(z.string()).optional(),

    // NUEVOS CAMPOS OPCIONALES
    modo_de_uso: z.string().optional(),
    recomendado_para: z.array(z.string()).optional(),
    testimonios: z.array(z.string()).optional(),
    advertencias: z.array(z.string()).optional(),
    sabor: z.string().optional(),
  }),
  // Example of using loaders
  // You can remove this if not needed
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { productos: products };