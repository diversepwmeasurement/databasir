FROM gradle:7.3-jdk11 as build
WORKDIR /app
ADD . /app
RUN gradle api:build

FROM openjdk:11.0.13-jre
ARG service_name_folder
WORKDIR /app
ADD databasir.jar /app
EXPOSE 8080

#-Ddatabasir.datasource.username=${databasir.datasource.username}
#-Ddatabasir.datasource.password=${databasir.datasource.password}
#-Ddatabasir.datasource.url=${databasir.datasource.url}
ENTRYPOINT ["sh", "-c","java ${JAVA_OPTS} -jar /app/databasir.jar"]