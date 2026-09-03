import type { Metadata } from "next";
import "./styles/globals.css";
import pretendard from "./styles/fonts/pretendard";

export const metadata: Metadata = {
  title: "Next Project",
  description: "재미있게 공부하는 Next 16!",
  icons:{
    icon: "assets/images/logo/favicon.ico"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-pretendard` } >
        {children}
      </body>
    </html>
  );
}
