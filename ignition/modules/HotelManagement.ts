import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const HotelManagementModule = buildModule("HotelManagementModule", (m) => {


  const hotelManagement = m.contract("HotelManagement");

  return { hotelManagement };
});

export default HotelManagementModule;

/**
 * HotelManagementModule#HotelManagement - 0x4de71186690B8df1E6A34E787C8B7f58e868B225
 * 
 *  - https://sepolia-blockscout.lisk.com//address/0x4de71186690B8df1E6A34E787C8B7f58e868B225#code
 */