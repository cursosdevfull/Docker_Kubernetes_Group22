FROM ubuntu:24.04

RUN apt-get update

RUN apt-get install -y apache2

COPY ./www /var/www/html/

CMD ["apache2ctl", "-D", "FOREGROUND"]