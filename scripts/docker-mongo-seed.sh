#!/bin/bash

# Dumps binary data to the development mongodb container using mongorestore
# This script expects binary data present in the "/data/dump" directory
# The mongodb service should be up and running as well via docker-compose.dev.yml
# see the docker-compose.dev.yml, .env.example files for reference

cd ..

if [[ "$OSTYPE" == "msys" ]]; then
  # Windows OS from Git Bash
  winpty docker exec -it mongodb mongorestore --host mongo:27017 -d todo-next -u admin -p secret --authenticationDatabase admin ./data/dump
else
  docker exec -it mongodb mongorestore --host mongo:27017 -d todo-next -u admin -p secret --authenticationDatabase admin ./data/dump
fi
