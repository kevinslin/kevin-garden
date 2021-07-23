#!/bin/bash

bucketDst="kevinslin-images"

aws s3 sync assets "s3://$bucketDst" --acl public-read
