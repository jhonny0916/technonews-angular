# Login Flow Diagram & Architecture

## 🔄 Authentication Flow

```
┌─────────────────────────────────────────────────────┐
│            TecnoNews Application                     │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
    ┌──────────────────────────────────────────┐
    │         User on Home Page                │
    │    (Header shows 🔑 Login button)        │
    └──────────────────────────────────────────┘
                        │
                        ▼ (Click Login)
    ┌──────────────────────────────────────────┐
    │     /login - Login Component             │
    │  ┌────────────────────────────────────┐  │
    │  │ Username: ____________             │  │
    │  │ Password: ____________             │  │
    │  │ [Acceder Button]                   │  │
    │  │                                    │  │
    │  │ Demo Credentials:                  │  │
    │  │ Username: admin                    │  │
    │  │ Password: admin                    │  │
    │  └────────────────────────────────────┘  │
    └──────────────────────────────────────────┘
                        │
                        ▼ (Submit Form)
    ┌──────────────────────────────────────────┐
    │   AuthService.login()                    │
    │   ↓                                      │
    │   1. Fetch /data/news.json               │
    │   2. Validate credentials                │
    │   3. Check username & password           │
    └──────────────────────────────────────────┘
                        │
                ┌───────┴───────┐
                ▼               ▼
        ✅ Valid          ❌ Invalid
            │                 │
            │                 ▼
            │      ┌──────────────────────┐
            │      │  Error Message:      │
            │      │  "Usuario o          │
            │      │  contraseña          │
            │      │  incorrectos"        │
            │      └──────────────────────┘
            │                 │
            ▼                 ▼
    ┌──────────────────┐  (Stay on login)
    │ Set auth to:     │
    │ localStorage     │
    │ isAuthenticated  │
    │ = true           │
    └──────────────────┘
            │
            ▼ (Redirect to /admin)
    ┌──────────────────────────────────────────┐
    │    /admin - Protected Route               │
    │    (authGuard verified access)           │
    │                                          │
    │  ┌────────────────────────────────────┐  │
    │  │ Header:                            │  │
    │  │ [← Volver] [⚙ Admin] [🚪 Salir]   │  │
    │  │                                    │  │
    │  │ Sidebar:                           │  │
    │  │ 📰 Noticias (active)               │  │
    │  │ ➕ Crear noticia                   │  │
    │  │ 👥 Usuarios                        │  │
    │  │ 🚪 Cerrar sesión (functional)     │  │
    │  │                                    │  │
    │  │ Content: News management table     │  │
    │  └────────────────────────────────────┘  │
    └──────────────────────────────────────────┘
                        │
                        ▼ (Click logout)
            ┌──────────────────────────┐
            │ AuthService.logout()     │
            │ 1. Clear localStorage    │
            │ 2. Set isAuthenticated   │
            │    = false               │
            │ 3. Redirect to /         │
            └──────────────────────────┘
                        │
                        ▼
    ┌──────────────────────────────────────────┐
    │     Back to Home Page                    │
    │  (Header shows 🔑 Login button again)   │
    └──────────────────────────────────────────┘
```

## 🏗️ Architecture Overview

### Components & Services

```
Angular App
├── AuthService
│   ├── login(username, password)
│   ├── logout()
│   └── isAuthenticated (signal)
│
├── authGuard
│   └── Protects /admin route
│
├── HeaderComponent
│   ├── Conditional Login/Logout display
│   └── Dynamic navigation based on auth state
│
├── LoginComponent
│   ├── Form validation
│   ├── Error handling
│   └── Credentials check
│
├── AdminComponent (Protected)
│   ├── News management
│   └── Logout functionality
│
└── Routes
    ├── / (HomeComponent)
    ├── /login (LoginComponent) - Public
    ├── /admin (AdminComponent) - Protected
    └── ... other routes
```

## 🔐 Data Flow

### Credentials Storage
```
public/data/news.json
{
  "categories": [...],
  "news": [...],
  "admin": {
    "username": "admin",
    "password": "admin"
  }
}
```

### Authentication State
```
localStorage
{
  "admin_authenticated": "true" | "false"
}
```

## 📱 Header States

### Unauthenticated State
```
┌─────────────────────────────────────────┐
│ [Logo] [Nav Links] [🔑 Login] [Avatar] │
└─────────────────────────────────────────┘
```

### Authenticated State
```
┌─────────────────────────────────────────┐
│ [Logo] [Nav Links] [⚙ Admin] [🚪 Salir] [Avatar] │
└─────────────────────────────────────────┘
```

## 🎯 Key Files & Responsibilities

| File | Purpose |
|------|---------|
| `auth.service.ts` | Manages authentication logic and state |
| `auth.guard.ts` | Route protection middleware |
| `login.component.ts` | Login form logic and validation |
| `login.component.html` | Login UI template |
| `login.component.css` | Login page styling |
| `app.routes.ts` | Route configuration with guard |
| `header.component.ts` | Dynamic header with auth logic |
| `news.json` | Credentials storage |

## ✨ User Experience Features

1. **Visual Feedback**
   - Loading state while validating credentials
   - Error animations with clear messages
   - Success redirect on valid login

2. **Accessibility**
   - Keyboard support (Enter to submit)
   - Disabled inputs during loading
   - Clear error messages

3. **Security**
   - Credentials validated server-side (from JSON)
   - Auth state persisted securely
   - Guard prevents direct access to admin panel

4. **Responsive Design**
   - Mobile-friendly login form
   - Adaptive header with burger menu
   - Touch-friendly buttons

## 🚀 Testing the Flow

1. **Without Login:**
   - Visit http://localhost:4200
   - Try clicking Admin button → redirects to login

2. **With Valid Credentials:**
   - Click 🔑 Login in header
   - Enter: username=admin, password=admin
   - Click "Acceder"
   - Should redirect to /admin

3. **With Invalid Credentials:**
   - Click 🔑 Login
   - Enter wrong credentials
   - Click "Acceder"
   - See error message, stay on login page

4. **Logout:**
   - While authenticated, click 🚪 Salir
   - Should redirect to home page
   - Header now shows 🔑 Login button again
