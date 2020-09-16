FROM openjdk:8-jdk-alpine

COPY build/libs/trade-service-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 3001

ENTRYPOINT ["java", "-jar", "/app.jar"]
