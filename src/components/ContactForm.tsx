import { useState } from 'react';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      await fetch('https://formspree.io/f/xnqekqzq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _replyto: form.email, _subject: 'Plixum Contact Form', to: 'info@plixum.com' })
      });
      setSubmitted(true);
    } catch {
      setError('There was an error sending your message. Please try again later.');
    }
  };

  if (submitted) {
    return <div className="py-12 text-center text-green-600 font-semibold text-xl">Thank you! We have received your message.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto text-left">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border rounded px-4 py-2"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border rounded px-4 py-2"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          className="w-full border rounded px-4 py-2 min-h-[120px]"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      {error && <div className="text-red-600 font-medium">{error}</div>}
      <button type="submit" className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition">Send</button>
    </form>
  );
};
