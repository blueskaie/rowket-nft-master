import { expect } from 'chai'

const { ethers } = require('@nomiclabs/buidler')

const ketMasterAddress = '0xc3E069A09C8530beb50Bc5b54184B1B23d2C85D4'

import { KetMaster } from '../typechain/KetMaster'
import { KetMasterFactory } from '../typechain/KetMasterFactory'

let ketMaster: KetMaster

describe('KetMaster', function() {
  beforeEach(async () => {
    const ketMasterFactory: KetMasterFactory = await ethers.getContractFactory('KetMaster')
    ketMaster = ketMasterFactory.attach(ketMasterAddress)
  })

  it('approveBakeryMasterForSpendStakingPowerToken', async function() {
    const tx = await ketMaster.approveBakeryMasterForSpendStakingPowerToken()
    console.log(`transferKetNFTOwnershipToKetMaster ${tx.hash}`)
    await tx.wait()
  })

  it('ketInfoMap', async function() {
    const ketInfo = await ketMaster.ketInfoMap(1)
    console.log(`ketInfo ${ketInfo}`)
  })
})
