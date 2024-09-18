import AdminHeader from "@/components/AdminHeader";
import Footer from "@/components/Footer";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Blog - Event CMS"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex minh-screen w-full flex-col items-center justify-between`}>
        <AdminHeader />
        <main className="flex-1 w-full h-full">{children}</main>
        <Footer />
    </div>
  );
}
