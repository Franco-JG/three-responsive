import { scene } from './shapes/scene.ts'
import './style.css'

const canvas = <HTMLCanvasElement> document.querySelector('#c')

scene(canvas)