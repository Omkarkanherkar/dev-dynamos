# Use an official Node.js runtime as base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source code into the container
COPY . .

# Expose the port (match the one in server.js)
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
