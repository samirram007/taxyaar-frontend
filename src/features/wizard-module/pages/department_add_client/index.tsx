'use client'

// build err

// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import BreadCrumb from '../../components/CustomBreadCrumb'
// build err

// import { Button } from "@/components/ui/button";
import SupportDropDown from '../../components/support/support'
import { useRouter } from '@tanstack/react-router'
import { useState } from 'react'
// build err

// import { Input } from "@/components/ui/input";
// build err

// import { useAddClient, useValidateAddClient } from "../../data/queryOptions";
import { useAddClient, useValidateAddClient } from '../../data/queryOptions'
// build err

// import { toast } from "sonner";
import OTPCard from './components/OTPCard'
import VerificationCard from './components/VerificationCard'
import RegistrationCard from './components/RegistrationCard'

// build err : for commenting other imports had to comment this

// function getValidUpto(monthsToAdd: number) {
//
//     const date = new Date();
//
//     date.setMonth(date.getMonth() + monthsToAdd);
//
//     // Manually format the new Date object back to 'YYYY-MM-DD'
//     const year = date.getFullYear();
//     // getMonth() is 0-based, so add 1 and pad with a leading '0' if necessary.
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     // getDate() returns the day of the month (1-31).
//     const day = String(date.getDate()).padStart(2, '0');
//
//     return `${year}-${month}-${day}`;
// }

export function DepartmentAddClientPage() {
  const [requestOtp, setRequestOtp] = useState(false)
  const router = useRouter()
  // build err

  // const validateClientMutation = useValidateAddClient();
  const addClientMutation = useAddClient()

  const [clientVerified /*, setClientVerified */] = useState<boolean | null>(
    null,
  )

  const handleRequestOtp = () => {
    const memberData = sessionStorage.getItem('taxFillerData')
    const token = localStorage.getItem('autkn')

    if (!memberData || !token) {
      alert('Session expired. Please login again.')
      router.navigate({ to: '/dashboard' })
      return
    }

    const parsed = JSON.parse(memberData)

    addClientMutation.mutate(
      {
        pan: parsed.pan,
        dateOfBirth: parsed.dateOfBirth,
        authToken: token,
      },
      {
        onSuccess: (data) => {
          setRequestOtp(true)
          localStorage.setItem(
            'transactionId',
            data.data.data.result.transactionId,
          )
        },
        onError: (error) => {
          alert(error.message)
        },
      },
    )
  }

  // build err

  // const handleVerifyOtp = () => {
  //
  //     const memberData = sessionStorage.getItem("taxFillerData");
  //     const token = localStorage.getItem("autkn");
  //     const transactionId = localStorage.getItem("transactionId");
  //
  //     console.log("", transactionId, token, memberData);
  //
  //     if (!memberData || !token || !transactionId) {
  //         alert("Session expired. Please try again.");
  //         return;
  //     }
  //
  //     const parsed = JSON.parse(memberData);
  //
  //     validateClientMutation.mutate(
  //         {
  //             Pan: parsed.pan,
  //             transactionId: transactionId,
  //             Otp: "otp",
  //             validUpto: getValidUpto(3),
  //             authToken: token
  //         },
  //         {
  //             onSuccess: (data) => {
  //                 if (data.data.data.result.httpStatus == "REJECTED") {
  //                     toast.error(data.data.data.result.errors[0].desc);
  //                     return;
  //                 }
  //                 const memberData = sessionStorage.getItem("taxFillerData");
  //                 if (memberData) {
  //                     const { pan } = JSON.parse(memberData);
  //
  //                     const stored = localStorage.getItem("verifiedPans");
  //                     const verifiedMap = stored ? JSON.parse(stored) : {};
  //
  //                     verifiedMap[pan] = true;
  //
  //                     localStorage.setItem("verifiedPans", JSON.stringify(verifiedMap));
  //                 }
  //
  //                 router.navigate({ to: "/dashboard_filer" });
  //             },
  //             onError: (error) => {
  //                 alert(error.message);
  //             }
  //         }
  //     );
  // };

  // validateClientMutation.mutate(
  //   {
  //     Pan: parsed.pan,
  //     transactionId: transactionId,
  //     Otp: "otp",
  //     validUpto: getValidUpto(3),
  //     authToken: token
  //   },
  //   {
  //     onSuccess: (data) => {
  //       if (data.data.data.result.httpStatus == "REJECTED") {
  //         toast.error(data.data.data.result.errors[0].desc);
  //         return;
  //       }
  //       const memberData = sessionStorage.getItem("taxFillerData");
  //       if (memberData) {
  //         const { pan } = JSON.parse(memberData);

  //         const stored = localStorage.getItem("verifiedPans");
  //         const verifiedMap = stored ? JSON.parse(stored) : {};

  //         verifiedMap[pan] = true;

  //         localStorage.setItem("verifiedPans", JSON.stringify(verifiedMap));
  //       }

  //       router.navigate({ to: "/dashboard_filer" });
  //     },
  //     onError: (error) => {
  //       alert(error.message);
  //     }
  //   }
  // );


  return (
    <div className="min-h-screen max-w-max mx-auto">
      <BreadCrumb title="Verify User" />

      <div className="mx-auto max-w-7xl  py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-6">
            {
              clientVerified == true ?
                <RegistrationCard />
                :
                requestOtp ?
                  <OTPCard />
                  :
                  <VerificationCard onHandleRequestOtp={handleRequestOtp} />
            }
          </div>

          <div className="lg:col-span-1">
            <SupportDropDown />
          </div>

        </div>
      </div>
    </div>
  )
}
