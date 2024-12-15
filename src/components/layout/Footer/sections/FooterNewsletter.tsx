import React from 'react';
import { Send, Mail } from 'lucide-react';
import { useForm } from '../../../../hooks/useForm';

interface NewsletterForm {
  email: string;
}

const validateEmail = (values: NewsletterForm) => {
  const errors: Partial<Record<keyof NewsletterForm, string>> = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export const FooterNewsletter: React.FC = () => {
  const { values, status, errors, handleChange, handleSubmit } = useForm<NewsletterForm>({
    initialValues: { email: '' },
    onSubmit: async (values) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Newsletter subscription:', values);
    },
    validate: validateEmail
  });

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-500/10 to-purple-500/10 p-6 backdrop-blur-sm border border-zinc-800">
      <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
      
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="w-5 h-5 text-red-400" />
          <h4 className="text-lg font-bold text-white">Stay Updated</h4>
        </div>
        <p className="text-sm text-zinc-400 mb-4">
          Get weekly manga recommendations and exclusive updates
        </p>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="relative">
            <input
              type="email"
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 bg-black/30 border border-zinc-700 rounded-lg
                text-white placeholder-zinc-500 focus:outline-none focus:ring-2 
                focus:ring-red-500/50 focus:border-red-500"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5
                bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md
                hover:from-red-600 hover:to-red-700 transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className={`w-4 h-4 ${status === 'loading' ? 'animate-spin' : ''}`} />
            </button>
          </div>
          
          {errors.email && (
            <p className="text-sm text-red-400">{errors.email}</p>
          )}
          
          {status === 'success' && (
            <p className="text-sm text-green-400">Thanks for subscribing! 🎉</p>
          )}
        </form>
      </div>
    </div>
  );
};