.PHONY : gen
gen :
	protoc --go_out=. --go-grpc_out=. ./*/*.proto
	npm install
	protoc --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	 --plugin="protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin" \
	 --plugin="protoc-gen-js=./node_modules/.bin/protoc-gen-js" \
	 --js_out="import_style=commonjs,binary:./jslib" \
	 --ts_out="service=grpc-node,mode=grpc-js:./jslib" \
	 --grpc_out="grpc_js:./jslib" ./*/*.proto
	node gen-index.js