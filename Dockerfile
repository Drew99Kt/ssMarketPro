from httpd:latest

COPY ./dist/ /usr/local/apache2/htdocs/


expose 80