const express = require("express");
const app = express();
const port = 3000;
const studentController = require("./controllers/studentController");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", studentController.renderStudents); // show index(the tables list)
app.get("/add", studentController.showAddForm); // add form in add.ejs
app.post("/add", studentController.handleAdd); // adding
app.get("/edit/:id", studentController.showEditForm); //show edit form with the values
app.post("/edit/:id", studentController.handleEdit); // editing
app.post("/delete/:id", studentController.handleDelete); //deleting

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
