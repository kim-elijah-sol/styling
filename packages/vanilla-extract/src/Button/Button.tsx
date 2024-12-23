import React from 'react'
import buttonClassName from './style.css'
import classNames from 'classnames'

function Button({
  type = 'button',
  style,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={classNames(className, buttonClassName)}
      {...props}
    />
  )
}

export default Button
