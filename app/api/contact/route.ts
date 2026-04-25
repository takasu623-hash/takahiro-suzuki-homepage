import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');

        // formsubmit.co rejects requests without an Origin/Referer header, so forward
        // the browser's values when proxying server-side.
        const origin = req.headers.get('origin') ?? new URL(req.url).origin;
        const referer = req.headers.get('referer') ?? origin;

        const response = await fetch("https://formsubmit.co/ajax/takasu.623@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': origin,
                'Referer': referer
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
                _subject: `New Contact Form Submission from ${name}`,
                _replyto: email
            })
        });

        const rawText = await response.text();
        let result: { success?: string | boolean; message?: string } | null = null;
        try { result = JSON.parse(rawText); } catch { /* non-JSON */ }

        if (response.ok && result?.success !== "false" && result?.success !== false) {
            return NextResponse.json({ success: true });
        } else {
            console.error("formsubmit.co error:", response.status, rawText);
            return NextResponse.json({
                error: result?.message ?? "Failed to forward email.",
                debug: { status: response.status, body: rawText.slice(0, 500) }
            }, { status: 500 });
        }
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json({
            error: "Internal Server Error",
            debug: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}
