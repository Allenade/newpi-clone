import { Geist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/auth-context";

// const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
