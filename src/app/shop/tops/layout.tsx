import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/_components/Header/Header";
import Footer from "@/app/_components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Tops",
    description: "Rose-Chic",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}