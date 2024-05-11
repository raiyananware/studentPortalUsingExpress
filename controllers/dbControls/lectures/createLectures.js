const db = require("../../../static/db.js");
const { topic1001 } = require("./lectureData/topic1001.js");
const { topic1002 } = require("./lectureData/topic1002.js");
const { topic1003 } = require("./lectureData/topic1003.js");
const { topic1004 } = require("./lectureData/topic1004.js");
const { topic1005 } = require("./lectureData/topic1005.js");
const { topic1006 } = require("./lectureData/topic1006.js");
const { topic1007 } = require("./lectureData/topic1007.js");
const { topic1008 } = require("./lectureData/topic1008.js");
const { topic1009 } = require("./lectureData/topic1009.js");

const createLecture = async (req, res) => {
  const topicId = req.query.topicId;
  let response = "";

  if (topicId == 1001) response = await topic1001(topicId);
  else if (topicId == 1002) response = await topic1002(topicId);
  else if (topicId == 1003) response = await topic1003(topicId);
  else if (topicId == 1004) response = await topic1004(topicId);
  else if (topicId == 1005) response = await topic1005(topicId);
  else if (topicId == 1006) response = await topic1006(topicId);
  else if (topicId == 1007) response = await topic1007(topicId);
  else if (topicId == 1008) response = await topic1008(topicId);
  else if (topicId == 1009) response = await topic1009(topicId);

  if (!response.error) res.status(201).json({ msg: response.msg });
  else res.status(500).json({ msg: response.error });
};

module.exports = { createLecture };
