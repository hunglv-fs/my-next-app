📂 my-next-app
 ├── 📂 app               # ✅ App Router (MỚI - Next.js 13+)
 │    ├── 📂 api          # API Routes
 │    │    ├── 📂 posts
 │    │    │    ├── route.ts    # API: GET /api/posts
 │    ├── 📂 items        # Route /items
 │    │    ├── 📂 [id]    # Dynamic Route /items/:id
 │    │    │    ├── page.tsx  # Trang chi tiết item
 │    │    ├── page.tsx   # Trang danh sách items
 │    ├── 📂 about        # Trang /about
 │    │    ├── page.tsx
 │    ├── 📂 contact      # Trang /contact
 │    │    ├── page.tsx
 │    ├── layout.tsx      # Layout chính của app
 │    ├── page.tsx        # Trang chủ ("/")
 │    ├── globals.css     # CSS Global
 │    ├── head.tsx        # Metadata của app
 │    ├── loading.tsx     # Component hiển thị khi loading
 ├── 📂 components        # ✅ Chứa các UI Components dùng chung
 │    ├── Header.tsx
 │    ├── Footer.tsx
 ├── 📂 styles            # ✅ Chứa các file CSS
 │    ├── globals.css
 │    ├── Home.module.css # CSS cho từng component
 ├── 📂 lib               # ✅ Chứa logic xử lý dữ liệu (helpers, utils)
 │    ├── fetchData.ts
 ├── 📂 hooks             # ✅ Custom React Hooks
 │    ├── useAuth.ts
 ├── 📂 public            # ✅ Chứa ảnh, file tĩnh (không cần import)
 │    ├── logo.png
 ├── 📂 types             # ✅ Định nghĩa TypeScript types
 │    ├── post.ts
 ├── next.config.mjs      # ✅ Cấu hình Next.js
 ├── package.json         # ✅ Thông tin package
 ├── tsconfig.json        # ✅ Cấu hình TypeScript
 ├── .eslintrc.json       # Cấu hình ESLint
 ├── .gitignore           # Danh sách file cần bỏ qua khi push Git
 ├── README.md            # Hướng dẫn sử dụng dự án
