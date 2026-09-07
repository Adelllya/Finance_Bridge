<div align="center">

# 💼 Finance Bridge

### Лендинг-кит · Гульшат Аджибаева — главный бухгалтер · Казахстан

<br/>

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19"/>
<img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 7"/>
<img src="https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS 4"/>
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5"/>

<br/>
<br/>

> **Упаковка лендинга частного главного бухгалтера:**  
> живой мобильный прототип, тексты по экранам и готовый промпт для нейросети.

<br/>

[🌐 Демо-сайт](https://finance-bridge.vercel.app/) · [📋 Структура](#-структура-проекта) · [🚀 Запуск](#-быстрый-старт)

</div>

---

## ✨ Возможности

| Фича | Описание |
|:------|:---------|
| 📱 **Мобильный прототип** | Полноценный лендинг с адаптивной вёрсткой — выглядит как готовый сайт на телефоне |
| 🎨 **3 варианта Hero** | Переключатель офферов первого экрана для выбора лучшего |
| 📝 **Тексты по экранам** | Все тексты структурированы и готовы к переносу |
| 🤖 **Промпт для нейросети** | Готовый промпт для генерации лендинга через AI |
| 💬 **WhatsApp интеграция** | Кнопки связи ведут прямо в мессенджер |
| ⚡ **Молниеносный** | Vite 7 + React 19 — мгновенная загрузка |

## 🖼️ Превью

Сайт включает два режима просмотра:

- **Лендинг** — живой прототип мобильного лендинга с Hero-секцией, услугами, тарифами, FAQ и контактами
- **Промпт и тексты** — все тексты и промпт для генерации лендинга через AI

## 📁 Структура проекта

```
Finance_Bridge/
├── 📄 index.html                # Точка входа
├── ⚙️ vite.config.ts            # Конфигурация Vite
├── 📦 package.json              # Зависимости
├── 🎯 tsconfig.json             # Конфигурация TypeScript
│
├── src/
│   ├── 🏠 App.tsx               # Корневой компонент + навигация
│   ├── 🎨 index.css             # Глобальные стили
│   ├── 📌 main.tsx              # Точка монтирования React
│   │
│   ├── components/
│   │   ├── 📱 Landing.tsx       # Лендинг-прототип (566 строк)
│   │   ├── 📝 PromptView.tsx    # Режим «Промпт и тексты»
│   │   └── 🧩 ui.tsx            # UI-компоненты (WaIcon, Badge, и др.)
│   │
│   ├── data/
│   │   └── 📊 content.ts        # Все данные: тексты, тарифы, FAQ, контакты
│   │
│   └── utils/
│       └── 🛠️ cn.ts             # Утилита classnames (clsx + tailwind-merge)
│
└── 📄 vercel.json               # Деплой на Vercel (авто)
```

## 🚀 Быстрый старт

### Предварительные требования

- [Node.js](https://nodejs.org/) ≥ 18
- npm

### Установка и запуск

```bash
# Клонируйте репозиторий
git clone https://github.com/Adelllya/Finance_Bridge.git
cd Finance_Bridge

# Установите зависимости
npm install

# Запустите dev-сервер
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

### Сборка для продакшена

```bash
npm run build
npm run preview
```

## 🛠️ Технологии

<table>
  <tr>
    <td align="center" width="120">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React"/>
      <br/><b>React 19</b>
    </td>
    <td align="center" width="120">
      <img src="https://vitejs.dev/logo.svg" width="48" height="48" alt="Vite"/>
      <br/><b>Vite 7</b>
    </td>
    <td align="center" width="120">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="48" height="48" alt="TailwindCSS"/>
      <br/><b>Tailwind 4</b>
    </td>
    <td align="center" width="120">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript"/>
      <br/><b>TypeScript 5</b>
    </td>
  </tr>
</table>

## 📄 Лицензия

Проект создан для личного использования. Все права защищены.

---

<div align="center">

**Сделано с ❤️ для бухгалтерского бизнеса**

<img src="https://img.shields.io/badge/status-ready-0BA360?style=flat-square" alt="Status"/>
<img src="https://img.shields.io/github/last-commit/Adelllya/Finance_Bridge?style=flat-square&color=0BA360" alt="Last commit"/>

</div>
