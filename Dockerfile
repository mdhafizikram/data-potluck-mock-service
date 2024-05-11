FROM node:20.12.2

# Install pnpm
RUN npm install -g pnpm@9.0.6

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm build

# Start the application
CMD [ "pnpm", "start" ]