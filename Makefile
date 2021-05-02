.PHONY: install
install:
	cd frontend; yarn
	cd backend; yarn
.PHONY: up
up:
	cd backend; yarn migrate; yarn start
	cd frontend; yarn start

