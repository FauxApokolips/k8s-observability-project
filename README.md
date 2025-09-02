# Kubernetes Monitoring with Prometheus & Grafana

🚀 **End-to-end Kubernetes Monitoring Stack** deployed on **Minikube** using Prometheus, Grafana, and Node Exporter.  
This project demonstrates deploying a Node.js app to Kubernetes, exposing metrics via `/metrics`, and visualizing cluster + app performance in Grafana.

---

## 📌 Features
- ✅ Node.js web application deployed on Kubernetes (Minikube)
- ✅ Metrics exposed at `/metrics` endpoint
- ✅ Prometheus setup to scrape application + cluster metrics
- ✅ Alertmanager integration with Prometheus rules
- ✅ Grafana dashboards for real-time visualization
- ✅ Local development using Minikube & Docker Desktop

---

## 🏗️ Architecture
```mermaid
graph TD
    A[Node.js App] -->|Expose /metrics| B[Prometheus]
    B -->|Alerts| C[Alertmanager]
    B -->|Data Source| D[Grafana]
    E[Minikube Cluster] --> A
    E --> B
    E --> C
    E --> D
```

---

## ⚙️ Tech Stack
- **Kubernetes (Minikube)**
- **Docker Desktop**
- **Prometheus** (metrics scraping)
- **Grafana** (visualization)
- **Alertmanager** (alert handling)
- **Node.js** (sample web app with metrics)

---

## 🚀 Setup & Deployment

### 1️⃣ Start Minikube
```bash
minikube start --driver=docker
```

### 2️⃣ Deploy the Node.js App
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### 3️⃣ Deploy Prometheus & Grafana (via kube-prometheus-stack)
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring --create-namespace
```

### 4️⃣ Access Services
- **Node.js app** → `127.0.0.1:<port>`  
- **Prometheus** → [http://127.0.0.1:9090](http://127.0.0.1:9090)  
- **Grafana** → [http://127.0.0.1:3000](http://127.0.0.1:3000) (default user: `admin`)  

---

## 📊 Screenshots

### 1. Node.js App Metrics
![Node.js Metrics](screenshots/Screenshot_1.png)
<img width="1919" height="1199" alt="Screenshot 2025-09-03 011623" src="https://github.com/user-attachments/assets/bcb4b800-db28-4044-9a53-268ba14e9bba" />

### 2. Prometheus Targets
![Prometheus Targets](screenshots/Screenshot_2.png)
<img width="1919" height="1075" alt="Screenshot 2025-09-03 002813" src="https://github.com/user-attachments/assets/eece39c8-2745-4b18-b9e6-4b12e39bb8ae" />

### 3. Prometheus Rules & Alerts
![Prometheus Alerts](screenshots/Screenshot_3.png)
<img width="1919" height="1054" alt="Screenshot 2025-09-03 011015" src="https://github.com/user-attachments/assets/847ee1e7-8417-4484-adca-6546a956cb42" />

### 4. Grafana Dashboard (Cluster Monitoring)
![Grafana Cluster Dashboard](screenshots/Screenshot_4.png)
<img width="1919" height="1199" alt="Screenshot 2025-09-03 011623" src="https://github.com/user-attachments/assets/4e40fc58-75cf-4c40-8d2d-9596b0f8c5f6" />

### 5. Grafana Dashboard (Node.js Metrics)
![Grafana App Dashboard](screenshots/Screenshot_5.png)
<img width="1919" height="1063" alt="Screenshot 2025-09-03 001539" src="https://github.com/user-attachments/assets/5825d09b-ec06-4533-b209-5b87ad125940" />

---

## 🔮 Future Enhancements
- Add **custom Grafana dashboards** for detailed app performance  
- Integrate **Slack/Email alerts** via Alertmanager  
- Deploy on **cloud Kubernetes (EKS/GKE/AKS)**  
- CI/CD integration for automated deployments  

---

## 📜 License
MIT License © 2025 Ekansh Pandey
