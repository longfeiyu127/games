import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '@/theme/index.less'
import '@/locales/i18n.ts'
import App from './App'
// import App from './App.la'
// import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
// registerServiceWorker()
