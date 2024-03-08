import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Debe tener al menos 2 caracteres'),
    lastname: Yup.string()
        .min(2, 'Debe tener al menos 2 caracteres'),
    email: Yup.string()
        .email('Este correo no es válido')
        .min(5, 'Campo debe tener 5 caracteres'),
    password: Yup.string()
        .min(8, 'Campo debe tener 8 caracteres'),
    confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'No coincide')
        .required('Se debe confirmar la contrasena'),
});

const Formulario = () => {

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 10);
    };

    return <Formik
        initialValues={{
            name: "",
            lastname: "",
            email: "",
            password: "",
            confirm: ""
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        {({ isSubmitting }) => (
            <Form >
                <div className="mb-3">
                    <Field type="text" name="name" placeholder="Nombre" />
                    <ErrorMessage name="name" component="div" />

                </div>
                <div className="mb-3">
                    <Field type="text" name="lastname" placeholder="Apellido:" />
                    <ErrorMessage name="lastname" component="div" className="text-danger"/>
                </div>
                <div className="mb-3">
                    <Field type="email" name="email" placeholder="Gmail:" />
                    <ErrorMessage name="email" component="div" className="text-danger"/>
                </div>
                <div className="mb-3">
                    <Field type="password" name="password" placeholder="Contrasena:" />
                    <ErrorMessage name="password" component="div" className="text-danger"/>
                </div>
                <div className="mb-3">
                    <Field type="password" name="confirm" placeholder="Confirmar contrasena:" />
                    <ErrorMessage name="confirm" component="div" className="text-danger"/>
                </div>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">Create User</button>
            </Form>
        )}
    </Formik>
}

export default Formulario
