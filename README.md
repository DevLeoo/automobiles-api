# Rent Automobiles API

## Descrição do Projeto
<p>API desenvolvida em Node.js para fornecer informações e serviços acerca de dados referentes à aluguel de automóveis, motoristas e automóveis.</p>

<br/>
<br/>

### Requisitos.
<ul>
    <li>
        <a href="https://nodejs.org/en/" target="_blank" >Node.js - v14.17.0 ou superior  </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/" target="_blank" >Node Package Manager (npm) - 7.14.0 ou superior</a>
    </li>
    <li>Banco de dados 'automobiles' criado e ativo.
    </li>
</ul>

### Inicializar a aplicação
Para a execução do projeto de maneira local deve ser executado os seguintes passos.
<br/>
<ul>
    <li><b>Inicializar a aplicação: </b>
    <br/>
    Para inicializar a aplicação é necessário entrar na pasta do projeto, por exemplo:
    <br/>
    <code>C:\automobiles-api</code>
    <br/>
    Instalar as requisições do projeto, através do seguinte comando:
    <br/>
    <code>npm install</code>
    <br/>
    Após a instalação, digite o seguinte comando:
    <br/>
    <code>npm start</code>
    </li>
    
</ul>

<p>Após a finalização desse processo você terá a aplicação rodando localmente na porta <code>3000</code>, mais especificamente: <code>http://localhost:3000/</code></p>
<br/>

<p><b>OBS:</b> Você pode utilizar um software como <a href="https://www.postman.com/" target="_blank">Postman</a> para disparar requisições para a API.</p>
<br/>


## Como utilizar a aplicação

<p>Conforme o exemplo citado acima, você pode utilizar o software para consumir os serviços de forma independente.</p>
<br/>


## <i>Endpoints</i> principais

Para todos os casos um <code>JSON</code> é retornado como resposta.

<br/>
<h3>Consulta <code>(GET)</code></h3>
<br/>
<ul>
    <li><b><i>Endpoint(s)</i> </b>
    <br/>
    <br/>
    <code>http://localhost:3000/drivers/</code><sub> Retorna os motoristas cadastrados</sub>
    <br/>
    <br/>
    <code>http://localhost:3000/drivers/:nome</code>
    <sub>Retorna o(s) motorista(s) cadastrado(s) filtrado(s) pelo nome</sub>
    <br/>
    <br/>
    <code>http://localhost:3000/cars/</code><sub> Retorna os carros cadastrados</sub>
    <br/>
    <br/>
    <code>http://localhost:3000/cars/:placa</code><sub> Retorna o carro filtrado pela Placa</sub>
    <br/>
    <br/>
    <code>http://localhost:3000/rent</code><sub> Retorna os dados de aluguel de um automóvel(Motorista / Automóvel / Motivo / Data de Retirada / Data de entrega)</sub>
    <br/>
    <br/>
    </li>
</ul>
<br/>
<h3>Cadastro <code>(POST)</code></h3>
<br/>
<ul>
    <li><b><i>Endpoint(s)</i> </b>
    <br/>
    <br/>
    <code>http://localhost:3000/cars/register/</code><sub> Cadastra as informações recebidas referentes ao carro</sub>
    <br/>
    <br/>
    <code>http://localhost:3000/drivers/register/</code><sub> Cadastra as informações recebidas referentes ao motorista</sub>
    <br/>
    <br/>
    <code>http://localhost:3000/rent/register/</code><sub> Cadastra as informações recebidas referentes ao aluguel de um automóvel</sub>
    </li>
</ul>
<br/>
<h3>Remoção <code>(DELETE)</code></h3>
<br/>
<ul>
    <li><b><i>Endpoint(s)</i> </b>
    <br/>
    <br/>
    <code>http://localhost:3000/cars/delete/:placa</code><sub> Remove da base de dados o carro filtrado pela Placa</sub>
    <br/>
    <br/>
    <code>http://localhost:3000/drivers/delete/:nome</code><sub> Remove da base de dados o(s) motorista(s) filtrado(s) pelo Nome</sub>
    </li>
</ul>
<br/>
<h3>Alteração <code>(PUT)</code></h3>
<br/>
<ul>
    <li><b><i>Endpoint(s)</i> </b>
    <br/>
    <br/>
    <code>http://localhost:3000/drivers/update/</code><sub> Altera as informações do motorista pelo Nome informado</sub>
    <br/>
    <br/>
    <code>http://localhost:3000/cars/update/</code><sub> Altera  Altera as informações do carro pela Placa informada</sub>
    <br/>
    <br/>
    <code>http://localhost:3000/rent/finished/</code><sub> Finaliza o aluguel (alterada a data de retirada) pela Placa informada</sub>
    </li>
</ul>
<br/>
<br/>
<b>OBS:</b> A API possui uma trativa de erro para rotas não encontradas, caso esse caso ocorra, a seguinte mensagem aparecerá: <br/><br/>
<code>
{
    "erro": {
        "mensagem": "Rota não encontrada"
    }
}
</code>
<br/>


### Testes unitários
Para a execução dos testes unitários, basta rodar no terminal (pasta raiz do projeto) o seguinte comando
<code>npm test</code>
Assim, todos os arquivos de teste serão executados

