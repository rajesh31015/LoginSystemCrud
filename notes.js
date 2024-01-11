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



if(request.file)
{
    const fileInfo = request.file;
    let filePath = fileInfo.destination+"/"+fileInfo.filename;
    update['image_path'] = filePath;
}



const validationSchema = Joi.object({
  occasion: Joi.string().required(),
  no_of_words: Joi.number().required().min(20).max(50),
  category: Joi.string().required(),
  type:Joi.string().required(),
  language:Joi.string().required(),
  message: Joi.string().allow('').custom((value, helpers) => {
      if (value && (value.includes('<script>') || value.includes('<') )) {
        return helpers.error('string.dangerousContent');
      }
      const wordCount = value.trim().split(/\s+/).length;
      if(wordCount > 30){
          return helpers.error('string.length');
      }
      return value; // Value is valid
  }),
}).messages({
  'string.dangerousContent': 'The message contains dangerous content and is not allowed.',
  'string.length': 'Maximum 30 words allowed.'
});

// Validate the form data against the schema
const { error, value } = validationSchema.validate(req.body);

if (error) {
    // Handle validation errors
    // console.error('Validation error:', error.details);
    return res.status(200).json({
        status : 0,
        message : error.details[0].message,
        field : error.details[0].path[0],
    });
}