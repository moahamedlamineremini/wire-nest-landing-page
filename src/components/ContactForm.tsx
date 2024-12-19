import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    setSubmitted(true);
    setEmail('');
  };

  return (
 
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-black/90 transition-colors"
          >
            Je suis intéressé(e)
          </button>
        </div>
      </form>

  );
}