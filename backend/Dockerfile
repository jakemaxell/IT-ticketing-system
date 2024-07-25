FROM tomcat:latest

RUN mv /usr/local/tomcat/webapps.dist/* /usr/local/tomcat/webapps/

RUN apt-get update && \
    apt-get install -y nano && \
    apt-get clean

ADD target/TICKETS.war /usr/local/tomcat/webapps/
ADD docker-files/context.xml /usr/local/tomcat/webapps/manager/META-INF/
ADD docker-files/tomcat-users.xml /usr/local/tomcat/conf/
ADD docker-files/logging.properties /usr/local/tomcat/conf/

EXPOSE 8080

CMD ["catalina.sh", "run"]
