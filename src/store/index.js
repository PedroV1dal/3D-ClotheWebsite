import { proxy } from "valtio";

//uma forma diferente de se trabalhar com estados
//basta apenas passar o state e oepgar as propriedades com snap
const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state