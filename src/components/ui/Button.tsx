import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}: ButtonProps) {
  // Premium motion (حديث + غير “قديم”)
  const baseStyles =
    [
      'inline-flex items-center justify-center gap-2 font-semibold rounded-xl',
      'select-none whitespace-nowrap',
      // حركة حديثة: أهدى + easing عالمي
      'transition-[transform,box-shadow,background-color,color,border-color,opacity] duration-300',
      '[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
      // مهم: يمنع أي parent يفرض opacity = 0 بالخطأ
      'opacity-100',
      // States
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
      // Focus premium
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 focus-visible:ring-offset-2',
      'focus-visible:ring-offset-white dark:focus-visible:ring-offset-secondary-900',
      // Hover subtle lift
      'hover:-translate-y-0.5 active:translate-y-0',
    ].join(' ');

  const variants = {
    primary: [
      'bg-primary-600 text-white',
      'hover:bg-primary-700',
      'shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30',
    ].join(' '),

    secondary: [
      'bg-secondary-600 text-white',
      'hover:bg-secondary-700',
      'shadow-lg shadow-secondary-500/20 hover:shadow-xl hover:shadow-secondary-500/25',
    ].join(' '),

    // مهم: outline في dark لازم يبقى واضح حتى بدون hover
    outline: [
      'border-2',
      'border-primary-600 text-primary-700',
      'hover:bg-primary-600 hover:text-white',
      'dark:border-primary-400 dark:text-primary-200',
      'dark:hover:bg-primary-500 dark:hover:text-white',
      // تحسين: خلفية خفيفة جدًا عشان الزر مايبقاش “مموه” فوق هيرو أزرق
      'bg-white/10 dark:bg-white/5',
      'hover:shadow-lg hover:shadow-primary-500/15',
    ].join(' '),

    ghost: [
      'text-primary-700 dark:text-primary-200',
      'hover:bg-primary-50 dark:hover:bg-primary-900/20',
    ].join(' '),
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" aria-hidden="true" />}
    </button>
  );
}
