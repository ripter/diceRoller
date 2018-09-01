.PHONY: all build server clean hotel.add
NODE_BIN=./node_modules/.bin
PORT=5052
SOCKET_PORT=5052

all: build server

build: node_modules/
	$(NODE_BIN)/webpack

server: node_modules/
	env PORT=$(PORT) SOCKET_PORT=$(SOCKET_PORT) node server/index.js

node_modules/: package.json
	npm install
	touch node_modules/

clean:
	-rm -f package-lock.json
	-rm -r ./node_modules
	-npm cache verify

hotel.add: node_modules/
	hotel add 'make server' --port $(PORT) --out app.log
