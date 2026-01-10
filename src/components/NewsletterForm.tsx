'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { submitToGoogleSheet } from '@/lib/googleSheets'

export default function NewsletterForm() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setLoading(true)
        setStatus({ type: null, message: '' })

        try {
            await submitToGoogleSheet({
                type: 'newsletter',
                email: email
            })
            setStatus({ type: 'success', message: 'تم الاشتراك بنجاح!' })
            setEmail('')
        } catch (error) {
            console.error(error)
            setStatus({ type: 'error', message: 'حدث خطأ. حاول مرة أخرى.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="mt-8">
            <h4 className="font-bold text-lg mb-4">اشترك في نشرتنا البريدية</h4>
            <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex gap-2">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="بريدك الإلكتروني"
                        className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                        dir="rtl"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
                {status.message && (
                    <p className={`text-xs ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {status.message}
                    </p>
                )}
            </form>
        </div>
    )
}
