FROM node

RUN adduser --home /home/appuser --disabled-password appuser
USER appuser

WORKDIR /home/appuser/app
COPY . .

RUN npm install

CMD npm start
