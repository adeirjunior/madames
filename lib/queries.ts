const productFields = `
  name,
  image,
  productStock,
  price,
  details,
  desc,
  "slug": slug.current,
  "tag": tag -> name,
`

const bannerFields = `

`

export const productsQuery = `
    *[_type == "product"] {
        ${productFields}
    }
`

export const productQuery = (slug: string) => `
    *[_type == "product" && slug.current == "${slug}"][0] {
        ${productFields}
    }
`