// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div className="text-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-neutral-100">Contact Me</h1>
      <p className="text-gray-400 max-w-xl mx-auto mb-6">
        Got questions, ideas, or collaborations? Let’s connect!
      </p>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-neutral-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-neutral-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-md bg-neutral-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-md transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
