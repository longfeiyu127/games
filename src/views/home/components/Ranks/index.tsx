import React from 'react'
import { useTranslation } from 'react-i18next'

const HomeRanks = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <h2>{t('home/ranks')}</h2>
      <button onClick={() => i18n.changeLanguage('en')}>切换语言</button>
    </div>
  )
}

export default HomeRanks
