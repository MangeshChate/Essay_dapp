// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Essay {
    struct Structher {
        string name;
        string email;
        string heading;
        string essay;
        uint timestamp;
    }

    Structher[] public datas;

    function setEssay(
        string calldata name,
        string calldata email,
        string calldata heading,
        string calldata essay
    ) public {
        datas.push(Structher(name, email, heading, essay, block.timestamp));
    }

    function getEssay() public view returns (Structher[] memory) {
        return datas;
    }
}
