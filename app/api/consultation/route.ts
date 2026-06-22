import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, budget, message } = body

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // TODO: Store in database or CRM
    console.log('Consultation request:', { name, email, phone, company, service, budget, message })

    return NextResponse.json(
      { success: true, message: 'Consultation request received successfully.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
