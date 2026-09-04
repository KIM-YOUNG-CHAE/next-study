import type { Metadata } from "next";
import "./styles/globals.css";
import pretendard from "./styles/fonts/pretendard";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Next Project😎",
  description: "재밌게 공부하는 Next 16!",
  icons: {
    icon: "/assets/images/logo/favicon.ico"
  }
};

export default function RootLayout({ children, modal }: LayoutProps<"/">) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}
    >
      <body className={`${pretendard.variable} font-pretendard`}>
        {children}
        {modal}
      </body>
    </html>
  );
}