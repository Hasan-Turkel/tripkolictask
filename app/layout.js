import "./globals.css";

export const metadata = {
  title: "Travellers Local Market",
  description: "Search your travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
