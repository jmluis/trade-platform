# Stock service

### Run
Build on the command line with gradle:

```./gradlew build```

This will put a jar in build/libs/stock-service-0.0.1-SNAPSHOT.jar

Run that jar with:

```java -jar build/libs/stock-service-0.0.1-SNAPSHOT.jar```

OR for example with DEBUG logging and on a different port (3009):

```java -DLOG_LEVEL=DEBUG -DSERVER_PORT=3009 -jar build/libs/stock-service-0.0.1-SNAPSHOT.jar```


OR just run in VSCode or any other IDE for development

### Docker
There is a Dockerfile included to run as a Docker container.

e.g. to build a container:

```docker build -t stock-service:0.0.1 .```

e.g. to run the built container with DEBUG logging:

```docker run --name stock-service -e LOG_LEVEL=DEBUG stock-service:0.0.1```

### Configuration
See the properties file in src/main/resources/application.properties for configurable properties.

Most properties can be overridden by environmental variables.

For Example:

```${DB_HOST:localhost}```
is saying that it'll connect to mongodb at localhost, unless there is an environmental variable called DB_HOST - in which case it'll use the value of that env variable instead

```${DB_NAME:tradedb}```
is saying it'll connect to a database called tradedb unless there is an environmental variable called DB_NAME - in which case it'll use the value of that env variable instead
