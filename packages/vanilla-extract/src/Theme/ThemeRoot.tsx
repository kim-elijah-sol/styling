import classNames from 'classnames'
import { themeClass } from './theme.css'

function ThemeRoot({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={classNames(className, themeClass)} {...props} />
}

export default ThemeRoot
