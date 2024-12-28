import React from 'react'
import { buttonStyle, warningButtonStyle } from './style.css'
import classNames from 'classnames'

function Button({
  type = 'button',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={classNames(className, buttonStyle)}
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
      className={classNames(className, warningButtonStyle)}
      {...props}
    />
  )
}

Button.Warning = Warning
