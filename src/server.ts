import express from "express";
import bodyParser from "body-parser";
import * as userController from "./controllers/users/users";


const app = express();
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());

app.get("/users", userController.getUsers);
app.post("/users", userController.postUsers);
app.put("/users", userController.putUsers);
app.delete("/users/:userId", userController.deletetUsers);

const server = app.listen(app.get("port"), () => {
    console.log(`App is running at http://localhost:${app.get("port")}`
    );
});

export default server;
