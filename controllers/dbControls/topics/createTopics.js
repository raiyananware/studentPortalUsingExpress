const db = require("../../../static/db.js");

const createTopics = async (req, res) => {
  const data = await db.query(`select * from topic`);
  if (data[0].length == 0) {
    try {
      await db.query(`INSERT INTO topic (topicId, topicName, selfLearningTopic) VALUES
          (1001, 'Foundation with SQL', 0);`);
      await db.query(`INSERT INTO topic ( topicName, selfLearningTopic) VALUES
          ('Web Designing Essential', 0),
          ('Python Essential', 0),
          ('Profile Building', 0),
          ('AWS Cloud Practitioner', 0),
          ('Java Essential', 1),
          ('Web Designing Professional', 1),
          ('Angular', 1),
          ('SQL Professional', 1);
          `);
      res.status(201).json({ msg: "Topics created" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: error });
    }
  } else {
    res.status(500).json({ msg: "Topics already exists", topics: data[0] });
  }
};

module.exports = { createTopics };
