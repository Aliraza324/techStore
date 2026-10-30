# TechStore Design System & Architecture Specification

## 1. Golden Rules

1. **Strict 200-Line Limit**:
   - No source code or documentation file may exceed **200 lines**.
   - If a component grows beyond 200 lines, decompose it into subcomponents, hooks, or utility helpers.

2. **Strict Navigation Rule (No `<a>` tags)**:
   - **NEVER** use native `<a>` tags for internal or external app navigation.
   - Always use `react-router-dom`'s `<Link>` or `<NavLink>` component to maintain SPA routing and state integrity.

3. **Modern Styling & Theming**:
   - Tailwind CSS v4 utility-first styling with font Inter.
   - Clean purple brand aesthetic (`#6c38ff`) with high-tech accents.
   - Responsive design (mobile-first, 320px up to 4K desktop).

4. **Centralized Animations (`src/animations/animation.js`)**:
   - All motion variants, keyframes, transitions, and gesture animations MUST be declared in `src/animations/animation.js` and imported where needed. No inline complex motion configurations.


---

## 2. Directory Structure

```text
techStore/
├── design.md              # Project design rules and specifications
├── mock/                  # Mock data for products, categories, deals
│   ├── categories.js      # Tech categories data
│   ├── products.js        # Comprehensive tech product catalog
│   └── index.js           # Central mock barrel export
├── src/
│   ├── icons/             # Centralized animated Lucide icon components
│   │   └── index.jsx      # Animated icon exports with hover & motion props
│   ├── layout/            # Layout shell
│   │   ├── Navbar.jsx     # Header navigation bar with cart badge
│   │   ├── Footer.jsx     # Comprehensive tech footer
│   │   └── MainLayout.jsx # Outlet wrapper with navbar, footer, toasts
│   ├── pages/             # Page views
│   │   ├── Home.jsx       # Home orchestration page
│   │   ├── home/          # Modular home subcomponents (< 200 lines each)
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── CategorySection.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   └── ValueProps.jsx
│   │   ├── Products.jsx   # Product catalog with filters
│   │   ├── ProductDetail.jsx # Product detail view with specs
│   │   ├── Cart.jsx       # Cart overview & checkout CTA
│   │   └── NotFound.jsx   # 404 fallback page
│   ├── router/            # React Router Dom definitions
│   │   └── index.jsx      # Router setup with MainLayout shell
│   ├── utils/             # Utilities and notification system
│   │   └── toast.jsx      # Lightweight custom animated toast system
│   ├── App.jsx            # App root provider wrapper
│   └── main.jsx           # App entry point
```

---

## 3. Module Responsibilities

### `mock/`
- Contains structured, realistic tech product data (laptops, phones, audio, wearables).
- Pre-populated ratings, tags, specs, prices, and stock statuses.

### `src/icons/`
- Centralizes `lucide-animated` icons.
- Provides consistent sizing, color inheritance, and micro-interactions (`animateOnHover`).

### `src/layout/`
- Standardized responsive layout ensuring persistent navigation and toast overlays.
- All links implemented strictly with `<Link to="...">` or `<NavLink to="...">`.

### `src/pages/`
- Home page is assembled from isolated sub-components (`HeroBanner`, `CategorySection`, etc.).
- Keeps each file focused, highly readable, and well under the 200-line ceiling.

### `src/router/`
- Declarative route tree configured via `createBrowserRouter` or `<Routes>`.
- Fallback route `*` for missing paths.

### `src/utils/`
- Provides `toast` notification dispatchers (`toast.success`, `toast.error`, etc.).
- Includes `ToastProvider` and `ToastContainer` for unobtrusive user feedback.

