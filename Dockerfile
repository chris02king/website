# Step 1: Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Install a simple web server to serve the static files
RUN npm install -g serve

# Step 8: Set the command to run the web server and serve the built app
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose the port the app runs on
EXPOSE 3000