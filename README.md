#Установка, настройка, запуск и тестирование проекта

Выполните следующие шаги для начала работы с проектом:

1. Клонировать репозиторий с помощью команды `git clone https://github.com/artichokeee/lesson_3_1.git`
2. Установить jest с помощью команды ```npm install --save-dev jest```
3. Запустить тесты, используя команду `npx jest`

#Измерение тестового покрытия

- Тестовое покрытие можно измерить c помощью пакета, который можно установить командой `npm install --save-dev babel-plugin-istanbul`

- Запустить измерение покрытия можно командой `npx jest --coverage`

- На проекте измеряетя покрытие строк, ветвей, функций и операторов

#Виды тестового покрытия и их отличия

***Покрытие строк кода*** — процент строк кода, которые были выполнены тестами. Здесь важно обратить внимание на то, что не все строки кода необходимо тестировать, например, комментарии и пространства имён.

***Покрытие ветвей***  — процент ветвей кода (if, else, switch и т.д.), которые были выполнены тестами. Этот вид покрытия позволяет оценить тестирование разных сценариев выполнения кода.

***Покрытие функций***  — процент функций и методов, которые были выполнены тестами. Это позволяет оценить, насколько хорошо каждая функция или метод приложения был протестирован.

***Покрытие операторов*** - какая доля содержащихся в программе оператов была выполнена.