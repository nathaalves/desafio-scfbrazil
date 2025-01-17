# Desafio SCF Brazil

## Como executar o projeto em ambiente local?

Clone este repositório executando o seguinte comando:

```bash
git clone https://github.com/nathaalves/desafio-scfbrazil.git
```

Na raiz do projeto execute o seguinte comando:

```bash
npm run dev
```

O projeto ficará disponível na porta 3000 da sua máquina local.

## Rotas

1. GET `/users` (retorna todos os usuários)

2. GET `/user?name={userName}` (retorna o usuário especificado)

3. POST /user (cria um usuário)

   Enviando um `body` do tipo:

   ```typescript
   {
     name: string;
     job: string;
   }
   ```

4. PUT `/user?id={userId}` (atualiza um usuário específico)

   Enviando um `body` do tipo:

   ```typescript
   {
     name: string;
     job: string;
   }
   ```

   Adicione ao `header` da requisição um `Authorization` do tipo `Bearer` com a seguinte chave:

   ```bash
   access-token
   ```

5. DELETE `/user?name={userName}` (deleta um usuário específico)

   Adicione ao `header` da requisição um `Authorization` do tipo `Bearer` com a seguinte chave:

   ```bash
   access-token
   ```

6. GET `/user/access?name={userName}` (retorna a quantidade de vezes que o usuário foi lido)
