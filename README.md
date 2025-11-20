# 🍽️ Bocado Berlin - Spanish Tapas Restaurant Website

<div align="center">

![Bocado Berlin](https://img.shields.io/badge/Bocado-Berlin-feaa3f?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, responsive web application for Bocado Berlin - an authentic Spanish tapas restaurant**

[Live Demo](https://bocadoberlin.de/) • [Features](#-features) • [Installation](#-installation) • [Tech Stack](#-tech-stack)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Scripts](#-scripts)
- [Pages](#-pages)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 About

Bocado Berlin is a fully responsive, modern web application built for a Spanish tapas restaurant located in Berlin. The website provides an engaging user experience with features like online reservations, menu browsing, contact forms, and more. Built with React and Vite for optimal performance and developer experience.

### 🎯 Project Goals

- Create an immersive digital experience for restaurant visitors
- Enable seamless online table reservations
- Showcase authentic Spanish cuisine and atmosphere
- Provide easy access to contact information and location
- Ensure mobile-first, responsive design for all devices

---

## ✨ Features

### 🏠 Core Features

- **📱 Fully Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **🎨 Modern UI/UX** - Clean, intuitive interface with smooth animations
- **⚡ Lightning Fast** - Built with Vite for optimal performance
- **🌐 SEO Optimized** - Meta tags and helmet integration for better search visibility
- **♿ Accessible** - WCAG compliant with semantic HTML

### 🍴 Restaurant Features

- **📅 Online Reservations** - Interactive booking system with date/time pickers
- **📋 Digital Menu** - Browse tapas and specialties with detailed descriptions
- **📧 Contact Forms** - Email integration with EmailJS for customer inquiries
- **📍 Location Info** - Embedded maps and contact details
- **🎉 Grand Opening Marquee** - Eye-catching announcements
- **⏰ Business Hours** - Clear display of opening times

### 🛠️ Technical Features

- **React Router** - Client-side routing for seamless navigation
- **React Datepicker** - Intuitive date and time selection
- **React Hot Toast** - Beautiful toast notifications
- **React Icons** - Comprehensive icon library
- **Swiper** - Touch-enabled sliders for image galleries
- **React PDF** - Menu PDF viewing capabilities
- **Email Integration** - Automated emails for reservations and inquiries

---

## 🚀 Tech Stack

### Frontend Framework

- **React 19.2.0** - Latest React for building UI components
- **React DOM 19.2.0** - DOM-specific methods
- **React Router 7.9.6** - Declarative routing

### Build Tools

- **Vite 7.2.2** - Next-generation frontend tooling
- **@vitejs/plugin-react 5.1.0** - Official React plugin for Vite

### Styling

- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **DaisyUI 5.5.3** - Tailwind CSS component library
- **@tailwindcss/vite 4.1.17** - Vite plugin for Tailwind

### Libraries & Tools

- **@emailjs/browser 4.4.1** - Email service integration
- **React Datepicker 8.9.0** - Date and time picker
- **React Hot Toast 2.6.0** - Notification system
- **React Icons 5.5.0** - Icon library
- **React Helmet Async 2.0.5** - Document head manager
- **React Fast Marquee 1.6.5** - Marquee component
- **Swiper 12.0.3** - Modern slider
- **React PDF 10.2.0** - PDF viewer
- **Axios 1.13.2** - HTTP client

### Code Quality

- **ESLint 9.39.1** - JavaScript linting
- **eslint-plugin-react-hooks** - React Hooks linting rules
- **eslint-plugin-react-refresh** - React Fast Refresh support

---

## 📦 Installation

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Step-by-Step Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/SarwarMorshad/bocado-berlin.git
   cd bocado-berlin
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_CUSTOMER=your_customer_template_id
   VITE_EMAILJS_TEMPLATE_RESTAURANT=your_restaurant_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

---

## 🎮 Usage

### Development Mode

Run the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Create an optimized production build:

```bash
npm run build
```

Build files will be output to the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

---

## 📁 Project Structure

```
bocado-berlin/
├── public/
│   └── _redirects              # Netlify redirects configuration
├── src/
│   ├── assets/                 # Images, fonts, and static files
│   ├── components/             # Reusable React components
│   │   ├── BocadoLoader.jsx   # Loading spinner component
│   │   ├── Footer.jsx         # Footer component
│   │   ├── GrandOpeningMarquee.jsx  # Announcement marquee
│   │   ├── Hero.jsx           # Hero section component
│   │   └── Navbar.jsx         # Navigation bar
│   ├── context/               # React Context providers
│   ├── hooks/                 # Custom React hooks
│   ├── layouts/               # Layout components
│   │   └── MainLayout.jsx     # Main page layout wrapper
│   ├── pages/                 # Page components
│   │   ├── About.jsx          # About page
│   │   ├── Contact.jsx        # Contact page
│   │   ├── ErrorPage.jsx      # 404 error page
│   │   ├── Home.jsx           # Home page
│   │   ├── Menu.jsx           # Menu page
│   │   └── Reservation.jsx    # Reservation page
│   ├── provider/              # Provider components
│   ├── Routes/                # Routing configuration
│   │   └── Router.jsx         # Main router setup
│   ├── App.css                # Global application styles
│   ├── App.jsx                # Root application component
│   ├── index.css              # Global CSS and Tailwind imports
│   └── main.jsx               # Application entry point
├── .gitignore                 # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Project dependencies
├── README.md                  # Project documentation
└── vite.config.js             # Vite configuration
```

---

## 🌍 Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable                           | Description                                    | Required |
| ---------------------------------- | ---------------------------------------------- | -------- |
| `VITE_EMAILJS_SERVICE_ID`          | EmailJS service identifier                     | ✅ Yes   |
| `VITE_EMAILJS_TEMPLATE_CUSTOMER`   | Template ID for customer confirmation emails   | ✅ Yes   |
| `VITE_EMAILJS_TEMPLATE_RESTAURANT` | Template ID for restaurant notification emails | ✅ Yes   |
| `VITE_EMAILJS_PUBLIC_KEY`          | EmailJS public API key                         | ✅ Yes   |

### Setting up EmailJS

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create email templates for customer and restaurant notifications
4. Copy your service ID, template IDs, and public key to `.env`

---

## 📜 Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint to check code quality  |

---

## 📄 Pages

### 🏠 Home (`/`)

Landing page with hero section, featured dishes, and call-to-action buttons.

### 📖 About (`/about`)

Information about Bocado Berlin, its story, cuisine, and team.

### 🍽️ Menu (`/menu`)

Digital menu showcasing Spanish tapas and specialties with descriptions and prices.

### 📅 Reservation (`/reservation`)

Interactive reservation form with:

- Date picker for selecting reservation date
- Time picker for selecting preferred time
- Guest count selector (1-30+ guests)
- Special requests textarea
- Dual email notifications (customer + restaurant)

### 📞 Contact (`/contact`)

Contact information, location map, and inquiry form.

### ❌ Error Page (`/404`)

Custom 404 page for handling invalid routes.

---

## 🎨 Design System

### Color Palette

- **Primary**: `#134e4a` (Teal/Green - Main brand color)
- **Accent**: `#feaa3f` (Orange - Call-to-action and highlights)
- **Secondary**: `#fbbf24` (Yellow - Hover states)
- **Background**: Gradient variations of primary color

### Typography

- Modern, clean sans-serif fonts
- Responsive font sizes using Tailwind's responsive utilities
- Clear hierarchy with bold headings

### Components

- Glass morphism effects with `backdrop-blur`
- Smooth transitions and hover effects
- Consistent spacing using Tailwind's spacing scale
- Rounded corners for modern feel

---

## 🔧 Configuration Files

### `vite.config.js`

Vite build configuration with React plugin.

### `eslint.config.js`

ESLint rules for maintaining code quality.

### `tailwind.config.js` (via @tailwindcss/vite)

Tailwind CSS configuration and customization.

---

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Add environment variables in Netlify dashboard
4. Deploy!

The `_redirects` file in `/public` handles SPA routing on Netlify.

### Alternative Platforms

- **Vercel**: Zero-config deployment for Vite apps
- **GitHub Pages**: Free static hosting
- **Firebase Hosting**: Google's hosting solution

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Run `npm run lint` before committing
- Write meaningful commit messages
- Update documentation as needed

---

## 📝 License

This project is proprietary software for Bocado Berlin restaurant.

---

## 👥 Contact

**Bocado Berlin**

- 📞 Phone: +49 30 47036642
- 📧 Email: info@bocado-berlin.de
- 🌐 Website: [bocado-berlin.com](#)
- 📍 Location: Berlin, Germany

**Developer**

- 👨‍💻 GitHub: [@SarwarMorshad](https://github.com/SarwarMorshad)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- Tailwind CSS for the utility-first approach
- EmailJS for seamless email integration
- All open-source contributors

---

<div align="center">

**Made with ❤️ for Bocado Berlin**

⭐ Star this repo if you find it useful!

</div>
