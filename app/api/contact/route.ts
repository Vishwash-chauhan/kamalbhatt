import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate form data
function validateContactForm(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name?.trim()) {
    errors.push('Name is required');
  }

  if (!data.email?.trim()) {
    errors.push('Email is required');
  } else if (!isValidEmail(data.email)) {
    errors.push('Invalid email format');
  }

  // message is optional — only validate length when provided
  if (data.message?.trim() && data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData;

    // Validate the form data
    const validation = validateContactForm(body);
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const n8nWebhook = process.env.N8N_WEBHOOK_URL;

    if (!n8nWebhook) {
      console.warn('N8N_WEBHOOK_URL is not configured; contact form will not be forwarded to n8n.');
    } else {
      try {
        const n8nResponse = await fetch(n8nWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...body, receivedAt: new Date().toISOString() }),
        });

        if (!n8nResponse.ok) {
          const text = await n8nResponse.text().catch(() => null);
          console.error('n8n webhook error:', n8nResponse.status, text);
          return NextResponse.json(
            {
              success: false,
              message: 'Failed to forward to n8n webhook',
              errors: [text || `n8n responded with status ${n8nResponse.status}`],
            },
            { status: 502 }
          );
        }
      } catch (err) {
        console.error('Error sending to n8n webhook:', err);
        return NextResponse.json(
          {
            success: false,
            message: 'Error forwarding to n8n webhook',
            errors: [String(err)],
          },
          { status: 502 }
        );
      }
    }

    console.log('Contact form received:', {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form received successfully. We will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Optional: Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    {
      message: 'Contact API endpoint. Please use POST method to submit the contact form.',
    },
    { status: 405 }
  );
}
