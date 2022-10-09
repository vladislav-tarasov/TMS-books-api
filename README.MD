##### Запуск проекта

`npm start`

***

##### api

***

`GET` `http://localhost:8080/api/authors`

```js
fetch("http://localhost:8080/api/authors")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

***

`GET` `http://localhost:8080/api/books`

```js
fetch("http://localhost:8080/api/books")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```