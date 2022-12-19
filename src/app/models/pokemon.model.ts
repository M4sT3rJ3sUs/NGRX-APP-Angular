export interface Pokemon{
    id:number,
    name:string,
    sprites:Sprites
    height:number,
    weight:number,
    base_experience:number

}


type Sprites = {
    back_default:string,
    back_shiny:string,
    front_default:string,
    front_shiny:string}