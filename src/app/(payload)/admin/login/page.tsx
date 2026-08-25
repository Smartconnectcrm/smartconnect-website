import { redirect } from 'next/navigation'

export default function OverrideAdminLogin() {
  redirect('/login')
}
