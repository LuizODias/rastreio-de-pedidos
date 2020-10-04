import { toast } from 'react-toastify'

export const handleError = error => {
  const erroStatus: number = error?.response?.status

  if (erroStatus === 401) {
    localStorage.removeItem('currentTenant')
    localStorage.removeItem('accessToken')
    window.location.href = '/login'
  }

  const options = {
    401: 'Não autorizado',
    404: 'Não encontrado',
    400: 'Dados incorretos',
    500: 'Erro interno',
  }

  if (erroStatus) {
    const errorMessage: string = options[erroStatus]
    toast.error(errorMessage)
  }
}
