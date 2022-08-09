export default {
    name: "user",
    title: "Usuario",
    type: "document",
    fields: [
        {
            name: "username",
            title: "Nome do Usuario",
            type: "string",
            readOnly: true,
            initialValue: "oi",
            validation: Rule => Rule.required().min(3).max(15).warning("Nomes são obrigatórios e precisam ter no mínimo 3 letras e no máximo 15")
        },
        {
            name: "profilePicture",
            title: "Foto de Perfil",
            type: "image",
            readOnly: true
        },
        {
            name: "profileWallpaper",
            title: "Capa de Perfil",
            type: "image",
            readOnly: true
        },
        {
            name: "age",
            title: "Idade",
            type: "number",
            readOnly: true,
            description: "Esta é a idade do usuario. Caso o usuario seja menor de 18 ele não terá acesso aos brinquedos sexuais comercializados pela loja",
            validation: Rule => Rule.required().min(14).integer().positive().warning("A idade é obrigatória e precisa ser de no mínimo 14 anos")
        }
    ]
}