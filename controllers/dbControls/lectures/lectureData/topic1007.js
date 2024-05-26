const db =require("../../../../static/db.js")

const topicId=1007

const createLecturesForSubTopic10083 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('Sementic Elements', ${subTopicId}, ${topicId}),
  ('Audio,Video Tag', ${subTopicId}, ${topicId}),
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


const createLecturesForSubTopic10084 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('Margin and Padding', ${subTopicId}, ${topicId}),
  ('Shadow Property-Text and Box', ${subTopicId}, ${topicId}),
  ('Float and Clear', ${subTopicId}, ${topicId}),
  ('Position Property', ${subTopicId}, ${topicId}),
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


const createLecturesForSubTopic10085 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('Background Gradient', ${subTopicId}, ${topicId}),
  ('Transform Properties', ${subTopicId}, ${topicId}),
  ('Transition properties', ${subTopicId}, ${topicId}),
  ('Keyframe Animation', ${subTopicId}, ${topicId}),
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


const createLecturesForSubTopic10086 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('Fixed Vs Fluid Vs Adaptive Vs Responsive layout', ${subTopicId}, ${topicId}),
  ('Meta Viewport', ${subTopicId}, ${topicId}),
  ('Media Queries', ${subTopicId}, ${topicId}),
  ('Responsive Images', ${subTopicId}, ${topicId}),
  ('Flexbox Layout', ${subTopicId}, ${topicId}),
  ('Grid Layout', ${subTopicId}, ${topicId}),
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


const createLecturesForSubTopic10087 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('Javascript History and Features', ${subTopicId}, ${topicId}),
  ('Types of JS', ${subTopicId}, ${topicId}),
  ('Print Hello World', ${subTopicId}, ${topicId}),
  ('Comments in Javascript', ${subTopicId}, ${topicId}),
  ('Browser Console', ${subTopicId}, ${topicId}),
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


const createLecturesForSubTopic10088 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('var, let and const keywords Scopes', ${subTopicId}, ${topicId}),
  ('Variable Hoisting', ${subTopicId}, ${topicId}),
  ('Datatypes', ${subTopicId}, ${topicId}),
  ('Operators', ${subTopicId}, ${topicId}),
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


const createLecturesForSubTopic10089 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('Conditional Statements', ${subTopicId}, ${topicId}),
  ('Control Statements', ${subTopicId}, ${topicId}),
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


const createLecturesForSubTopic10090 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('Built-in Functions', ${subTopicId}, ${topicId}),
  ('Regular Functions', ${subTopicId}, ${topicId}),
  ('Passing Parameters to Function', ${subTopicId}, ${topicId}),
  ('return value', ${subTopicId}, ${topicId}),
  ('Anonymous Functions', ${subTopicId}, ${topicId}),
  ('Arrow Functions', ${subTopicId}, ${topicId}),
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


const createLecturesForSubTopic10091 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('Defining Objects', ${subTopicId}, ${topicId}),
  ('Accessing Properties and Methods of the Object', ${subTopicId}, ${topicId}),
  ('Usage of \'this\' keyword', ${subTopicId}, ${topicId}),
  ('Objects inside Object', ${subTopicId}, ${topicId}),
  ('Arrays in Javascript', ${subTopicId}, ${topicId}),
  ('String and math Object', ${subTopicId}, ${topicId}),
  ('Window Object - Console,Screen, Location, History', ${subTopicId}, ${topicId}),
  ('Dynamic Property Syntax in Object Literal', ${subTopicId}, ${topicId}),
  ('Shorter Property Syntax in Object Literal', ${subTopicId}, ${topicId}),
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


const createLecturesForSubTopic10092 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('DOM Property Manipulation', ${subTopicId}, ${topicId}),
  ('DOM Event Handling', ${subTopicId}, ${topicId}),
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


const createLecturesForSubTopic10093 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES
  ('Bootstrap Introduction', ${subTopicId}, ${topicId}),
  ('Layout and Content', ${subTopicId}, ${topicId}),
  ('Bootstrap components', ${subTopicId}, ${topicId}),
  ('Bootstrap utilities', ${subTopicId}, ${topicId}),
  ('Bootstrap icons', ${subTopicId}, ${topicId}),
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



const topic1007= async (topicId)=>{
    const subtopics = await db.query(`select * from subTopic where topicId=${topicId}`,
    );
    if (subtopics[0].length != 0) {
      try {
        await createLecturesForSubTopic10083(subtopics[0][0].subTopicId);
        await createLecturesForSubTopic10084(subtopics[0][1].subTopicId);
        await createLecturesForSubTopic10085(subtopics[0][2].subTopicId);
        await createLecturesForSubTopic10086(subtopics[0][3].subTopicId);
        await createLecturesForSubTopic10087(subtopics[0][4].subTopicId);
        await createLecturesForSubTopic10088(subtopics[0][5].subTopicId);
        await createLecturesForSubTopic10089(subtopics[0][6].subTopicId);
        await createLecturesForSubTopic10090(subtopics[0][7].subTopicId);
        await createLecturesForSubTopic10091(subtopics[0][8].subTopicId);
        await createLecturesForSubTopic10092(subtopics[0][9].subTopicId);
        await createLecturesForSubTopic10093(subtopics[0][10].subTopicId);
        return { msg: "Lectures Created" };
      } catch (error) {
        return error;
      }
    } else {
      return { error: "Lecture not Created" };
    }

}

module.exports = {topic1007}