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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IVRFSubscriptionV2PlusInterface extends ethers.utils.Interface {
  functions: {
    "acceptSubscriptionOwnerTransfer(uint256)": FunctionFragment;
    "addConsumer(uint256,address)": FunctionFragment;
    "cancelSubscription(uint256,address)": FunctionFragment;
    "createSubscription()": FunctionFragment;
    "fundSubscriptionWithNative(uint256)": FunctionFragment;
    "getActiveSubscriptionIds(uint256,uint256)": FunctionFragment;
    "getSubscription(uint256)": FunctionFragment;
    "pendingRequestExists(uint256)": FunctionFragment;
    "removeConsumer(uint256,address)": FunctionFragment;
    "requestSubscriptionOwnerTransfer(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptSubscriptionOwnerTransfer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addConsumer",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelSubscription",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createSubscription",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundSubscriptionWithNative",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveSubscriptionIds",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscription",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRequestExists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeConsumer",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "requestSubscriptionOwnerTransfer",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptSubscriptionOwnerTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundSubscriptionWithNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveSubscriptionIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRequestExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestSubscriptionOwnerTransfer",
    data: BytesLike
  ): Result;

  events: {};
}

export class IVRFSubscriptionV2Plus extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IVRFSubscriptionV2PlusInterface;

  functions: {
    acceptSubscriptionOwnerTransfer(
      subId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "acceptSubscriptionOwnerTransfer(uint256)"(
      subId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addConsumer(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addConsumer(uint256,address)"(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cancelSubscription(
      subId: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelSubscription(uint256,address)"(
      subId: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createSubscription(overrides?: Overrides): Promise<ContractTransaction>;

    "createSubscription()"(overrides?: Overrides): Promise<ContractTransaction>;

    fundSubscriptionWithNative(
      subId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "fundSubscriptionWithNative(uint256)"(
      subId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    getActiveSubscriptionIds(
      startIndex: BigNumberish,
      maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "getActiveSubscriptionIds(uint256,uint256)"(
      startIndex: BigNumberish,
      maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getSubscription(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string[]] & {
        balance: BigNumber;
        nativeBalance: BigNumber;
        reqCount: BigNumber;
        owner: string;
        consumers: string[];
      }
    >;

    "getSubscription(uint256)"(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string[]] & {
        balance: BigNumber;
        nativeBalance: BigNumber;
        reqCount: BigNumber;
        owner: string;
        consumers: string[];
      }
    >;

    pendingRequestExists(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "pendingRequestExists(uint256)"(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeConsumer(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeConsumer(uint256,address)"(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    requestSubscriptionOwnerTransfer(
      subId: BigNumberish,
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "requestSubscriptionOwnerTransfer(uint256,address)"(
      subId: BigNumberish,
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  acceptSubscriptionOwnerTransfer(
    subId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "acceptSubscriptionOwnerTransfer(uint256)"(
    subId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addConsumer(
    subId: BigNumberish,
    consumer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addConsumer(uint256,address)"(
    subId: BigNumberish,
    consumer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cancelSubscription(
    subId: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelSubscription(uint256,address)"(
    subId: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createSubscription(overrides?: Overrides): Promise<ContractTransaction>;

  "createSubscription()"(overrides?: Overrides): Promise<ContractTransaction>;

  fundSubscriptionWithNative(
    subId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "fundSubscriptionWithNative(uint256)"(
    subId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  getActiveSubscriptionIds(
    startIndex: BigNumberish,
    maxCount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getActiveSubscriptionIds(uint256,uint256)"(
    startIndex: BigNumberish,
    maxCount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getSubscription(
    subId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, string[]] & {
      balance: BigNumber;
      nativeBalance: BigNumber;
      reqCount: BigNumber;
      owner: string;
      consumers: string[];
    }
  >;

  "getSubscription(uint256)"(
    subId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, string[]] & {
      balance: BigNumber;
      nativeBalance: BigNumber;
      reqCount: BigNumber;
      owner: string;
      consumers: string[];
    }
  >;

  pendingRequestExists(
    subId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "pendingRequestExists(uint256)"(
    subId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeConsumer(
    subId: BigNumberish,
    consumer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeConsumer(uint256,address)"(
    subId: BigNumberish,
    consumer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  requestSubscriptionOwnerTransfer(
    subId: BigNumberish,
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "requestSubscriptionOwnerTransfer(uint256,address)"(
    subId: BigNumberish,
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptSubscriptionOwnerTransfer(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "acceptSubscriptionOwnerTransfer(uint256)"(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addConsumer(
      subId: BigNumberish,
      consumer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addConsumer(uint256,address)"(
      subId: BigNumberish,
      consumer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelSubscription(
      subId: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelSubscription(uint256,address)"(
      subId: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createSubscription(overrides?: CallOverrides): Promise<BigNumber>;

    "createSubscription()"(overrides?: CallOverrides): Promise<BigNumber>;

    fundSubscriptionWithNative(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "fundSubscriptionWithNative(uint256)"(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getActiveSubscriptionIds(
      startIndex: BigNumberish,
      maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getActiveSubscriptionIds(uint256,uint256)"(
      startIndex: BigNumberish,
      maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getSubscription(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string[]] & {
        balance: BigNumber;
        nativeBalance: BigNumber;
        reqCount: BigNumber;
        owner: string;
        consumers: string[];
      }
    >;

    "getSubscription(uint256)"(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string[]] & {
        balance: BigNumber;
        nativeBalance: BigNumber;
        reqCount: BigNumber;
        owner: string;
        consumers: string[];
      }
    >;

    pendingRequestExists(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "pendingRequestExists(uint256)"(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeConsumer(
      subId: BigNumberish,
      consumer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeConsumer(uint256,address)"(
      subId: BigNumberish,
      consumer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    requestSubscriptionOwnerTransfer(
      subId: BigNumberish,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "requestSubscriptionOwnerTransfer(uint256,address)"(
      subId: BigNumberish,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    acceptSubscriptionOwnerTransfer(
      subId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "acceptSubscriptionOwnerTransfer(uint256)"(
      subId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addConsumer(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addConsumer(uint256,address)"(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    cancelSubscription(
      subId: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelSubscription(uint256,address)"(
      subId: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createSubscription(overrides?: Overrides): Promise<BigNumber>;

    "createSubscription()"(overrides?: Overrides): Promise<BigNumber>;

    fundSubscriptionWithNative(
      subId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "fundSubscriptionWithNative(uint256)"(
      subId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    getActiveSubscriptionIds(
      startIndex: BigNumberish,
      maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getActiveSubscriptionIds(uint256,uint256)"(
      startIndex: BigNumberish,
      maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubscription(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSubscription(uint256)"(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingRequestExists(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRequestExists(uint256)"(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeConsumer(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeConsumer(uint256,address)"(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    requestSubscriptionOwnerTransfer(
      subId: BigNumberish,
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "requestSubscriptionOwnerTransfer(uint256,address)"(
      subId: BigNumberish,
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptSubscriptionOwnerTransfer(
      subId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "acceptSubscriptionOwnerTransfer(uint256)"(
      subId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addConsumer(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addConsumer(uint256,address)"(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    cancelSubscription(
      subId: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelSubscription(uint256,address)"(
      subId: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createSubscription(overrides?: Overrides): Promise<PopulatedTransaction>;

    "createSubscription()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    fundSubscriptionWithNative(
      subId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "fundSubscriptionWithNative(uint256)"(
      subId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    getActiveSubscriptionIds(
      startIndex: BigNumberish,
      maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getActiveSubscriptionIds(uint256,uint256)"(
      startIndex: BigNumberish,
      maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubscription(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSubscription(uint256)"(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingRequestExists(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingRequestExists(uint256)"(
      subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeConsumer(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeConsumer(uint256,address)"(
      subId: BigNumberish,
      consumer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    requestSubscriptionOwnerTransfer(
      subId: BigNumberish,
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "requestSubscriptionOwnerTransfer(uint256,address)"(
      subId: BigNumberish,
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
