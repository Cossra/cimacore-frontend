# 🌦️ ClimaCore Frontend  

[![Deployed to Azure](https://img.shields.io/badge/Deployed%20to-Azure-blue?logo=microsoftazure&logoColor=white)](https://portal.azure.com)
[![Frontend Live](https://img.shields.io/website?url=https%3A%2F%2Fclimacore.cossrobert.com&label=Frontend)](https://climacore.cossrobert.com)
[![Backend API](https://img.shields.io/website?url=https%3A%2F%2Fclimacoreapi.azurewebsites.net%2Fweatherforecast&label=Backend%20API)](https://climacoreapi.azurewebsites.net/weatherforecast)

A cloud-native **React + TypeScript** frontend built with **Vite**, deployed via automated CI/CD pipelines using GitHub Actions and the Azure CLI, featuring a custom domain, environment-based API routing, and modern UI integration.

🌐 **Live Demo:** [https://climacore.cossrobert.com](https://climacore.cossrobert.com)  
🧩 **Backend API:** [https://climacoreapi.azurewebsites.net/weatherforecast](https://climacoreapi.azurewebsites.net/weatherforecast)

---

## 🧰 Overview  
Built with **Vite + React 18** and hosted on **Azure Static Web Apps**, this frontend consumes live weather data from the ClimaCore backend API (`https://climacoreapi.azurewebsites.net/weatherforecast`).  
It demonstrates a modern, modular architecture featuring client-side routing, async data fetching, and full Azure integration.

Deployed directly via the **Azure Static Web Apps CLI**, the app connects securely to the .NET API through configured environment variables for `VITE_API_BASE_URL`, ensuring smooth local and production operation.

---

## 🧩 Agile User Story  
**As a user**  
I want to view real-time weather data from a simple, modern interface.  
**So that** I can quickly check conditions at a glance from any device.

---

## 👨‍💻 Local Development  

```bash
# Install dependencies
npm install

# Run locally with hot reload
npm run dev

# Build production bundle
npm run build


To connect to a local backend, create a `.env` file and add:  
VITE_API_BASE_URL=http://localhost:5000  

⚙️ **Tech Stack**  
React 18  
TypeScript  
Vite  
Tailwind CSS  
Azure Static Web Apps  
Azure CLI  
GitHub Actions  
Custom Domain: `climacore.cossrobert.com`  
Backend API: `https://climacoreapi.azurewebsites.net/weatherforecast`  

💻 **Happy Coding!**
