import React from 'react'
import './Search.less'
import { SearchBar, WhiteSpace } from 'antd-mobile'
import { Translation } from 'react-i18next'
import Icon from '@/components/Icon/index.tsx'

export interface Iprops {
  children?: React.ReactElement<any>
}

const Search = ({ children }: Iprops) => {
  return (
    <div className="c-Search">
      <div className="Serrch-box">
        <div className="positioning">
          <Icon type="location" size="xs" />
          <span>深圳市</span>
        </div>
        <Translation>
          {t => <SearchBar className="SearchBar" placeholder={t('home/games/search')} maxLength={8} />}
        </Translation>
      </div>
      <WhiteSpace />
    </div>
  )
}

export default Search
