export default {
    name: 'tags',
    title: 'Tags',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nome',
            type: 'string',
            validation: (Rule: any) => Rule.required().warning("É obrigatório colocar o nome da tag")
        },
    ]
}