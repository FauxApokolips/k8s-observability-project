# devops-k8s-app (Docker Hub variant)

Containerized web app with GitHub Actions CI/CD to Kubernetes, configured for **Docker Hub**.

## Prerequisites
- Docker, kubectl, Git, GitHub account
- Kubernetes cluster (Minikube/kind or cloud: GKE/AKS/EKS)
- Docker Hub account (repo: `fauxapokolips/devops-k8s-app`)

## GitHub Secrets
- `DOCKERHUB_USERNAME` = **fauxapokolips**
- `DOCKERHUB_TOKEN` = Docker Hub access token
- `KUBECONFIG_DATA` = base64 of kubeconfig file

## Quick Start (Minikube)
```bash
minikube start
minikube addons enable ingress
docker build -t docker.io/fauxapokolips/devops-k8s-app:latest ./app
kubectl apply -f k8s/
