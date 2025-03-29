import React from 'react'
import { buttonStyle } from './style.css'
import classNames from 'classnames'

function Button({
  type = 'button',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={classNames(className, buttonStyle['brand'])}
      {...props}
    />
  )
}

export default Button

function Warning({
  type = 'button',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={classNames(className, buttonStyle.warning)}
      {...props}
    />
  )
}

Button.Warning = Warning
