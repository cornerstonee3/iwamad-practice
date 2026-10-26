import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: 'primary' | 'secondary' 
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  
  return (
    <button 
      type="button" 
      className={`btn ${variantClass} ${className}`} 
      {...props} 
    />
  );
}