'use client'

import { MoreVertical } from 'lucide-react'
import { Link, useRouter } from '@tanstack/react-router'
import Breadcrumb from '../../components/CustomBreadCrumb'
import HelpArticles from '../../components/help-articles'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { Button } from '@/components/ui/button'
import { IconArrowRight, IconEdit, IconRecycle } from '@tabler/icons-react'
import { useAuthenticationUser } from '../../data/queryOptions'

import type { TaxFilerData } from '../../data/schema'
import { useWizardModule } from '../../contexts/wizard_module-context'

// const isPanVerified = (pan: string): boolean => {
//   const stored = localStorage.getItem("verifiedPans");
//   if (!stored) return false;

//   const verifiedMap = JSON.parse(stored);
//   return !!verifiedMap[pan];
// };
const memberData: TaxFilerData[] = [
  {
    firstName: 'Sourav',
    lastName: 'Gupta',
    pan: 'LWAPT2025A',
    dateOfBirth: '1995-01-01',
    isVerified: true,
  },
  {
    firstName: 'Sourav',
    lastName: 'Gupta',
    pan: 'LWAPT2025C',
    dateOfBirth: '1995-01-01',
    isVerified: true,
  },
  {
    firstName: 'Sourav',
    lastName: 'Gupta',
    pan: 'LWAPT2025D',
    dateOfBirth: '1995-01-01',
    isVerified: true,
  },
  {
    firstName: 'Sourav',
    lastName: 'Gupta',
    pan: 'LWAPT2025D',
    dateOfBirth: '1995-01-01',
    isVerified: false,
  },
]

export default function MembersPage() {
  const router = useRouter()
  const { setMember } = useWizardModule()
  const authMutation = useAuthenticationUser()

  // useEffect(() => {
  //   const data = sessionStorage.getItem("taxFilerData") ?? JSON.stringify(memberData[0]) ?? null;
  //   console.log("parsed: ", data)
  //   if (data) {
  //     const parsed = JSON.parse(data)
  //     setMember({
  //       firstName: parsed.firstName,
  //       lastName: parsed.lastName,
  //       pan: parsed.pan || "EMPG3394H",
  //       dateOfBirth: parsed.dateOfBirth,
  //       isVerified: parsed.isVerified || isPanVerified(parsed.pan)
  //       // isVerified: isPanVerified(parsed.pan)
  //     })
  //   }

  // }, [])

  // if (!member) {
  //   return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  // }

  const onHandleAddClient = (member: TaxFilerData) => {
    setMember(member)

    // if (isPanVerified(member.pan)) {
    //   sessionStorage.setItem("taxFilerData", JSON.stringify(member));
    //   router.navigate({ to: "/dashboard_filer" });
    //   return;
    // }

    authMutation.mutate('undefined', {
      //removing res from onSuccess (res) due to build errrors
      onSuccess: () => {
        // const token = res?.data?.data?.result?.autkn;

        // if (!token) {
        //   alert("Authentication failed. Token not received.");
        //   return;
        // }

        // localStorage.setItem("autkn", token);
        sessionStorage.setItem('taxFilerData', JSON.stringify(member))

        router.navigate({ to: '/department_add_client' })
      },

      onError: (error) => {
        alert(error.message || 'Login failed')
      },
    })
  }

  return (
    <div className="min-h-screen ">
      <Breadcrumb title="Members" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-background border border-border rounded-lg py-8">
              <div className="mb-8 grid grid-cols-[1fr_100px] gap-4 items-center border-b border-border pb-4 px-8">
                <div className="">
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Click on a name to continue
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Click on any of the Tax Filers listed below to start using
                    our services. You may click on "Add" button on the right to
                    add a new Tax Filer.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={() => router.navigate({ to: '/assessee/add' })}
                    className="ml-auto px-4 py-2 rounded bg-blue-100 text-blue-500 cursor-pointer hover:bg-blue-200 transition hover:opacity-90 font-medium"
                  >
                    Add
                  </Button>
                </div>
              </div>
              <div className="px-8">
                {memberData.map((member, index) => (
                  <div
                    key={index}
                    className="bg-muted mb-3 rounded-lg p-4 flex items-center justify-between hover:bg-muted/80 transition cursor-pointer"
                  >
                    <div
                      className="flex gap-5"
                      onClick={() => onHandleAddClient(member)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                          <span className="text-primary-foreground font-bold text-lg">
                            {member.firstName?.charAt(0)}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-foreground font-semibold">
                            {member.firstName + ' ' + member.lastName}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {member.pan}
                          </p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        {member.isVerified ? (
                          <span
                            className="inline-block bg-green-300/50 text-green-800 
                              border border-green-400/50
                            text-xs font-semibold px-3 py-1 rounded-2xl shadow-md"
                          >
                            Verified
                          </span>
                        ) : (
                          <span
                            className="inline-block 
                              bg-yellow-200/50 
                              text-yellow-800 
                              border border-yellow-400
                              text-xs font-semibold px-3 py-1 rounded-2xl shadow-md"
                          >
                            <Link to={'/department_add_client'} className="px-">
                              {' '}
                              Continue
                            </Link>
                          </span>
                        )}
                      </div>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant={'outline'}
                          className="p-2 rounded-md cursor-pointer hover:bg-background  transition ml-2"
                          aria-label="More options"
                        >
                          <MoreVertical
                            size={20}
                            className="text-muted-foreground"
                          />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="min-w-40 space-y-4 p-4 text-sm"
                      >
                        <DropdownMenuItem
                          className="grid grid-cols-[10px_1fr] justify-start items-center gap-4"
                          onSelect={() =>
                            router.navigate({ to: '/department_add_client' })
                          }
                        >
                          <IconArrowRight size={16} className="ml-auto" />
                          Continue
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="grid grid-cols-[10px_1fr] justify-start items-center gap-4"
                          onSelect={(e) => {
                            e.preventDefault()
                            router.navigate({ to: '/assessee/edit' })
                          }}
                        >
                          <IconEdit size={16} className="ml-auto" />
                          <div>Edit</div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="grid grid-cols-[10px_1fr] justify-start items-center gap-4"
                          onSelect={() =>
                            router.navigate({ to: '/assessee/edit' })
                          }
                        >
                          <IconRecycle size={16} className="ml-auto" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}

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
            <HelpArticles page="dashboard" />
          </div>
        </div>
      </div>
    </div>
  )
}
