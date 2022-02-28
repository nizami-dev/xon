#!/bin/bash

npx rimraf dist
mkdir dist

find src -name "*.ts" -a ! -name "*.test.ts" ! -name "*.gen.ts" | cpio -p -dumv dist
cp package.json dist
cp README.md dist
cp LICENSE dist

npx cti create -e tests, test-helper, .antlr -i .test.ts -w -f ./dist
npx tsc -p tsconfig.dist.json
find dist -name "*.ts" -a ! -name "*.d.ts" -exec rm -rf {} \;

cd dist
git init
cd ..
