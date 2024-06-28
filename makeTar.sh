#!/bin/bash
FILE_NAME="products-challenge-node.tar.gz"
tar \
--exclude="node_modules" \
--exclude="makeTar.sh" \
--exclude="$FILE_NAME" \
-zcvf $FILE_NAME .
echo "Archive created: $FILE_NAME"
