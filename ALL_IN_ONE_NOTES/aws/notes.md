1. install aws cli for perform task by comand line interface
2. ACL are two types : a. public-read (Access your bucket file anyone) b. private-read (access your bucket file only you or that have give you access to file)
3. ACLs disabled mean bucket is private and ACLs enable means bucket is public
4. when create bucket default ACLs is disable that means your bucket is private
5. Bucket versioning: 
6. create signed url
7. api you want to upload data on se bucket through api then you need to api key and secret key of s3 bucket to access bucket.
# generate Api key -> click on user name -> security cridential -> Users -> add user -> write username -> select aws credential type -> tick access key - programatical -> next permission -> attach existing policies directly -> filter policies S3 -> tick AmazonS3FullAccess -> next -> next -> create user -> download api key
8. allow cors policy for access S3 bucket
# click on bucket name -> permission -> cros-origin resources sharing -> edit -> allow
9. etag issue solution -> ask developer ehich method is used to upload file upload() or multipartUpload() if developer used to upload() function then you say that to use multipartUpload() function to upload large file after that etag issue solved another solution is in cors origin write ExposeHeaders:["Etag"]