import { useState, type ReactNode } from 'react'

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  dismissible?: boolean
  children: ReactNode
  className?: string
}

const variantClasses: Record<string, string> = {
  info: 'bg-blue-50 dark:bg-blue-950 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200',
  success: 'bg-green-50 dark:bg-green-950 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200',
  warning: 'bg-amber-50 dark:bg-amber-950 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200',
  error: 'bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-700 text-red-800 dark:text-red-200',
}

const iconMap: Record<string, string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
}

export default function Alert({
  variant = 'info',
  title,
  dismissible = false,
  children,
  className = '',
}: AlertProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      role="alert"
      className={`
        flex items-start gap-3 rounded-lg border p-4
        ${variantClasses[variant]}
        ${className}
      `.trim()}
    >
      {/* Icon */}
      <span className="text-lg flex-shrink-0 mt-0.5" aria-hidden="true">
        {iconMap[variant]}
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-bold mb-1">{title}</p>
        )}
        <p className="text-sm leading-relaxed">{children}</p>
      </div>

      {/* Dismiss button */}
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          aria-label="Bildirimi kapat"
          className="
            flex-shrink-0 p-1 rounded-md
            opacity-60 hover:opacity-100
            transition-opacity duration-200
            focus:outline-none focus:ring-2 focus:ring-current
          "
        >
          ✕
        </button>
      )}
    </div>
  )
}
