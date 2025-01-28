"use server"

import nodemailer from 'nodemailer';

// Initialize transporter with SMTP configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // SMTP server (e.g., smtp.gmail.com)
    port: parseInt(process.env.SMTP_PORT || '587'), // Default to 587 for TLS
    secure: parseInt(process.env.SMTP_PORT || '587') === 465, // Use SSL for port 465
    auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASSWORD, // SMTP password or app-specific password
    },
});

/**
 * Sends an email using the configured SMTP transporter.
 * @param to - Recipient email or array of emails.
 * @param subject - Email subject.
 * @param text - Plain text body.
 * @param html - HTML body (optional).
 * @param attachments - Array of attachments (optional).
 */
export async function sendEmail(
    to: string | string[],
    subject: string,
    text: string,
    html?: string,
    attachments?: { filename: string; content: string }[],
) {
    try {
        const mailOptions = {
            from: `"Anish Enterprises - " <${process.env.SMTP_USER}>`, // Sender address
            to: Array.isArray(to) ? to.join(',') : to,        // Support multiple recipients
            subject,
            text,
            html,
            attachments,
        };

        await transporter.sendMail(mailOptions);
        return {
            success: `Mail sent ✔️`
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            error: `Failed to send email`
        };
    }
}

export default sendEmail;
