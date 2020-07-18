import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { getCurrentUser, editUser } from '../../../Redux/actions/userActions';

import { MyTextInput } from '../../../shared/components/Forms';
import { SubmitButton } from '../../../shared/components/Buttons';

import { FormSubmit } from './Styles';

const ProfileAdmin = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [getCurrentUser]);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        firstname: user.firstname,
        lastname: user.lastname,
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastname: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        dispatch(editUser(values, true));
        resetForm({});
      }}
    >
      <Form style={{ width: '50%' }}>
        <div
          style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}
        >
          <label style={{ width: '20%' }}>First name:</label>
          <MyTextInput name='firstname' />
        </div>
        <div
          style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}
        >
          <label style={{ width: '20%' }}>Surname:</label>
          <MyTextInput name='lastname' />
        </div>
        <FormSubmit>
          <SubmitButton text={'Update'} />
        </FormSubmit>
      </Form>
    </Formik>
  );
};

export default ProfileAdmin;

// import React, { Fragment, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import { getCurrentUser, editUser } from '../../../Redux/actions/userActions';

// import Spinner from '../../../shared/components/Spinner/Spinner';
// import Input from '../../../shared/components/Input';
// import { SubmitButton } from '../../../shared/components/Buttons';

// // Styles
// import {
//   ProfileForm,
//   ProfileContact,
//   FormGroup,
//   FormSubmit,
//   LabelItem,
//   FieldInput,
// } from './Styles';

// const ProfileAdmin = ({
//   getCurrentUser,
//   editUser,
//   history,
//   auth: { user, loading },
// }) => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//   });

//   useEffect(() => {
//     getCurrentUser();
//     setFormData({
//       firstname: user === null || !user.firstname ? '' : user.firstname,
//       lastname: user === null || !user.lastname ? '' : user.lastname,
//     });
//   }, [getCurrentUser, user]);

//   const { firstname, lastname } = formData;

//   const handleChange = (name, value) => {
//     setFormData((formData) => ({ ...formData, [name]: value }));
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     editUser(formData, history, true);
//   };
//   return (
//     <Fragment>
//       {loading && user === null ? (
//         <Spinner />
//       ) : (
//         <Fragment>
//           <ProfileContact>
//             <ProfileForm onSubmit={submitForm}>
//               <h2 style={{ textAlign: 'center' }}>Details</h2>
//               <FormGroup>
//                 <LabelItem htmlFor='firstname'>Name:</LabelItem>
//                 <FieldInput>
//                   <Input
//                     type='text'
//                     name='firstname'
//                     value={firstname}
//                     onChange={handleChange}
//                   />
//                 </FieldInput>
//               </FormGroup>
//               <FormGroup>
//                 <LabelItem htmlFor='lastname'>Surname:</LabelItem>
//                 <FieldInput>
//                   <Input
//                     type='text'
//                     name='lastname'
//                     value={lastname}
//                     onChange={handleChange}
//                   />
//                 </FieldInput>
//               </FormGroup>
//               <FormSubmit>
//                 <SubmitButton text={'Update'} />
//               </FormSubmit>
//             </ProfileForm>
//           </ProfileContact>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// ProfileAdmin.propTypes = {
//   getCurrentUser: PropTypes.func.isRequired,
//   editUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { getCurrentUser, editUser })(
//   ProfileAdmin
// );
