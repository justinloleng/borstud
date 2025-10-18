const studentModel = require("../models/studentModel");
const StudentModel = require("../models/studentModel");

//display all students index
exports.renderStudents = (req, res) => {
  const students = StudentModel.findAll();
  res.render("index", { students });
};

//show add form
exports.showAddForm = (req, res) => {
  res.render("add"); // add.ejs <---
};

//adding
exports.handleAdd = (req, res) => {
  // this is all the inputs in the form requestings it to be created
  const { name, age, course } = req.body;
  StudentModel.create({ name, age: Number(age), course });
  res.redirect("/");
};

//show edit form
exports.showEditForm = (req, res) => {
  const student = StudentModel.findById(Number(req.params.id));
  res.render("edit", { student });
};

//edit
exports.handleEdit = (req, res) => {
  const { name, age, course } = req.body;
  StudentModel.update(Number(req.params.id), {
    name,
    age: Number(age),
    course,
  });
  res.redirect("/");
};

//delete
exports.handleDelete = (req, res) => {
  StudentModel.delete(Number(req.params.id));
  res.redirect("/");
};
