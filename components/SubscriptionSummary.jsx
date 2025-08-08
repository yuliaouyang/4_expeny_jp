import { useAuth } from "@/context/AuthContext";
import { calculateSubscriptionMetrics } from "@/utils";

export default function SubscriptionSummary() {
    const { userData } = useAuth();
    const summary = calculateSubscriptionMetrics(userData.subscriptions);
    console.log(summary);

    const emojis = ['🔥', '✅', '⭐️', '⚡️', '🎉', '✨', '🏆', '🌼', '🌱', '🐛', '🐙', '🪼'];

    // 指标字段名翻译
    const metricLabels = {
        total_monthly_cost: '月額合計コスト',
        total_yearly_cost: '年間合計コスト',
        average_monthly_spending: '月平均支出',
        active_subscriptions: '有効なサブスクリプション数',
        top_spending_category: '最も支出が多いカテゴリー',
        upcoming_billing_count: '次回請求予定数',
        most_expensive_subscription: '最も高額なサブスクリプション',
    };

    // 类别名（值）翻译
    const categoryLabels = {
        'Web Services': 'ウェブサービス',
        'Software': 'ソフトウェア',
        'Entertainment': 'エンタメ',
        'Music': '音楽',
        'Health & Fitness': '健康・フィットネス',
        'Other': 'その他'
    };

    return (
        <section>
            <h2>サブスクリプション分析</h2>
            <div className="analytics-card">
                {Object.keys(summary).map((metric, metricIndex) => {
                    const label = metricLabels[metric] || metric.replaceAll('_', ' ');
                    const value =
                        metric === 'top_spending_category'
                            ? categoryLabels[summary[metric]] || summary[metric]
                            : summary[metric];

                    return (
                        <div key={metricIndex} className="analytics-item">
                            <p>{emojis[metricIndex]} {label}</p>
                            <h4>{value}</h4>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
