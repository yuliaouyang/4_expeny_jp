'use client'

import Login from "@/components/Login";
import SubscriptionForm from "@/components/SubscriptionForm";
import SubscriptionsDisplay from "@/components/SubscriptionsDisplay";
import SubscriptionSummary from "@/components/SubscriptionSummary";
import { useAuth } from "@/context/AuthContext";
import { Suspense, useState } from "react";

const blankSubscription = {
    name: '',                      // 名前
    category: 'ウェブサービス',     // カテゴリー（例：Web Services）
    cost: '',                      // 料金
    currency: 'USD',               // 通貨（USD 可保留不翻）
    billingFrequency: '毎月',       // 請求頻度（例：Monthly）
    nextBillingData: '',           // 次回請求日
    paymentMethod: 'クレジットカード', // 支払い方法
    startDate: '',                 // 開始日
    renewalType: '',               // 更新タイプ
    notes: '',                     // メモ
    status: '有効'                 // ステータス（例：Active → 有効）
}

export default function DashboardPage() {

    const [isAddEntry, setIsAddEntry] = useState(false)

    const [formData, setFormData] = useState(blankSubscription)

    const { handleDeleteSubscription, userData, currentUser, loading } = useAuth()
    const isAuthenticated = !!currentUser

    function handleChangeInput(e) {
        const newData = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newData)
    }

    function handleEditSubscription(index) {
        const data = userData.subscriptions.find((val, valIndex) => {
            return valIndex === index
        })
        setFormData(data)
        handleDeleteSubscription(index)
        setIsAddEntry(true)
    }

    function handleResetForm() {
        setFormData(blankSubscription)
    }

    function handleToggleInput() {
        setIsAddEntry(!isAddEntry)
    }

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    if (!isAuthenticated) {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <Login />
            </Suspense>
        )
    }

    return (
        <>
            <SubscriptionSummary />
            <SubscriptionsDisplay handleEditSubscription={handleEditSubscription} handleShowInput={isAddEntry ? () => { } : handleToggleInput} />
            {isAddEntry && (
                <SubscriptionForm handleResetForm={handleResetForm} closeInput={handleToggleInput} formData={formData} handleChangeInput={handleChangeInput} />
            )}
        </>
    );
}
