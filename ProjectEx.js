const SUPABASE_URL = 'SEU_SUPABASE_URL_AQUI'
const SUPABASE_KEY = 'SUA_SUPABASE_KEY_AQUI'

const URL = `${SUPABASE_URL}rest/v1/produtos`

const HEADERS = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

// Função para criar um novo produto (POST)

async function adicionarProduto(nome, categoria, quantidade, preco) {
  try {
    if (preco <= 0) {
      console.error("Preço inválido! Deve ser maior que zero.");
      return;
    }

    const response = await fetch(URL, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify([{ nome, categoria, quantidade, preco }])
    });

    const data = await response.json();
    console.table(data);
    console.log("Produto adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
  }
}

// Inventário geral (GET)

async function listarProdutos() {
  try {
    const response = await fetch(`${URL}?select=*`, {
      method: 'GET',
      headers: HEADERS
    });

    const data = await response.json();
    console.table(data);
    return data;
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
  }
}

// Atualizar Saldo (PATCH)

async function atualizarQuantidade(id, novaQuantidade) {
  try {
    const response = await fetch(`${URL}?id=eq.${id}`, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify({ quantidade: novaQuantidade })
    });

    const data = await response.json();
    console.log("Quantidade atualizada:");
    console.table(data);
  } catch (error) {
    console.error("Erro ao atualizar quantidade:", error);
  }
}

// Remover Produto (DELETE)

async function deletarProduto(id) {
  try {
    const response = await fetch(`${URL}?id=eq.${id}`, {
      method: 'DELETE',
      headers: HEADERS
    });

    console.log("Produto removido com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
  }
}

// ALERTA ESTOQUE BAIXO

async function estoqueBaixo() {
  try {
    const response = await fetch(`${URL}?quantidade=lt.5&select=*`, {
      method: 'GET',
      headers: HEADERS
    });

    const data = await response.json();
    console.log("Produtos com estoque baixo:");
    console.table(data);
  } catch (error) {
    console.error("Erro ao verificar estoque baixo:", error);
  }
}

// Calcular Patrimonio

async function calcularPatrimonio() {
  try {
    const produtos = await listarProdutos();

    const total = produtos.reduce((soma, p) => {
      return soma + (p.quantidade * p.preco);
    }, 0);

    console.log(`Patrimônio total do estoque: R$ ${total.toFixed(2)}`);
  } catch (error) {
    console.error("Erro ao calcular patrimônio:", error);
  }
}

// Extras...

async function buscarPorCategoria(categoria) {
  try {
    const response = await fetch(
      `${URL}?categoria=eq.${categoria}&order=preco.desc&select=*`,
      {
        method: 'GET',
        headers: HEADERS
      }
    );

    const data = await response.json();
    console.log(`Produtos da categoria ${categoria}:`);
    console.table(data);
  } catch (error) {
    console.error("Erro na busca por categoria:", error);
  }
}
