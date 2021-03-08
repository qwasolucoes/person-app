#/bin/bash
CUR_DIR=$(pwd)
cd person-api
./mvnw install -DskipTests
cd $CUR_DIR
docker-compose build && docker-compose up -d