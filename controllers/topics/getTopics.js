const db = require("../../static/db.js");

const getTopics = async (req, res) => {
  if (req.params.topicId) {
    let topicData = {};
    const subTopicData = await db.query(
      `select * from subtopic where topicId=${req.params.topicId}`,
    );
    let subTopicArray = [];
    for (const eachSubTopic of subTopicData[0]) {
      tempObj = {};
      tempObj["subTopicId"] = eachSubTopic.subTopicId;
      tempObj["subTopicName"] = eachSubTopic.subTopicName;
      subTopicArray.push(tempObj);
    }
    topicData["subTopics"] = subTopicArray;
    const lectureData = await db.query(
      `select * from lecture where topicId=${req.params.topicId}`,
    );
    const completedLectures = await db.query(
      `select * from selfCompletedLecture where topicId=${req.params.topicId}`,
    );
    topicData["completed"] = Math.floor(
      (completedLectures[0].length / lectureData[0].length) * 100,
    );
    res.json(topicData);
  } else {
    let data = {
      classLearningCompleted: 0,
      selfLearningCompleted: 0,
      classLearningTopics: [],
      selfLearningTopics: [],
    };
    const topicsData = await db.query(`select * from topic`);
    const totalLectures = await db.query(`select * from lecture`);
    const totalSelfLearningCompletedLectures = await db.query(
      `select * from selfCompletedLecture where studentId=${req.user.id}`,
    );
    // const totalClassLearningCompletedLectures=await db.query(`select * from classLectureCompleted where batchId=${req.user.batchId}`)
    const totalClassLearningCompletedLectures =
      totalSelfLearningCompletedLectures;
    for (const eachTopic of topicsData[0]) {
      const subTopicData = await db.query(
        `select * from subtopic where topicId=${eachTopic.topicId}`,
      );
      let subTopicArray = [];
      for (const eachSubTopic of subTopicData[0]) {
        tempObj = {};
        tempObj["subTopicId"] = eachSubTopic.subTopicId;
        tempObj["subTopicName"] = eachSubTopic.subTopicName;
        subTopicArray.push(tempObj);
      }
      eachTopic["subTopics"] = subTopicArray;
      const lectureData = await db.query(
        `select * from lecture where topicId=${eachTopic.topicId}`,
      );
      const completedLectures = await db.query(
        `select * from selfCompletedLecture where topicId=${eachTopic.topicId}`,
      );
      eachTopic["completed"] = Math.floor(
        (completedLectures[0].length / lectureData[0].length) * 100,
      );
      eachTopic.selfLearningTopic == 1
        ? data.selfLearningTopics.push(eachTopic)
        : data.classLearningTopics.push(eachTopic);
    }
    data.selfLearningCompleted = Math.floor(
      (totalSelfLearningCompletedLectures[0].length / totalLectures[0].length) *
        100,
    );
    data.classLearningCompleted = Math.floor(
      (totalClassLearningCompletedLectures[0].length /
        totalLectures[0].length) *
        100,
    );

    res.json(data);
  }
};

module.exports = { getTopics };
