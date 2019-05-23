import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

export function MyComponent() {
  const { t, i18n } = useTranslation()
  // or const [t, i18n] = useTranslation();

  return (
    <div>
      <p>{t('home/games')}</p>
      <button onClick={() => i18n.changeLanguage('en')}>改变语言</button>
    </div>
  )
}

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  )
}

export default App
