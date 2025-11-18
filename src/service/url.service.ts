// Base URL for backend API
// Configure `VITE_API_URL` in a `.env` file at the project root, e.g.:
// VITE_API_URL="http://98.90.1.115:8000/api"
export const BACKEND_BASE_URL =
  import.meta.env.VITE_API_URL ?? 'http://98.90.1.115:8000/api'

export const URLS = {
  launchSession: `${BACKEND_BASE_URL}/launch-session`,
}

export default URLS
