TAG=$1
docker pull pfxuresources/img-admin:"$TAG"
containerId=`docker ps | grep img-admin-serivce | awk '{print $1}'`
if [ -n "$containerId" ]
    then
      docker stop "$containerId"
      docker rm "$containerId"
fi

docker rmi `docker images | grep none | awk '{print $3}'`

docker run -it -d -p 9528:80 \
        --name img-admin-serivce \
        pfxuresources/img-admin:"$TAG"


