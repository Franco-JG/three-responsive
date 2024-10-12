import { scene } from './shapes/scene.ts'
import './style.css'

const canvas = <HTMLCanvasElement> document.querySelector('#c')
const canvas2 = <HTMLCanvasElement> document.querySelector('#c2')

scene(canvas)
scene(canvas2)