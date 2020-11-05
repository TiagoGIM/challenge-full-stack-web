import {Request,Response} from 'express';
import { getRepository } from "typeorm";
import studentSchema from '@models/schemas/studentSchema';
import StudentEntity from "@models/StudentModel";
import students_view from '@view/students_view';
import studentView from '@view/students_view';

export default{
  async index(request:Request, response:Response){

    const studentRepository = getRepository(StudentEntity);

    const students = await studentRepository.find();

    return response.json(students_view.renderMany(students));

  },
  async create(request:Request, response:Response){

    const { name, email, cpf, ra } = request.body;

    const studentRepository = getRepository(StudentEntity);
  // validating about data from client
    await studentSchema.validate(
      {
        name,email,cpf,ra
      },
      {
        abortEarly:false
      },
    );
    const stundent = studentRepository.create(
      {
        name, email, cpf, ra,
      });

    await studentRepository.save(stundent);
  return response.status(201).json({message:'sucess'})

  },
  async show(request:Request, response:Response){

    const { id } = request.params;

    const studentRepository = getRepository(StudentEntity);

    const stundent = await studentRepository.findOneOrFail(id);

    return response.json(studentView.render(stundent));
  },
  async deleteStudent(request:Request, response:Response){
    
    const { id } = request.params;

    const studentRepository = getRepository(StudentEntity);

    const results = await studentRepository.delete(id)

    return response.status(200).json(results);    
  },
  async update(request:Request, response:Response){
      const { id } = request.params;

      const studentRepository = getRepository(StudentEntity);
  
      const student = await studentRepository.findOneOrFail(id)

      studentRepository.merge(student, request.body);

      const results = await studentRepository.save(student);
  
      return response.status(200).send(results);
  }
}