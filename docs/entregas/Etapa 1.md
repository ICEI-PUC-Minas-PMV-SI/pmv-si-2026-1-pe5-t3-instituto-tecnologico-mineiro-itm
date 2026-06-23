# PROJETO EIXO 5 - Infraestrutura de Rede
### Sistemas de Informação – EAD  

---

### 1	Identificação do Grupo

#### 1.1	Integrantes e Responsabilidades

| Nome | Papel/Responsabilidade |
|:---------|:------------------------------|
| **Ana Carolina Fernandes de Assis** | Documentação e Relatório Técnico |
| **Arthur Ribeiro Dias Guimarães** | Simulação Cisco Packet Tracer |
| **Davi Chavante Carlos** | Endereçamento IP e Sub-redes |
| **João Pedro Silva de Oliveira** | Configuração de Roteadores e Switches |
| **Maria Eduarda Borges** | Serviços de Rede (DNS, DHCP, HTTP) |
| **Maria Laura Cardoso Bastos** | Planilha de Recursos e Inventário |
| **Viviane Aparecida C. O. Pertence** | Topologia Física e Lógica |

Professor Orientador: Alexandre Teixeira

---

### 2	Cronograma de Atividades

O grupo adotará um ciclo de trabalho de 09/02/2026 a 28/03/2026 para a conclusão da Entrega 1, com as tarefas distribuídas conforme a tabela abaixo:

| Tarefa |	Responsável(is) |	Período |
|:---------------------|:------------------------------|:------------------------------|
| Definição do nome e histórico da faculdade | Ana Carolina, Maria Laura | 09/02 a 13/02
| Definição de setores, andares e computadores | Viviane, Davi | 13/02 a 18/02
| Planejamento de endereçamento IP / CIDR | Davi, João Pedro | 18/02 a 24/02
| Definição de servidores e serviços de rede | Maria Eduarda, Arthur | 24/02 a 02/03
| Esboço da topologia física e lógica | Viviane, Arthur | 02/03 a 09/03
| Preenchimento da planilha de recursos | Maria Laura, Ana Carolina | 09/03 a 15/03
| Protótipo inicial no Cisco Packet Tracer | Arthur, João Pedro, Davi | 15/03 a 24/03
| Revisão e entrega do documento | Todos | 24/03 a 28/03

---

### 3	Definição do Tema e Cenário do Projeto

#### 3.1 Nome da Instituição 

A instituição escolhida para o projeto é o Instituto Tecnológico Mineiro (ITM) – nome fictício criado para fins acadêmicos, inspirado na ideia de uma faculdade integrada à Região Metropolitana de Belo Horizonte (RMBH). 

#### 3.2 Histórico da Faculdade 

O ITM iniciou suas atividades em março de 2010 com foco em cursos de tecnologia e gestão. Ao longo dos anos, expandiu sua atuação para a Região Metropolitana de Belo Horizonte, abrindo dois campi adicionais. 

#### Cursos oferecidos: 

- Sistemas de Informação 

- Ciência da Computação 

- Engenharia de Software 

- Análise e Desenvolvimento de Sistemas 

- Administração 

- Ciências Contábeis  

Corpo discente atual: aproximadamente 4.200 alunos distribuídos entre as três unidades.  

#### Localização das unidades: 

- Sede (Reitoria): Belo Horizonte – Região Centro 

- Campus Norte: Contagem – MG 

- Campus Sul: Betim – MG 

#### 3.3 Infraestrutura Física das Unidades 

| Unidade | Localização | Andares | PCs Admin. | PCs Labs |
|:---------------------|:-----------------------|:-----------------------|:-----------------------|:-----------------------|
| Sede (Reitoria) | Belo Horizonte – Centro | 4 andares | 60 | 60 (2 labs) |
| Campus Norte | Contagem – MG | 3 andares | 30 | 60 (2 labs) |
| Campus Sul | Betim – MG | 2 andares | 20 | 30 (1 lab) |
| TOTAL | — | — | 110 | 150 (5 labs) | 

#### Setores e Funcionários por Unidade 
 
| Unidade | Setores Administrativos | Nº Funcionários  | Computadores |
|:---------------------|:-----------------------|:-----------------------|:-----------------------|
| Sede | Reitoria, TI, RH, Financeiro, Biblioteca, Secretaria Geral, Lab. Inf. 1 e 2 | 80 | 120 |
| Campus Norte | Coordenação, Secretaria, Biblioteca, RH Local, Lab. Inf. 1 e 2 | 40 | 90 |
| Campus Sul | Coordenação, Secretaria, Lab. Inf. 1 | 25 | 50 |
| TOTAL | — | 145 | 260 |

---

### 4 Esboço da Proposta de Projeto de Rede 
 
#### 4.1 Visão Geral da Topologia 

A rede do Instituto Tecnológico Mineiro será composta por três localizações fisicamente distintas, interligadas por links WAN seriais ponto a ponto simulados no Cisco Packet Tracer. A topologia foi deliberadamente simplificada para facilitar a implementação no simulador, eliminando VLANs e DHCP relay, mas preservando todos os conceitos essenciais: roteamento inter-redes, NAT, serviços de rede e conectividade WAN.  

O roteamento estático foi adotado devido à topologia centralizada e ao número reduzido de redes. A utilização de protocolos dinâmicos como OSPF ou EIGRP foi considerada desnecessária para este cenário acadêmico, reduzindo a complexidade da implementação no simulador. Embora a segmentação por VLAN seja recomendada em ambientes reais, optou-se por uma LAN plana por unidade para simplificar a implementação no Cisco Packet Tracer, mantendo o foco nos conceitos principais de roteamento, NAT e serviços de rede. A quantidade de estações representa apenas equipamentos institucionais (administrativos e laboratórios), não contemplando dispositivos pessoais de alunos, como notebooks e smartphones. 

Resumo da topologia: 

- Sede (Belo Horizonte): Roteador R-Sede + 1 switch + 3 servidores + 2 a 3 PCs representativos 

- Campus Norte (Contagem): Roteador R-Norte + 1 switch + 2 a 3 PCs representativos 

- Campus Sul (Betim): Roteador R-Sul + 1 switch + 2 a 3 PCs representativos 

- Links WAN: cabo Serial DCE/DTE – R-Sede ↔ R-Norte (192.168.10.0/30) e R-Sede ↔ R-Sul (192.168.20.0/30) 

- Link WAN adicional: R-Sede ↔ R-ISP (200.100.10.0/24), representando a conexão com a Internet simulada. 

- Cada unidade possui uma única rede LAN plana (/24), sem VLANs – switches operam em modo access em todas as portas 

#### 4.2 Servidores: Nomes e Endereços 

Apenas 3 servidores serão configurados, todos localizados na Sede, com endereços IP estáticos. O serviço DHCP dos campi é fornecido diretamente pelos roteadores locais via IOS, eliminando a necessidade de ip helper-address e de servidores remotos dedicados. 

| Hostname | IP Fixo | Localização | Serviço(s) |
|:---------------------|:-----------------------|:-----------------------|:-----------------------|
| srv-dns | 192.168.1.2 | Sede | DNS – resolução de nomes para toda a rede (unimetro.edu.br) |
| srv-web | 192.168.1.3 | Sede | HTTP – portal da faculdade (www.unimetro.edu.br) |
| srv-dhcp | 192.168.1.4 | Sede | DHCP – atende apenas a LAN da Sede (192.168.2.0/24) |

Nota: R-Norte e R-Sul atuarão como servidores DHCP locais utilizando o recurso nativo do IOS Cisco (ip dhcp pool), atribuindo automaticamente endereços às estações de cada campus sem necessidade de servidor dedicado. 
 
#### 4.3 Endereçamento IP – Faixas CIDR por Segmento 

O esquema adota redes /24 planas por unidade, sem subdivisão em VLANs. Isso simplifica a configuração dos switches (apenas modo access, sem trunk) e elimina a necessidade de inter-VLAN routing. Os links WAN utilizam redes /30 para economia de endereços. A rede pública simulada 200.100.10.0/24 será utilizada na conexão entre o roteador da Sede (200.100.10.1) e o roteador ISP fictício (200.100.10.254). 

| Segmento | Rede (CIDR) | Gateway | Faixa de Hosts | IPs | Unidade | 
|:---------------------|:-----------------------|:-----------------------|:-----------------------|:-----------------------|:-----------------------|
| Servidores – Sede | 192.168.0.0/24 | 192.168.1.1 | 192.168.1.2 – .254 | 253 | Sede |
| LAN – Sede (Admin + Labs) | 192.168.1.0/24 | 192.168.2.1 | 192.168.2.2 – .254 | 253 | Sede |
| LAN – Campus Norte | 192.168.0.1/24 | 10.1.1.1 | 10.1.1.2 – .254 | 253 | C. Norte |
| LAN – Campus Sul | 192.168.0.2/24 | 10.2.1.1 | 10.2.1.2 – .254 | 253 | C. Sul |
| WAN – Sede ↔ C. Norte | 192.168.10.0/30 | — | 192.168.10.1 – .2 | 2 | Link WAN |
| WAN – Sede ↔ C. Sul | 192.168.20.0/30 | — | 192.168.20.1 – .2 | 2 | Link WAN |
| WAN – Sede ↔ ISP | 200.100.10.0/24 | — | 200.100.10.1 – .254 | 254 | Link ISP |

#### 4.4 Enlaces WAN 

Os enlaces WAN entre as unidades do ITM serão simulados no Cisco Packet Tracer por meio de conexões seriais ponto a ponto, utilizando cabos DCE/DTE entre os roteadores. 

Os enlaces intercampi (Sede ↔ Campus Norte e Sede ↔ Campus Sul) utilizarão redes /30, conforme definido no plano de endereçamento IP, garantindo economia de endereços e adequação ao modelo ponto a ponto. 

Para fins didáticos e de dimensionamento na planilha de recursos, considera-se largura de banda lógica de: 

- 10 Mbps nos enlaces intercampi; 

- 50 Mbps no enlace entre a Sede e o roteador ISP fictício  

Os valores adotados possuem caráter acadêmico e visam permitir o cálculo estimado de capacidade na aba “Cálculo Links” da planilha de recursos, não representando dimensionamento real de mercado. 
 
#### 4.5 NAT – Network Address Translation 

Para possibilitar o acesso das redes internas à Internet simulada no ambiente do Cisco Packet Tracer, será adotado o mecanismo de Network Address Translation (NAT), na modalidade Port Address Translation (PAT), também conhecido como NAT Overload. 

A implementação do NAT será realizada exclusivamente no roteador da Sede, o qual atuará como roteador de borda (edge router) da infraestrutura proposta. Essa decisão fundamenta-se na topologia centralizada adotada no projeto, na qual a Sede concentra os enlaces WAN e representa o ponto único de interconexão entre as redes internas e a rede pública simulada. 

As redes internas 192.168.1.0/24 (Servidores – Sede), 192.168.2.0/24 (LAN – Sede), 192.168.0.1/24 (LAN – Campus Norte) e 192.168.0.2/24 (LAN – Campus Sul) serão configuradas como redes internas (inside). A interface conectada ao roteador que representa o provedor de serviços de Internet (ISP fictício) será configurada como rede externa (outside). 

O mecanismo de PAT permitirá que múltiplos endereços IP privados compartilhem um único endereço IP público por meio da diferenciação de portas de origem, otimizando o uso do endereçamento e garantindo a conectividade externa no ambiente de simulação. 

Optou-se por não implementar NAT nos roteadores dos campi Norte e Sul, a fim de evitar tradução dupla de endereços, reduzir a complexidade da configuração e manter aderência às boas práticas de projeto de redes corporativas, nas quais o NAT é centralizado no equipamento de borda da infraestrutura. 

| Roteador | Rede Interna (Inside) | Interface Externa (Outside) | Endereço Público | Tipo de NAT |
|:---------------------|:-----------------------|:-----------------------|:-----------------------|:-----------------------|
| R-Sede (Sede) | 192.168.1.0/24, 192.168.2.0/24, 10.1.1.0/24, 10.2.1.0/24 | Interface conectada ao ISP (G0/2) | 200.100.10.1 | NAT Overload (PAT) |

#### 4.6 Tabelas de Roteamento 

A comunicação entre as unidades do Instituto Tecnológico Mineiro será realizada por meio de roteamento estático, em virtude da topologia centralizada adotada e do número reduzido de redes envolvidas. A utilização de protocolos de roteamento dinâmico, como OSPF ou EIGRP, foi considerada desnecessária para o escopo do projeto, uma vez que a estrutura apresenta baixa complexidade e crescimento controlado. 

O roteador da Sede atuará como núcleo (core) da rede, concentrando os enlaces WAN com os campi Norte e Sul, bem como a conexão com o roteador que representa o provedor de serviços de Internet (ISP fictício). 

No roteador da Sede serão configuradas rotas estáticas específicas para as redes:  

- 192.168.0.1/24 (Campus Norte); 

- 192.168.0.2/24 (Campus Sul).  

Além disso, será configurada uma rota padrão (default route) apontando para o roteador ISP, permitindo o encaminhamento de tráfego destinado a redes externas. 

Nos roteadores dos campi Norte e Sul será configurada apenas uma rota padrão apontando para o roteador da Sede, de forma que todo o tráfego destinado a redes externas ou a outras unidades seja encaminhado centralizadamente. 

O roteador ISP fictício possuirá rota de retorno para a rede interna resumida (192.168.0.0/8), garantindo a correta comunicação bidirecional no ambiente de simulação. 

Essa abordagem garante simplicidade de configuração, previsibilidade no encaminhamento de pacotes e alinhamento com a arquitetura hierárquica adotada. 

 
| Roteador | Rede Destino | Máscara | Próximo Salto | Tipo de Rota |
|:---------------------|:-----------------------|:-----------------------|:-----------------------|:-----------------------|
| R-Sede | 192.168.1.0 | 255.255.255.0 | 192.168.10.2 | Estático |
| R-Sede | 192.2.1.0 | 255.255.255.0 | 192.168.20.2 | Estático |
| R-Sede | 0.0.0.0 | 0.0.0.0 | 200.100.10.254 | Padrão |
| R-Norte | 0.0.0.0 | 0.0.0.0 | 192.168.10.1 | Padrão |
| R-Sul | 0.0.0.0 | 0.0.0.0 | 192.168.20.1 | Padrão |
| R-ISP | 192.168.0.0 | 255.0.0.0 | 200.100.10.1 | Estática (Retorno) |

#### 4.7 Serviços de Rede Disponibilizados 

A infraestrutura proposta contempla a implementação dos principais serviços de rede necessários ao funcionamento institucional e à validação dos conceitos abordados na disciplina. 

Os servidores estarão concentrados na Sede, em rede dedicada (192.168.1.0/24), com endereçamento IP estático, conforme descrito a seguir: 

 - **DNS (srv-dns – 192.168.1.2):** responsável pela resolução de nomes do domínio unimetro.edu.br, permitindo que os dispositivos da rede acessem serviços por meio de nomes lógicos. 

 - **HTTP (srv-web – 192.168.1.3):** responsável pela hospedagem do portal institucional, acessível a partir de qualquer unidade da rede. 

- **DHCP (srv-dhcp – 192.168.1.4):** responsável pela atribuição dinâmica de endereços IP na LAN da Sede (192.168.2.0/24). 
 
Nos campi Norte e Sul, o serviço de DHCP será implementado diretamente nos roteadores locais por meio do recurso nativo do IOS (ip dhcp pool), eliminando a necessidade de DHCP relay e reduzindo a complexidade de configuração. 

A comunicação entre os campi e os servidores ocorre exclusivamente por meio do roteamento interno configurado, não havendo necessidade de tradução de endereços (NAT) nesse tráfego. O mecanismo de NAT é aplicado apenas para comunicações destinadas à rede externa simulada. 

Essa organização centralizada de serviços contribui para maior controle administrativo e coerência arquitetural. 

#### 4.8 Simplificações Adotadas em Relação ao Projeto 

Considerando as limitações do ambiente de simulação Cisco Packet Tracer e o objetivo acadêmico do projeto, foram adotadas simplificações técnicas com o intuito de manter a viabilidade de implementação sem comprometer os principais conceitos de redes. 
 
As principais decisões adotadas foram: 

- Utilização de uma única rede LAN (/24) por unidade, sem segmentação por VLANs; 

- Adoção de roteamento estático em substituição a protocolos dinâmicos; 

- Centralização do mecanismo de NAT exclusivamente no roteador da Sede; 

- Implementação de DHCP local nos campi por meio do IOS dos roteadores; 

- Redução do número de servidores aos serviços essenciais (DNS, HTTP e DHCP); 

- Utilização de estações representativas (2 a 3 por unidade), em vez da simulação integral da quantidade real de computadores. 
 
A centralização do NAT no roteador de borda evita tradução dupla de endereços, simplifica a depuração de tráfego e aproxima o modelo proposto das boas práticas de projetos corporativos. 

As decisões adotadas garantem equilíbrio entre realismo técnico e viabilidade prática no simulador. 

#### 4.9 Equipamentos para Implementação no Cisco Packet Tracer 

Para a implementação da infraestrutura proposta no Cisco Packet Tracer, serão utilizados os seguintes dispositivos: 

- 4 roteadores Cisco 2911, sendo: 

  - 1 roteador para a Sede (core e borda); 

  - 1 roteador para o Campus Norte; 

  - 1 roteador para o Campus Sul; 

  - 1 roteador adicional representando o provedor de Internet (ISP fictício); 

- Módulo HWIC-2T no roteador da Sede para suporte às interfaces seriais WAN; 

- 3 switches Cisco 2960 (um por unidade); 

- 3 servidores (Server-PT), localizados na Sede; 

- 9 estações de trabalho (PC-PT), distribuídas de forma representativa entre as unidades; 

- Cabos seriais DCE/DTE para interligação WAN; 

- Cabos Ethernet (Copper Straight-Through) para conexões LAN.  

O roteador da Sede possuirá múltiplas interfaces configuradas para atender às redes internas, aos enlaces WAN e à conexão com o ISP fictício, atuando simultaneamente como roteador de núcleo e roteador de borda. 

Essa estrutura garante a correta validação de endereçamento IP, roteamento, NAT e serviços de rede no ambiente de simulação. 
 
#### 4.10 Estimativa de Investimento 

A planilha de recursos representa estimativa de implantação real da infraestrutura descrita, considerando o quantitativo total de equipamentos institucionais distribuídos entre a Sede e os dois campus. Os valores unitários adotados correspondem a médias de mercado para equipamentos corporativos no ano de 2026, sendo utilizados exclusivamente para fins acadêmicos. 

Com base nos quantitativos definidos e nos valores médios estimados, o investimento total previsto para a implantação da infraestrutura de rede do ITM é de aproximadamente R$ 1.170.500,00 (um milhão, cento e setenta mil e quinhentos reais). 

O montante apresentado contempla a aquisição de estações de trabalho, servidores, equipamentos de rede, racks e nobreaks, não incluindo custos com instalação, licenciamento de software, contratos de suporte técnico ou despesas operacionais recorrentes. 
