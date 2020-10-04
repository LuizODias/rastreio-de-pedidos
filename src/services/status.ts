import api from './api'
import { IData } from '../types'

interface IStatusResponse {
  status: IData[]
}

export function getStatus(
  pedidoId: String | undefined,
  rastreioCod: String | undefined
): Promise<any> {
  return api.get(
    `/acompanhapedido/pedidoId=${pedidoId}/codigoId=${rastreioCod}`
  )
}
