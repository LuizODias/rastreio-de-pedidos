import api from './api'
import { IData } from '../types'

interface IStatusResponse {
  status: IData[]
}

export function getStatus(
  pedidoId: string,
  rastreioCod: string
): Promise<IStatusResponse> {
  return api.get(`/pedido?pedidoId=${pedidoId}`)
}
