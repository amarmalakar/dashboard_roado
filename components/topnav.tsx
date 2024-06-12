import { Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const styles = {
  iconSize: { width: 20, height: 20 },
  seperator: { width: "1px", height: "18px", bgcolor: "#CBCBCB" }
}

export default function Topnav() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <h1>Dashboard</h1>

      <Box sx={{
        padding: "12px 18px",
        borderRadius: "24px",
        boxShadow: "0px 2px 8px 0px #1A38750D",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}>
        <SearchIcon sx={styles.iconSize} />
        <Box sx={styles.seperator} />
        <NotificationsIcon sx={styles.iconSize} />
        <Box sx={styles.seperator} />
        <MoreVertIcon sx={styles.iconSize} />
      </Box>
    </Box>
  )
}
