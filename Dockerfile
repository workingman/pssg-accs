FROM node:latest
COPY super_complex_app.js /root
WORKDIR /root
CMD ["node", "super_complex_app.js"]
