import { useAuth } from "@/context/AuthContext";
import { getDaysUntilNextCharge, subscriptions } from "@/utils";

export default function SubscriptionsDisplay(props) {
    const { handleShowInput, handleEditSubscription } = props;
    const { handleDeleteSubscription, userData } = useAuth();
    console.log(userData);

    if (!userData?.subscriptions) {
        return null;
    }

    // 状態の翻訳
    const translateStatus = (status) => {
        switch (status) {
            case 'Active': return '有効';
            case 'Paused': return '一時停止中';
            case 'Cancelled': return 'キャンセル済み';
            default: return status;
        }
    };

    // 請求頻度の翻訳
    const translateFrequency = (freq) => {
        switch (freq) {
            case 'Monthly': return '月額';
            case 'Yearly': return '年額';
            case 'Quarterly': return '四半期ごと';
            case 'One-time': return '一回限り';
            default: return freq;
        }
    };

    // カテゴリーの翻訳
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
            <h2>サブスクリプション一覧</h2>
            <div className="card-container">
                {userData.subscriptions.map((sub, subIndex) => {
                    const { name, category, cost, currency, billingFrequency, startDate, notes, status } = sub;

                    return (
                        <div key={subIndex} className="card subscription-card">
                            <div>
                                <h3>{name}</h3>
                                <div className={'status ' + (status === 'Active' ? ' card-button-primary' : ' card-button-secondary')}>
                                    <small>{translateStatus(status)}</small>
                                </div>
                            </div>

                            <p><i>{categoryLabels[category] || category}</i></p>

                            <div className="sub-cost">
                                <h2>¥{cost}</h2>
                                <p>{currency}</p>
                            </div>
                            <small>{translateFrequency(billingFrequency)}ごと</small>

                            <div className="sub-renewal">
                                <div>
                                    <p>開始日</p>
                                    <h4>{startDate}</h4>
                                </div>
                                <div>
                                    <p>次回請求まで</p>
                                    <h4>{getDaysUntilNextCharge(startDate, billingFrequency)}日</h4>
                                </div>
                            </div>

                            <div className="white-line" />
                            <p>{notes}</p>
                            <div className="subscription-actions">
                                <button onClick={() => handleEditSubscription(subIndex)} className="button-card">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                    編集
                                </button>
                                <button onClick={() => handleDeleteSubscription(subIndex)} className="button-card">
                                    <i className="fa-solid fa-trash"></i>
                                    削除
                                </button>
                            </div>
                        </div>
                    );
                })}
                <button onClick={handleShowInput} className="button-card add-subscriptions">
                    <i className="fa-solid fa-plus"></i>
                    <h5>新規追加</h5>
                </button>
            </div>
        </section>
    );
}
