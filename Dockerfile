FROM node:20-slim

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install --silent

# Копирование остального исходного кода
COPY . .

# Открытие порта
EXPOSE 5173

# Запуск React-приложения
CMD ["npm", "start"]
