/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ProxyStorage } from "./ProxyStorage";

export class ProxyStorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ProxyStorage> {
    return super.deploy(overrides || {}) as Promise<ProxyStorage>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProxyStorage {
    return super.attach(address) as ProxyStorage;
  }
  connect(signer: Signer): ProxyStorageFactory {
    return super.connect(signer) as ProxyStorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyStorage {
    return new Contract(address, _abi, signerOrProvider) as ProxyStorage;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
    name: "balanceOf",
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
    name: "totalSupply",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b5061012c806100206000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c806318160ddd14604157806370a08231146059578063dd62ed3e146089575b600080fd5b604760c1565b60408051918252519081900360200190f35b604760048036036020811015606d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1660c7565b604760048036036040811015609d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351660d9565b60015481565b60026020526000908152604090205481565b60036020908152600092835260408084209091529082529020548156fea26469706673582212204de14fb07da4eb0b68132e32dadbb284fd102306e463a9ebeb63be3fb43fcb5f64736f6c634300060a0033";
