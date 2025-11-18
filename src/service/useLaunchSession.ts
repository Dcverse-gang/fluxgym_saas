import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import URLS from './url.service'

export interface LaunchSessionResponse {
  fluxgym_url: string
}

// async function that returns a Promise with the backend response
export const launchSession = async (): Promise<LaunchSessionResponse> => {
  const response = await axios.post<LaunchSessionResponse>(
    URLS.launchSession,
    new URLSearchParams({}),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )

  return response.data
}

const useLaunchSession = () => {
  return useQuery<LaunchSessionResponse, Error>({
    queryKey: ['launch-session'],
    queryFn: launchSession,
    refetchOnWindowFocus: false,
  })
}

export default useLaunchSession
