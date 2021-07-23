  // Função para cadastrar dados dos clientes
  function cadastra_itens(marc, _idform){

    const infos = document.getElementById("form_cli_cad")

    infos.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let item_fim = document.getElementById(_idform).value;
        
        let conversao = JSON.stringify(item_fim)

        localStorage.setItem(marc, conversao)

        document.getElementById(_idform).value="";
  })
}
cadastra_itens("cpf", "cpf_cli"); cadastra_itens("nome", "nome_cli"); cadastra_itens("email", "eml_cli"); cadastra_itens("tel", "tel_cli");
cadastra_itens("endereco", "end_cli"); cadastra_itens("numero", "num_cli"); cadastra_itens("compl", "comp_cli"); cadastra_itens("bairro", "bairro_cli");
cadastra_itens("cep", "cep_cli"); cadastra_itens("cidade", "cid_cli"); cadastra_itens("estado", "est_cli");


// Função para cadastrar dados dos Produtos
function cadastra_itens_prod(marcprod, _idformprod){

  const infos = document.getElementById("form_prod_cad")

  infos.addEventListener('submit', (evento) => {
      evento.preventDefault();

      let prod_fim = document.getElementById(_idformprod).value;
      
      let conversao_prod = JSON.stringify(prod_fim)

      localStorage.setItem(marcprod, conversao_prod)

      document.getElementById(_idformprod).value="";
})
}
cadastra_itens_prod("nome_produto", "nome_prod"); cadastra_itens_prod("marca", "marca_prod");
cadastra_itens_prod("quantidade", "qtde_prod"); cadastra_itens_prod("categoria", "cat_prod");
cadastra_itens_prod("custo_produto", "cust_prod"); cadastra_itens_prod("custo_venda", "venda_prod");