# kubernetes-simple-nodejs-example
Simple NodeJS application into Kubernetes Cluster

I will use [Minikube](https://github.com/kubernetes/minikube) to create a cluster

### Run your application

```
node server.js
```

You should be able to see "Hello World!" message at http://localhost:8080
Stop the running NodeJS server by pressing **Ctrl-C**

### Create a Docker container image

Because this tutorial uses Minikube, instead of pushing your Docker image to a registry, you can simply build the image using the same Docker host as the Minikube VM, so that the images are automatically present. To do so, make sure you are using the Minikube Docker daemon:

```
eval $(minikube docker-env)
```

Later, when you no longer wish to use the Minikube host, you can undo this change by running:

```
eval $(minikube docker-env -u)
```

Build your Docker image, using the Minikube Docker daemon:

```
docker build -t node-hello:v1 .
```

### Create a Deployment

```
kubectl run node-hello --image=node-hello:v1 --port=8080
```

### Create a Service

```
kubectl expose deployment node-hello --type=LoadBalancer
```

Access through the ```minikube service``` command.

```
minikube service node-hello
```

### Update your app

1. Edit your ```server.js```

2. Build a new version of your image:

```
docker build -t node-hello:v2 .
```

3. Update the image of your Deployment

```
kubectl set image deployment/node-hello node-hello=node-hello:v2
```

4. Run your app again to view the new message:

```
minikube service node-hello
```

### Clean up

```
kubectl delete service node-hello
kubectl delete deployment node-hello
```
