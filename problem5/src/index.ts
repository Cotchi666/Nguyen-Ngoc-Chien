import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.route";
import userRoutesOnView from "./routes/user.route.on.view";

import path from "path";

const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
// setup for static files
app.use(express.static(path.join(process.cwd(), "./src/public")));

// setup for ejs template file
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/api/users", userRoutes);
app.use("/", userRoutesOnView);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
