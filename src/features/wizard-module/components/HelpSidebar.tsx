"use client"

import { Link } from "@tanstack/react-router"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const helpArticles = [
  { id: "1", title: "How to Add or Edit a member?" },
  { id: "2", title: "How to enable ERI manually?" },
  { id: "3", title: "What are deductions?" },
  { id: "4", title: "How to file taxes online?" },
]

export default function HelpSidebar() {
  const [expandedArticles, setExpandedArticles] = useState<string[]>([])

  const toggleArticle = (id: string) => {
    setExpandedArticles((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="bg-background border border-border rounded-lg p-6 sticky top-24">
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
                className={`text-muted-foreground transition-transform ${expandedArticles.includes(article.id) ? "rotate-180" : ""}`}
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

      <Link to="/support/help" className="text-primary hover:underline text-sm mt-4 block">
        View all help articles →
      </Link>
    </div>
  )
}
