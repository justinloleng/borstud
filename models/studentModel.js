let students = [
  { id: 1, name: "Alice", age: 20, course: "BSIT" },
  { id: 2, name: "Bob", age: 21, course: "BSCS" },
];

class studentModel {
  static findAll() {
    //show all
    return students;
  }

  static findById(id) {
    //find id by student id specif
    return students.find((s) => s.id === id);
  }

  static create(newStudent) {
    //create student add
    newStudent.id = students.length + 1;
    students.push(newStudent);
    return newStudent;
  }

  static update(id, updateData) {
    // this method to find the index of the specific student
    const index = students.findIndex((s) => s.id == id);
    if (index !== -1) {
      students[index] = { ...students[index], ...updateData };
      return students[index];
    }
    return null;
  }
  static delete(id) {
    const index = students.findIndex((s) => s.id === id);
    if (index !== -1) {
      students.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = studentModel;
