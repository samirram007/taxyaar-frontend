"use client"

import { Link } from "@tanstack/react-router"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function VerifyPage() {
  const [expandedArticles, setExpandedArticles] = useState<string[]>([])

  const toggleArticle = (id: string) => {
    setExpandedArticles((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const helpArticles = [
    { id: "1", title: "What is PAN verification?" },
    { id: "2", title: "Why do we need OTP?" },
    { id: "3", title: "How long is OTP valid?" },
  ]

  return (
    <div className="min-h-screen bg-background">
      
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            

            <div className="flex items-center gap-4">
              <Link to="/support/help" className="text-muted-foreground hover:text-foreground transition text-sm">
                Support
              </Link>
              <button className="text-sm text-muted-foreground hover:text-foreground transition">
                Google:user@example.com ▼
              </button>
            </div>
          </div>
        </div>
      </header>

      
      <div className="border-b border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Link to="/auth/addtaxform" className="text-primary hover:underline text-sm">
            Home
          </Link>
          <span className="text-muted-foreground mx-2">/</span>
          <span className="text-foreground text-sm">Verify User</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Income-tax Department PAN verification process
              </h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <p className="text-foreground leading-relaxed">
                  Your verification with the Income-tax Department is pending. To continue filing your IT return we have
                  to mandatorily add you as our client first. An OTP will be sent to the mobile number registered with
                  your aadhar card. In case you require another option to verify or receive any error in this process,
                  we will guide you complete it.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth/verify-pan" className="px-6 py-3 rounded bg-blue-500 text-primary-foreground hover:opacity-90 transition font-medium">
                  Request OTP
                </Link>
                <Link to="/auth/dashboard" className="px-6 py-3 rounded border border-border text-foreground hover:bg-muted transition font-medium">
                  Skip for Now
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-background border border-border rounded-lg p-6 sticky top-24">
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                  <span>💬</span> SUPPORT
                </h3>
                <Link to="/support/help" className="text-primary hover:underline text-sm">
                  Ask our Support Team
                </Link>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                  <span>👥</span> ASSISTED FILING
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Need assistance? Let our experts help you.</p>
                <Link to="/support/help" className="text-primary hover:underline text-sm">
                  Learn more
                </Link>
              </div>

   
              <div className="border-t border-border pt-6 mt-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                  <span>ℹ️</span> HELP ARTICLES
                </h3>
                <div className="space-y-2">
                  {helpArticles.map((article) => (
                    <div key={article.id} className="border-b border-border">
                      <button
                        onClick={() => toggleArticle(article.id)}
                        className="w-full py-3 flex items-center justify-between text-left hover:text-primary transition"
                      >
                        <span className="text-sm text-foreground hover:text-primary">{article.title}</span>
                        <ChevronDown
                          size={18}
                          className={`text-muted-foreground transition-transform ${
                            expandedArticles.includes(article.id) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedArticles.includes(article.id) && (
                        <div className="pb-3 text-sm text-muted-foreground">
                          <p>This is helpful information about {article.title.toLowerCase()}.</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
