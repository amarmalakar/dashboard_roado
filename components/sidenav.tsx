import {
  Dashboard, Tv, Assignment, DepartureBoard, DoubleArrow,
  LocalShipping, AirportShuttle, BusinessCenter, AccountBalance,
  Tab, Settings
} from "@mui/icons-material";
import { Box } from "@mui/material";
import Image from "next/image";

const NavList = [
  { id: 1, Icon: Dashboard },
  { id: 2, Icon: Tv },
  { id: 3, Icon: DoubleArrow },
  { id: 4, Icon: Assignment },
  { id: 5, Icon: DepartureBoard },
  { id: 6, Icon: LocalShipping },
  { id: 7, Icon: AirportShuttle },
  { id: 8, Icon: BusinessCenter },
  { id: 9, Icon: AccountBalance },
  { id: 10, Icon: Tab },
  { id: 11, Icon: Settings },
]

export default function Sidenav() {
  return (
    <Box sx={{ width: "64px", minHeight: "100vh", backgroundColor: "white", boxShadow: "0px 2px 8px 0px #1A38750D" }}>
      {/* <GridView style={{ width: 18, height: 18 }} /> */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "26px",
        padding: "24px 0",
      }}>
        <Image src="/logo.png" width={32} height={29} alt="dashboard" />
        {NavList.map(({ Icon, id }) => (
          <Icon key={id} sx={{ width: 24, height: 24 }} />
        ))}
      </Box>
    </Box>
  )
}


// box-shadow: 0px 2px 8px 0px #1A38750D;