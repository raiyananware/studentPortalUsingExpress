const db = require("../../../../static/db.js");

const topicId=1004;

const createLecturesForSubTopic10037 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Resume Basics', ${subTopicId}, ${topicId}),
  ('Writing Rules', ${subTopicId}, ${topicId}),
  ('HR Friendly Resumes', ${subTopicId}, ${topicId});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${subTopicId}`,
  );
  if (lectures[0].length == 0) {
    try {
      await db.query(data);
      return "Lecture Created";
    } catch (error) {
      return error;
    }
  }
};

const createLecturesForSubTopic10038 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Introduction to Web Portfolio', ${subTopicId}, ${topicId}),
  ('Do not Start From Scratch', ${subTopicId}, ${topicId}),
  ('Publishing to the Web', ${subTopicId}, ${topicId}),
  ('Introduction to Video Resumes', ${subTopicId}, ${topicId}),
  ('Profile Optimization and Networking on LinkedIn', ${subTopicId}, ${topicId}),
  ('Showcasing Projects on Github', ${subTopicId}, ${topicId});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${subTopicId}`,
  );
  if (lectures[0].length == 0) {
    try {
      await db.query(data);
      return "Lecture Created";
    } catch (error) {
      return error;
    }
  }
};

const createLecturesForSubTopic10039 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Common Interview Stages', ${subTopicId}, ${topicId}),
  ('Communication Skills', ${subTopicId}, ${topicId}),
  ('Popular Interview Questions', ${subTopicId}, ${topicId}),
  ('Tricky Interview Questions', ${subTopicId}, ${topicId}),
  ('Technical Interview Preparation', ${subTopicId}, ${topicId}),
  ('Aptitude Test Overview', ${subTopicId}, ${topicId}),
  ('Interview Day Checklist', ${subTopicId}, ${topicId});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${subTopicId}`,
  );
  if (lectures[0].length == 0) {
    try {
      await db.query(data);
      return "Lecture Created";
    } catch (error) {
      return error;
    }
  }
};

const createLecturesForSubTopic10040 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Job Search Resources', ${subTopicId}, ${topicId}),
  ('Understanding Job Descriptions', ${subTopicId}, ${topicId}),
  ('Company Research', ${subTopicId}, ${topicId});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${subTopicId}`,
  );
  if (lectures[0].length == 0) {
    try {
      await db.query(data);
      return "Lecture Created";
    } catch (error) {
      return error;
    }
  }
};

const topic1004 = async (topicId) => {
  const subtopics = await db.query(`select * from subTopic where topicId=${topicId}`,
  );
  if (subtopics[0].length != 0) {
    try {
      await createLecturesForSubTopic10037(subtopics[0][0].subTopicId);
      await createLecturesForSubTopic10038(subtopics[0][1].subTopicId);
      await createLecturesForSubTopic10039(subtopics[0][2].subTopicId);
      await createLecturesForSubTopic10040(subtopics[0][3].subTopicId);
      return { msg: "Lectures Created" };
    } catch (error) {
      return error;
    }
  } else {
    return { error: "Lecture not Created" };
  }
};

module.exports = { topic1004 };
