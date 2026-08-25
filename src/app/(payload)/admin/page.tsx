import { redirect } from 'next/navigation'

export default function RedirectAdminRoot() {
  redirect('/dashboard')
}
