# Sem MiMiMI

## Como rodar

Primeiro, para baixar o projeto:

```bash
git clone https://github.com/ntiemis/SemMiMiMi
```

Para rodar este projeto, precisamos ter três serviços diferentes rodando:

### Site (front-end)

É a pasta Site. Para poder ver ela, usamos o [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb).

Baixe o app e rode ele. Quando abrir, em "Choose folder", coloque a pasta Site. O site estará rodando na URL especificada pelo app.

### Mongo (banco de dados)

Usamos MongoDB como banco de dados. É possível subir ele instalando normalmente pelo [site](https://www.mongodb.com/download-center), mas um jeito mais fácil que encontramos foi subir ele com o Docker.

[Baixe o Docker para Windows](https://docs.docker.com/docker-for-windows/install/) e faça todos os passos indicados. Depois que estiver tudo certo e o docker rodando, use o seguinte comando:

```bash
docker run --name semmimimi -p 17017:27017 mongo
```

O docker baixará o MongoDB e estará rodando no seu terminal. Não feche seu terminal.

### Back (back-end)

O Back-end está na pasta Back. Para rodá-lo, certifique-se que você tem o Node instalado, entre na pasta e faça:

```bash
npm install
npm start
```

O back estará rodando, e se todos os três estiverem OK, o site estará funcionando normalmente.
