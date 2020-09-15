import { BACKEND_API } from '../config' 

export default function apiUrl() {
    const base_url = concat_url(BACKEND_API.backend_base_url, BACKEND_API.api_version)
    const estoque_url = concat_url(base_url, BACKEND_API.apps.estoque.app_name)
    const usuario_url = concat_url(base_url, BACKEND_API.apps.usuario.app_name)
    const produtos_url = concat_url(estoque_url, BACKEND_API.apps.estoque.produtos)
    const contatos_url = concat_url(estoque_url, BACKEND_API.apps.estoque.contatos)
    const detalhesOf = (base: string, id: number) => concat_url(base, id.toString())

    return {
        estoque: {
            produtos: {
                url: produtos_url,
                detalhes: (id: number) => detalhesOf(produtos_url, id)
            },
            contatos: {
                url: contatos_url,
                detalhes: (id: number) => detalhesOf(contatos_url, id)
            },
        },
        usuario: {
            url: usuario_url,
        },
    }
}

const concat_url = (base: string, concat: string) => base + '/' + concat