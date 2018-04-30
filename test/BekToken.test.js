const BekToken = artifacts.require('BekToken');

contract('BekToken', function ([owner, anotherAccount]) {
  let token;

  const _name = 'BekToken';
  const _symbol = 'BEK';
  const _decimals = 18;
  const _cap = (100 * 10 ** 9) * (10 ** _decimals);

  beforeEach(async function () {
    token = await BekToken.new({ from: owner });
  });

  describe('token details', function () {
    it('has a name', async function () {
      const name = await token.name();
      assert.equal(name, _name);
    });

    it('has a symbol', async function () {
      const symbol = await token.symbol();
      assert.equal(symbol, _symbol);
    });

    it('has 18 decimals', async function () {
      const decimals = await token.decimals();
      assert(decimals.eq(_decimals));
    });

    it('has a 0 total supply', async function () {
      const totalSupply = await token.totalSupply();
      assert(totalSupply.eq(0));
    });
  
    it('has a 0 owner supply', async function () {
      const ownerBalance = await token.balanceOf(owner);
      assert(ownerBalance.eq(0));
    });
    
    it('has the cap set', async function () {
      const tokenCap = await token.cap();
      assert(tokenCap.eq(_cap));
    });
  });

  describe('token minting', function () {
    const amount = 100;
    const from = owner;

    it('can mint to owner', async function () {
      await token.mint(owner, amount, { from });

      const balance = await token.balanceOf(owner);
      assert.equal(balance, amount);
    });

    it('can mint to another account', async function () {
      await token.mint(anotherAccount, amount, { from });

      const balance = await token.balanceOf(anotherAccount);
      assert.equal(balance, amount);
    });

    it('cannot mint after minting stopped', async function () {
      await token.finishMinting({ from});

      try {
        await token.mint(owner, amount, { from });

        assert.fail('Expected revert not received');
      } catch (error) {
        const revertFound = error.message.search('revert') >= 0;
        assert(revertFound, `Expected "revert", got ${error} instead`);
      }
    });

    it('cannot mint above cap', async function () {
      await token.mint(owner, amount, { from });

      try {
        await token.mint(owner, _cap, { from });

        assert.fail('Expected revert not received');
      } catch (error) {
        const revertFound = error.message.search('revert') >= 0;
        assert(revertFound, `Expected "revert", got ${error} instead`);
      }
    });

  });
});