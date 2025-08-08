'use client'

import { useAuth } from "@/context/AuthContext"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function GoTo() {
    const { currentUser, logout } = useAuth()

    const isAuthenticated = !!currentUser

    const path = usePathname()

    return (
        <div className="goto">
            {path == '/' && (
                <>
                    <Link href={'/dashboard?register=true'}>
                        <p>新規登録</p>
                    </Link>
                    <Link href={'/dashboard'}>
                        <button>ログイン &rarr;</button>
                    </Link>
                </>
            )}
            {(isAuthenticated && path == '/dashboard') && (
                <button onClick={logout}>ログアウト</button>
            )}
        </div>
    )
}
