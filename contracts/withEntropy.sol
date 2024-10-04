// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@pythnetwork/entropy-sdk-solidity/IEntropy.sol";
import "@pythnetwork/entropy-sdk-solidity/IEntropyConsumer.sol";

library CoinFlipErrors {
    error IncorrectSender();
    error InsufficientFee();
}

contract PythCoinFlip is IEntropyConsumer {
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

    event FlipRequest(uint64 sequenceNumber);
    event FlipResult(uint64 sequenceNumber, bool isHeads);

    IEntropy private entropy;
    address public entropyProvider;

    receive() external payable {}

    constructor(address _entropy) {
        entropy = IEntropy(_entropy);
    }

    function getProvider() external view returns (address) {
        address p = entropy.getDefaultProvider();
        return p;
    }

    function getFlipFee() public view returns (uint256 fee) {
        fee = entropy.getFee(entropyProvider);
    }

    function entropyCallback(
        uint64 sequenceNumber,
        address,
        bytes32 randomNumber
    ) internal override {
        uint256 _s = uint256(sequenceNumber);
        CoinTossBet storage coinTossBet = coinTossBets[_s];
        Bet storage bet = bets[_s];
        bool rolled = uint256(randomNumber) % 2 == 0;

        coinTossBet.rolled = rolled;

        if (rolled == coinTossBet.face) {
            bet.resolved = true;
            bet.betStatus = true;
            emit Roll(bet.id, bet.user, coinTossBet.face, rolled);
        } else {
            bet.resolved = true;
            bet.betStatus = false;

            emit Roll(bet.id, bet.user, coinTossBet.face, rolled);
        }

        emit Roll(bet.id, bet.user, coinTossBet.face, rolled);
        emit FlipResult(sequenceNumber, uint256(randomNumber) % 2 == 0);
    }

    function getEntropy() internal view override returns (address) {
        return address(entropy);
    }

    function flipWithPyth(
        bool face,
        bytes32 userRandomNumber
    ) external payable {
        address provider = entropy.getDefaultProvider();
        uint256 fee = entropy.getFee(provider);

        if (msg.value < fee) {
            revert CoinFlipErrors.InsufficientFee();
        }

        uint64 sequenceNumber = entropy.requestWithCallback{value: fee}(
            provider,
            userRandomNumber
        );

        uint256 _s = uint256(sequenceNumber);
        emit FlipRequest(sequenceNumber);
        Bet memory newBet = Bet(false, msg.sender, _s, block.timestamp, false);
        _userBets[msg.sender].push(_s);
        bets[_s] = newBet;

        coinTossBets[newBet.id].face = face;

        emit PlaceBet(newBet.id, newBet.user, face);
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
