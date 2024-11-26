## [https://opentibet.ru](https://opentibet.ru)

## есть 2 варианта, как делать изменения

1. Открыть [https://jubilant-spoon-g4rprq9w95xhp9rr.github.dev/](https://jubilant-spoon-g4rprq9w95xhp9rr.github.dev/) в браузере и редактировать файлы в веб-интерфейсе, после чего закоммитить изменения в репозиторий, после чего они автоматически раскидаются на 

2. Склонировать репозиторий к себе на компьютер и редактировать файлы в любом текстовом редакторе
поставить [NodeJS](https://nodejs.org/en), в папке с проектом написать

1. `npm install` для установки зависимостей
2. `npm run dev` для запуска локального сервера
3. открыть в браузере [http://localhost:3000](http://localhost:3000)
4. изменения в коде будут автоматически сразу отображаться в браузере

## Как добавить новую программу

1. Создать файл в папке `/app/tours/[название_тура]/page.tsx`
2. Скопировать туда всё из файла `/app/tours/tibet-isoki/page.tsx`
3. После этого нужно скопировать [шаблон](https://github.com/fletcherist/opentibet/blob/490731efa13ce75c6430c5e872628560b8a9f2bf/components/ToursTimetable.tsx#L188) экслюзивного тура на июнь и поменять в нём тексты и картинки
4. `[название_тура]` соответствует названию тура в ссылке, например, если ссылка на тур `https://opentibet.ru/tours/tibet-isoki`, то `[название_тура]` будет `tibet-isoki`
5. После того, как страница готова, можно добавить на неё ссылку в эксклюзивных программах в файле `/app/page.tsx` [в этом месте](https://github.com/fletcherist/opentibet/blob/490731efa13ce75c6430c5e872628560b8a9f2bf/app/page.tsx#L1498)
6. После того, как вы закоммитите изменения, они автоматически появятся на сайте
-
7. Изменения