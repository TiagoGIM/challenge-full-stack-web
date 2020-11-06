import * as Yup from 'yup';

const studentSchema = Yup.object().shape({
    email: Yup
        .string()
        .email()
        .required(),
    name: Yup
        .string()
        .required(),
    ra: Yup
        .string()
        .required(),
    cpf: Yup
        .string()
        .required(),

     });


  export default studentSchema;