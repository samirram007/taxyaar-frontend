"use client"

import { useRouter } from "@tanstack/react-router"
import { useLogout } from "../data/queryOptions";


export default function CustomBreadcrumb({ title = "Page" }: { title?: string }) {


  const router = useRouter();
  const { mutate } = useLogout()

  const onHandleHome = () => {
    router.navigate({ to: "/dashboard" })

    // const pan = sessionStorage.getItem("pan");
    // if (pan == null) {
    //   return;
    // }

    // mutate(
    //   {
    //     pan: pan,
    //   },
    //   {
    //     onSuccess: () => {
    //       router.navigate({ to: "/dashboard" })
    //     },
    //     onError: () => {
    //       router.navigate({ to: "/dashboard" })
    //     }
    //   }
    // )
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
