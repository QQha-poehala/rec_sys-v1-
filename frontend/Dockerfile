FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .
RUN npm run build

# Этап исполнения (runtime)
FROM node:18-alpine AS runtime
WORKDIR /app

# Устанавливаем глобально "serve" для раздачи статических файлов
RUN npm install -g serve

# Копируем собранное приложение из предыдущего этапа
COPY --from=build /app/build ./build
# Устанавливаем переменную окружения, чтобы сервер слушал на всех интерфейсах
ENV HOST=0.0.0.0

# Открываем порт 3001
EXPOSE 3001
# Запускаем сервер для статики на порту 3001
CMD ["serve", "-s", "build", "-l", "3001"]


