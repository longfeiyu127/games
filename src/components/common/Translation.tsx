import React from 'react'
import { Translation as I18n } from 'react-i18next'

interface Iprops {
  children: string
}

function Translation({ children }: Iprops) {
  return <I18n>{t => t(children)}</I18n>
}

export default Translation
