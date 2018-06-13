# kubernetes-simple-nodejs-example

### Docker

Docker build example
```bash
$ docker build -t jeanpsv/kubernetes-simple-nodejs-example:v1 .
```
Docker push example
```bash
$ docker push jeanpsv/kubernetes-simple-nodejs-example:v1
```

### Kubernetes

```bash
$ kubectl apply -f namespace.yml
$ kubectl apply -f secret.yml
$ kubectl apply -f deployment.yml
$ kubectl apply -f service.yml
$ kubectl apply -f hpa.yml
```

#### Kubernetes deployment
```bash
$ kubectl set image deployment/app-deployment application=jeanpsv/kubernetes-simple-nodejs-example:v2 -n example
```

### K6

```bash
$ docker pull loadimpact/k6
$ k6 run --out influxdb=http://localhost:8086/k6 script.js
$ docker run -i loadimpact/k6 run --out influxdb=http://localhost:8086/k6 - <script.js
```

#### K6 on Kubernetes
```bash
$ kubectl apply -f performance/kubernetes/config.yml
$ kubectl delete -f performance/kubernetes/job.yml (to stop test)
$ kubectl apply -f performance/kubernetes/job.yml
$ kubectl logs -f ${k6-performance-test-pod-name} -n example
```

#### InfluxDB + Grafana
allow external access to ports: 3000 and 8086
```bash
$ sudo apt-get update
$ sudo apt-get remove docker docker-engine docker.io
$ sudo apt-get install -y \
    git \
    vim \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common
$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
$ sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/debian \
    $(lsb_release -cs) \
    stable"
$ sudo apt-get update
$ sudo apt-get install -y docker-ce
$ sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
$ git clone https://github.com/loadimpact/k6.git
$ cd k6
$ docker-compose up -d
$ open localhost:3000
```
1. add [this](https://raw.githubusercontent.com/loadimpact/k6/master/samples/grafana_dashboard_influxdb.json) dashboard to grafana
2. set name to `k6` and configure influxdb connection (myinfluxdb)
