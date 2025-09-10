import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ValueArch - Turn Every Conversation Into a Board-Ready Business Case',
  description: 'AI-powered platform that proves ROI in minutes. Trusted by 350+ SaaS leaders to quantify business value with precision.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}