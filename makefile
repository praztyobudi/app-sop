dev:
	docker compose up -d

dev-build:
	docker compose up -d --build

prod:
	docker compose -f compose.prod.yml up -d

prod-build:
	docker compose -f compose.prod.yml up -d --build

down:
	docker compose down

down-prod:
	docker compose -f compose.prod.yml down

down-all:
	docker compose down
	docker compose -f compose.prod.yml down