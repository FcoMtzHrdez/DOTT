FROM node

WORKDIR /app

COPY package.json /app

RUN while true; do npm install && break; done

COPY . .

CMD ["npm", "start"]
# docker build -t devops-api-node .
# docker run -ti -p 8000:8000 devops-api-node
