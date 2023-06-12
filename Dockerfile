# Use the official MongoDB Docker image
FROM mongo:4.4

# Add your initialization script
ADD init-replica.js /init-replica.js

CMD ["mongo", "--host", "containers-us-west-10.railway.app:6255", "--username", "mongo", "--password", "giA0CzmQ8PeF26jdquFO", "--eval", "load('/init-replica.js')"]
