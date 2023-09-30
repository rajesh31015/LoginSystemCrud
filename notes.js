server.use((request,response,next)=>{
    const token = tokenService.verifyToken(request);
    if(token.isVerified)
    {
      // user is valid
      next();
    }
    else{
      response.status(401); // token not verified
      response.json({
        message : "Invalid access token!",
        status : 0
      });
    }
});