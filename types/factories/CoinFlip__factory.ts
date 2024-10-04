/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CoinFlip } from "../CoinFlip";

export class CoinFlip__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_entropy: string, overrides?: Overrides): Promise<CoinFlip> {
    return super.deploy(_entropy, overrides || {}) as Promise<CoinFlip>;
  }
  getDeployTransaction(
    _entropy: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_entropy, overrides || {});
  }
  attach(address: string): CoinFlip {
    return super.attach(address) as CoinFlip;
  }
  connect(signer: Signer): CoinFlip__factory {
    return super.connect(signer) as CoinFlip__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinFlip {
    return new Contract(address, _abi, signerOrProvider) as CoinFlip;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_entropy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InsufficientFee",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "sequenceNumber",
        type: "uint64",
      },
    ],
    name: "FlipRequest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "sequenceNumber",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isHeads",
        type: "bool",
      },
    ],
    name: "FlipResult",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    name: "readss",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "randomNumber",
        type: "bytes32",
      },
    ],
    name: "_entropyCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "entropyProvider",
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
    name: "getFlipFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProvider",
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
        internalType: "bytes32",
        name: "userRandomNumber",
        type: "bytes32",
      },
    ],
    name: "requestFlip",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60803461007457601f6105d838819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b03191691909117905560405161054890816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260049182361015610022575b505050361561002057600080fd5b005b600092833560e01c91826325f22775146104035750816326eb92df14610267578163483d45bd146101df57816352a5f1f8146100945750635bf414ac146100695780610012565b3461009057816003193601126100905760015490516001600160a01b039091168152602090f35b5080fd5b9050346101db5760603660031901126101db5780359067ffffffffffffffff82168092036101d7576001600160a01b03602435818116036101d35784541680156101905733036101415750907ff550f248b098f02e33438ac336e78317f12b3eb483ece487cde4331e4f6f4eba917fc67e7e391e438e54235148ef50b395af796fa485976093846cc6c6438327807b6020835160018152a18151908152600160443516156020820152a180f35b608490602084519162461bcd60e51b8352820152602360248201527f4f6e6c7920456e74726f70792063616e2063616c6c20746869732066756e637460448201526234b7b760e91b6064820152fd5b835162461bcd60e51b8152602081840152601760248201527f456e74726f70792061646472657373206e6f74207365740000000000000000006044820152606490fd5b8480fd5b8380fd5b8280fd5b919050346101db57826003193601126101db57825481516320bba64360e21b8152926001600160a01b0392916020918591829086165afa92831561025d576020949361022e575b505191168152f35b61024f919350843d8111610256575b6102478183610497565b8101906104cf565b9138610226565b503d61023d565b81513d86823e3d90fd5b60209150366003190182136101d757835483516320bba64360e21b81526001600160a01b03918216929184828481875afa9182156103da5787926103e4575b508551631711922960e31b81529116828201819052908481602481875afa80156103da576001600160801b039188916103ad575b501680341061039e57849291604491875195869485936319cb825f60e01b8552818501523560248401525af1908115610391578491610349575b5067ffffffffffffffff7f7da1b5ae936dfd098f9225db84f0386b7c229bc907fc79f4a89a335d459a33fc935191168152a180f35b90508181813d831161038a575b6103608183610497565b810103126101d757519167ffffffffffffffff831683036101d7579167ffffffffffffffff610314565b503d610356565b50505051903d90823e3d90fd5b855162976f7560e21b81528390fd5b6103cd9150863d88116103d3575b6103c58183610497565b8101906104f3565b386102da565b503d6103bb565b86513d89823e3d90fd5b6103fc919250853d8711610256576102478183610497565b90386102a6565b929150346101d757836003193601126101d7578354600154631711922960e31b85526001600160a01b039081169285019290925260209184916024918391165afa91821561048d5760209392610465575b506001600160801b03905191168152f35b6001600160801b0391925061048690843d81116103d3576103c58183610497565b9190610454565b81513d85823e3d90fd5b90601f8019910116810190811067ffffffffffffffff8211176104b957604052565b634e487b7160e01b600052604160045260246000fd5b908160209103126104ee57516001600160a01b03811681036104ee5790565b600080fd5b908160209103126104ee57516001600160801b03811681036104ee579056fea2646970667358221220253a7e7d93105f29a4190fc46fa16b37997f99fb83deffd0466135a18b10820664736f6c63430008130033";
