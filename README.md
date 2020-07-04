# Full-stack demo

## Tech

Angular 9, NodeJS (ExpressJS) & SQL Server

## How to run it

```shell
docker-compose up -d
```

## Webapi endpoints

Webapi is running at http://localhost:4201/

| Endpoint | Method | Returns | Description |
|---|---|---|---|
| `/api/v1/parts` | `GET` | Array of IParts | Retrieve all parts |
| `/api/v1/health-check` | `GET` | Webapi server status | Get server status |
| `/api/v1/parts` | `POST` | `n/a` | Create parts (items) |

## Docker containers

### Client

Angular 9 SPA project

### Webapi

NodeJS expressJS project

### SQL Server

To save data
