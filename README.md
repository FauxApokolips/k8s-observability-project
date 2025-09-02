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

## Kubernetes Observability Project 🚀

Deploy a **Node.js web <img width="1919" height="1199" alt="image" src="https://github.com/user-attachments/assets/3c1b0da1-4222-49e5-be7c-5858cdba1795" />
application** on **Kubernetes** with full **observability** using **Prometheus** and **Grafana**.  
This project demonstrates containerization, orchestration, monitoring, and visualization in a DevOps workflow.

---

## 📌 Features
- Containerized Node.js app with `/` and `/metrics` endpoints
- Deployment on **Kubernetes (Minikube)**
- **Ingress** for external access with nip.io host
- **Prometheus** scraping system and app-level metrics
- **Grafana dashboards** for visualization
- Load testing with BusyBox to generate traffic
- Clean folder structure for easy reproducibility

---

## 🛠 Tech Stack
- **Node.js / Express** – application & metrics endpoint  
- **Docker** – containerization  
- **Kubernetes (Minikube)** – orchestration  
- **NGINX Ingress Controller** – routing  
- **Prometheus** – monitoring & metrics scraping  
- **Grafana** – dashboards & visualization  

---

## 📂 Project Structure
k8s-observability-project/
├── app/ # Node.js application & Dockerfile
├── k8s/ # Kubernetes manifests (Deployment, Service, Ingress)
├── monitoring/ # ServiceMonitor & monitoring configs
├── screenshots/ # Grafana dashboards, Prometheus targets, etc.
└── README.md # Project documentation



---

## 🚀 Setup & Deployment

### 1. Start Minikube
```bash
minikube start --cpus=4 --memory=6144
minikube addons enable ingress

# Point Docker to Minikube daemon
minikube -p minikube docker-env --shell powershell | Invoke-Expression

# Build the app image
docker build -t docker.io/<your-username>/devops-k8s-app:v1 ./app

# Apply Kubernetes manifests
kubectl apply -f k8s/

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm install kube-prometheus-stack prometheus-community/kube-prometheus-stack \
  --namespace monitoring --create-namespace

kubectl apply -f monitoring/web-servicemonitor.yaml

# Grafana
kubectl -n monitoring port-forward svc/kube-prometheus-stack-grafana 3030:80
# open http://127.0.0.1:3030 (user: admin / pass: from secret)

# Prometheus
kubectl -n monitoring port-forward svc/kube-prometheus-stack-prometheus 9090:9090
# open http://127.0.0.1:9090
