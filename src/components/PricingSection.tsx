"use client"
import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: "Basic",
      price: { monthly: 10, yearly: 100 },
      description: "For personal use and individual lawyers",
      features: ["100 Monthly Credits", "Basic AI Chat", "Standard Support"],
      cta: "Start Basic",
      popular: false,
      gradient: "bg-white border-2 border-slate-100 hover:border-amber-400"
    },
    {
      name: "Professional",
      price: { monthly: 25, yearly: 250 },
      description: "For legal offices and growing firms",
      features: ["500 Monthly Credits", "Advanced Document Analysis", "Priority Support 24/7", "Analytics Dashboard"],
      cta: "Start Professional",
      popular: true,
      gradient: "bg-gradient-to-br from-amber-500 to-amber-600 text-white"
    },
    {
      name: "Enterprise",
      price: { monthly: 39, yearly: 390 },
      description: "For large organizations and agencies",
      features: ["Unlimited Credits", "Custom AI Models", "Dedicated Account Manager", "API Access"],
      cta: "Start Enterprise",
      popular: false,
      gradient: "bg-white border-2 border-slate-100 hover:border-slate-800"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold mb-4 border border-amber-200">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Flexible Plans for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Choose the plan that fits your practice. Switch to annual billing to save 20%.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-amber-500 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly <span className="text-sm text-green-600 font-bold ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.gradient}`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="text-center relative z-10">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6 flex items-baseline justify-center gap-1">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-amber-100' : 'text-gray-500'}`}>
                    /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>
                <p className={`mb-8 ${plan.popular ? 'text-amber-50' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                <ul className={`space-y-4 mb-8 text-left ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-amber-200' : 'text-amber-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.popular
                    ? 'bg-white text-amber-700 hover:bg-amber-50 shadow-lg'
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg'
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">Prices do not include applicable taxes.</p>
        </div>
      </div>
    </section>
  )
}