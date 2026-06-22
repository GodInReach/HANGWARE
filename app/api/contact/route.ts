import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service
    console.log('Contact form submission:', { name, email, phone, subject, message })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
