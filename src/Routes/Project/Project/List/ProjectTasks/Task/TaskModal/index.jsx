import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTask,
  updateTask,
  getProjectTasks,
} from '../../../../../../../Redux/actions/projectActions';

import {
  Waffle,
  DetailButton,
  SubmitButton,
} from '../../../../../../../shared/components/Buttons';
import Modal from '../../../../../../../shared/components/ModalThree';

import {
  MyTextInput,
  MyTextarea,
} from '../../../../../../../shared/components/Forms';
import CustomDropdown from '../../../../../../../shared/components/Dropdown';

import { ReactComponent as Doc } from '../../../../../../../App/assets/images/doc.svg';

const TaskDetail = ({ task, project }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProjectTasks(project._id));
  // }, [dispatch]);
  const tasks = useSelector((store) => store.project.tasks);

  return (
    <div>
      <div
        onClick={() => {
          dispatch(getTask(task._id));
          setToggleModal(!toggleModal);
        }}
      >
        <Waffle />
      </div>
      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header>{project.projectcode}</Modal.Header>
        <Modal.Body>
          <div style={{ overflowY: 'auto', height: '100%' }}>
            <div>
              <h2>{task.taskname}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    border: '1px solid red',
                    padding: '7px 10px',
                    borderRadius: '2px',
                  }}
                >
                  <Doc /> attach
                </div>
                <div>Add Checklist</div>
                <div>
                  <p>Predecessor</p>
                  <div style={{ width: '200px' }}>
                    <Select
                      options={tasks}
                      getOptionLabel={(option) => option.taskname}
                      getOptionValue={(option) => option._id}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '70%' }}>
                <label htmlFor='description' value='description'>
                  <textarea placeholder='description' />
                </label>
              </div>
              <div style={{ width: '30%' }}>Assignee, etc</div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaskDetail;

// import React, { useState, Fragment, useRef } from 'react';
// import { Formik, Form } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';

// import {
//   getTask,
//   updateTask,
// } from '../../../../../../../Redux/actions/projectActions';

// import { PrimaryActions, SecondaryActions } from './Actions';

// import {
//   Waffle,
//   DetailButton,
//   SubmitButton,
// } from '../../../../../../../shared/components/Buttons';
// import Modal from '../../../../../../../shared/components/ModalTwo';

// const TaskModal = ({ task, project }) => {
//   const modalRef = useRef();

//   const openModal = () => {
//     modalRef.current.openModal();
//   };

//   const dispatch = useDispatch();
//   return (
//     <Fragment>
//       <div
//         onClick={() => {
//           dispatch(getTask(task._id));
//           openModal();
//         }}
//       >
//         <Waffle />
//       </div>
//       <Modal ref={modalRef} width={60} top={450}>
//         {/* Header component */}
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <div style={{ display: 'flex', gap: '10px' }}>
//             <div>
//               <h2>{project.projectcode}</h2>
//             </div>
//             {task.tasknumber && (
//               <div>
//                 {' / '}
//                 {task.tasknumber}
//               </div>
//             )}
//           </div>
//           <div>
//             <DetailButton />
//           </div>
//         </div>
//         {/* Main section */}
//         <div>
//           <div>
//             {/* Section header */}
//             <div>
//               <h3>{task.taskname}</h3>
//             </div>
//             <div>
//               <div>attach</div>
//               <div>Add checklist</div>
//               <div>
//                 <p>Predecessor</p>
//                 <div>Task number</div>
//               </div>
//             </div>
//           </div>
//           <div></div>
//         </div>

//         <button onClick={() => modalRef.current.close()}>Close</button>
//       </Modal>
//     </Fragment>
//   );
// };

// export default TaskModal;
