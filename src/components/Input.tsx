import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label: string
  error?: string
  helpText?: string
}

export default function Input({
  label,
  error,
  helpText,
  disabled,
  className = '',
  type = 'text',
  ...rest
}: InputProps) {
  const id = useId()
  const errorId = `${id}-error`
  const helpId = `${id}-help`

  const describedBy = [
    error ? errorId : null,
    helpText ? helpId : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-semibold text-text dark:text-dark-text"
      >
        {label}
      </label>

      {/* Input */}
      <input
        id={id}
        type={type}
        disabled={disabled}
        aria-describedby={describedBy}
        aria-invalid={error ? true : undefined}
        className={`
          w-full px-4 py-2.5 rounded-lg border text-base font-normal
          bg-surface dark:bg-dark-surface
          text-text dark:text-dark-text
          placeholder:text-muted dark:placeholder:text-dark-text-muted
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1
          dark:focus:ring-offset-dark-bg
          disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-alt dark:disabled:bg-dark-surface-alt
          ${error
            ? 'border-error focus:ring-error'
            : 'border-border dark:border-dark-border'
          }
        `.trim()}
        {...rest}
      />

      {/* Error message */}
      {error && (
        <p id={errorId} className="text-sm text-error font-medium" role="alert">
          {error}
        </p>
      )}

      {/* Help text */}
      {helpText && !error && (
        <p id={helpId} className="text-sm text-muted dark:text-dark-text-muted">
          {helpText}
        </p>
      )}
    </div>
  )
}
