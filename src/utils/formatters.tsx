import { Prato } from '../Models/Restaurant' // Ou '../../ProductList' dependendo de onde está seu tipo

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

// CORRIGIDO: Tipando o array como Prato[] para o TS reconhecer a propriedade .preco
export const getPrecoTotal = (items: Prato[]) => {
  return items.reduce((acumulador, itemAtual) => {
    return acumulador + (itemAtual.preco || 0)
  }, 0)
}
