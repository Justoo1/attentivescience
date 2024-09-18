import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | Attentive Science"
  },
  description: "In your mission to develop cures and remedies, contract our research services to provide the necessary support to fortify your quest. Toxicology",
  icons:{
    icon: '/assets/icons/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex minh-screen w-full flex-col items-center justify-between`}>
        <Header />
        <main className="flex-1 w-full h-full">{children}</main>
        <Footer />
    </div>
  );
}
