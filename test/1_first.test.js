// Test-Helpers OZ https://docs.openzeppelin.com/test-helpers/0.5/api

const {
  BN, // Big Number support
  constants, // Common constants, like the zero address and largest integers
  expectEvent, // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
  time,
} = require("@openzeppelin/test-helpers");

const MyContract = artifacts.require("MyContract");

contract("Contract To Test", ([owner, alice, bob, charlie, random]) => {
  let instance;

  before(async function () {
    //Deploy Contracts
    instance = await MyContract.new();
  });

  describe("Title for test group #1", function () {
    it("test #1 description", async function () {
      const _owner = await instance.owner();
      assert.equal(_owner, owner);
    });
    it("test #2 description", async function () {});
    it("test #3 description", async function () {});
  });
});
