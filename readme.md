
## Deploy VPS ##

 OS : cent 7.5

 public address : maximumroulette.com

 Install screen :

```console
  yum -y install screen

  sudo yum install -y yum-utils device-mapper-persistent-data lvm2

  sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

  sudo yum install docker-ce docker-ce-cli containerd.io
```

```
  sudo yum install mod24_ssl
```
