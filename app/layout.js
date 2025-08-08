import "./globals.css";
import "./fanta.css";
import Head from "./Head";
import Link from "next/link";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Expenny · サブスクリプション管理ツール",
  description: "全てのサブスクリプションを一括で可視化・分析！",
};

export default function RootLayout({ children }) {
  const header = (
    <header>
      <div>
        <Link href={'/'}>
          <h1 className="text-gradient">Expenny</h1>
        </Link>
        <p>サブスクリプション管理ツール</p>
      </div>
      <GoTo />
    </header>
  );

  const footer = (
    <footer>
      <div className="hard-line" />
      <div className="footer-content">
        <div>
          <div>
            <h4>Expenny</h4>
            <p>|</p>
            <button disabled>アプリをインストール</button>
          </div>
          <p className="copyright">
            © Copyright 2024-2025, OUYANG Yuni.<br />
            All rights reserved.
          </p>
        </div>
        <div>
          <p>お困りですか？<a>サポートを受ける</a></p>
          <p>改善の提案がありますか？<a>フィードバックを送信</a></p>
          <div>
            <Link href={'/privacy'}>プライバシーポリシー</Link>
            <Link href={'/tos'}>利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <html lang="ja">
      <Head />
      <AuthProvider>
        <body>
          {header}
          <div className="full-line" />
          <main>
            {children}
          </main>
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
