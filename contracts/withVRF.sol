// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {VRFConsumerBaseV2Plus} from "@chainlink-vrf/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink-vrf/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";

contract ChainlinkCoinFlip is VRFConsumerBaseV2Plus {
    struct FlipDetails {
        Bet bet;
        CoinTossBet coinTossBet;
    }

    struct CoinTossBet {
        bool face;
        bool rolled;
    }

    mapping(uint256 => CoinTossBet) public coinTossBets;

    struct Bet {
        bool resolved;
        address user;
        uint256 id;
        uint256 blockTime;
        bool betStatus;
    }
    event PlaceBet(uint256 id, address indexed user, bool face);

    event Roll(uint256 id, address indexed user, bool face, bool rolled);

    /// @notice Maps bets IDs to Bet information.
    mapping(uint256 => Bet) public bets;

    /// @notice Maps users addrejsses to bets IDs
    mapping(address => uint256[]) internal _userBets;

    ///// SUBSCRIPTION ID IS NOW UINT256 /////
    uint256 s_subscriptionId;

    ///// USE NEW KEYHASH FOR VRF 2.5 GAS LANE /////
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/vrf/v2-5/supported-networks
    /// @notice this is base L2 key hash 👇
    bytes32 keyHash =
        0xdc2f87677b01473c763cb0aee938ed3341512f6057324a584e5944e786144d70;

    uint16 requestConfirmations = 3;

    uint32 numWords = 2;

    uint32 public callbackGasLimit = 100000;

    constructor(
        uint256 subscriptionId
    ) VRFConsumerBaseV2Plus(0xd5D517aBE5cF79B7e95eC98dB0f0277788aFF634) {
        s_subscriptionId = subscriptionId;
    }

    function playWithVRF(bool face) external payable {
        Bet memory bet = _playWithVRF();
        coinTossBets[bet.id].face = face;

        emit PlaceBet(bet.id, bet.user, face);
    }

    function _playWithVRF() internal returns (Bet memory) {
        uint256 requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: keyHash,
                subId: s_subscriptionId,
                requestConfirmations: requestConfirmations,
                callbackGasLimit: callbackGasLimit,
                numWords: numWords,
                // native payment = false, means chainlink will charge user $LINK tokens (cheaper method)
                // native payment = true, means chainlink will charge ETH 
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({nativePayment: false})
                )
            })
        );

        Bet memory newBet = Bet(
            false,
            msg.sender,
            requestId,
            block.timestamp,
            false
        );
        _userBets[msg.sender].push(requestId);
        bets[requestId] = newBet;
        return newBet;
    }

    function fulfillRandomWords(
        uint256 _requestId /* requestId */,
        uint256[] calldata randomWords
    ) internal override {
        CoinTossBet storage coinTossBet = coinTossBets[_requestId];
        Bet storage bet = bets[_requestId];
        uint256 roller = randomWords[0] % 2;

        bool[2] memory coinSides = [false, true];
        bool rolledCoinSide = coinSides[roller];
        coinTossBet.rolled = rolledCoinSide;

        if (rolledCoinSide == coinTossBet.face) {
            bet.resolved = true;
            bet.betStatus = true;
            emit Roll(bet.id, bet.user, coinTossBet.face, rolledCoinSide);
        } else {
            bet.resolved = true;
            bet.betStatus = false;
            emit Roll(bet.id, bet.user, coinTossBet.face, rolledCoinSide);
        }

        emit Roll(bet.id, bet.user, coinTossBet.face, rolledCoinSide);
    }

    function getBetData(uint256 id) public view returns (Bet memory betData) {
        Bet storage data = bets[id];
        return data;
    }

    function getBetStatus(uint256 id) public view returns (bool status) {
        Bet storage data = bets[id];
        return data.betStatus;
    }

    function _getLastUserBets(
        address user,
        uint256 dataLength
    ) internal view returns (Bet[] memory) {
        uint256[] memory userBetsIds = _userBets[user];
        uint256 betsLength = userBetsIds.length;

        if (betsLength < dataLength) {
            dataLength = betsLength;
        }

        Bet[] memory userBets = new Bet[](dataLength);
        if (dataLength != 0) {
            uint256 userBetsIndex;
            for (uint256 i = betsLength; i > betsLength - dataLength; i--) {
                userBets[userBetsIndex] = bets[userBetsIds[i - 1]];
                userBetsIndex++;
            }
        }

        return userBets;
    }

    /// @return A list of Coin Toss bet.
    function getUserBet(
        address user,
        uint256 dataLength
    ) external view returns (FlipDetails[] memory) {
        Bet[] memory lastBets = _getLastUserBets(user, dataLength);
        FlipDetails[] memory lastCoinTossBets = new FlipDetails[](
            lastBets.length
        );
        for (uint256 i; i < lastBets.length; i++) {
            lastCoinTossBets[i] = FlipDetails(
                lastBets[i],
                coinTossBets[lastBets[i].id]
            );
        }
        return lastCoinTossBets;
    }
}
