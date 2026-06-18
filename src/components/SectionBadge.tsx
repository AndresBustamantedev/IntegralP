import { clsx } from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

type SectionBadgeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function SectionBadge({
  children,
  className,
  ...props
}: SectionBadgeProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.16em] text-brand-green sm:text-[12px]',
        className,
      )}
      {...props}
    >
      <span className="h-[1px] w-8 bg-brand-green/55" aria-hidden="true" />
      <span
        className="h-1.5 w-1.5 rotate-45 rounded-[1px] bg-brand-green/80"
        aria-hidden="true"
      />
      <span>{children}</span>
    </div>
  )
}
