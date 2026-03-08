import { getData, postData } from '@/utils/dataClient'

export async function fetchUserProfileService() {
  // console.log('loginService called');

  return await getData('/auth/profile')
}

export async function registerService(payload: any) {
  const data = await postData('/auth/register', payload)
  return data
}

export async function loginService(payload: any) {
  // console.log('loginService called', payload);
  const data = await postData('/auth/login', payload)
  //console.log(data);
  return data

  // return (await axiosClient.post("/auth/login", payload)).data
}

export async function logoutService() {
  // console.log('logoutService called');
  const data = await postData('/auth/logout', [])
  console.log(data)
  return data
  //return  (await axiosClient.post("/logout", []))
}

export async function googleLoginService(googleToken: string) {
  console.log('G auth - token received')
  const data = await postData('/auth/google/login', {
    access_token: googleToken,
  })
  console.log('G auth response:', data)
  return data
}
