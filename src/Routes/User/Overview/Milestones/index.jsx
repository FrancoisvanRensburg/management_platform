import React from 'react';

import {
  MilestonesWrapper,
  ComponentHeader,
  MilestonesContainer,
  Table,
  THead,
  Tcell,
} from './Styles';

const UserMilestones = () => {
  return (
    <MilestonesWrapper>
      <ComponentHeader>Milestones</ComponentHeader>
      <MilestonesContainer>
        <Table>
          <thead>
            <tr>
              <THead>Upcoming events</THead>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Tcell>Under development</Tcell>
            </tr>
            <tr>
              <Tcell>Under development</Tcell>
            </tr>
            <tr>
              <Tcell>Under development</Tcell>
            </tr>
          </tbody>
        </Table>
        <Table>
          <thead>
            <tr>
              <THead>Under development</THead>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Tcell>Under development</Tcell>
            </tr>
            <tr>
              <Tcell>Under development</Tcell>
            </tr>
          </tbody>
        </Table>
      </MilestonesContainer>
    </MilestonesWrapper>
  );
};

export default UserMilestones;

// div className='milstns-container'>
//         <div className='mls'>
//           <h3>Upcoming events</h3>
//           <ul>
//             <li>DevOps - push events feature to codebase</li>
//             <li>DevOps - push events feature to codebase</li>
//             <li>DevOps - push events feature to codebase</li>
//             <li></li>
//           </ul>
//         </div>
//         <div className='mls'>
//           <h3>Upcoming meetings</h3>
//           <ul>
//             <li>Internal progress meeting</li>
//             <li>Client progress presentation</li>
//             <li>Client progress presentation</li>
//           </ul>
//         </div>
//       </div>
