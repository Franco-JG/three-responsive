import { ArticleInfo } from "../interfaces/articleInfo.interface.ts"

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