import React from 'react';

interface ErrorAlertProps {
  error: string | null;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
      <p className="text-red-700">{error}</p>
    </div>
  );
};