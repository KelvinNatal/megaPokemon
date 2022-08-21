import { types } from "./types"
import {abilities} from "./abilities"

export type data =  {
    sprites: {
        front_default: string
        back_default: string
        front_shiny: string
    }
    abilities: abilities[]
    types: types[]
    name: string
    height: number
}