import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const variantClasses: Record<string, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg',
  secondary:
    'bg-secondary text-white hover:bg-sky-600 shadow-md hover:shadow-lg',
  danger:
    'bg-error text-white hover:bg-red-600 shadow-md hover:shadow-lg',
  ghost:
    'bg-transparent text-primary hover:bg-primary-light dark:text-blue-300 dark:hover:bg-dark-surface-alt',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-5 py-2.5 text-base rounded-lg',
  lg: 'px-7 py-3.5 text-lg rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  disabled,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center font-semibold
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        dark:focus:ring-offset-dark-bg
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `.trim()}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
