Haven't put my K8 stuff in here yet.. coming soon

```
version: '3'

# Docker Compose breakes containers down to individual
# services. You provide each named service with a docker-image.
# Options: {
#   // Service Level
#   command: 'Optional, replace the default CMD specified by the image',
#   environment: 'Optional, same as -e in docker run'
#   volumes: 'Optional, same as -v in docker run'
#   // Services Level 
#   volumes: 'Optional, same as docker volume create' **creates persisted volumes that can be shared between containers**
#   networks: 'Optional, same as docker network create'
# }
services:
    proxy:
        image:
    web-app:
        image:
        voulumes:
            - .:/app
        ports:
            - '8081:8080'


```
