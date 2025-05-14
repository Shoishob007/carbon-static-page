import './globals.css';

export const metadata = {
  title: 'Carbon Initiative | Coming Soon',
  description: 'Innovative solutions to reduce carbon footprints',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}