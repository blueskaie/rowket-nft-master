import { expect } from 'chai'

const { ethers } = require('@nomiclabs/buidler')

describe('KetStakingPowerToken', function() {
  it('decimals', async function() {
    const KetStakingPowerToken = await ethers.getContractFactory('KetStakingPowerToken')
    const ketStakingPowerToken = await KetStakingPowerToken.deploy()
    await ketStakingPowerToken.deployed()
    expect(await ketStakingPowerToken.decimals()).to.equal(18)
  })
})
