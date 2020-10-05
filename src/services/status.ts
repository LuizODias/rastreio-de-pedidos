import api from './api'

export function getStatus(
  tenantid: String,
  pedidoId: String,
  clienteCod: String
): Promise<any> {
  return api.get(`/acompanhapedido/`, {
    headers: { tenantId: tenantid, pedido: pedidoId, cliente: clienteCod },
  })
}
