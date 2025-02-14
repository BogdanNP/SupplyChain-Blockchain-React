// SupplyChain address:
export const CONTRACT_ADDRESS_SUPPLYCHAIN =
  // Sepolia:
  "0xe6611583e4C53D6A190Ba546F095A0e18cfEE5Fb";
// Localhost:
// "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

// Users address:
export const CONTRACT_ADDRESS_USERS =
  // Sepolia:
  "0x701C6729A906E7979006a6bc3470D8DCfCEB8488";
// Localhost:
// "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

// Products address:
export const CONTRACT_ADDRESS_PRODUCTS =
  // Sepolia:
  "0x84Ac5cd451e95F0702409B799fcd7d1680683F8F";
// Localhost:
// "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

export const CONTRACT_ABI_SUPPLYCHAIN = [
  {
    inputs: [
      {
        internalType: "address",
        name: "usersAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "productsAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sellerId_",
        type: "address",
      },
      {
        internalType: "string",
        name: "barcodeId_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "currentTime_",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "acceptSell",
        type: "bool",
      },
    ],
    name: "acceptSellRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "productTypeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "manufacturingDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isBatch",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "batchCount",
            type: "uint256",
          },
        ],
        internalType: "struct Types.ProductAddDTO",
        name: "product_",
        type: "tuple",
      },
    ],
    name: "addProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "details",
            type: "string",
          },
        ],
        internalType: "struct Types.ProductTypeAddDTO",
        name: "productType_",
        type: "tuple",
      },
    ],
    name: "addProductType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum Types.UserRole",
            name: "role",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "id",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
        ],
        internalType: "struct Types.UserDetails",
        name: "user_",
        type: "tuple",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "barcodeId",
        type: "string",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "blockProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "recipeId",
        type: "uint256",
      },
    ],
    name: "createProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "buyerId_",
        type: "address",
      },
      {
        internalType: "string",
        name: "barcodeId_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "currentTime_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "createSellRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUser",
    outputs: [
      {
        components: [
          {
            internalType: "enum Types.UserRole",
            name: "role",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "id",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
        ],
        internalType: "struct Types.UserDetails",
        name: "user",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "products",
    outputs: [
      {
        internalType: "contract ProductsInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "users",
    outputs: [
      {
        internalType: "contract UsersInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const CONTRACT_ABI_USERS = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "email_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "id",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum Types.UserRole",
        name: "role",
        type: "uint8",
      },
    ],
    name: "NewUser",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum Types.UserRole",
            name: "role",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "id",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
        ],
        internalType: "struct Types.UserDetails",
        name: "user",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "myAccount",
        type: "address",
      },
    ],
    name: "_addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address",
      },
      {
        internalType: "string",
        name: "cif",
        type: "string",
      },
    ],
    name: "_linkByCIF",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum Types.UserRole",
            name: "role",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "id",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
        ],
        internalType: "struct Types.UserDetails",
        name: "user",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "myAccount",
        type: "address",
      },
    ],
    name: "_register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "customersCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "get",
    outputs: [
      {
        components: [
          {
            internalType: "enum Types.UserRole",
            name: "role",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "id",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
        ],
        internalType: "struct Types.UserDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getManufacturerDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "code",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "region",
            type: "uint256",
          },
        ],
        internalType: "struct Types.ManufacturerDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "manufacturerDetailList",
    outputs: [
      {
        internalType: "uint256",
        name: "code",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "region",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manufacutersCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "suppliersCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "enum Types.UserRole",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "id",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "usersByCIF",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "usersByIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usersCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vendorsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const CONTRACT_ABI_PRODUCTS = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "barcodeId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "BlockedProduct",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "manufacturerName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "barcodeId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "manDateEpoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expDateEpoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "parentProducts",
        type: "string[]",
      },
    ],
    name: "ComposedProduct",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "manufacturerName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "barcodeId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "manDateEpoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expDateEpoch",
        type: "uint256",
      },
    ],
    name: "NewProduct",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "NewProductType",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "resultTypeId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "resultTypeName",
        type: "string",
      },
    ],
    name: "NewRecipe",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "transferId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "barcodeId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum Types.ObjectStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "ObjectTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "productTypeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "manufacturingDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isBatch",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "batchCount",
            type: "uint256",
          },
        ],
        internalType: "struct Types.ProductAddDTO",
        name: "product_",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "code",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "region",
            type: "uint256",
          },
        ],
        internalType: "struct Types.ManufacturerDetails",
        name: "manufacturerDetails",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "manufacturerName",
        type: "string",
      },
      {
        internalType: "address",
        name: "myAccount",
        type: "address",
      },
    ],
    name: "_addProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "details",
            type: "string",
          },
        ],
        internalType: "struct Types.ProductTypeAddDTO",
        name: "productType",
        type: "tuple",
      },
    ],
    name: "_addProductType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "details",
            type: "string",
          },
        ],
        internalType: "struct Types.ProductTypeAddDTO[]",
        name: "productTypeList",
        type: "tuple[]",
      },
    ],
    name: "_addProductTypeList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "resultTypeId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "resultTypeName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "ingredientsCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantityResult",
            type: "uint256",
          },
        ],
        internalType: "struct Types.Recipe",
        name: "recipe",
        type: "tuple",
      },
    ],
    name: "_addRecipe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "resultTypeId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "resultTypeName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "ingredientsCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantityResult",
            type: "uint256",
          },
        ],
        internalType: "struct Types.Recipe[]",
        name: "recipeList",
        type: "tuple[]",
      },
    ],
    name: "_addRecipeList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "recipeId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "code",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "region",
            type: "uint256",
          },
        ],
        internalType: "struct Types.ManufacturerDetails",
        name: "manufacturerDetails",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum Types.UserRole",
            name: "role",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "id",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
        ],
        internalType: "struct Types.UserDetails",
        name: "user",
        type: "tuple",
      },
    ],
    name: "_createProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_transferId",
        type: "uint256",
      },
    ],
    name: "acceptTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "accountTransferCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accountTransfers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "barcodeId",
        type: "string",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "blockProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "blockedProducts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_transferId",
        type: "uint256",
      },
    ],
    name: "getTransferStatus",
    outputs: [
      {
        internalType: "enum Types.ObjectStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "parentProducts",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "productCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "productTypeCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "productTypes",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "details",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "products",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "productTypeId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "barcodeId",
        type: "string",
      },
      {
        internalType: "string",
        name: "manufacturerName",
        type: "string",
      },
      {
        internalType: "address",
        name: "manufacturerId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "manufacturingDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expirationDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recipeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ingredientsCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recipeCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "recipeIngredients",
    outputs: [
      {
        internalType: "uint256",
        name: "recipeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productTypeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productQuantity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "recipes",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "resultTypeId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "resultTypeName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "ingredientsCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantityResult",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_transferId",
        type: "uint256",
      },
    ],
    name: "refuseTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_barcodeId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "requestTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stockItemCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transferCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfers",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "barcodeId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "enum Types.ObjectStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userLinkedStockItems",
    outputs: [
      {
        internalType: "string",
        name: "barcodeId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
