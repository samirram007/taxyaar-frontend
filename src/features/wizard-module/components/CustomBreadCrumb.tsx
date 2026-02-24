"use client"

import { Link } from "@tanstack/react-router"

export default function CustomBreadcrumb({ title = "Page" }: { title?: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Link to="/product_launchboard" className="text-primary hover:underline">
        Home
      </Link>
      <span className="text-muted-foreground mx-2">/</span>
      <span className="text-foreground text-sm">{title}</span>
    </div>
  )
}
