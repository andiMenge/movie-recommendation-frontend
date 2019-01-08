SHELL := /bin/zsh
name := movie-favs-frntnd
dockerTag := $(shell git rev-parse head)

docker:
	@docker build -t andimenge/$(name):$(dockerTag) .

push:
	@docker push andimenge/$(name):$(dockerTag)

# deploy:
# 	@docker-threethink && docker-compose up -d && docker-local
