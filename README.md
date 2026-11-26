# RestoFlow — Pipeline CI/CD (AA2 - ABP)

Prototipo de sistema de gestión de pedidos y reservas para restaurante con flujo automatizado de integración y pruebas mediante **GitHub Actions** y **Docker**.

## Estructura del proyecto
- `src/index.js`: lógica base de reservas, cálculo de pedidos y endpoint `/health`.
- `test/app.test.js`: pruebas automatizadas.
- `Dockerfile`: definición de contenedor.
- `.github/workflows/deploy.yml`: workflow de automatización en GitHub Actions.