import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import closest from '../_util/closest';
import { PageLoading } from './Loading.tsx'

export interface IloadingPlugin {
  show: () => void
  hide: () => void
  remove: () => void
  isVisible: boolean
}

let loadingNode: Element | any

const randerLoadingDOM = () => {
  //   const loadingNode = document.createElement('div')
  loadingNode = document.createElement('div')
  loadingNode.id = `global-loading-${new Date().getTime()}`
  document.body.appendChild(loadingNode)
  ReactDOM.render(<PageLoading id="global-loading" className="global-loading" />, loadingNode)
}

const unmountLoadingDOM = () => {
  ReactDOM.unmountComponentAtNode(loadingNode)
  if (loadingNode && loadingNode.parentNode) {
    loadingNode.parentNode.removeChild(loadingNode)
  }
  loadingNode = undefined
}

const loadingPlugin: IloadingPlugin = {
  isVisible: false,
  show() {
    if (!loadingNode) {
      randerLoadingDOM()
    } else if (!this.isVisible) {
      loadingNode.style.display = 'block'
    }
    this.isVisible = true
  },
  hide() {
    if (loadingNode) {
      loadingNode.style.display = 'none'
    }
    this.isVisible = false
  },
  remove() {
    if (loadingNode) {
      unmountLoadingDOM()
    }
    this.isVisible = false
  }
}

export default loadingPlugin
