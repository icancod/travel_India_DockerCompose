# Explore India — Docker Compose

## Project layout
- `frontend/`: original static website, served by Nginx
- `backend/`: minimal Node.js/Express API
- `compose.yaml`: runs both services

## Run
From this project root:

```bash
docker compose up --build
```

Open the website at http://localhost:8080

Test the API through the frontend's Nginx reverse proxy:
- http://localhost:8080/api
- http://localhost:8080/api/health

The backend is also published directly at http://localhost:3001/api/health.

Stop the services with `Ctrl+C`, or run `docker compose down` in another terminal.
