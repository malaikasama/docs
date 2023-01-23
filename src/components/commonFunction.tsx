import React from "react";
import { PbdModuleString } from "../models/pbdModuleString";
import { Entity } from "../models/entity";
import { Link } from "react-router-dom";

enum SharedFunction {
  Comments = "Comments",
  Files = "Files",
  AuditTrail = "AuditTrail",
  CustomFields = "CustomFields",
  Workflows = "Workflows",
  Costs = "Costs",
}

interface App {
  appName: PbdModuleString;
  appEntity?: Entity;
  sharedFunctions: SharedFunction[];
}

const data: App[] = [
  {
    appName: PbdModuleString.AbsencePlanner,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
    ],
  },
  {
    appName: PbdModuleString.AuditManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
    ],
  },
  {
    appName: PbdModuleString.Blog,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.ClaimManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.Crm,
    appEntity: Entity.Organisation,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
    ],
  },
  {
    appName: PbdModuleString.Crm,
    appEntity: Entity.OrganisationRating,
    sharedFunctions: [SharedFunction.Files, SharedFunction.AuditTrail],
  },
  {
    appName: PbdModuleString.DocumentManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.Employees,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.DefectManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.CustomForms,
    sharedFunctions: [SharedFunction.AuditTrail],
  },
  {
    appName: PbdModuleString.GoalManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.IdeaManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.MaintenanceManagement,
    appEntity: Entity.InventoryItems,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.MaintenanceManagement,
    appEntity: Entity.InspectionsDone,
    sharedFunctions: [SharedFunction.Files],
  },
  {
    appName: PbdModuleString.ProjectAndTaskManagement,
    appEntity: Entity.Projects,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.ProjectAndTaskManagement,
    appEntity: Entity.Tasks,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.Products,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.OpportunityManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
    ],
  },
  {
    appName: PbdModuleString.TrainingManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.KnowledgeBase,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
];

interface IProps {
  app: PbdModuleString;
  entity?: Entity;
}

// export default function CommonFunction({ app }: IProps, { entity }: IProps) {
//   const func = () => {
//     if (typeof entity !== "undefined") {
//       {
//         const filteredEntity = data.filter((x) => x.appEntity === entity);
//         filteredEntity.map((item, index) => (
//           <React.Fragment key={index}>
//             {item.sharedFunctions.map((sharedFunction, index) => (
//               <tr key={index}>
//                 <td>
//                   <Link to={"/docs/common-features"}>{sharedFunction}</Link>
//                 </td>
//                 <td></td>
//               </tr>
//             ))}
//           </React.Fragment>
//         ));
//       }
//     } else {
//       {
//         const filteredName = data.filter((x) => x.appName === app);
//         filteredName.map((item, index) => (
//           <React.Fragment key={index}>
//             {item.sharedFunctions.map((sharedFunction, index) => (
//               <tr key={index}>
//                 <td>
//                   <Link to={"/docs/common-features"}>{sharedFunction}</Link>
//                 </td>
//                 <td></td>
//               </tr>
//             ))}
//           </React.Fragment>
//         ));
//       }
//     }
//   };
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Shared Functions</th>
//           <th>Description</th>
//         </tr>
//       </thead>
//       <tbody>{func}</tbody>
//     </table>
//   );
// }

export default function CommonFunction({ app, entity }: IProps) {
  const filteredData = data.filter(
    (x) => x.appName === app && x.appEntity === entity
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Shared Functions</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <React.Fragment key={index}>
            {item.sharedFunctions.map((sharedFunction, index) => (
              <tr key={index}>
                <td>
                  <Link to={"/docs/common-features"}>{sharedFunction}</Link>
                </td>

                <td></td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
