import Student from "../models/StudentModel";

export default{
  render(student : Student) {
    return {
      id: student.id,
      name: student.name,
      cpf:student.cpf,
      ra:student.ra,
      email:student.email
    }
  },
  renderMany(students : Student[]){
    return students.map(student => this.render(student));
  }
}