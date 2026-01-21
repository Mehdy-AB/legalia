"use client"
import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { CheckCircle, Plus } from 'lucide-react'
import { useTranslations, useFormatter } from 'next-intl'

type Currency = 'usd' | 'eur' | 'dzd'

interface CurrencyInfo {
  code: Currency
  symbol: string
  name: string
  flag: string
  rate: number
}

const currencies: CurrencyInfo[] = [
  { code: 'usd', symbol: '$', name: 'USD', flag: '/Flag_of_the_United_States.svg', rate: 1 },
  { code: 'eur', symbol: '€', name: 'EUR', flag: '/Flag_of_Europe.svg', rate: 0.92 },
  { code: 'dzd', symbol: 'د.ج', name: 'DZD', flag: '/Flag_of_Algeria.svg', rate: 135 },
]

export default function PricingSection() {
  const t = useTranslations('Pricing')
  const format = useFormatter()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [currency, setCurrency] = useState<Currency>('dzd')
  // State to track which plans have the security add-on selected. Key is plan index.
  const [selectedAddons, setSelectedAddons] = useState<{ [key: number]: boolean }>({})

  const toggleAddon = (index: number) => {
    setSelectedAddons(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  // Security Add-on Prices
  const getSecurityPrice = (planKey: string, curr: Currency) => {
    if (planKey === "professional") {
      if (curr === 'dzd') return 1500
      if (curr === 'eur') return 7
      return 8 // USD approx
    }
    if (planKey === "advanced") {
      if (curr === 'dzd') return 2700
      if (curr === 'eur') return 15
      return 16 // USD approx
    }
    return 0
  }

  const plans = [
    {
      key: "starter",
      price: { dzd: 1500, eur: 15, usd: 16 },
      highlight: false,
      color: "slate",
      hasSecurityAddon: false
    },
    {
      key: "professional",
      price: { dzd: 4500, eur: 49, usd: 54 },
      highlight: true,
      color: "blue",
      hasSecurityAddon: true
    },
    {
      key: "advanced",
      price: { dzd: 9000, eur: 99, usd: 109 },
      highlight: false,
      color: "gold",
      hasSecurityAddon: true
    }
  ]

  const calculateFinalPrice = (plan: typeof plans[0], index: number) => {
    let base = 0
    // Get base price for currency
    if (currency === 'dzd') base = plan.price.dzd
    else if (currency === 'eur') base = plan.price.eur
    else base = plan.price.usd

    // Apply billing cycle discount (20% for yearly)
    if (billingCycle === 'yearly') {
      base = base * 0.8
    }

    // Add security add-on if selected
    if (selectedAddons[index]) {
      base += getSecurityPrice(plan.key, currency)
    }

    return format.number(Math.round(base))
  }

  const extraCredits = [
    { credits: 50, price: { dzd: 1000, eur: 10, usd: 11 } },
    { credits: 100, price: { dzd: 1800, eur: 18, usd: 20 } },
    { credits: 300, price: { dzd: 4500, eur: 45, usd: 50 } },
  ]

  const currentCurrency = currencies.find(c => c.code === currency)!

  return (
    <section className="py-20 bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-semibold mb-4 border border-amber-200 dark:border-amber-800">
            {t('title')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('subtitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            {t('description')}
          </p>

          {/* Combined Controls Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">

            {/* Currency Selector */}
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 p-1.5 direction-ltr" dir="ltr">
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setCurrency(curr.code)}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${currency === curr.code
                    ? 'bg-amber-500 text-white shadow-md scale-105'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                >
                  <div className={`w-6 h-4 rounded overflow-hidden shadow-sm ${currency === curr.code ? 'ring-2 ring-white/50' : ''}`}>
                    <img src={curr.flag} alt={curr.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-semibold text-sm">{curr.name}</span>
                </button>
              ))}
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-600"></div>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center gap-4" dir="ltr">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>{t('monthly')}</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-amber-500 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                {t('yearly')} <span className="text-xs text-green-600 dark:text-green-400 font-bold ml-1">(-20%)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Plans Grid - Reversed for Visual Order: Advanced (Right/First) -> Pro -> Starter */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {[...plans].reverse().map((plan, indexReal) => {
            const originalIndex = plans.length - 1 - indexReal

            return (
              <div
                key={plan.key}
                className={`flex flex-col relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 border-2 ${plan.highlight
                  ? 'bg-white dark:bg-gray-900 border-blue-500 shadow-xl z-10 transform md:scale-105'
                  : 'bg-white dark:bg-gray-900 border-transparent shadow-lg hover:border-gray-200 dark:hover:border-gray-700'
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 left-0 bg-blue-600 text-white text-center py-1 text-sm font-bold rounded-t-[1.3rem]">
                    {t('popular')}
                  </div>
                )}

                <div className={`text-center mb-6 pt-4`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t(`${plan.key}.name`)}</h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{calculateFinalPrice(plan, originalIndex)}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{currentCurrency.symbol} {t('perMonth')}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{t(`${plan.key}.description`)}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {(t.raw(`${plan.key}.features`) as string[]).map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.color === 'slate' ? 'text-slate-400 dark:text-slate-500' :
                        plan.color === 'blue' ? 'text-blue-500' : 'text-amber-500'
                        }`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}

                  {/* Security Add-on Toggle Inside Card */}
                  {plan.hasSecurityAddon && (
                    <li className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                      <label className="flex items-start gap-3 cursor-pointer group select-none">
                        <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selectedAddons[originalIndex] ? 'bg-amber-500 border-amber-500' : 'border-gray-300 dark:border-gray-600 group-hover:border-amber-400'
                          }`}>
                          {selectedAddons[originalIndex] && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={!!selectedAddons[originalIndex]}
                            onChange={() => toggleAddon(originalIndex)}
                          />
                        </div>
                        <div className="flex-1">
                          <span className={`text-sm font-bold block transition-colors ${selectedAddons[originalIndex] ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                            {t('securityAddon')}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-500 block mb-1">
                            {t('securityDesc')}
                          </span>
                          <span className="text-xs font-bold text-amber-600 dark:text-amber-500">
                            +{getSecurityPrice(plan.key, currency)} {currentCurrency.symbol} {t('perMonth')}
                          </span>
                        </div>
                      </label>
                    </li>
                  )}
                </ul>

                <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.color === 'slate' ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700' :
                  plan.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-none' :
                    'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-amber-500/20 shadow-lg dark:shadow-none'
                  }`}>
                  {t('subscribe')}
                </button>
              </div>
            )
          })}
        </div>

        {/* Extra Credits Section */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 flex items-center justify-center gap-2">
            <Plus className="w-6 h-6 text-amber-500" />
            {t('extraCredits')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {extraCredits.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600 transition-colors">
                <span className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">{item.credits} {t('credits')}</span>
                <span className="text-2xl font-extrabold text-amber-600 dark:text-amber-500">
                  {currency === 'dzd' ? item.price.dzd : currency === 'eur' ? item.price.eur : item.price.usd}
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-normal mr-1">{currentCurrency.symbol}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-amber-600 text-white rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-amber-500 transition-all hover:shadow-lg"
          >
            {t('viewDetails')}
          </Link>
        </div>

      </div>
    </section>
  )
}