import React from 'react'
import { useTranslation } from 'react-i18next'
import Icon from '@/components/Icon/index.tsx'
import './Developing.less'

interface Iprops {
  children: string
}

function Developing({ children }: Iprops) {
  const { t } = useTranslation()
  return (
    <div className="c-Developing">
      <Icon type="development" className="icon" size="lg" />
      <h5 className="descreption">{t('components/common/Developing')}</h5>
    </div>
  )
}

export default Developing
