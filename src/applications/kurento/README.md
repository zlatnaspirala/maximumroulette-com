## Application based on kurento project ##

Middleware server base done node.js.

## KMS vs openvidu docker variant : ##

 Public server : 159.89.8.40
                 https://maximumroulette.com

 Recording folder : "/var/applications/kurento-project/rec"

 Cert :

 Install jada sdk :

```console
  sudo yum install java-1.8.0-openjdk
```

 Export certificate in p12 format (password will be asked)
 YOUR_CRT.crt and YOUR_KEY.key files may be YOUR_CRT.pem and YOUR_KEY.pem files instead.

```console
  openssl pkcs12 -export -name YOUR_KEYSTORE_ALIAS -in /etc/httpd/conf/ssl/maximumroulette_com.crt -inkey /etc/httpd/conf/ssl/maximumroulette.com.key -out p12keystore.p12
```

 Generate jks (password will be asked again)
```console
  keytool -importkeystore -srckeystore p12keystore.p12 -srcstoretype pkcs12 -deststoretype pkcs12 -alias YOUR_KEYSTORE_ALIAS -destkeystore YOUR_KEYSTORE_NAME.jks
```


```console
  docker cp /var/applications/kurento-project/YOUR_KEYSTORE_NAME.jks 8c2ae608e6d9:/var/kurento/YOUR_KEYSTORE_NAME.jks

  docker commit 8c2ae608e6d9 kmscert
```

  docker exec -it <mycontainer> bash

 In order to use your JKS, just give the proper value to the following OpenVidu Server properties on launch:

```console
  server.ssl.key-store=/PATH/TO/YOUR_KEYSTORE_NAME.jks
  server.ssl.key-store-password=value_provided_when_generating_jks
  server.ssl.key-alias=YOUR_KEYSTORE_ALIAS
```


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

