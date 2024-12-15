import { useState } from 'react';
import { StatusType } from '../types/common';
import { FORM_STATUS } from '../utils/constants';

interface UseFormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [status, setStatus] = useState<StatusType>(FORM_STATUS.IDLE);

  const handleChange = (name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    try {
      setStatus(FORM_STATUS.LOADING);
      await onSubmit(values);
      setStatus(FORM_STATUS.SUCCESS);
      setValues(initialValues);
    } catch (error) {
      setStatus(FORM_STATUS.ERROR);
      setErrors({ submit: error instanceof Error ? error.message : 'Submission failed' });
    }
  };

  return {
    values,
    errors,
    status,
    handleChange,
    handleSubmit,
    reset: () => {
      setValues(initialValues);
      setErrors({});
      setStatus(FORM_STATUS.IDLE);
    }
  };
}