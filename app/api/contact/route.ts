import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');

        // Here we use formsubmit.co via a server-side fetch to keep the email address
        // completely hidden from the client-side code and network requests.
        const response = await fetch("https://formsubmit.co/ajax/takasu.623@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
                _subject: `New Contact Form Submission from ${name}`,
                _replyto: email
            })
        });

        if (response.ok) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ error: "Failed to forward email." }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
