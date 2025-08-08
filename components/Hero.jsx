import Link from "next/link";

export default function Hero() {
    return (
        <div className="hero-section">
            {/* === 左侧：テキスト部分 === */}
            <div className="hero-text">
                <p className="header-text">
                    サブスクリプションを<br />
                    管理しよう<br />
                    あなたの手で
                    <span className="hero-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#030615" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5..."></path>
                        </svg>
                    </span>
                </p>

                <p className="text-medium">
                    <strong>Expenny</strong>で、サブスクリプションを測定・分析・管理しましょう。
                </p>

                <Link href="/dashboard">
                    <button className="hero-button">
                        <h5>今すぐはじめる &rarr;</h5>
                    </button>
                </Link>

                <small className="hero-note">完全無料。クレジットカード不要。</small>
            </div>

            {/* === 右侧：ビジュアル表示 === */}
            <div className="hero-display">
                {[1, 2].map((col, i) => (
                    <div key={i} className="hero-column">
                        {[0, 1].map((_, j) => (
                            <div key={j} className="card">
                                <div>
                                    <div className="card-header"></div>
                                    <div className="card-blank"></div>
                                    <div className="card-description-large" />
                                    <div className="card-description-small" />
                                </div>
                                <div className="card-square" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
