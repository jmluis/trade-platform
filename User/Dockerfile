FROM openjdk:8-jdk-alpine

COPY build/libs/user-service-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 3002

ENTRYPOINT ["java", "-jar", "/app.jar"]
