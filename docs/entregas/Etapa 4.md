### 7 Mecanismos de Segurança da Informação 

Esta seção aborda as análises de vulnerabilidades dos serviços e servidores configurados para a Instituição, detalha o deploy da aplicação Back-end em nuvem e possíveis vulnerabilidades. Apresentamos também a Cartilha de Boas Práticas de Acesso Seguro que complementa o documento oficial da Política de Segurança da Informação (PSI) para a organização. 

#### 7.1. Análise de Vulnerabilidades dos Serviços e Servidores 

A partir da infraestrutura estabelecida, foi realizada uma auditoria técnica nos servidores para identificar falhas de segurança e propor correções antes da disponibilização pública dos serviços: 

**Vulnerabilidade no Servidor Web Apache (Sede - Ubuntu Local):** 

Foi identificado que o servidor Web Apache (srv-linux-matriz) está configurado com os padrões de fábrica, o que significa que ele expõe a versão exata do software e do sistema operacional nos cabeçalhos de resposta HTTP e em páginas de erro nativas. Isso facilita o mapeamento por parte de atacantes para a busca de exploits específicos. Correção proposta: Alteração das diretivas de segurança no arquivo de configuração do Apache para desativar a assinatura do servidor (ServerSignature Off) e ocultar os tokens do sistema (ServerTokens Prod).   

**Vulnerabilidade de Acesso Remoto (Servidor Nuvem AWS - Windows Server):** 

A análise das regras de firewall (Security Groups) da instância Windows na nuvem revelou que a porta do protocolo RDP (3389) está aberta com origem global para 0.0.0.0/0. Isso significa que qualquer dispositivo na internet pode tentar estabelecer uma conexão remota com o servidor, expondo-o a ataques automatizados de força bruta. Correção proposta: Modificação imediata das regras de entrada do Security Group no console da AWS, alterando a origem da porta 3389 para aceitar conexões vindas estritamente do endereço IP público da equipe de gerenciamento de TI da Sede. 

#### 7.2. Deploy de Aplicação Back-end em Nuvem 

Função do Backend: ele expõe uma API REST que permite **consultar, cadastrar, editar e remover** os registros de equipamentos, endereçamento IP e links de dados do ITM, que antes existiam só na planilha. 

O caminho de uma requisição (ex: "listar todos os equipamentos da Sede"): 

1. Cliente: Faz uma requisição GET/api/equipamentos?unidade = Sede 

2. App.js: Recebe a requisição, aplica os middlewares de segurança (helmet, cors) e identifica que é uma rota de equipamentos 

3. Routes/equipamentos.js: Direciona para a função correta do controller, com base no método HTTP (GET, POST, PUT, DELETE) 

4. Controllers/equipamentoController.js: Contém a lógica: valida os dados (se for POST/PUT), monta a query SQL e trata erros (ex: registro não encontrado) 

5. Config/database.js: Executa a query no MySQL através do pool de conexões 

6. MySQL: Retorna os dados, que sobem de volta pela mesma cadeia até virarem uma resposta JSON para o cliente 
 
Link da aplicação: http://18.219.81.118:3000/api/docs/ 

<img width="1156" height="548" alt="image" src="https://github.com/user-attachments/assets/fc65ef90-bb88-45d8-8e0d-4ba0cca34149" />
<img width="1158" height="541" alt="image" src="https://github.com/user-attachments/assets/69166ad4-d2f9-4ca8-bff1-bad8e9481b42" />
<img width="1155" height="458" alt="image" src="https://github.com/user-attachments/assets/3050c6fd-5eb9-4cad-bb81-9cbb7fb84936" />

As 3 entidades (CRUD) que o backend gerencia: 

- Equipamentos — inventário de TI por unidade (Sede, Campus Norte, Campus Sul) 

- Enderecos_ip — sub-redes, gateways e faixas de IP 

- Links_dados — dimensionamento de banda por aplicação e unidade  

Cada uma tem as 5 operações: listar todos, buscar por ID, criar, atualizar e remover. 

#### 7.2.1 Análise das vulnerabilidades da aplicação  

**Ausência de autenticação e autorização:** Todos os endpoints (GET, POST, PUT, DELETE) estão abertos. Qualquer pessoa com o link da API pode consultar, criar, editar ou excluir qualquer registro, sem necessidade de login ou token.  

**Exposição de dados sensíveis da infraestrutura:** Os endpoints retornam informações estratégicas da rede — modelos e fabricantes de equipamentos (incluindo firewall e roteadores), faixas de IP, gateways e dimensionamento de links — sem nenhuma restrição de acesso.   

**CORS aberto para qualquer origem:** A configuração do cors() está sem restrições, permitindo que qualquer site ou aplicação externa faça requisições à API.   

**Falta de validação de formato nos dados de entrada:** Os campos obrigatórios são verificados, mas não há validação de formato — por exemplo, os campos de endereço IP, máscara e gateway aceitam qualquer string, mesmo que não sejam um IP válido.   

**Ausência de limitação de requisições (rate limiting)**: Não há controle sobre quantas requisições um mesmo cliente pode fazer em um período de tempo, o que deixa a API exposta a ataques de força bruta ou sobrecarga (DoS). 
 
**Mensagens de erro podem expor detalhes internos:** O tratamento de erro genérico (erro: 'Erro interno do servidor.') está correto, mas como console.error(err) imprime o erro completo no log do servidor, é importante garantir que esses logs não fiquem acessíveis publicamente em produção. 

### 8 Cartilha de Boas Práticas de Acesso Seguro 

A cartilha de boas práticas foi desenvolvida com o intuito de orientar toda a comunidade acadêmica sobre as principais recomendações para uso consciente e acesso seguro a infraestrutura de rede e ativos digitais. Esse documento é um complemento da Política de Segurança da Informação da instituição. 
 
<img width="471" height="667" alt="image" src="https://github.com/user-attachments/assets/d9649a43-048e-461f-91e0-5e0b7e42a4b9" />
 
 


