"use client"

import { useRouter } from "@tanstack/react-router"
import { useLogout } from "../data/queryOptions";


export default function CustomBreadcrumb({ title = "Page" }: { title?: string }) {


  const router = useRouter();
  const logoutMutation = useLogout()

  const onHandleHome = () => {

    const token = localStorage.getItem("autkn")

    const memberData = sessionStorage.getItem("taxFilerData")
    const parsed = memberData ? JSON.parse(memberData) : null
    const pan = parsed?.pan

    if (!pan || !token) {
      router.navigate({ to: "/dashboard" })
      return
    }

    logoutMutation.mutate(
      {
        pan: pan,
        authToken: token
      },
      {
        onSuccess: () => {
          localStorage.removeItem("autkn");
          localStorage.removeItem("transactionId");
          sessionStorage.clear()
          router.navigate({ to: "/dashboard" })
        },
        onError: () => {
          router.navigate({ to: "/dashboard" })
        }
      }
    )
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <div onClick={onHandleHome} className="text-blue-600 cursor-pointer hover:underline">
        Home
      </div>
      <span className="text-muted-foreground mx-2">/</span>
      <span className="text-foreground text-sm">{title}</span>
    </div>
  )
}
