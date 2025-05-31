# Base
FROM node:18

# Create app dir
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port
EXPOSE 8000

# Run app
CMD ["npm", "run", "dev"]
