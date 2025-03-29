FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Копируем только файлы проекта сначала
COPY *.csproj .
RUN dotnet restore

# Затем копируем всё остальное
COPY . .
RUN dotnet publish -c Release -o /app/publish

# Этап выполнения (runtime stage): используем .NET Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Копируем опубликованные файлы из предыдущего этапа
COPY --from=build /app/publish .

# Открываем порт 3000
EXPOSE 3000

# Настраиваем прослушивание на порту 3000 для ASP.NET Core
ENV ASPNETCORE_URLS=http://+:3000

# Запуск приложения
ENTRYPOINT ["dotnet", "Rec_backend.dll"]