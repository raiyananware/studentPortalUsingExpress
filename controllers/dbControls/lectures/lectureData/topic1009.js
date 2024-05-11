const db =require("../../../../static/db.js")


const createLecturesForSubTopic10106 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Introduction to Stored Procedure', ${topicIds}),
  ('Variables and datatypes', ${topicIds}),
  ('Conditional Statement', ${topicIds}),
  ('Assignment', ${topicIds}),
  ('Looping Statement', ${topicIds}),
  ('Stored Function', ${topicIds}),
  ('Assignment', ${topicIds});`;

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
}

const createLecturesForSubTopic10107 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Introduction to Cursor and Types of cursor', ${topicIds}),
  ('Explicit Cursor', ${topicIds}),
  ('Assignment', ${topicIds});`;

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
}

const createLecturesForSubTopic10108 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Introduction to Triggers', ${topicIds}),
  ('Row level Trigger', ${topicIds}),
  ('Statement Level Trigger', ${topicIds}),
  ('Before Trigger', ${topicIds}),
  ('After Trigger', ${topicIds}),
  ('Assignment', ${topicIds});`;

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
}

const createLecturesForSubTopic10109 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Difference between SQL and NoSQL', ${topicIds}),
  ('What is MongoDB?', ${topicIds}),
  ('Installing MongoDB on local machine', ${topicIds}),
  ('Data Types in MongoDB', ${topicIds}),
  ('Using MongoDB Shell', ${topicIds}),
  ('Perform CRUD Operations in MongoDB', ${topicIds}),
  ('Finding Documents', ${topicIds}),
  ('Using Projection to get required fields from collection', ${topicIds}),
  ('Various MongoDB operators like $sort, $limit, $set, etc.', ${topicIds}),
  ('Aggregates in MongoDB Queries', ${topicIds}),
  ('Assignment', ${topicIds});`;

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