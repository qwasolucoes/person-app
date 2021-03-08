@echo off
set "CUR_DIR=%cd%"
cd person-api
call .\mvnw clean package -DskipTests
cd %CUR_DIR%
docker-compose build
docker-compose up -d