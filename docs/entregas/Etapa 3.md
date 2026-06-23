### 6 Gerência e Monitoramento do Ambiente de Redes com Zabbix 

A implementação do monitoramento dos serviços e recursos computacionais, foi realizada utilizando a ferramenta Zabbix. 
 
#### 6.1 Monitoramento Servidor Ubuntu Local e serviço web Apache 

Foram monitorados o servidor Ubuntu local, seus recursos físicos e o serviço Web Apache. Abaixo, os gráficos de monitoramento:  

**Monitoramento de Tráfego de Rede** 

Este gráfico monitora o tráfego de rede do Servidor Ubuntu, evidenciando a quantidade de dados enviados e recebidos pela interface de rede. 

<img width="1727" height="441" alt="image" src="https://github.com/user-attachments/assets/f80566ea-f493-4482-aa5c-75eb51ef7e69" />

**Monitoramento da CPU**

O primeiro gráfico demonstra a utilização da CPU do servidor Ubuntu, apresentando o percentual de processamento utilizado ao longo do tempo. 

<img width="1715" height="378" alt="image" src="https://github.com/user-attachments/assets/6360f608-a8e2-447e-8b2c-c6a214347779" /> 

O segundo demonstra o uso da CPU e como o processamento está sendo distribuído entre as atividades do sistema, usuário e demais operações, permitindo a identificação de períodos de maior utilização de carga de processamento do servidor. 

<img width="1721" height="465" alt="image" src="https://github.com/user-attachments/assets/c56c9af5-29ed-4ead-8e09-f7c6fd3ced7d" />

**Monitoramento de atividade da CPU**

Monitora a atividade da CPU do servidor Ubuntu, apresentando a quantidade de interrupções e trocas de contexto realizadas pelo processador, ajudando a identificar momento de maior processamento e atividade do sistema. 

<img width="1711" height="371" alt="image" src="https://github.com/user-attachments/assets/66949b71-4eb9-48ad-ab89-2fc2409d80c3" />

**Monitoramento de Memória**

No primeiro, monitora o uso da memória do servidor Ubuntu, exibindo a quantidade de memória total e disponível ao longo do tempo, acompanhando o consumo e possibilita a identificação de variações causadas pelas aplicações. 

<img width="1712" height="379" alt="image" src="https://github.com/user-attachments/assets/fdec098b-7667-4906-aff3-97d857669ca6" /> 

O segundo já traz o percentual de memória utilizada pelo servidor ao longo do tempo. 
 
<img width="1717" height="377" alt="image" src="https://github.com/user-attachments/assets/6e8ab507-b8fc-4da5-a107-ff21adbdb210" />

**Monitoramento de Uso da Memória Swap**

Demonstra o uso da memória swap do servidor, espaço total e o espaço disponível da memória virtual. 

<img width="1719" height="377" alt="image" src="https://github.com/user-attachments/assets/2a2f8dd8-f191-4666-98d5-1827aa9f9dac" /> 

**Monitoramento de Carga do Sistema** 

O gráfico monitora a carga de processamento ao longo do tempo, considerando as demandas executadas pela CPU, permitindo a avaliação do desempenho geral do sistema. 

<img width="1714" height="404" alt="image" src="https://github.com/user-attachments/assets/b643e58b-dfde-44ca-883f-a820e0d159d2" /> 

**Monitoramento de Leitura e Escrita em Disco** 

Monitoramento das taxas de leitura e escrita do disco do servidor Ubuntu, demonstrando a atividade de armazenamento em determinado período. 

<img width="1719" height="377" alt="image" src="https://github.com/user-attachments/assets/fed60f6b-5114-4e45-986a-533fc25731e5" />
 

#### 6.2 Monitoramento Servidor AWS Windows e Windows Local 

Foram monitorados o servidor AWS Windows e o servidor Windows Local, seus recursos físicos e o tráfego de rede. Abaixo, os gráficos de monitoramento: 

**Monitoramento de Tráfego de Rede**

Este gráfico monitora o tráfego de rede do Servidor AWS Windows, evidenciando a quantidade de dados enviados e recebidos pela interface de rede. 

<img width="1289" height="326" alt="image" src="https://github.com/user-attachments/assets/a63cbcc5-190a-4bc1-9a18-a5d67e0f560f" />

**Monitoramento da CPU** 

O gráfico demonstra a utilização da CPU do servidor AWS Windows, apresentando o percentual de processamento utilizado ao longo do tempo. 

<img width="1288" height="294" alt="image" src="https://github.com/user-attachments/assets/01a6c0fd-fbd4-427e-a564-93d59cab077f" /> 

**Monitoramento de Memória**

No primeiro, monitora o uso da memória do servidor AWS Windows, exibindo a quantidade de memória total ao longo do tempo, acompanhando o consumo e possibilita a identificação de variações causadas pelas aplicações. 

<img width="1304" height="274" alt="image" src="https://github.com/user-attachments/assets/04be3215-92f5-455d-bbb8-1c7e63f2712d" /> 

O segundo traz a quantidade de memória utilizada pelo servidor ao longo do tempo em Megabytes. 

<img width="1287" height="285" alt="image" src="https://github.com/user-attachments/assets/b7293826-645f-4dc9-a41c-6b824c5ca0bc" /> 

O terceiro já traz o percentual de memória utilizada pelo servidor ao longo do tempo. 
 
<img width="1339" height="318" alt="image" src="https://github.com/user-attachments/assets/7b55747e-4e92-441e-b754-91c028f680de" />

 **Monitoramento de Espaço em Disco** 

Monitoramento do percentual de espaço utilizado no disco do servidor AWS Windows, demonstrando a atividade de armazenamento em determinado período. 
 
<img width="1302" height="441" alt="image" src="https://github.com/user-attachments/assets/24154b3a-0337-4d50-95db-ae07ebf4f852" />

**Monitoramento de Tráfego de Rede**

Este gráfico monitora o tráfego de rede do Servidor Windows Local, evidenciando a quantidade de dados recebidos pela interface de rede. 

<img width="1306" height="294" alt="image" src="https://github.com/user-attachments/assets/e1fd0f48-a32f-40ee-90c8-2c2f3562c03b" />

**Monitoramento da CPU** 

O gráfico demonstra a utilização da CPU do servidor Windows Local, apresentando o percentual de processamento utilizado ao longo do tempo. 

<img width="1315" height="315" alt="image" src="https://github.com/user-attachments/assets/268d5288-68e9-432e-96b3-59cd0ac91342" />

**Monitoramento de Memória**

No primeiro, monitora o uso da memória do servidor Windows Local, exibindo a quantidade de memória total ao longo do tempo, acompanhando o consumo e possibilita a identificação de variações causadas pelas aplicações. 

<img width="1321" height="290" alt="image" src="https://github.com/user-attachments/assets/afe2d423-a288-4ad6-bb72-b14bc9e09f59" /> 

**Monitoramento de Tempo de Resposta (ICMP)** 
 
O gráfico monitora o tempo de resposta ICMP ao longo do tempo, considerando as demandas de conectividade e latência, permitindo a avaliação do desempenho geral de rede do sistema. 

<img width="1284" height="262" alt="image" src="https://github.com/user-attachments/assets/a1850841-8d39-4975-b806-5707c5a11324" />

**Monitoramento de Espaço em Disco** 

Monitoramento do percentual de espaço utilizado no disco do servidor Windows Local, demonstrando a atividade de armazenamento em determinado período.

<img width="1285" height="380" alt="image" src="https://github.com/user-attachments/assets/ef550aaa-0c6a-4aa9-a92f-61d1fbc8cc38" /> 

#### 6.3 Mapas de Monitoramento  

##### 6.3.1 Mapa de Monitoramento do Servidor Ubuntu Local e serviço web Apache 

O mapa abaixo representa visualmente a relação entre o Zabbix Server e o Servidor Ubuntu local com Apache. 

<img width="720" height="467" alt="image" src="https://github.com/user-attachments/assets/e7b67e02-da9a-4ce0-832f-00f7f1b8940d" /> 

##### 6.3.2 Mapa de Monitoramento do Servidor Windows e serviço IIS 

O mapa abaixo representa visualmente a relação entre o Zabbix Server e o Servidor Windows com IIS. 

<img width="1122" height="651" alt="image" src="https://github.com/user-attachments/assets/5c465655-c61a-4a62-b108-61d0c634a19e" />

 

 
