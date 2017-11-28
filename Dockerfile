FROM node:latest
COPY . /root
WORKDIR /root
RUN npm install
#RUN grunt
#CMD ["node", "super_complex_app.js"]
