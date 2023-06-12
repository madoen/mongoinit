# Use the official MongoDB Docker image
FROM mongo:4.4

# Add your initialization script
ADD init-replica.js /init-replica.js

CMD ["mongo", "--host", "mongo1:27017", "--eval", "load('/init-replica.js')"]
