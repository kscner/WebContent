/**
 *
 */

var abi=
[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "result",
				"type": "string"
			}
		],
		"name": "MyEvent",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "plaintext",
				"type": "string"
			}
		],
		"name": "play",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ciphertext",
				"type": "bytes32"
			}
		],
		"name": "start",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "plaintext",
				"type": "string"
			}
		],
		"name": "startAndPlay",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_plaintext1",
				"type": "string"
			},
			{
				"name": "_plaintext2",
				"type": "string"
			}
		],
		"name": "getResult",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "player1",
		"outputs": [
			{
				"name": "plaintext",
				"type": "string"
			},
			{
				"name": "ciphertext",
				"type": "bytes32"
			},
			{
				"name": "status",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "player2",
		"outputs": [
			{
				"name": "plaintext",
				"type": "string"
			},
			{
				"name": "ciphertext",
				"type": "bytes32"
			},
			{
				"name": "status",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "plaintext",
				"type": "string"
			}
		],
		"name": "test",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
];
