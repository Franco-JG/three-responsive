import { PerspectiveCamera, WebGLRenderer } from "three";
import { ArticleInfo } from "./interfaces/articleInfo.interface.ts"

export function resizeRendererAndCamera(renderer: WebGLRenderer, camera: PerspectiveCamera){
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
    camera.aspect = canvas.clientWidth/canvas.clientHeight
    camera.updateProjectionMatrix()
    console.log('resize')
  }
}

export function createCanvas({ title, description }: ArticleInfo) {
  const section = <HTMLElement> document.querySelector('section')
	
  const article = document.createElement('article')
  const canvas = document.createElement('canvas')

  const titleElement = document.createElement('h2')
  const descriptionElement = document.createElement('p') 

  titleElement.innerHTML = title;
  descriptionElement.innerText = description;

  article.append(titleElement, canvas, descriptionElement)
  section.appendChild(article)

  return canvas;
}