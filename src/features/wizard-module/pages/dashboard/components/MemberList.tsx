import { useRouter } from "@tanstack/react-router";
import type { Client, ClientList } from "../../taxfiler/data/schema";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical, Trash2 } from "lucide-react";
import { IconArrowRight, IconEdit } from "@tabler/icons-react";
// import { useAuthenticationUser } from "@/features/wizard-module/data/queryOptions";
import { DeleteModal } from "./DeleteModal";
import { useState } from "react";





export default function MemeberList({ clientList }: { clientList: ClientList }) {

    const router = useRouter();
    // const { mutate } = useAuthenticationUser();
    const [selectedClient, setSelectedClient] = useState<Client | null>(null)
    const [open, setOpen] = useState<boolean>(false);

    // const onClientAuthentication = (client: Client) => {
    //     mutate(client.pan, {
    //         onError(error) {
    //             toast.error(error.message);
    //         },
    //         onSuccess(data) {
    //             sessionStorage.setItem("pan", data.data.data.result.pan);
    //             router.navigate({ to: "/department_add_client" });
    //         }
    //     });
    // }




    return (
        <>
            <div className="px-8">

                {
                    clientList.map((member, index) => (
                        <div key={index} className="bg-muted mb-3 rounded-lg p-4 flex items-center justify-between hover:bg-muted/80 transition cursor-pointer">

                            <div onClick={() => router.navigate({ to: "/department_add_client" })} className="flex gap-5" >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                                        <span className="text-primary-foreground font-bold text-lg">{member.firstName?.charAt(0)}</span>
                                    </div>

                                    <div>
                                        <h3 className="text-foreground font-semibold">{member.firstName + " " + member.lastName}</h3>
                                        <p className="text-sm text-muted-foreground">{member.pan}</p>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    {member.isVerified ? (
                                        <span className="inline-block bg-green-300/50 text-green-800 border border-green-400/50 text-xs font-semibold px-3 py-1 rounded-2xl shadow-md">
                                            Verified
                                        </span>
                                    ) : (
                                        <span className="inline-block bg-yellow-200/50 text-yellow-800 border border-yellow-400 text-xs font-semibold px-3 py-1 rounded-2xl shadow-md">
                                            Continue
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
                                        <MoreVertical size={20} className="text-muted-foreground" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="min-w-40 space-y-4 p-4 text-sm">
                                    <DropdownMenuItem className="grid grid-cols-[10px_1fr] justify-start items-center gap-4" onSelect={() => router.navigate({ to: "/department_add_client" })}>
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
                                    <DropdownMenuItem
                                        onSelect={(e) => {
                                            e.preventDefault()
                                            setSelectedClient(member)
                                            setOpen(true)
                                        }}
                                    >
                                        <Trash2 />
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

            {selectedClient && (
                <DeleteModal
                    open={open}
                    setOpen={setOpen}
                    client={selectedClient}
                />
            )}
        </>
    )
}