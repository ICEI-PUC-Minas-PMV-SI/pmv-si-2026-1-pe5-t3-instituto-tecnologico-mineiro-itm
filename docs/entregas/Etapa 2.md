### 5 Implementação da Virtualização Local e Ambiente em Nuvem 

Foi realizada a implementação do ambiente por meio de virtualização, utilizando o VirtualBox. O objetivo foi simular um servidor da matriz executando o sistema Linux e disponibilizar o serviço web.  

#### 5.1 Virtualização Local: Máquina Virtual (VM) e Servidor Web (Linux)  

Foi criada uma máquina virtual no VirtualBox, conforme imagem abaixo: 

<img width="1916" height="1025" alt="image" src="https://github.com/user-attachments/assets/fc2bd722-8efa-4058-b8d0-dcc4eb1d589c" />

O Ubuntu foi instalado na VM, utilizando a configuração padrão, com usuário administrador.  

<img width="1749" height="932" alt="image" src="https://github.com/user-attachments/assets/8c03ba90-4ecd-4b04-a2fa-20d4e31f4c4a" />

Foi instalado e configurado o servidor web Apache HTTP Server. A validação do ambiente por meio do acesso ao localhost, exibindo a página institucional, evidenciando o funcionamento do servidor web no ambiente virtualizado. 

<img width="1746" height="937" alt="image" src="https://github.com/user-attachments/assets/c69e1940-131b-437f-ba8f-25f0296e75c0" />

#### 5.2 Servidor em Nuvem - Windows 

- Detalhes da Instância

<img width="920" height="426" alt="image" src="https://github.com/user-attachments/assets/dade37d7-f3c6-4150-a1c1-2e3727b28aaf" />
<img width="919" height="426" alt="image" src="https://github.com/user-attachments/assets/95768e86-f12d-4c49-90c7-965376c45a0b" />
<img width="912" height="434" alt="image" src="https://github.com/user-attachments/assets/82f86b43-a465-43f2-8bde-3baae8489f8d" />

- Configurações base do servidor provisionado na nuvem:  

   - Sistema operacional (AMI): Windows server 2016 english full base. O uso desta imagem garante um ambiente completo para serviços de servidor Windows. 

   - Capacidade de processamento: A instância foi configurada com 2 vCPUs, permitindo a execução estável de processos do sistema e aplicações. 

   - Segurança de acesso: Foi atribuído o par de chaves chaveFaculdade, garantindo que apenas usuários com a chave privada correspondente possam descriptografar a senha de administrador. 

   - Plataforma e virtualização: A máquina utiliza virtualização do tipo HVM (Hardware Virtual Machine), otimizada para o hardware da AWS. 
 

- Rede e Segurança

<img width="1041" height="447" alt="image" src="https://github.com/user-attachments/assets/2537a203-fd58-4205-ba77-ed0f5289d98d" />

A segurança da infraestrutura foi configurada através de Security Groups, atuando como um Firewall virtual: 

  - Protocolo RDP (porta 3389): Liberado para permitir a administração remota do servidor via desktop remoto. 

  - Protocolo HTTP (porta 80): Configurado para permitir tráfego web, caso o servidor venha a hospedar um site ou api. 

  - Regras de saída: Configuradas como "permitir tudo" (0.0.0.0/0), assegurando que o servidor possa realizar chamadas externas e atualizações de sistema. 
 

- Armazenamento de dados 

<img width="992" height="349" alt="image" src="https://github.com/user-attachments/assets/93abe55f-f26b-4396-acbc-63247e470d94" />

Detalhamento do volume de persistência de dados: 

- Tipo de volume: EBS (Elastic Block Store), que oferece alta disponibilidade para o sistema operacional. 

- Capacidade: Provisionado um volume de 30 gib, tamanho ideal para a instalação do Windows Server e ferramentas de suporte. 

- Status do volume: Identificado como em uso e corretamente associado ao dispositivo raiz /dev/sda1. 
 

- Integridade do sistema 

<img width="948" height="169" alt="image" src="https://github.com/user-attachments/assets/78fbeb9c-97e9-4823-b7b6-be042571ba60" />

Para garantir a confiabilidade do ambiente, foram validados os Status Checks da AWS: 

 

Verificação do sistema: Aprovada, confirmando que a infraestrutura física e a rede da AWS onde a instância reside estão operacionais. 

Verificação da instância: Aprovada, o que atesta que o sistema operacional Windows inicializou corretamente e está respondendo às requisições de rede. 
 

5.3 Configuração do Active Directory 

Foram criadas as UOs " belohorizonte", " betim", " contagem" e as respectivas UOs de usuários e computadores.  

- Configuração das políticas de grupo (Painel de Controle) 
 
<img width="983" height="602" alt="image" src="https://github.com/user-attachments/assets/5d0321d4-3292-4df4-afb6-6fb193e8f21e" />

Nas opções de configurações do painel de controle foram habilitadas as políticas de desativar ícone do volume do som e proibição do acesso ao painel de controle, enquanto nas configurações de inicialização foi habilitada a opção de pular a tela de login e ir direto para área de trabalho. 

**Link do vídeo demonstrando acesso a instância na nuvem e configuração das políticas de grupo:**
https://sgapucminasbr.sharepoint.com/sites/team_sga_2414_2026_1_7378103/_layouts/15/guestaccess.aspx?share=IQAd_AV7sunJSqUklcSMRUPXAdaesFj7-mITWTInvnwrUFQ&e=8ukwVy

