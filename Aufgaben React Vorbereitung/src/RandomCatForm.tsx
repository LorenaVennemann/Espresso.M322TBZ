import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Field, Form, Formik, FormikValues, useFormik } from 'formik';
import CatImageService from './service/CatImageService';

const CatImage = () => {
  const [catImageUrl, setCatImageUrl] = React.useState('');

  React.useEffect(() => {
    CatImageService().getRandomeCatImage().then(url => setCatImageUrl(url));
  }, []);

  return <img src={catImageUrl} />;
};

const Basic = () => {
  const validateForm = useFormik({
    initialValues: { name: '', id: '' },
    onSubmit: (values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 400);
    },
    const validateForm = (values: FormikValues) => {
      const errors: { name? : string} = {};

      if (!values.name) {
        errors.name = 'Please provide a name';
      }

      return errors;
    };
    const formik = useFormik({validate: validateForm,});
  });

  return (
    <div>
      <h1>My Form</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <CatImage />
        </Box>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div id="nameError">{formik.errors.name}</div>
        )}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Basic;