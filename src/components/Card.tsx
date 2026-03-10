import type { ReactNode } from 'react'

interface CardProps {
  variant?: 'elevated' | 'outlined' | 'filled'
  image?: string
  imageAlt?: string
  title?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
}

const variantClasses: Record<string, string> = {
  elevated:
    'bg-surface dark:bg-dark-surface shadow-card hover:shadow-card-hover border border-transparent',
  outlined:
    'bg-surface dark:bg-dark-surface border-2 border-border dark:border-dark-border shadow-none',
  filled:
    'bg-surface-alt dark:bg-dark-surface-alt border border-transparent shadow-none',
}

export default function Card({
  variant = 'elevated',
  image,
  imageAlt = '',
  title,
  children,
  footer,
  className = '',
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl overflow-hidden
        transition-all duration-300 ease-in-out
        ${variantClasses[variant]}
        ${className}
      `.trim()}
    >
      {/* Optional image */}
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Body */}
      <div className="p-5 md:p-6">
        {title && (
          <h3 className="text-lg font-bold text-text dark:text-dark-text mb-2">
            {title}
          </h3>
        )}
        <div className="text-muted dark:text-dark-text-muted text-sm leading-relaxed">
          {children}
        </div>
      </div>

      {/* Optional footer */}
      {footer && (
        <div className="px-5 md:px-6 py-3 border-t border-border dark:border-dark-border bg-surface-alt/50 dark:bg-dark-surface-alt/50">
          {footer}
        </div>
      )}
    </div>
  )
}
