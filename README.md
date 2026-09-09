# ⚡ Boilerplate Next.js

> Starter kit modern untuk membangun aplikasi web dengan cepat — sudah terpasang Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, TanStack Query & Table, React Hook Form + Zod, hingga Axios. Tinggal `clone`, install, dan langsung fokus membangun fitur.

<p align="left">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="shadcn/ui" src="https://img.shields.io/badge/shadcn%2Fui-base--nova-000000?logo=shadcnui&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green" />
</p>

---

## ✨ Deskripsi

**Boilerplate Next.js** ini dibuat untuk menghemat waktu setup di awal proyek. Alih-alih mengulang instalasi library yang sama di setiap proyek baru (form validation, data fetching, table, HTTP client, dsb), boilerplate ini sudah menggabungkan tools yang paling sering dibutuhkan pada proyek frontend modern — lengkap dengan konfigurasi `shadcn/ui`, `ESLint`, dan struktur folder `App Router` yang rapi.

Cocok digunakan sebagai fondasi untuk dashboard, admin panel, landing page, maupun aplikasi internal yang membutuhkan UI kaya komponen dan form-heavy.

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) [Lebih tepatnya menggunakan 16.1.6 untuk menghindari masalah url cache] |
| **Library UI** | [React 19](https://react.dev/) |
| **Bahasa** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `tailwind-merge` + `tw-animate-css` |
| **Komponen UI** | [shadcn/ui](https://ui.shadcn.com/) (style `base-nova`) di atas [Base UI](https://base-ui.com/) (`@base-ui/react`) |
| **Ikon** | [lucide-react](https://lucide.dev/) |
| **Data Fetching / Cache** | [TanStack Query](https://tanstack.com/query) |
| **Table** | [TanStack Table](https://tanstack.com/table) |
| **Form & Validasi** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) + `@hookform/resolvers` |
| **HTTP Client** | [Axios](https://axios-http.com/) |
| **Tanggal & Waktu** | `moment`, `moment-timezone`, `date-fns`, `date-fns-tz` |
| **URL/Query Helper** | `query-string` |
| **Utility Class** | `clsx`, `class-variance-authority` |
| **Linting** | ESLint 9 (flat config) + `eslint-config-next` |
| **Package Manager** | Yarn 4 (Berry) — kompatibel juga dengan npm/pnpm |

---

## 📁 Struktur Proyek

```
.
├── app/                # Routing utama (App Router) — layout, page, dan route handler
├── components/
│   └── ui/              # Komponen UI hasil generate shadcn/ui (button, input, dialog, dll)
├── lib/                 # Helper & utility function (mis. cn() untuk merge className)
├── public/              # Aset statis (gambar, favicon, dll)
├── types/               # Definisi TypeScript type/interface global
├── components.json      # Konfigurasi shadcn/ui (style, alias, base color)
├── eslint.config.mjs    # Konfigurasi ESLint (flat config)
├── next.config.ts       # Konfigurasi Next.js
├── postcss.config.mjs   # Konfigurasi PostCSS untuk Tailwind CSS v4
├── declarations.d.ts    # Deklarasi tipe tambahan (mis. untuk file non-TS)
└── tsconfig.json        # Konfigurasi TypeScript & path alias (@/*)
```

> 💡 Alias import sudah dikonfigurasi lewat `components.json` & `tsconfig.json`: `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, dan `@/hooks` — sehingga import antar folder jadi lebih ringkas.

---

## 🚀 Memulai (Quick Start)

### 1. Clone repositori

```bash
git clone https://github.com/pahmii/Boilerplate-NextJs.git my-project
cd my-project
```

### 2. Install dependensi

Proyek ini menggunakan **Yarn (Berry)** sebagai package manager utama, namun tetap bisa dijalankan dengan npm atau pnpm.

```bash
yarn install
# atau
npm install
# atau
pnpm install
```

### 3. Konfigurasi environment variable (opsional)

Jika fitur yang kamu tambahkan membutuhkan environment variable (misalnya base URL API untuk Axios), buat file `.env.local` di root proyek:

```bash
touch .env.local
```

```env
# Contoh isi .env.local
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

> Boilerplate ini belum menyertakan `.env.example` bawaan karena belum ada integrasi backend/auth spesifik — tambahkan sesuai kebutuhan proyekmu.

### 4. Jalankan development server

```bash
yarn dev
# atau
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

### 5. Build untuk produksi

```bash
yarn build && yarn start
# atau
npm run build && npm run start
```

### Script yang tersedia

| Perintah | Deskripsi |
|---|---|
| `dev` | Menjalankan Next.js dalam mode development |
| `build` | Build aplikasi untuk produksi |
| `start` | Menjalankan hasil build (production server) |
| `lint` | Menjalankan ESLint untuk cek kualitas kode |

---

## 🌟 Fitur Utama

- ⚙️ **Next.js 16 App Router** — struktur routing modern, siap untuk Server Component & Route Handler.
- 🎨 **shadcn/ui siap pakai** — komponen UI (button, dialog, data-table, dll) yang bisa langsung dikustomisasi karena source code-nya berada di `components/ui`, dibangun di atas **Base UI** dengan style `base-nova`.
- 🧩 **Form + Validasi terintegrasi** — kombinasi `react-hook-form` dan `zod` lewat `@hookform/resolvers`, siap dipakai untuk form kompleks dengan validasi type-safe.
- 📊 **Data Table siap pakai** — didukung `@tanstack/react-table`, cocok untuk kebutuhan tabel data dengan sorting, filtering, dan pagination.
- 🔄 **Data fetching & caching** — `@tanstack/react-query` untuk mengelola server state, caching, dan sinkronisasi data secara efisien.
- 🌐 **HTTP client siap konfigurasi** — `axios` untuk komunikasi ke REST API.
- 🗓️ **Utility tanggal lengkap** — `moment`, `moment-timezone`, `date-fns`, dan `date-fns-tz` tersedia untuk berbagai kebutuhan manipulasi & format tanggal/waktu.
- 🔗 **Query string helper** — `query-string` untuk parsing dan membangun URL query dengan mudah.
- 🎯 **Utility className** — `clsx`, `tailwind-merge`, dan `class-variance-authority` untuk styling kondisional yang bersih dan mudah dibaca.
- 🧹 **ESLint 9 (flat config)** — linting modern sudah terpasang lewat `eslint-config-next`.
- 🔒 **Type-safe end-to-end** — seluruh kode berbasis TypeScript, termasuk folder `types/` khusus untuk definisi tipe global.

> Boilerplate ini fokus di lapisan **frontend & UI foundation**. Belum ada autentikasi maupun ORM/database bawaan — silakan tambahkan sesuai kebutuhan (mis. NextAuth/Auth.js, Prisma, Drizzle, dll).

---

## 🤝 Kontribusi

Kontribusi sangat terbuka! Jika ingin berkontribusi:

1. Fork repositori ini
2. Buat branch baru (`git checkout -b fitur/nama-fitur`)
3. Commit perubahan (`git commit -m "feat: menambahkan fitur X"`)
4. Push ke branch (`git push origin fitur/nama-fitur`)
5. Buat Pull Request

Untuk perubahan besar, buka [issue](https://github.com/pahmii/Boilerplate-NextJs/issues) terlebih dahulu untuk mendiskusikan apa yang ingin diubah.

---

## 📄 Lisensi

Proyek ini didistribusikan di bawah lisensi **MIT**. Bebas digunakan, dimodifikasi, dan didistribusikan ulang — lihat file `LICENSE` untuk detail lebih lanjut.

---

<p align="center">Dibuat dengan ❤️ menggunakan Next.js</p>
