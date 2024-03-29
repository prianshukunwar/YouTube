import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
  Navbar,
} from "./components";
// import Feed from "./components/Feed";
// import VideoDetails from "./components/VideoDetails";
// import ChannelDetails from "./components/ChannelDetails";
// import SearchFeed from "./components/SearchFeed";

const App = () => {
  return (
    <BrowserRouter basename="/YouTube">
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
