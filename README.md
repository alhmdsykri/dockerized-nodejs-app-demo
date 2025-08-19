# Dockerized Node.js App Demo 🚀

Project ini menunjukkan cara:
- Membuat aplikasi Node.js sederhana (Express)
- Containerize dengan Docker
- Menjalankan lokal dengan `docker-compose`
- (CI/CD) Build & push image ke **Docker Hub** via GitHub Actions

## ✨ Endpoints
- `/` → Hello message
- `/health` → Health check JSON

## 🧪 Jalankan Lokal (Docker Compose)
```bash
docker-compose up --build
# Buka http://localhost:3000
