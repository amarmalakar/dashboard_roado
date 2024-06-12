import Dashboard from "@/components/dashboard";
import Highlights from "@/components/highlights";
import Sidenav from "@/components/sidenav";
import Topnav from "@/components/topnav";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidenav />

      {/* Dashboard chart part */}
      <Box sx={{ flex: 1, padding: "22px", background: "#F7FAFF" }}>
        <Topnav />
        <Dashboard />
      </Box>

      {/* Highlight part */}
      <Highlights />
    </Box>
  );
}
