export default {
    name: 'product',
    title: 'Produto',
    type: 'document',
    fields: [
    {
        name: 'image',
        title: 'Imagens',
        type: 'array',
        of: [{type: 'image'}],
        options: {
            hotspot: true,
        }
    },
    {
        name: 'lowImage',
        title: 'Imagem de Baixa Resolução',
        type: 'image',
        options: {
            hotspot: true,
        }
    },
    {
        name: 'name',
        title: 'Nome',
        type: 'string'
    },
    {
        name: 'category',
        title: 'Categoria',
        type: 'string'
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 90,
        }
    },
    {
        name: 'price',
        title: 'Preço',
        type: 'number'

    },
    { 
        name: 'details',
        title: 'Detalhes',
        type: 'string'
    },
    { 
        name: 'desc',
        title: 'Descrição Resumida',
        type: 'string'
    }
]
}