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
    : "bg-[#EDE8F5] text-[#3D52A0] border border-[#ADBBDA]";

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-sm text-[#8697C4]">{children}</div>;
};
