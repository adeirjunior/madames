export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'product',
            title: 'Produto',
            type: 'reference',
            to: [{type: 'product'}]
        },
        {
            name: 'buttonText',
            title: 'Texto do Botão',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Descrição',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'Texto Pequeno',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'Texto Médio',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'Texto Largo 1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'Texto Largo 2',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Desconto',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string',
        },
    ],
    preview: {
        select: {
          title: 'product.name',
          media: 'product.image',
        },
        prepare(selection: any) {
          return { ...selection }
        },
      },
  };