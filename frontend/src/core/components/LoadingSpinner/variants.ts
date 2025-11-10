import { clsx } from 'clsx';

export interface LoadingSpinnerVariantProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function getLoadingSpinnerClassName(props: LoadingSpinnerVariantProps): string {
  const { size = 'medium', className } = props;

  return clsx(
    'flex items-center justify-center',
    {
      'h-8 w-8': size === 'small',
      'h-12 w-12': size === 'medium',
      'h-16 w-16': size === 'large',
    },
    className
  );
}
