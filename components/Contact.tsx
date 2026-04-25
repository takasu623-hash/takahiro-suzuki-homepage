"use client";

import { useState } from 'react';
import { dictionaries, Locale } from '../config/dictionaries';
import './Contact.css';

export default function Contact({ lang }: { lang: string }) {
    const dict = dictionaries[lang as Locale].contact;
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") ?? "");
        const email = String(data.get("email") ?? "");
        const message = String(data.get("message") ?? "");

        try {
            const response = await fetch("https://formsubmit.co/ajax/d8301aa2834f9d3d27b0595bbfd02438", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    _subject: `New Contact Form Submission from ${name}`,
                    _replyto: email
                })
            });
            const result = await response.json().catch(() => null);
            if (response.ok && result?.success !== "false" && result?.success !== false) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <div className="section-header text-center">
                    <h2 className="section-title">{dict.title}</h2>
                    <p className="section-subtitle">{dict.subtitle}</p>
                </div>

                <div className="contact-form-wrapper">
                    {status === "success" ? (
                        <div className="contact-success animate-fade-in">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="success-icon">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <h3>{dict.successTitle}</h3>
                            <p>{dict.successMessage}</p>
                            <button onClick={() => setStatus("idle")} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                                {dict.sendAnother}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form animate-slide-up">
                            <div className="form-group">
                                <label htmlFor="name">{dict.nameLabel}</label>
                                <input type="text" id="name" name="name" required placeholder={dict.namePlaceholder} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{dict.emailLabel}</label>
                                <input type="email" id="email" name="email" required placeholder={dict.emailPlaceholder} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{dict.messageLabel}</label>
                                <textarea id="message" name="message" required rows={5} placeholder={dict.messagePlaceholder}></textarea>
                            </div>
                            {status === "error" && (
                                <p className="contact-error">{dict.errorMessage}</p>
                            )}
                            <button type="submit" className="btn btn-primary submit-btn" disabled={status === "submitting"}>
                                {status === "submitting" ? dict.sendingText : dict.sendText}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
