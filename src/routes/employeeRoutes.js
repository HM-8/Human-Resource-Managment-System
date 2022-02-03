 
import UserProfile from "../views/UserProfile";



const employeeRoutes = [
  {
    path: "/user",
    name: "Add New Admin",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/employee",
  }
 
];

export default employeeRoutes;
