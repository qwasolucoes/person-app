FROM openjdk:11-jre-slim

WORKDIR /app

COPY target/person-api.jar /app
COPY *.sh /app/

RUN chmod +x /app/*.sh

CMD ["-jar", "person-api.jar"]
ENTRYPOINT ["java"]