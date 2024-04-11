1. aws --version
2. aws configure
3. aws s3 cp s3://codingott/softwares ./data --recursive
4. aws s3 presign s3://codingott/demo.png
5. aws s3 presign s3://codingott/demo.png --expires-in 60 (in sec)
6. aws s3 cp word.png s3://codingott --acl private
7. aws s3 cp word.png s3://codingott --acl public-read