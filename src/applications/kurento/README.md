## Application based on kurento project ##

 Middleware server base done node.js.
 Protocol http2

## KMS vs openvidu docker variant : ##

 Public server : 159.89.8.40
                 https://maximumroulette.com

 Recording folder : "/var/applications/kurento-project/rec"

```
 sudo yum install -y nodejs OR
```

 nvm install :
```
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

  nvm install 10.0.0
```

 Cert :

 Install jada sdk :

```console
  sudo yum install java-1.8.0-openjdk
```

 Export certificate in p12 format (password will be asked)
 YOUR_CRT.crt and YOUR_KEY.key files may be YOUR_CRT.pem a


 Intro container bash:
```console
  docker exec -it 8c2ae608e6d9 bash
```
 Copy cert , create new image.

```console
  docker cp /var/applications/kurento-project/YOUR_KEYSTORE_NAME.jks 8c2ae608e6d9:/var/kurento/YOUR_KEYSTORE_NAME.jks

  docker commit 8c2ae608e6d9 kmscert
```

 In order to use your JKS, just give the proper value to the following OpenVidu Server properties on launch :

```console
  server.ssl.key-store=/PATH/TO/YOUR_KEYSTORE_NAME.jks
  server.ssl.key-store-password=value_provided_when_generating_jks
  server.ssl.key-alias=YOUR_KEYSTORE_ALIAS
```

 With TURN server :

```console
docker run -d --net="host" -e openvidu.secret=YOUR_SECRET -e openvidu.publicurl=https://IP:4443
        -e openvidu.cdr=true -e server.port=4443 -e KMS_STUN_IP=IP -e KMS_STUN_PORT=19302
        -eKMS_TURN_URL=myuser:mypass@IP:3478 --rm -v /var/run/docker.sock:/var/run/docker.sock
        -v /var/KMS/rec:/var/KMS/rec -e openvidu.recording=true -e MY_UID=$(id -u $USER)
        -e openvidu.recording.path=/var/KMS/rec -e openvidu.recording.public-access=true openvidu/openvidu-server-kms:latest

```

 Without TURN :

```console
  docker run -d --net="host" -e openvidu.secret=MAXIMUM -e openvidu.publicurl=https://maximumroulette.com:4443 -e openvidu.cdr=true -e server.port=4443 -e --rm -v /var/run/docker.sock:/var/run/docker.sock -v /var/applications/kurento-project/rec:/var/applications/kurento-project/rec -e openvidu.recording=true -e MY_UID=$(id -u $USER) -e openvidu.recording.path=/var/applications/kurento-project/rec -e openvidu.recording.public-access=true -e server.ssl.key-store=/var/kurento/YOUR_KEYSTORE_NAME.jks -e server.ssl.key-store-password= -e server.ssl.key-alias=YOUR_KEYSTORE_ALIAS openvidu/openvidu-server-kms:latest
```

 Run node for hosting client :

```console
  node server.js https://maximumroulette.com:4443 MAXIMUM
```
