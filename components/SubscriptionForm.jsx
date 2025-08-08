'use client'

import { useAuth } from "@/context/AuthContext"
import { useState } from "react"

export default function SubscriptionForm(props) {
    const { onSubmit, closeInput, formData, handleChangeInput, handleResetForm } = props
    const { handleAddSubscription } = useAuth()

    function handleFormSumbit(e) {
        e.preventDefault()
        handleAddSubscription(formData)
        handleResetForm()
        closeInput()
    }

    return (
        <section>
            <h2>新しいサブスクリプションを追加</h2>

            <form onSubmit={handleFormSumbit}>
                <label>
                    <span>サブスクリプション名</span>
                    <input
                        value={formData.name}
                        onChange={handleChangeInput}
                        type="text"
                        name="name"
                        placeholder="例：Netflix、Spotify、AWSホスティング"
                        required
                    />
                </label>

                <label>
                    <span>カテゴリー</span>
                    <select value={formData.category} onChange={handleChangeInput} name="category">
                        {[
                            { ja: 'エンタメ', en: 'Entertainment' },
                            { ja: '音楽', en: 'Music' },
                            { ja: 'ソフトウェア', en: 'Software' },
                            { ja: 'ウェブサービス', en: 'Web Services' },
                            { ja: '健康・フィットネス', en: 'Health & Fitness' },
                            { ja: 'その他', en: 'Other' }
                        ].map(({ ja, en }, idx) => (
                            <option key={idx} value={en}>{ja}</option>
                        ))}
                    </select>
                </label>

                <label>
                    <span>料金</span>
                    <input
                        value={formData.cost}
                        onChange={handleChangeInput}
                        type="number"
                        name="cost"
                        step="0.01"
                        placeholder="例：1200"
                        required
                    />
                </label>

                <label>
                    <span>通貨</span>
                    <select value={formData.currency} onChange={handleChangeInput} name="currency">
                        {['USD', 'JPY', 'CNY', 'EUR', 'GBP', 'Other'].map((cur, idx) => (
                            <option key={idx} value={cur}>{cur}</option>
                        ))}
                    </select>
                </label>

                <label>
                    <span>請求頻度</span>
                    <select value={formData.billingFrequency} onChange={handleChangeInput} name="billingFrequency">
                        {[
                            { ja: '毎月', en: 'Monthly' },
                            { ja: '毎年', en: 'Yearly' },
                            { ja: '四半期ごと', en: 'Quarterly' },
                            { ja: '一回限り', en: 'One-time' }
                        ].map(({ ja, en }, idx) => (
                            <option key={idx} value={en}>{ja}</option>
                        ))}
                    </select>
                </label>

                <label>
                    <span>支払い方法</span>
                    <select value={formData.paymentMethod} onChange={handleChangeInput} name="paymentMethod">
                        {[
                            { ja: 'クレジットカード', en: 'Credit Card' },
                            { ja: 'デビットカード', en: 'Debit Card' },
                            { ja: 'Paypal', en: 'Paypal' },
                            { ja: '銀行振込', en: 'Bank Transfer' },
                            { ja: 'その他', en: 'Other' }
                        ].map(({ ja, en }, idx) => (
                            <option key={idx} value={en}>{ja}</option>
                        ))}
                    </select>
                </label>

                <label>
                    <span>開始日</span>
                    <input
                        value={formData.startDate}
                        onChange={handleChangeInput}
                        type="date"
                        name="startDate"
                        required
                    />
                </label>

                <label>
                    <span>ステータス</span>
                    <select value={formData.status} onChange={handleChangeInput} name="status">
                        {[
                            { ja: '有効', en: 'Active' },
                            { ja: '一時停止中', en: 'Paused' },
                            { ja: 'キャンセル済み', en: 'Cancelled' }
                        ].map(({ ja, en }, idx) => (
                            <option key={idx} value={en}>{ja}</option>
                        ))}
                    </select>
                </label>

                <label className="fat-column">
                    <span>メモ</span>
                    <textarea
                        value={formData.notes}
                        onChange={handleChangeInput}
                        name="notes"
                        placeholder="例：家族と共有、クラウドストレージ付き"
                    />
                </label>

                <div className="fat-column form-submit-btns">
                    <button onClick={closeInput} type="button">キャンセル</button>
                    <button type="submit">追加</button>
                </div>
            </form>
        </section>
    )
}
