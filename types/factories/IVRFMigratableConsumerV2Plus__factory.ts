/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IVRFMigratableConsumerV2Plus } from "../IVRFMigratableConsumerV2Plus";

export class IVRFMigratableConsumerV2Plus__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVRFMigratableConsumerV2Plus {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IVRFMigratableConsumerV2Plus;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
      },
    ],
    name: "CoordinatorSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
      },
    ],
    name: "setCoordinator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
