import React from 'react';

interface AlertProps {
  variant?: 'default' | 'destructive';
  children: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ variant = 'default', children, className = '' }) => {
  const baseStyles = "px-4 py-3 rounded-lg mb-4 ";
  const variantStyles = variant === 'destructive' 
    ? "bg-red-50 text-red-700 border border-red-200" 
    : "bg-blue-50 text-blue-700 border border-blue-200";

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-sm">{children}</div>;
};