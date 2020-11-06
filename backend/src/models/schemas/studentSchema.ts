import * as Yup from 'yup';
/* this object will be used for check if the post from client is a valid object.*/
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