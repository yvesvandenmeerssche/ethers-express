/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface LinearTrueDistributorInterface extends ethers.utils.Interface {
  functions: {
    "distribute()": FunctionFragment;
    "distributed()": FunctionFragment;
    "distributionStart()": FunctionFragment;
    "duration()": FunctionFragment;
    "empty()": FunctionFragment;
    "farm()": FunctionFragment;
    "initialize(uint256,uint256,uint256,address)": FunctionFragment;
    "lastDistribution()": FunctionFragment;
    "nextDistribution()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFarm(address)": FunctionFragment;
    "totalAmount()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "trustToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "distribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributionStart",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(functionFragment: "empty", values?: undefined): string;
  encodeFunctionData(functionFragment: "farm", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setFarm", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "trustToken",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributionStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "empty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "farm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFarm", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "trustToken", data: BytesLike): Result;

  events: {
    "Distributed(uint256)": EventFragment;
    "FarmChanged(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Distributed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FarmChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class LinearTrueDistributor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: LinearTrueDistributorInterface;

  functions: {
    distribute(overrides?: Overrides): Promise<ContractTransaction>;

    "distribute()"(overrides?: Overrides): Promise<ContractTransaction>;

    distributed(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "distributed()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    distributionStart(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "distributionStart()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    duration(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "duration()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    empty(overrides?: Overrides): Promise<ContractTransaction>;

    "empty()"(overrides?: Overrides): Promise<ContractTransaction>;

    farm(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "farm()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    initialize(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(uint256,uint256,uint256,address)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lastDistribution(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lastDistribution()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    nextDistribution(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "nextDistribution()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setFarm(
      newFarm: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFarm(address)"(
      newFarm: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    totalAmount(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalAmount()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    trustToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "trustToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  distribute(overrides?: Overrides): Promise<ContractTransaction>;

  "distribute()"(overrides?: Overrides): Promise<ContractTransaction>;

  distributed(overrides?: CallOverrides): Promise<BigNumber>;

  "distributed()"(overrides?: CallOverrides): Promise<BigNumber>;

  distributionStart(overrides?: CallOverrides): Promise<BigNumber>;

  "distributionStart()"(overrides?: CallOverrides): Promise<BigNumber>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

  empty(overrides?: Overrides): Promise<ContractTransaction>;

  "empty()"(overrides?: Overrides): Promise<ContractTransaction>;

  farm(overrides?: CallOverrides): Promise<string>;

  "farm()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _distributionStart: BigNumberish,
    _duration: BigNumberish,
    _amount: BigNumberish,
    _trustToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(uint256,uint256,uint256,address)"(
    _distributionStart: BigNumberish,
    _duration: BigNumberish,
    _amount: BigNumberish,
    _trustToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lastDistribution(overrides?: CallOverrides): Promise<BigNumber>;

  "lastDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

  nextDistribution(overrides?: CallOverrides): Promise<BigNumber>;

  "nextDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setFarm(newFarm: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setFarm(address)"(
    newFarm: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "totalAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  trustToken(overrides?: CallOverrides): Promise<string>;

  "trustToken()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    distribute(overrides?: CallOverrides): Promise<void>;

    "distribute()"(overrides?: CallOverrides): Promise<void>;

    distributed(overrides?: CallOverrides): Promise<BigNumber>;

    "distributed()"(overrides?: CallOverrides): Promise<BigNumber>;

    distributionStart(overrides?: CallOverrides): Promise<BigNumber>;

    "distributionStart()"(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

    empty(overrides?: CallOverrides): Promise<void>;

    "empty()"(overrides?: CallOverrides): Promise<void>;

    farm(overrides?: CallOverrides): Promise<string>;

    "farm()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(uint256,uint256,uint256,address)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lastDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    "lastDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    "nextDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setFarm(newFarm: string, overrides?: CallOverrides): Promise<void>;

    "setFarm(address)"(
      newFarm: string,
      overrides?: CallOverrides
    ): Promise<void>;

    totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    trustToken(overrides?: CallOverrides): Promise<string>;

    "trustToken()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Distributed(amount: null): EventFilter;

    FarmChanged(newFarm: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    distribute(overrides?: Overrides): Promise<BigNumber>;

    "distribute()"(overrides?: Overrides): Promise<BigNumber>;

    distributed(overrides?: CallOverrides): Promise<BigNumber>;

    "distributed()"(overrides?: CallOverrides): Promise<BigNumber>;

    distributionStart(overrides?: CallOverrides): Promise<BigNumber>;

    "distributionStart()"(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

    empty(overrides?: Overrides): Promise<BigNumber>;

    "empty()"(overrides?: Overrides): Promise<BigNumber>;

    farm(overrides?: CallOverrides): Promise<BigNumber>;

    "farm()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(uint256,uint256,uint256,address)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lastDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    "lastDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    "nextDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setFarm(newFarm: string, overrides?: Overrides): Promise<BigNumber>;

    "setFarm(address)"(
      newFarm: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    trustToken(overrides?: CallOverrides): Promise<BigNumber>;

    "trustToken()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    distribute(overrides?: Overrides): Promise<PopulatedTransaction>;

    "distribute()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    distributed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "distributed()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributionStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "distributionStart()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "duration()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    empty(overrides?: Overrides): Promise<PopulatedTransaction>;

    "empty()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    farm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "farm()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(uint256,uint256,uint256,address)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lastDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastDistribution()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextDistribution()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setFarm(
      newFarm: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFarm(address)"(
      newFarm: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    totalAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalAmount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    trustToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "trustToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
