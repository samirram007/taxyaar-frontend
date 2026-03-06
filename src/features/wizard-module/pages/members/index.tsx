"use client"

import { useEffect, useState } from "react"
import { MoreVertical } from "lucide-react"
import { useRouter } from "@tanstack/react-router"
import Breadcrumb from '../../components/CustomBreadCrumb';
import HelpArticles from "../../components/help-articles";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconEdit, IconRecycle } from "@tabler/icons-react";
import { useAuthenticationUser } from "../../data/queryOptions";

interface TaxFillerData {
  firstName: string
  lastName: string
  pan: string,
  dateOfBirth: string,
}
const memberData: TaxFillerData[] = [
  { firstName: "Sourav", lastName: "Gupta", pan: "LWAPT2025A", dateOfBirth: "1995-01-01" },
  { firstName: "Sourav", lastName: "Gupta", pan: "LWAPT2025C", dateOfBirth: "1995-01-01" },
  { firstName: "Sourav", lastName: "Gupta", pan: "LWAPT2025D", dateOfBirth: "1995-01-01" },
]
// const pageLinks = [
//   { name: "Dashboard", href: "/dashboard" },
//   { name: "Members", href: "/members" },
//   { name: "Settings", href: "/settings" },
// ]
export default function MembersPage() {

  const router = useRouter();
  const [member, setMember] = useState<TaxFillerData | null>(memberData[0]);
  const authMutation = useAuthenticationUser();

  useEffect(() => {
    const data = sessionStorage.getItem("taxFillerData")
    if (data) {
      const parsed = JSON.parse(data)
      setMember({
        firstName: parsed.firstName,
        lastName: parsed.lastName,
        pan: parsed.pan || "EMPG3394H",
        dateOfBirth: parsed.dateOfBirth
      })
    }
  }, [])




  if (!member) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }


  const onHandleAddClient = (member: TaxFillerData) => {
    authMutation.mutate(undefined, {
      onSuccess: (res) => {
        const token = res?.data?.data?.result?.autkn;

        if (!token) {
          alert("Authentication failed. Token not received.");
          return;
        }

        // store token
        localStorage.setItem("autkn", token);

        // store selected member
        sessionStorage.setItem("taxFillerData", JSON.stringify(member));

        // navigate
        router.navigate({ to: "/department_add_client" });
      },

      onError: (error) => {
        alert(error.message || "Login failed");
      },
    });
  };


  return (
    <div className="min-h-screen ">


      <Breadcrumb title="Members" />




      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <div className="bg-background border border-border rounded-lg py-8">
              <div className="mb-8 grid grid-cols-[1fr_100px] gap-4 items-center border-b border-border pb-4 px-8">
                <div className="">

                  <h2 className="text-xl font-bold text-foreground mb-2">Click on a name to continue</h2>
                  <p className="text-sm text-muted-foreground">
                    Click on any of the Tax Filers listed below to start using our services. You may click on "Add" button
                    on the right to add a new Tax Filer.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={() => router.navigate({ to: "/assessee/add" })}
                    className="ml-auto px-4 py-2 rounded bg-blue-100 text-blue-500 cursor-pointer hover:bg-blue-200 transition hover:opacity-90 font-medium"
                  >
                    Add
                  </Button>
                </div>
              </div>
              <div className="px-8">

                {
                  memberData.map((member, index) => (
                    <div key={index} className="bg-muted mb-3 rounded-lg p-4 flex items-center justify-between hover:bg-muted/80 transition cursor-pointer">

                      <div className="flex gap-5" onClick={() => onHandleAddClient(member)} >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                            <span className="text-primary-foreground font-bold text-lg">{member.firstName.charAt(0)}</span>
                          </div>

                          <div>
                            <h3 className="text-foreground font-semibold">{member.firstName + " " + member.lastName}</h3>
                            <p className="text-sm text-muted-foreground">{member.pan}</p>
                          </div>
                        </div>
                        <div className="ml-auto">
                          <span className="inline-block bg-yellow-700 text-yellow-200 text-xs font-semibold px-3 py-1 rounded-2xl">
                            Continue
                          </span>
                        </div>
                      </div>





                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant={'outline'}
                            className="p-2 rounded-md cursor-pointer hover:bg-background  transition ml-2"
                            aria-label="More options"
                          >
                            <MoreVertical size={20} className="text-muted-foreground" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="min-w-40 space-y-4 p-4 text-sm">
                          <DropdownMenuItem className="grid grid-cols-[10px_1fr] justify-start items-center gap-4" onSelect={() => router.navigate({ to: "/assessee/add" })}>
                            <IconArrowRight size={16} className="ml-auto" />
                            Continue
                          </DropdownMenuItem>
                          <DropdownMenuItem className="grid grid-cols-[10px_1fr] justify-start items-center gap-4" onSelect={(e) => {
                            e.preventDefault();
                            router.navigate({ to: "/assessee/edit" })
                          }}>
                            <IconEdit size={16} className="ml-auto" />
                            <div >
                              Edit
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="grid grid-cols-[10px_1fr] justify-start items-center gap-4" onSelect={() => router.navigate({ to: "/assessee/edit" })}>
                            <IconRecycle size={16} className="ml-auto" />
                            Delete
                          </DropdownMenuItem>

                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))
                }




                <div className="mt-8">
                  {/* <Link
                    to={'/'}
                    className="px-6 py-2 rounded bg-blue-500 text-primary-foreground hover:opacity-90 transition font-medium"
                  >
                    Continue
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <HelpArticles slugs={[
              "0001-tax-made-easy-series-1",
              "0001-tax-made-easy-series-2",
            ]} />
          </div>
        </div>
      </div>
    </div>
  )
}
