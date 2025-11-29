import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    setStatus("Sending...")

    emailjs
      .send(
        "service_meizt2n",
        "template_zfeqqul",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "MYsic2vqWBJAmAxM3"
      )
      .then(
        () => {
          setStatus("Message sent successfully!")
          setForm({ name: '', email: '', message: '' })
        },
        (error) => {
          console.error(error)
          setStatus("Failed to send message. Try again.")
        }
      )
  }

  return (
    <main className="page contact">
      <h2>Let’s Build Your Future Together</h2>
      <p>
        Have questions? Interested in a course? Or need a custom IT solution?
        Connect with us today:
      </p>
      <p>📧 Email: mindrotech7@gmail.com</p>
      <p>📍 Location: India (Offering Online & Hybrid Services)</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} type="email" required />
        </label>

        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} rows={5} required />
        </label>

        <button type="submit">Submit</button>
      </form>

      {status && <p className="status">{status}</p>}
    </main>
  )
}
