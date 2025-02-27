#!/bin/bash
DOCKER_BUILD_FILE_NAME="Dockerfile.rui-guide"
CONTAINER_INNER_PORT=80
CONTAINER_INTERNAL_PORT="$CONTAINER_INNER_PORT/tcp"
DOCKER_IMAGE_NAME="hw-rui-image"
DOCKER_CONTAINER_NAME="hw-rui-container"
DOCKER_BLUE_CONTAINER_NAME=$DOCKER_CONTAINER_NAME-blue

echo "[#] Green Container build..."
docker build -t $DOCKER_IMAGE_NAME -f ./$DOCKER_BUILD_FILE_NAME --no-cache . || echo "::: (!) build failed."
docker rename $DOCKER_CONTAINER_NAME $DOCKER_BLUE_CONTAINER_NAME || echo "::: Blue container is not running"
docker run -it -d --name $DOCKER_CONTAINER_NAME $DOCKER_IMAGE_NAME || echo "::: (!) run failed."

echo "[#] Green Container is running"
docker ps --filter "name=$DOCKER_CONTAINER_NAME"

if docker ps --filter "name=$DOCKER_BLUE_CONTAINER_NAME" --format "{{.Names}}" | grep -wq "$DOCKER_BLUE_CONTAINER_NAME"; then
    export IS_RUNNING_BLUE="true"
else
    export IS_RUNNING_BLUE="false"
fi

if  [ $IS_RUNNING_BLUE = "true" ]; then
    echo "[#] Delete blue container"
    
    rm -f blue_container_status.log
    docker events --filter "container=$DOCKER_BLUE_CONTAINER_NAME" --format 'Status={{.Status}}' > blue_container_status.log &
    EVENT_PID=$!

    docker stop $DOCKER_BLUE_CONTAINER_NAME
    echo "::: Stop blue container..."
    
    while true; do
        if grep -q "stop" blue_container_status.log; then
            echo "::: blue container is stoped...!"
            docker rm -f $DOCKER_BLUE_CONTAINER_NAME
            break
        else 
            echo "::: kill...."
        fi
        sleep 1
    done
    kill $EVENT_PID 2>/dev/null
    rm -f blue_container_status.log
    echo "[#] Change nginx config file from blue to green."
fi

echo "[#] Finished"
docker ps --filter "name=$DOCKER_CONTAINER_NAME"

