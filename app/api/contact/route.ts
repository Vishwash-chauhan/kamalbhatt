import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
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

  if (!data.subject?.trim()) {
    errors.push('Subject is required');
  }

  if (!data.message?.trim()) {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
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

    // TODO: Implement your email sending logic here
    // Options:
    // 1. SendGrid: npm install @sendgrid/mail
    // 2. Nodemailer: npm install nodemailer
    // 3. Resend: npm install resend
    // 4. Custom backend/webhook
    
    // Example with environment variables:
    // const emailProvider = process.env.EMAIL_PROVIDER;
    // const apiKey = process.env.EMAIL_API_KEY;

    console.log('Contact form received:', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // Temporary: Just acknowledge receipt
    // Replace this with actual email sending implementation
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
