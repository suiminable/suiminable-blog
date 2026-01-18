import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Provider>
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <footer className="border-t border-muted/40 py-6 text-center text-sm text-muted-foreground">
              © 2026, Hibiki Onodera (suiminable) ·{" "}
              {
                <a
                  className="underline"
                  href="https://github.com/suiminable/suiminable-blog/tree/main/public/licenses-detail.txt"
                >
                  licenses
                </a>
              }
            </footer>
          </div>
        </Provider>
      </body>
    </html>
  );
}
