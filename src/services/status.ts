import api from './api'

export function getStatus(pedidoId: String, rastreioCod: String): Promise<any> {
  return api.get(`/acompanhapedido/`, {
    headers: { tenantId: `${pedidoId},${rastreioCod}` },
  })
}
