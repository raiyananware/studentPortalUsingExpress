const db = require("../../../../static/db.js");

const createLecturesForSubTopic10037 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Resume Basics', ${topicIds}),
  ('Writing Rules', ${topicIds}),
  ('HR Friendly Resumes', ${topicIds});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${topicIds}`,
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

const createLecturesForSubTopic10038 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Introduction to Web Portfolio', ${topicIds}),
  ('Do not Start From Scratch', ${topicIds}),
  ('Publishing to the Web', ${topicIds}),
  ('Introduction to Video Resumes', ${topicIds}),
  ('Profile Optimization and Networking on LinkedIn', ${topicIds}),
  ('Showcasing Projects on Github', ${topicIds});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${topicIds}`,
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

const createLecturesForSubTopic10039 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Common Interview Stages', ${topicIds}),
  ('Communication Skills', ${topicIds}),
  ('Popular Interview Questions', ${topicIds}),
  ('Tricky Interview Questions', ${topicIds}),
  ('Technical Interview Preparation', ${topicIds}),
  ('Aptitude Test Overview', ${topicIds}),
  ('Interview Day Checklist', ${topicIds});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${topicIds}`,
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

const createLecturesForSubTopic10040 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Job Search Resources', ${topicIds}),
  ('Understanding Job Descriptions', ${topicIds}),
  ('Company Research', ${topicIds});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${topicIds}`,
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
