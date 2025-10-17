# 🌙 Smart Home Control App (Dark Mode UI)

A **modern, minimalist Smart Home Control App** built using **React + Vite + Tailwind CSS (v4)**.  
This project demonstrates a sleek **dark mode dashboard** with intuitive controls for home automation — including **lighting**, **security**, and **conditioning** features — inspired by premium smart home UI/UX concepts.

---

## 🧠 Project Overview

The **Smart Home Control App** provides a centralized dashboard to monitor and control devices across rooms.  
Designed for flexibility, responsiveness, and elegance, this app is ideal for **UI/UX portfolios**, **frontend practice**, or **IoT prototype dashboards**.

### 🎯 Features

#### 🏠 Dashboard Screen
- Personalized greeting (e.g., “Hello, Martha!”)
- Room navigation tabs (Home, Bedroom, Living Room, etc.)
- Device control cards for:
  - **Conditioning**
  - **Security**
  - **Lighting**
- Prominent **Add Device** button
- Fixed bottom tab navigation bar (Home, Rooms, Scenarios, Account)

#### 💡 Lighting Control Screen
- Large circular **Color Picker Wheel**
- **Brightness Control Slider** with live percentage
- **Scheduling Section** to set ON/OFF times
- Smooth animations and glowing feedback for active states

#### 🛋️ Room Scenarios Screen
- Background image of the selected room
- **2x2 grid** of quick scenario cards (Movie Night, Morning, Reading, Lights Off)
- Highlighted **active scenario**
- Bottom **Quick Action Button** (e.g., “Turn on air conditioning”)

---

## 🛠️ Tech Stack

| Category | Tools |
|-----------|-------|
| **Framework** | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/docs) |
| **Icons** | [Lucide React](https://lucide.dev/icons) |
| **Package Manager** | npm |
| **Language** | JavaScript (ES6+) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/smart-home.git
cd smart-home
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
