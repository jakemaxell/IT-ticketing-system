FROM tomcat:latest

RUN apt-get update && \
    apt-get install -y nano && \
    apt-get clean

ADD target/ROOT.war /usr/local/tomcat/webapps/

EXPOSE 8080

CMD ["catalina.sh", "run"]
