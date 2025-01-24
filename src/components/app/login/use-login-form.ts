import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Login, loginSchema } from './login-form-schema'
import { toast } from 'react-toastify'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const useLoginForm = ({ router }: { router: AppRouterInstance }) => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema)
  })


  const onSuccess = async (data: Login): Promise<void> => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (data.user === "usuario@seek.com" && data?.password === "password123") {
      const fakeToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlVzdWFyaW8gZGUgRWplbXBsbyIsImlhdCI6MTUxNjIzOTAyMn0.sXGrWFZxMBrxEn0jCmUXDXgk1zGY7Jh9JGgHdTwwTYk"
      localStorage.setItem("token", fakeToken)
      toast.success("Inicio de sesión exitoso")
      router.push("/dashboard")
    } else {
      toast("Error de inicio de sesión")
    }

    setIsLoading(false)
  }

  return {
    form,
    isLoading,
    onSuccess
  }
}
