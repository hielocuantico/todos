# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos
```
postgres
```

2. Crear una copia de .env.template, y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](localhost:300/api/seed)

# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Production

# Stage