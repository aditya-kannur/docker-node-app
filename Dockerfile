# Step 1: Base image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy and install dependencies
COPY package.json .
RUN npm install

# Step 4: Copy app source
COPY . .

# Step 5: Expose port
EXPOSE 3000

# Step 6: Start app
CMD ["npm", "start"]
