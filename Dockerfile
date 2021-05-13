FROM mhart/alpine-node
WORKDIR /usr/temp/calculator
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]