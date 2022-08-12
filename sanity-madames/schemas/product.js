
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
        name: 'productColor',
        title: 'Cor do Produto',
        description: 'Coloque aqui ',
        type: 'array',
        of: [{type: 'colorPicker'}]
    },
    {
        name: 'name',
        title: 'Nome',
        type: 'string',
        description: 'Nome do produto'
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Esta é a forma será adereçado o produto na url do site, escreva o nome do do seu produto em "Nome" e então clique no botão generate. Exemplo: caso o',
        options: {
            source: 'name',
            maxLength: 90,
        }
    },
    {
        name: 'tags',
        title: 'Tags',
        type: 'tags',
        description: 'Coloque aqui apenas uma das 3 opcões que melhor define o produto em questão',
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
        name: "productStock",
        title: "Estoque do Produto",
        type: "number",
        description: "Coloque aqui a quantidade deste produto que você possui no estoque"
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