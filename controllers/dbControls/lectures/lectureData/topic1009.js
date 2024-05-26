const db =require("../../../../static/db.js")

const topicId=1009

const createLecturesForSubTopic10106 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Introduction to Stored Procedure', ${subTopicId}, ${topicId}),
  ('Variables and datatypes', ${subTopicId}, ${topicId}),
  ('Conditional Statement', ${subTopicId}, ${topicId}),
  ('Assignment', ${subTopicId}, ${topicId}),
  ('Looping Statement', ${subTopicId}, ${topicId}),
  ('Stored Function', ${subTopicId}, ${topicId}),
  ('Assignment', ${subTopicId}, ${topicId});`;

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
}

const createLecturesForSubTopic10107 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Introduction to Cursor and Types of cursor', ${subTopicId}, ${topicId}),
  ('Explicit Cursor', ${subTopicId}, ${topicId}),
  ('Assignment', ${subTopicId}, ${topicId});`;

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
}

const createLecturesForSubTopic10108 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Introduction to Triggers', ${subTopicId}, ${topicId}),
  ('Row level Trigger', ${subTopicId}, ${topicId}),
  ('Statement Level Trigger', ${subTopicId}, ${topicId}),
  ('Before Trigger', ${subTopicId}, ${topicId}),
  ('After Trigger', ${subTopicId}, ${topicId}),
  ('Assignment', ${subTopicId}, ${topicId});`;

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
}

const createLecturesForSubTopic10109 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Difference between SQL and NoSQL', ${subTopicId}, ${topicId}),
  ('What is MongoDB?', ${subTopicId}, ${topicId}),
  ('Installing MongoDB on local machine', ${subTopicId}, ${topicId}),
  ('Data Types in MongoDB', ${subTopicId}, ${topicId}),
  ('Using MongoDB Shell', ${subTopicId}, ${topicId}),
  ('Perform CRUD Operations in MongoDB', ${subTopicId}, ${topicId}),
  ('Finding Documents', ${subTopicId}, ${topicId}),
  ('Using Projection to get required fields from collection', ${subTopicId}, ${topicId}),
  ('Various MongoDB operators like $sort, $limit, $set, etc.', ${subTopicId}, ${topicId}),
  ('Aggregates in MongoDB Queries', ${subTopicId}, ${topicId}),
  ('Assignment', ${subTopicId}, ${topicId});`;

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
}


const topic1009= async (topicId)=>{
    const subtopics = await db.query(`select * from subTopic where topicId=${topicId}`,
    );
    if (subtopics[0].length != 0) {
      try {
        await createLecturesForSubTopic10106(subtopics[0][0].subTopicId);
        await createLecturesForSubTopic10107(subtopics[0][1].subTopicId);
        await createLecturesForSubTopic10108(subtopics[0][2].subTopicId);
        await createLecturesForSubTopic10109(subtopics[0][3].subTopicId);
        return { msg: "Lectures Created" };
      } catch (error) {
        return error;
      }
    } else {
      return { error: "Lecture not Created" };
    }

}

module.exports = {topic1009}