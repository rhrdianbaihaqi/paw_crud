const studentModel = require("../models/studentModel");
const { responseDefault } = require("../utils/responseMessage");
const { createValidation } = require("../validation/studentValidation");


//Add Data
const addData = async (req, res) => {
    try {
      // Data Unique
      const DataExist = await studentModel.findOne({ nim: req.body.nim });
      if (DataExist) {
        return res.status(400).json({
          message: responseDefault.DATA_EXISTS,
        });
      }

      //Validation
      const { error } = await createValidation(req.body);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }


      const response = await studentModel.create(req.body);
      res.status(201).json({ 
        message: responseDefault.CREATED_DATA, 
        data: response });
    } catch (error) {
        console.log(error);
    }
};

//Get Data
const getData = async (req, res) => {
    try {
        const response = await studentModel.find();
        res.status(200).json({ data: response });
    } catch (error) {
        console.log(error);
    }
};

//Get Data by ID
const getDataById = async (req, res) => {
    try {
      // Get Id Not Found
      const ID = await studentModel.findOne({ _id: req.params.id });
      if (!ID) {
        return res.status(400).json({
          message: responseDefault.ID_NOT_FOUND,
        });
      }

      const response = await studentModel.findById(req.params.id);
      res.status(200).json({ data: response });
    } catch (error) {
        console.log(error);
    }
};

//Get Data by ID and Update Data
const updateData = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

    try {
    // Get Id Not Found
      const ID = await studentModel.findOne({ _id: req.params.id });
      if (!ID) {
        return res.status(400).json({
          message: responseDefault.ID_NOT_FOUND,
        });
      }
        await studentModel.findByIdAndUpdate({_id: id},{ $set: body});
        res.status(200).json({ 
          message: responseDefault.UPDATE_DATA,
        });
    } catch (error) {
        console.log(error);
    }
};

//Get Data by ID and Delete Data
const deleteData = async (req, res) => {
    try {
      await studentModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: responseDefault.DELETE_DATA });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addData,
    getData,
    getDataById,
    updateData,
    deleteData
};