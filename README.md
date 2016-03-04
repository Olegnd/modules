##Создание проекта##
1. Сделать в GitHub действие "Fork" для этого проекта, чтобы скопировать проект в свою чётную запись.
2. Установить в систему Git с сайта https://git-scm.com/downloads (если уже не сделано).
3. Установить в систему любой GUI для работы с Git (если уже не сделано). Например https://desktop.github.com/ или https://tortoisegit.org/. Многие редакторы кода имеют плагин или всроенную поддержку Git.
4. *Склонируйте* проект по адресу из **своего аккаунта** локально в файловую систему. 

##Установка##
Начальная установка и настройка проект предпологает несколько шагов, которые должны быть проделаны единожды в начале.
1. Установить NodeJS с сайт http://nodejs.org. Установите последнюю версию.
2. Запустите **/tasks/setup.bat** для автоматической установки всех модулей из открытых репозиториев. Это внешние зависимости необходимые для работы инфраструктуры разработки проект.

Следующие действия можно выполнять каждый раз, когда вы приступаете к работе с проектом.

##Разработка##
Исходный код проекта находится в папке **/src/**. Точкой входа является файл **/src/index.js**. В нём можно подключить всё остальные модули с помощью импорта. 
Можно писать лишний код во время разработки для удобства проверки работоспособности своих функций. Такой код будет игнорироваться и пропускаться авто-тестами. Во внимание будет браться только код необходимый для выполнения задания. Не советуется использовать такие функции как `alert()` или `document.write()` для вывода сообщений, т.к. это может нарушить корректную работу тестов. Для вывода сообщений предлагается использовать метода объекта `console`.

##Запуск##
Текущая реализация инфраструктуры в режим разработки предпологает запуск на сервере по протоколу HTTP. Это необходимо для динамеческой загрузки модулей посредсвом AJAX. При желании можно запустить приложение и с файловой системы, но для это нужно проделать несколько подготовительных шагов. Запуск с файловой системы файла **/src/index.html** возможен при отключении некоторых политик безопасности браузера. 

В Windows для простоты можно использовать заранее заготовленный ярлык для Chrome. Для этого закройте браузер Chrome, если он уже открыт, и запустите **/run_insecure_chrome**. Это запустит браузер с отключённое безопасностью. Запустите **/src/index.html** внутри этого браузера.

Так же присутствует вариант запуска собранной версии проекта. О процессе сборки есть инструкция в этом документе ниже. Собранная версия не имеет ограничений в запуске и может стартовать в любых условиях и в любом браузере. Но надо учесть, что при изменениях исходного кода процесс сборки нужно заново перезапускать.

##Живая перезагрузка##
Чтобы активировать автоматическую перезагрузку HTML-страниц проекта или тестов, запустите файл **/tasks/livereload.bat**. После этого нужно запустить или обновить главную страницу проекта либо тестов. Не закрывайте запущенную командную строку до тех пор, пока не нужно прекратить действие живой перезагрузки. 
Такая возможность встроена во многие редакторы кода, но данная инфраструктура позволяет сделать живую перезагрузку не зависимо от этого.

##Статический анализ код##
Статический анализатор кода возможно запустить через интерфейс командной строки. Для этого запустите **/tasks/code.bat**. Анализатор JSHint проверит все файлы .js в исходном коде и покажет отчёт об ошибках.

JSHint можно установить в качестве расширения для большинства редакторов кода. Т.о. сразу можно увидеть свои ошибки ещё на этапе написания кода.

##Тесты##
Тесты запускают JavaScript код проекта и проверяют на соответствие требованиям и спецификациям. В код будут переданы тестовае входящие данны, а результат выполнения будет проверен соответствие ожидаемому. Возможны 2 альтернативных способа запуска тестов: через браузер или через командную строку.

###Тесты в браузере###
Запустите в браузере **/test/index.html**. Тесты запустятся в текущем браузере и код будет проверен на работоспособность именно в нём. Вы увидете отчёт на странице браузера. При изменениях в коде проект странице следует обновлять вновь для запуска тестов с начала. Но это не обязательно делать, если включён **livereload**. Тогда страница будет перезагружаться автоматически при любом пересохранении исходного кода проекта.

###Тесты в командной строке###
Запустите файл **/tasks/test.bat**, чтобы увидеть отчёт по тестам. При изменениях в коде этот файл следует запускать вновь, чтобы увидеть новый статус.

##Сборка проекта##
Для того чтобы собрать все модули в один файл и скомпилировать минифицированную версию приложения можно запустить **/tasks/build.bat**. В корне проекта появится новая папка **/build/** внутри которой будет код, созданный из исходных файлов в папке **/src/**. Процесс сборки объеденяет многие файлы в один и применяет к коду оптимизации, уменьшающие его размер.