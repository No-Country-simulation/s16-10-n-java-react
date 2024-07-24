# Stage 1: Build the application
FROM maven:3.8.5-eclipse-temurin-17 AS build

# Stage 2: Run the application
#FROM eclipse-temurin:17-jre

# Copy the JAR file from the build stage
COPY /target/My-Route-0.0.1-SNAPSHOT.jar app.jar

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
