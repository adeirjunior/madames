
export default {
    name: 'product',
    title: 'Produto',
    type: 'document',
    fields: [
    {
        name: 'image',
        title: 'Imagens',
        type: 'image',
        options: {
            hotspot: true,
        },
        validation: (Rule: any) => Rule.required()
    },
    {
        name: 'lowImage',
        title: 'Imagem de Baixa Resolução',
        description: 'Não é obrigatório que você preencha este bloco, mas é recomendado para possibilitar uma melhor experiência no carregamento dos produtos para os usuários. Simplesmente pegue a primeira (ou a única) imagem que você pôs do produto em "Imagens" e diminua sua resolução o máximo possível em algum site de compressão de imagem para a colocar aqui',
        type: 'image',
        options: {
            hotspot: true,
        }
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
        description: 'Esta é a forma será adereçado o produto na url do site, escreva o nome do do seu produto em "Nome" e então clique no botão generate. Exemplo: caso você tenha posto o nome do produto de "Roupa Muito Estilosa" ela ficara como aqui como "roupa-muito-estilosa"',
        options: {
            source: 'name',
            maxLength: 90,
        }
    },
    {
        name: 'tag',
        title: 'Tag',
        type: 'reference',
        description: 'Coloque aqui apenas uma das opcões que melhor define o produto em questão',
        to: [{type: 'tags'}]
    },
    {
        name: "productStock",
        title: "Estoque do Produto",
        type: "number",
        description: "Coloque aqui a quantidade deste produto que você possui no estoque",
        validation: (Rule: any) => Rule.required().warning("É obrigatório colocar o estoque atual do produto (a diminuição do estoque é feita de forma automática quando um cliente compra um produto pelo site)")
    },
    {
        name: 'price',
        title: 'Preço',
        type: 'number',
        validation: (Rule: any) => Rule.required()

    },
    {
        title: 'Detalhes', 
        name: 'details',
        type: 'array', 
        description: "Ponha aqui toda a descrição do seu produto, podendo se utilizar de imagens e um texto personalizado",
        of: [
                {type: 'block', styles: [{title: 'Qte', value: 'blockquote'}]}, 
                {type: 'image'}
        ]
    },
    { 
        name: 'desc',
        title: 'Descrição Resumida',
        type: 'string'
    }
]
}