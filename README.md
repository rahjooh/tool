-2
# بازار ابزار

این مخزن شامل یک وب‌سایت استاتیک بر پایه Next.js برای فروشگاه و مرکز تعمیرات ابزارآلات برقی «بازار ابزار» است. تمامی محتوای صفحات به زبان فارسی و با ساختار راست‌به‌چپ ارائه شده و شامل معرفی محصولات پرفروش، خدمات تعمیر تخصصی، مقالات فنی و فرم درخواست مشاوره می‌شود.

## راه‌اندازی پروژه

```bash
npm install
npm run dev
```

سپس مرورگر را در نشانی [http://localhost:3003](http://localhost:3003) باز کنید.

برای تولید خروجی استاتیک کافی است دستور زیر را اجرا کنید:
برای ساخت نسخه تولیدی و اجرای آن، فرمان‌های زیر را اجرا کنید:

```bash
npm run build
npm run start
```

فرمان `npm run start` سرور Next.js را با استفاده از خروجی تولید شده در `.next/` روی پورت 3003 اجرا می‌کند.

## پیکربندی Nginx برای محیط تولید

در صورت استقرار برنامه روی سرور لینوکسی که از Nginx به عنوان وب‌سرور معکوس استفاده می‌کند، می‌توانید پیکربندی زیر را در فایل `/etc/nginx/sites-available/sphynx-ir` قرار دهید. این تنظیمات تمام درخواست‌های HTTP را به HTTPS هدایت کرده و ترافیک را به برنامه‌ی در حال اجرا روی پورت `3003` فوروارد می‌کند:

```nginx
server {
    if ($host = sphynx.ir) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    listen [::]:80;
    server_name sphynx.ir www.sphynx.ir;

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name sphynx.ir www.sphynx.ir;
    ssl_certificate /etc/letsencrypt/live/sphynx.ir/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/sphynx.ir/privkey.pem; # managed by Certbot

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES128-GCM-SHA256';
    ssl_prefer_server_ciphers off;

    location / {
        proxy_pass http://127.0.0.1:3003;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

پس از ذخیره‌سازی، با فعال کردن سایت و بارگذاری مجدد Nginx می‌توانید تنظیمات را اعمال کنید:

```bash
sudo ln -s /etc/nginx/sites-available/sphynx-ir /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## ساختار پوشه‌ها

- `pages/` شامل صفحات اصلی سایت و پیکربندی برنامه است.
- `components/` اجزای رابط کاربری مانند هدر، کارت محصول و فرم تماس را نگهداری می‌کند.
- `data/` داده‌های استاتیک مربوط به محصولات، خدمات و مقالات را فراهم می‌سازد.
- `public/images/` تصاویری به‌صورت SVG برای نمایش ابزارآلات قرار دارد.
- `styles/` حاوی فایل‌های CSS سراسری و سبک‌دهی بخش‌های مختلف است.

## فناوری‌ها

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- فونت فارسی [وزیرمتن](https://rastikerdar.github.io/vazirmatn/)

