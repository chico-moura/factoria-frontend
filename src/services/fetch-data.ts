import {Produto} from '../types'

export default async function fetchData(url: string): Promise<Produto[]>{
    const response = await fetch(url)
    return response.json()
}

