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
        name: 'tags',
        title: 'Tags',
        type: 'tags',
        options: {
          //Locks menu from creating new tags (defaults to false)
          frozen: true,
          //Preset of tags (defaults to empty)
          preload: [{label: "Langeries", value: "langeries"}, {label: "Perfumes", value: "perfumes"}, {label: "Sex Shop", value: "sexShop"}],
          //Closes menu after tag selected (defaults to true)
          closeMenuOnSelect: true
        }
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