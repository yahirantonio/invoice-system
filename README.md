# Sistema de Facturación en Línea

API para generar facturas electrónicas utilizando [Factura.com](https://factura.com/) como proveedor de timbrado. Construido con [NestJS](https://nestjs.com/) y documentado con Swagger.

---

## 🚀 Características

- Generación de facturas 4.0 vía Factura.com
- Documentación automática con Swagger
- Arquitectura modular con NestJS
- Listo para producción o uso personal

---

## 📸 Demo

Explora la documentación interactiva en:  
[http://localhost:3000/api/docs](http://localhost:3000/api/docs)

---

## 🛠 Tecnologías

- NestJS
- Swagger
- Factura.com REST API
- TypeScript

---

## ⚙️ Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/yahirantonio/invoice-system.git
   cd invoice-system
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Crea dos archivos `.env` y `.env.production` con las siguientes variables:


<details>
<summary>.env</summary>

```env
FACTURAMFApiKey_USER=tu_usuario_Factura.com
FSecretKey=tu_contraseña_Factura.com
Factura_Url=https://sandbox.factura.com/api
PORT=3000
```
</details>

<details>
<summary>.env.production</summary>

```env.production
FACTURAMFApiKey_USER=tu_usuario_Factura.com
FSecretKey=tu_contraseña_Factura.com
Factura_Url=https://api.factura.com
PORT=3000
```
</details>

4. Ejecuta el servidor:
   ```bash
   npm run start:dev
   ```

5. Accede a Swagger en:  
   [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

---

## 🤝 Contribuciones

¡Contribuciones bienvenidas! Haz un fork del repositorio y envía un pull request. También puedes abrir issues para reportar errores o sugerir mejoras.

---

## 📄 Licencia MIT

<details>
<summary>Mostrar licencia</summary>

```text
MIT License

Copyright (c) 2025 [Tu Nombre]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
</details>

---

## 📬 Contacto

Autor: Yahir Diaz 
Email: yahirantoni90@gmail.com
