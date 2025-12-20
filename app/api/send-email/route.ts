import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Create OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );
    
    // Set credentials using refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });
    
    // Get access token
    const accessToken = await oauth2Client.getAccessToken();
    
    // Create Gmail client
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
    
    // Create email message
    const message = [
      `From: "Portfolio Website" <${process.env.EMAIL_FROM}>`,
      `To: ${process.env.EMAIL_FROM}`,
      `Reply-To: ${formData.email}`,
      `Subject: New Hire Request: ${formData.name}`,
      'Content-Type: text/html; charset=utf-8',
      '',
      `<html>
        <body style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2563eb;">📨 New Contact Form Submission</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <p><strong>👤 Name:</strong> ${formData.name}</p>
            <p><strong>📧 Email:</strong> ${formData.email}</p>
            <p><strong>🏢 Company:</strong> ${formData.company || 'Not specified'}</p>
            <p><strong>🔧 Project Type:</strong> ${formData.projectType || 'Not specified'}</p>
            <p><strong>💰 Budget:</strong> ${formData.budget || 'Not specified'}</p>
            <p><strong>⏰ Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
            <hr>
            <h3>Project Description:</h3>
            <p>${formData.description.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #6b7280; margin-top: 20px;">
            Sent from portfolio website contact form
          </p>
        </body>
      </html>`
    ].join('\n');
    
    // Encode message
    const encodedMessage = Buffer.from(message)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    
    // Send email
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage
      }
    });
    
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully via Gmail API!'
    });
    
  } catch (error: any) {
    console.error('Gmail API Error:', error);
    
    return NextResponse.json({
      success: false,
      message: error.message || 'Failed to send email'
    }, { status: 500 });
  }
}