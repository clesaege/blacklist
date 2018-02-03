const MyBlacklist = artifacts.require('./Blacklist.sol');

contract('Blacklist', function () {

    let blacklist;

    beforeEach(async () => {
        blacklist = await MyBlacklist.new();
    });

    it('should allow owner to blacklist', async () => {

        let node = "0x1234";

        await blacklist.blacklist(node);
        assert.equal(await blacklist.isAllowed.call(node), false);
    });

    it('should allow owner to unblacklist', async () => {

        let node = "0x1234";

        await blacklist.blacklist(node);
        assert.equal(await blacklist.isAllowed.call(node), false);

        await blacklist.unblacklist(node);
        assert.equal(await blacklist.isAllowed.call(node), true);
    });
});
