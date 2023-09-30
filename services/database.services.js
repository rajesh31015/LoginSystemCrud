const mongo = require("mongoose");
const companySchema = require("../model/company.model");
const userSchema = require("../model/user.model");
const clientSchema = require("../model/client.model");

const schemaList = {
    company : companySchema,
    user : userSchema,
    client : clientSchema,
}

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}
const url = "mongodb://localhost:27017/final_project";

mongo.connect(url,options);

// create record
const createRecord = async (data,schema)=>{
    const currentSchema = schemaList[schema];
  const collection = new currentSchema(data);
  const dataRes = await collection.save();
  return dataRes;
}

const getRecordByQuery = async (query,schema)=>{
    const currentSchema = schemaList[schema];
    const dataRes = await currentSchema.find(query);
    return dataRes;
}

const updateRecordByQuery = async (data,schema,query)=>{
    const currentSchema = schemaList[schema];
    const dataRes = await currentSchema.updateOne(query,data);
    return dataRes;
}

const countData = async (schema)=>{
    const currentSchema = schemaList[schema];
    const dataRes = await currentSchema.countDocuments();
    return dataRes;
}

const paginate = async (query,from,to,schema)=>{
    const currentSchema = schemaList[schema];
    const dataRes = await currentSchema.find(query).skip(from).limit(to);
    return dataRes;
}

module.exports = {
    createRecord : createRecord,
    paginate : paginate,
    countData : countData,
    getRecordByQuery : getRecordByQuery,
}