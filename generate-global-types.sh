#!/bin/bash
echo "Download swagger schema:"
curl "https://accelerist.herokuapp.com/api-json" -o swagger.json
echo "Generate types"
npx @manifoldco/swagger-to-ts swagger.json --output ./src/types/global-types.ts