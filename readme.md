# Ponto de Partida Dev

Bem-vindo ao **Ponto de Partida Dev**!  
Este projeto é uma plataforma gratuita para ajudar iniciantes a darem os primeiros passos no mundo da programação, com trilhas de aprendizado, conteúdos didáticos e uma experiência acolhedora.

---

## 🚀 Descrição do Projeto

O **Ponto de Partida Dev** foi criado para ser o primeiro contato de estudantes e autodidatas com a programação. O site oferece trilhas temáticas, conteúdos introdutórios, dicas práticas e um sistema simples de cadastro/login para personalização da experiência.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**  
- Estrutura modular de páginas estáticas  
- Sem frameworks ou bibliotecas externas

---

## 📦 Mudanças Recentes

### 🔄 Padronização e Melhoria da Navegação

- **Barra de navegação fixa e padronizada:**  
  Todas as páginas agora possuem a mesma barra de navegação fixa no topo, com links para todas as trilhas, login e cadastro. O visual e o comportamento são consistentes em todo o site.

- **Links mais amigáveis:**  
  Os textos dos links do menu foram suavizados para facilitar a navegação e compreensão.

- **Navegação fluida (SPA-like):**  
  Foi implementado um script JavaScript que permite trocar o conteúdo principal (`<main>`) das páginas sem recarregar toda a página, tornando a navegação mais rápida e suave. O endereço na barra do navegador é atualizado e o botão voltar/avançar funciona normalmente.

- **Responsividade e acessibilidade mantidas:**  
  O layout segue adaptado para desktop e mobile, com contraste adequado e navegação simples.

- **Exibição do perfil:**  
  O botão de perfil e logout só aparece após o login, mantendo a interface limpa para visitantes.

---

## 📁 Estrutura e Navegação

```
/
├── index.html                # Página inicial com trilhas e apresentação
├── FLM.html                  # Fundamentos Lógicos e Matemáticos
├── progwebmob.html           # Programação Web e Mobile
├── sistemas.html             # Infraestrutura e Sistemas
├── lingprogramação.html      # Linguagens de Programação
├── instalVscode.html         # Guia de instalação do VS Code e linguagens
├── funcionalidadejs.js       # Funcionalidades de login/cadastro/perfil e navegação fluida
├── assets/                   # Imagens e logos do projeto
└── README.md                 # Documentação do projeto
```

- **Navegação:**  
  O menu principal são as trilhas de aprendizado, cada uma levando para uma página temática.  
  O cabeçalho de todas as páginas traz botões de **Login**, **Cadastro** e, após login, um menu de **Perfil**.

---

## ✨ Funcionalidades Implementadas

- **Cadastro de Usuário:**  
  Modal para criar nova conta com validação de campos.

- **Login de Usuário:**  
  Modal para autenticação simples (simulada no front-end).

- **Perfil do Usuário:**  
  Após login, exibe botão de perfil no topo direito com dropdown para logout.

- **Trilhas Temáticas:**  
  Links para páginas de Fundamentos, Web/Mobile, Infraestrutura e Linguagens.

- **Navegação fluida:**  
  Troca de páginas sem recarregar todo o site, proporcionando experiência mais rápida e moderna.

- **Responsividade:**  
  Layout adaptado para desktop e mobile.

- **Acessibilidade:**  
  Botão de audiodescrição disponível em todas as páginas, facilitando o acesso para pessoas com deficiência visual.

---

## 🎨 Decisões de Design

- **Visual limpo e acolhedor:**  
  Uso de gradientes azuis, cantos arredondados e fontes legíveis para facilitar o acesso de iniciantes.

- **Experiência consistente:**  
  Todos os modais e botões seguem o mesmo padrão visual em todas as páginas.

- **Acessibilidade:**  
  Contraste adequado, navegação simples e recursos como audiodescrição.

- **Sem dependências externas:**  
  O projeto é 100% HTML, CSS e JS puro, facilitando o estudo e a customização.

---

## 📝 Instruções de Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/ponto-de-partida-dev.git
   cd ponto-de-partida-dev
   ```

2. **Abra o projeto no VS Code ou outro editor.**

3. **Execute localmente:**
   - Clique duas vezes em `index.html` ou abra com seu navegador preferido.
   - Navegue pelas trilhas e utilize os botões de cadastro/login no topo direito.

4. **Personalize:**
   - Assegure-se de manter o arquivo `funcionalidadejs.js` na raiz do projeto.
   - As imagens devem estar na pasta `assets/`.

---

## 📢 Observações

- O sistema de login/cadastro é apenas simulado no front-end (não há backend).
- Para uso real, seria necessário integrar com um serviço de autenticação.
- A navegação fluida depende de todas as páginas seguirem a mesma estrutura de `<main>`.

---

## 🌱 Implementações Futuras

- **Implementação de um banco de dados:**  
  Permitir o salvamento real de usuários cadastrados e logins, tornando o sistema persistente e seguro.

- **Uso de MediaPlayer:**  
  Adicionar suporte a vídeos e áudios interativos para enriquecer o ensino e facilitar o aprendizado do usuário.

- **Salvamento de progresso de aprendizado:**  
  Registrar o progresso do usuário em cada trilha, permitindo que ele continue de onde parou ao fazer login.

---

## 💡 Contribuição

Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests!

---

**Ponto de Partida Dev** – Todo programador tem uma história. Toda história começa com um primeiro passo. 🚀