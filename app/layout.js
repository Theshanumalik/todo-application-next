import Navbar from "./components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Todos - Best to application ever existed!",
  description:
    "Todos is a todo application developed by theshanumalik with the purpose of learning NextJs Framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-500 text-white`}>
        <div className="max-w-[1200px] w-full mx-auto p-2">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
