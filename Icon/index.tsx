import classnames from 'classnames'
import React from 'react'
import '@/theme/icon/icon.less'

export interface IconProps {
  type: string
  className?: string
  color?: string
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
  onClick?: React.MouseEventHandler
}

export default class Icon extends React.Component<IconProps, any> {
  public static defaultProps = {
    size: 'md'
  }
  public render() {
    const { type, className, size, ...restProps } = this.props
    const cls = classnames(className, 'iconfont', `icon-${type}`, `icon-${size}`)
    return <i className={cls} {...restProps} />
  }
}
