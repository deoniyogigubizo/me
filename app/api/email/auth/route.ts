import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (code) {
    return new NextResponse(`
      <html>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h1 style="color: #2563eb;">✅ Authorization Successful!</h1>
          <p>Copy this authorization code:</p>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; font-family: monospace; font-size: 16px; word-break: break-all;">
            ${code}
          </div>
          <p>Use this code in your terminal to generate the refresh token.</p>
          <p style="color: #6b7280; margin-top: 30px;">
            You can close this window now.
          </p>
        </body>
      </html>
    `, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }

  return new NextResponse('Authorization code not found', { status: 400 });
}