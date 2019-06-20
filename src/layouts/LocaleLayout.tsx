import React from 'react'
import { connect } from 'react-redux'
import { LocaleProvider } from 'antd-mobile'

interface Iprops {
  children: React.ReactElement<any>
  locale: any
}

const BaseLayout = ({ children, locale }: Iprops) => {
  return <LocaleProvider locale={locale.language}>{children}</LocaleProvider>
}

const mapStateToProps = (state: any) => ({
  locale: state.base.locale
})

// const mapDispatchToProps = (dispatch: any) => ({
//   setTitle: dispatch.base.setTitle
// })

export default connect(
  mapStateToProps,
  null
)(BaseLayout)
