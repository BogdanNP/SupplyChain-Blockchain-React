export const CONTRACT_ADDRESS_SUPPLYCHAIN =
  "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
export const CONTRACT_ADDRESS_USERS =
  "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
export const CONTRACT_ADDRESS_PRODUCTS =
  "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
export const CONTRACT_ADDRESS_OBJECT_TRANSFERS =
  "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

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
        internalType: "uint256",
        name: "recepieId",
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
    inputs: [],
    name: "usersCount",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
    name: "NewRecepie",
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
        name: "manufacurerName",
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
        internalType: "string",
        name: "buyerName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "buyerEmail",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sellerName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sellerEmail",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestTime",
        type: "uint256",
      },
    ],
    name: "ProductOwnershipTransferRequest",
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
        name: "manufacurerName",
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
        internalType: "string",
        name: "buyerName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "buyerEmail",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sellerName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sellerEmail",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "responseTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
    ],
    name: "ProductOwnershipTransferResponse",
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
        internalType: "struct Types.Recepie",
        name: "recepie",
        type: "tuple",
      },
    ],
    name: "_addRecepie",
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
        internalType: "struct Types.Recepie[]",
        name: "recepieList",
        type: "tuple[]",
      },
    ],
    name: "_addRecepieList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "recepieId",
        type: "uint256",
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
        internalType: "bool",
        name: "isBatch",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "batchCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recepieId",
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
    name: "recepieCounter",
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
    name: "recepieIngredients",
    outputs: [
      {
        internalType: "uint256",
        name: "recepieId",
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
    name: "recepies",
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
    name: "userLinkedProducts",
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
];

export const CONTRACT_ABI_OBJECT_TRANSFERS = [];
