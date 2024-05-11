Файл server.js и server_status.js для тренировки включает в себя код, который создает сервер HTTP, который прослушивает порт 1337 и IP-адрес написанного вами компьютера. Когда сервер получает запрос, он проверяет, содержит ли путь запроса /echo и присутствует ли параметр запроса message. Если оба условия выполняются, сервер отправляет сообщение обратно клиенту. В противном случае сервер отправляет сообщение об ошибке. Для разбора как работать с node.js


server - простой сервер, который принимает запросы и возвращает сообщение, переданное в параметре запроса «message». Если параметр запроса «message» отсутствует, сервер возвращает сообщение об ошибке. (есть комментарии).

server_status - Простой сервер, который возвращает статус сервера и заголовки запроса. (есть комментарии)

Команды ля запуска:

- supervisor server.js - отсвлеживает изменения в файлах и перезапускает сервер
- node server.js - запускает сервер
- node debug server.js - запускает сервер в режиме отладки
