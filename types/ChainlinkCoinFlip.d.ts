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

interface ChainlinkCoinFlipInterface extends ethers.utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "bets(uint256)": FunctionFragment;
    "callbackGasLimit()": FunctionFragment;
    "coinTossBets(uint256)": FunctionFragment;
    "getBetData(uint256)": FunctionFragment;
    "getBetStatus(uint256)": FunctionFragment;
    "getUserBet(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "playWithVRF(bool)": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
    "s_vrfCoordinator()": FunctionFragment;
    "setCoordinator(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bets", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "callbackGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coinTossBets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBetData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBetStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserBet",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "playWithVRF",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "s_vrfCoordinator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCoordinator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "callbackGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coinTossBets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBetData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBetStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getUserBet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "playWithVRF",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_vrfCoordinator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCoordinator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "CoordinatorSet(address)": EventFragment;
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PlaceBet(uint256,address,bool)": EventFragment;
    "Roll(uint256,address,bool,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CoordinatorSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlaceBet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Roll"): EventFragment;
}

export class ChainlinkCoinFlip extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ChainlinkCoinFlipInterface;

  functions: {
    acceptOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "acceptOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    bets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber, boolean] & {
        resolved: boolean;
        user: string;
        id: BigNumber;
        blockTime: BigNumber;
        betStatus: boolean;
      }
    >;

    "bets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber, boolean] & {
        resolved: boolean;
        user: string;
        id: BigNumber;
        blockTime: BigNumber;
        betStatus: boolean;
      }
    >;

    callbackGasLimit(overrides?: CallOverrides): Promise<[number]>;

    "callbackGasLimit()"(overrides?: CallOverrides): Promise<[number]>;

    coinTossBets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, boolean] & { face: boolean; rolled: boolean }>;

    "coinTossBets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, boolean] & { face: boolean; rolled: boolean }>;

    getBetData(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [boolean, string, BigNumber, BigNumber, boolean] & {
          resolved: boolean;
          user: string;
          id: BigNumber;
          blockTime: BigNumber;
          betStatus: boolean;
        }
      ] & {
        betData: [boolean, string, BigNumber, BigNumber, boolean] & {
          resolved: boolean;
          user: string;
          id: BigNumber;
          blockTime: BigNumber;
          betStatus: boolean;
        };
      }
    >;

    "getBetData(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [boolean, string, BigNumber, BigNumber, boolean] & {
          resolved: boolean;
          user: string;
          id: BigNumber;
          blockTime: BigNumber;
          betStatus: boolean;
        }
      ] & {
        betData: [boolean, string, BigNumber, BigNumber, boolean] & {
          resolved: boolean;
          user: string;
          id: BigNumber;
          blockTime: BigNumber;
          betStatus: boolean;
        };
      }
    >;

    getBetStatus(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    "getBetStatus(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    getUserBet(
      user: string,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          [boolean, string, BigNumber, BigNumber, boolean] & {
            resolved: boolean;
            user: string;
            id: BigNumber;
            blockTime: BigNumber;
            betStatus: boolean;
          },
          [boolean, boolean] & { face: boolean; rolled: boolean }
        ] & {
          bet: [boolean, string, BigNumber, BigNumber, boolean] & {
            resolved: boolean;
            user: string;
            id: BigNumber;
            blockTime: BigNumber;
            betStatus: boolean;
          };
          coinTossBet: [boolean, boolean] & { face: boolean; rolled: boolean };
        })[]
      ]
    >;

    "getUserBet(address,uint256)"(
      user: string,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          [boolean, string, BigNumber, BigNumber, boolean] & {
            resolved: boolean;
            user: string;
            id: BigNumber;
            blockTime: BigNumber;
            betStatus: boolean;
          },
          [boolean, boolean] & { face: boolean; rolled: boolean }
        ] & {
          bet: [boolean, string, BigNumber, BigNumber, boolean] & {
            resolved: boolean;
            user: string;
            id: BigNumber;
            blockTime: BigNumber;
            betStatus: boolean;
          };
          coinTossBet: [boolean, boolean] & { face: boolean; rolled: boolean };
        })[]
      ]
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    playWithVRF(
      face: boolean,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "playWithVRF(bool)"(
      face: boolean,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "rawFulfillRandomWords(uint256,uint256[])"(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    s_vrfCoordinator(overrides?: CallOverrides): Promise<[string]>;

    "s_vrfCoordinator()"(overrides?: CallOverrides): Promise<[string]>;

    setCoordinator(
      _vrfCoordinator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCoordinator(address)"(
      _vrfCoordinator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "acceptOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  bets(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber, BigNumber, boolean] & {
      resolved: boolean;
      user: string;
      id: BigNumber;
      blockTime: BigNumber;
      betStatus: boolean;
    }
  >;

  "bets(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber, BigNumber, boolean] & {
      resolved: boolean;
      user: string;
      id: BigNumber;
      blockTime: BigNumber;
      betStatus: boolean;
    }
  >;

  callbackGasLimit(overrides?: CallOverrides): Promise<number>;

  "callbackGasLimit()"(overrides?: CallOverrides): Promise<number>;

  coinTossBets(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, boolean] & { face: boolean; rolled: boolean }>;

  "coinTossBets(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, boolean] & { face: boolean; rolled: boolean }>;

  getBetData(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber, BigNumber, boolean] & {
      resolved: boolean;
      user: string;
      id: BigNumber;
      blockTime: BigNumber;
      betStatus: boolean;
    }
  >;

  "getBetData(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber, BigNumber, boolean] & {
      resolved: boolean;
      user: string;
      id: BigNumber;
      blockTime: BigNumber;
      betStatus: boolean;
    }
  >;

  getBetStatus(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  "getBetStatus(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getUserBet(
    user: string,
    dataLength: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([
      [boolean, string, BigNumber, BigNumber, boolean] & {
        resolved: boolean;
        user: string;
        id: BigNumber;
        blockTime: BigNumber;
        betStatus: boolean;
      },
      [boolean, boolean] & { face: boolean; rolled: boolean }
    ] & {
      bet: [boolean, string, BigNumber, BigNumber, boolean] & {
        resolved: boolean;
        user: string;
        id: BigNumber;
        blockTime: BigNumber;
        betStatus: boolean;
      };
      coinTossBet: [boolean, boolean] & { face: boolean; rolled: boolean };
    })[]
  >;

  "getUserBet(address,uint256)"(
    user: string,
    dataLength: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([
      [boolean, string, BigNumber, BigNumber, boolean] & {
        resolved: boolean;
        user: string;
        id: BigNumber;
        blockTime: BigNumber;
        betStatus: boolean;
      },
      [boolean, boolean] & { face: boolean; rolled: boolean }
    ] & {
      bet: [boolean, string, BigNumber, BigNumber, boolean] & {
        resolved: boolean;
        user: string;
        id: BigNumber;
        blockTime: BigNumber;
        betStatus: boolean;
      };
      coinTossBet: [boolean, boolean] & { face: boolean; rolled: boolean };
    })[]
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  playWithVRF(
    face: boolean,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "playWithVRF(bool)"(
    face: boolean,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  rawFulfillRandomWords(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "rawFulfillRandomWords(uint256,uint256[])"(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  s_vrfCoordinator(overrides?: CallOverrides): Promise<string>;

  "s_vrfCoordinator()"(overrides?: CallOverrides): Promise<string>;

  setCoordinator(
    _vrfCoordinator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCoordinator(address)"(
    _vrfCoordinator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    "acceptOwnership()"(overrides?: CallOverrides): Promise<void>;

    bets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber, boolean] & {
        resolved: boolean;
        user: string;
        id: BigNumber;
        blockTime: BigNumber;
        betStatus: boolean;
      }
    >;

    "bets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber, boolean] & {
        resolved: boolean;
        user: string;
        id: BigNumber;
        blockTime: BigNumber;
        betStatus: boolean;
      }
    >;

    callbackGasLimit(overrides?: CallOverrides): Promise<number>;

    "callbackGasLimit()"(overrides?: CallOverrides): Promise<number>;

    coinTossBets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, boolean] & { face: boolean; rolled: boolean }>;

    "coinTossBets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, boolean] & { face: boolean; rolled: boolean }>;

    getBetData(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber, boolean] & {
        resolved: boolean;
        user: string;
        id: BigNumber;
        blockTime: BigNumber;
        betStatus: boolean;
      }
    >;

    "getBetData(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber, boolean] & {
        resolved: boolean;
        user: string;
        id: BigNumber;
        blockTime: BigNumber;
        betStatus: boolean;
      }
    >;

    getBetStatus(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "getBetStatus(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getUserBet(
      user: string,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([
        [boolean, string, BigNumber, BigNumber, boolean] & {
          resolved: boolean;
          user: string;
          id: BigNumber;
          blockTime: BigNumber;
          betStatus: boolean;
        },
        [boolean, boolean] & { face: boolean; rolled: boolean }
      ] & {
        bet: [boolean, string, BigNumber, BigNumber, boolean] & {
          resolved: boolean;
          user: string;
          id: BigNumber;
          blockTime: BigNumber;
          betStatus: boolean;
        };
        coinTossBet: [boolean, boolean] & { face: boolean; rolled: boolean };
      })[]
    >;

    "getUserBet(address,uint256)"(
      user: string,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([
        [boolean, string, BigNumber, BigNumber, boolean] & {
          resolved: boolean;
          user: string;
          id: BigNumber;
          blockTime: BigNumber;
          betStatus: boolean;
        },
        [boolean, boolean] & { face: boolean; rolled: boolean }
      ] & {
        bet: [boolean, string, BigNumber, BigNumber, boolean] & {
          resolved: boolean;
          user: string;
          id: BigNumber;
          blockTime: BigNumber;
          betStatus: boolean;
        };
        coinTossBet: [boolean, boolean] & { face: boolean; rolled: boolean };
      })[]
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    playWithVRF(face: boolean, overrides?: CallOverrides): Promise<void>;

    "playWithVRF(bool)"(
      face: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "rawFulfillRandomWords(uint256,uint256[])"(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    s_vrfCoordinator(overrides?: CallOverrides): Promise<string>;

    "s_vrfCoordinator()"(overrides?: CallOverrides): Promise<string>;

    setCoordinator(
      _vrfCoordinator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCoordinator(address)"(
      _vrfCoordinator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(to: string, overrides?: CallOverrides): Promise<void>;

    "transferOwnership(address)"(
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CoordinatorSet(vrfCoordinator: null): EventFilter;

    OwnershipTransferRequested(
      from: string | null,
      to: string | null
    ): EventFilter;

    OwnershipTransferred(from: string | null, to: string | null): EventFilter;

    PlaceBet(id: null, user: string | null, face: null): EventFilter;

    Roll(id: null, user: string | null, face: null, rolled: null): EventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides): Promise<BigNumber>;

    "acceptOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    bets(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "bets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callbackGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "callbackGasLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    coinTossBets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "coinTossBets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBetData(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "getBetData(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBetStatus(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBetStatus(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserBet(
      user: string,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserBet(address,uint256)"(
      user: string,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    playWithVRF(
      face: boolean,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "playWithVRF(bool)"(
      face: boolean,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "rawFulfillRandomWords(uint256,uint256[])"(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    s_vrfCoordinator(overrides?: CallOverrides): Promise<BigNumber>;

    "s_vrfCoordinator()"(overrides?: CallOverrides): Promise<BigNumber>;

    setCoordinator(
      _vrfCoordinator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCoordinator(address)"(
      _vrfCoordinator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(to: string, overrides?: Overrides): Promise<BigNumber>;

    "transferOwnership(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "acceptOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    bets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "bets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callbackGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "callbackGasLimit()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    coinTossBets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "coinTossBets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBetData(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBetData(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBetStatus(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBetStatus(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserBet(
      user: string,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserBet(address,uint256)"(
      user: string,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    playWithVRF(
      face: boolean,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "playWithVRF(bool)"(
      face: boolean,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "rawFulfillRandomWords(uint256,uint256[])"(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    s_vrfCoordinator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "s_vrfCoordinator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setCoordinator(
      _vrfCoordinator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCoordinator(address)"(
      _vrfCoordinator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
