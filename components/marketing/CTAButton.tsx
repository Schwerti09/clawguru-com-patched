import { cn } from '@/lib/utils'

type Props = {
  href: string
  label: string
  variant?: 'primary' | 'outline'
  size?: 'md' | 'lg'
}

export default function CTAButton({ href, label, variant = 'primary', size = 'md' }: Props) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/20'
  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }
  const variants = {
    primary:
      'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl hover:shadow-red-900/30',
    outline: 'bg-white/5 hover:bg-white/10 border border-gray-800 text-gray-200 hover:text-white',
  }

  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(base, sizes[size], variants[variant])}
    >
      {label}
    </a>
  )
}
