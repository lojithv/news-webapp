import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddNews from "../../models/addNewsModel.js";
import modelAddUser from "../../models/addUserModel.js";
const router = express.Router();

await connectDB();

const addUserModel = modelAddUser;
const addNewsModel = modelAddNews;

router.post("/editNews", (req, res) => {
  const bodyData = req.body
  const userId = bodyData["userId"]
  const newsId = bodyData["newsId"]
  const newNews = bodyData["news"]

  let userDetails;

  const userResponse = async () => {
    try {
      userDetails = await addUserModel.find({
        userId: userId,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const editNews = async () => {
    await userResponse();
    const userRole = userDetails[0]["userRole"];

    if (userRole == "editor") {
      try {
        const newsResp = await addNewsModel.findOneAndUpdate(
          { newsId: newsId },
          { news: newNews },
        );
      } catch (err) {
        console.log(err);
      }
  
      res.send(`news ${newsId} is changed`);
    } else {
      res.send(`user ${userDetails[0]["name"]} is not an editor`);
    }
  };
  editNews();

});
export default router;
