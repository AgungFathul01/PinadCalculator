"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, ArrowRight, TrendingUp } from "lucide-react"

export default function Component() {
  // Pool state
  const [pooledPoints, setPooledPoints] = useState(3403486)
  const [pooledMonad, setPooledMonad] = useState(1310)

  // User state
  const [depositedPoints, setDepositedPoints] = useState(40000)
  const [depositedMonad, setDepositedMonad] = useState(5)

  // Calculations
  const calculations = useMemo(() => {
    const receivedMonad = (depositedPoints / (depositedPoints + pooledPoints)) * pooledMonad
    const receivedPoints = (depositedMonad / (depositedMonad + pooledMonad)) * pooledPoints

    return {
      receivedMonad: receivedMonad,
      receivedPoints: receivedPoints,
      totalPoints: depositedPoints + receivedPoints,
      totalMonad: depositedMonad + receivedMonad,
      pointsRatio: (depositedPoints / (depositedPoints + pooledPoints)) * 100,
      monadRatio: (depositedMonad / (depositedMonad + pooledMonad)) * 100,
    }
  }, [depositedPoints, depositedMonad, pooledPoints, pooledMonad])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
            <Calculator className="w-8 h-8 text-slate-100" />
          </div>
          <h1 className="text-5xl font-bold text-slate-100 mb-4">Pinad Pool Distribution Calculator</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-6">
            Calculate your pool returns instantly with ease
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <span className="text-sm">Created by</span>
            <a
              href="https://x.com/agungfathul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @agungfathul
            </a>
          </div>
        </div>

        {/* Main Calculator */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Input Section */}
            <div className="space-y-8">
              {/* Pool Information */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-slate-100 flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                    Pool Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-slate-300 text-sm font-medium">Total Pooled Points</Label>
                    <Input
                      type="number"
                      value={pooledPoints}
                      onChange={(e) =>
  setPooledPoints(Number(e.target.value.replace(/[.,]/g, "")))
}
                      className="h-14 text-lg bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-slate-300 text-sm font-medium">Total Pooled Monad</Label>
                    <Input
                      type="number"
                      value={pooledMonad}
                      onChange={(e) =>
  setpooledMonad(Number(e.target.value.replace(/[.,]/g, "")))
}
                      className="h-14 text-lg bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Your Deposit */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-slate-100 flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                    Your Deposit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-slate-300 text-sm font-medium">Your Points</Label>
                    <Input
                      type="number"
                      value={depositedPoints}
                      onChange={(e) =>
  setdepositedPoints(Number(e.target.value.replace(/[.,]/g, "")))
}
                      className="h-14 text-lg bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-slate-300 text-sm font-medium">Your Monad</Label>
                    <Input
                      type="number"
                      value={depositedMonad}
                      onChange={(e) =>
  setdepositedMonad(Number(e.target.value.replace(/[.,]/g, "")))
}
                      className="h-14 text-lg bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Section */}
            <div className="space-y-8">
              {/* Returns Display */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-slate-100 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                    Your Returns
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Points Return */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-slate-300">Points Return</div>
                      <div className="text-sm text-slate-400">{calculations.monadRatio.toFixed(2)}% of pool</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/10 rounded-2xl p-6 border border-blue-500/30">
                      <div className="text-4xl font-bold text-blue-400 mb-2">
                        +{calculations.receivedPoints.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-slate-300 text-lg">
                        Total: {calculations.totalPoints.toLocaleString(undefined, { maximumFractionDigits: 0 })} Points
                      </div>
                    </div>
                  </div>

                  {/* Monad Return */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-slate-300">Monad Return</div>
                      <div className="text-sm text-slate-400">{calculations.pointsRatio.toFixed(2)}% of pool</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600/20 to-purple-500/10 rounded-2xl p-6 border border-purple-500/30">
                      <div className="text-4xl font-bold text-purple-400 mb-2">
                        +{calculations.receivedMonad.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </div>
                      <div className="text-slate-300 text-lg">
                        Total: {calculations.totalMonad.toLocaleString(undefined, { maximumFractionDigits: 2 })} Monad
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Calculation Flow */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-100 text-center">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Points to Monad */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4">
                      <ArrowRight className="w-6 h-6 text-slate-100" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Points → Monad</h3>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                    <div className="text-sm text-slate-400 mb-3">Formula</div>
                    <div className="font-mono text-sm text-slate-300 bg-slate-900/40 rounded-lg p-4 mb-4 border border-slate-600/20">
                      (Your Points ÷ Total Points) × Pooled Monad
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-slate-300">
                        <span>Your Points:</span>
                        <span className="text-blue-400">{depositedPoints.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Total Points:</span>
                        <span className="text-slate-200">{(depositedPoints + pooledPoints).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Pooled Monad:</span>
                        <span className="text-slate-200">{pooledMonad.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-slate-600/30 pt-2 mt-3">
                        <div className="flex justify-between font-semibold">
                          <span className="text-slate-100">You Receive:</span>
                          <span className="text-purple-400">
                            {calculations.receivedMonad.toLocaleString(undefined, { maximumFractionDigits: 2 })} Monad
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monad to Points */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl mb-4">
                      <ArrowRight className="w-6 h-6 text-slate-100" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Monad → Points</h3>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                    <div className="text-sm text-slate-400 mb-3">Formula</div>
                    <div className="font-mono text-sm text-slate-300 bg-slate-900/40 rounded-lg p-4 mb-4 border border-slate-600/20">
                      (Your Monad ÷ Total Monad) × Pooled Points
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-slate-300">
                        <span>Your Monad:</span>
                        <span className="text-purple-400">{depositedMonad.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Total Monad:</span>
                        <span className="text-slate-200">{(depositedMonad + pooledMonad).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Pooled Points:</span>
                        <span className="text-slate-200">{pooledPoints.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-slate-600/30 pt-2 mt-3">
                        <div className="flex justify-between font-semibold">
                          <span className="text-slate-100">You Receive:</span>
                          <span className="text-blue-400">
                            {calculations.receivedPoints.toLocaleString(undefined, { maximumFractionDigits: 0 })} Points
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
