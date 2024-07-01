class UserRoles {
  static Admin = 0;
  static Manufacturer = 1;
  static Supplier = 2;
  static Vendor = 3;
  static Customer = 4;
}

function userRoleFromString(role) {
  switch (role) {
    case "Admin":
      return UserRoles.Admin;
    case "Manufacturer":
      return UserRoles.Manufacturer;
    case "Supplier":
      return UserRoles.Supplier;
    case "Vendor":
      return UserRoles.Vendor;
    case "Customer":
      return UserRoles.Customer;
    default:
      return UserRoles.Customer;
  }
}

function userRoleToString(role) {
  switch (role) {
    case UserRoles.Admin:
      return "Admin";
    case UserRoles.Manufacturer:
      return "Manufacturer";
    case UserRoles.Supplier:
      return "Supplier";
    case UserRoles.Vendor:
      return "Vendor";
    case UserRoles.Customer:
      return "Customer";
    default:
      return "Customer";
  }
}

export { userRoleToString, userRoleFromString, UserRoles };
