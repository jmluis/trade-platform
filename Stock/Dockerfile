FROM openjdk:8-jdk-alpine

COPY build/libs/stock-service-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 3003

ENTRYPOINT ["java", "-jar", "/app.jar"]
