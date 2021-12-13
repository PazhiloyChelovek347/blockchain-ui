export const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "masterId",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "sid",
				"type": "uint256"
			}
		],
		"name": "addServiceToMaster",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addressUser",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "upassword",
				"type": "string"
			}
		],
		"name": "authorization",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "masterId",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "customerId",
				"type": "address"
			}
		],
		"name": "createBook",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "masterId",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "customerId",
						"type": "address"
					}
				],
				"internalType": "struct Contract.Book",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			}
		],
		"name": "createService",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addressUser",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "FIO",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "upassword",
				"type": "string"
			}
		],
		"name": "createUser",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "masterId",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "sid",
				"type": "uint256"
			}
		],
		"name": "deleteServiceFromMaster",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "deleteUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addressUser",
						"type": "address"
					},
					{
						"internalType": "uint256[]",
						"name": "services",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "upassword",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "FIO",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "role",
						"type": "uint256"
					}
				],
				"internalType": "struct Contract.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBookings",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "masterId",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "customerId",
						"type": "address"
					}
				],
				"internalType": "struct Contract.Book[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getBookingsById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "masterId",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "customerId",
						"type": "address"
					}
				],
				"internalType": "struct Contract.Book",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getServiceById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "price",
						"type": "int256"
					}
				],
				"internalType": "struct Contract.Service",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getServices",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "price",
						"type": "int256"
					}
				],
				"internalType": "struct Contract.Service[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addressUser",
						"type": "address"
					},
					{
						"internalType": "uint256[]",
						"name": "services",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "upassword",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "FIO",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "role",
						"type": "uint256"
					}
				],
				"internalType": "struct Contract.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "masterId",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rubles",
				"type": "uint256"
			}
		],
		"name": "payBooking",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			}
		],
		"name": "setRole",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "coef",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "divider",
				"type": "int256"
			}
		],
		"name": "updateAllPrices",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "newPrice",
				"type": "int256"
			}
		],
		"name": "updateServicePrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "address",
				"name": "addressUser",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "upassword",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "FIO",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]