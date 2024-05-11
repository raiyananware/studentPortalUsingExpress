const db =require("../../../../static/db.js")


const createLecturesForSubTopic10083 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('Sementic Elements', ${topicIds}),
  ('Audio,Video Tag', ${topicIds}),
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


const createLecturesForSubTopic10084 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('Margin and Padding', ${topicIds}),
  ('Shadow Property-Text and Box', ${topicIds}),
  ('Float and Clear', ${topicIds}),
  ('Position Property', ${topicIds}),
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


const createLecturesForSubTopic10085 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('Background Gradient', ${topicIds}),
  ('Transform Properties', ${topicIds}),
  ('Transition properties', ${topicIds}),
  ('Keyframe Animation', ${topicIds}),
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


const createLecturesForSubTopic10086 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('Fixed Vs Fluid Vs Adaptive Vs Responsive layout', ${topicIds}),
  ('Meta Viewport', ${topicIds}),
  ('Media Queries', ${topicIds}),
  ('Responsive Images', ${topicIds}),
  ('Flexbox Layout', ${topicIds}),
  ('Grid Layout', ${topicIds}),
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


const createLecturesForSubTopic10087 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('Javascript History and Features', ${topicIds}),
  ('Types of JS', ${topicIds}),
  ('Print Hello World', ${topicIds}),
  ('Comments in Javascript', ${topicIds}),
  ('Browser Console', ${topicIds}),
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


const createLecturesForSubTopic10088 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('var, let and const keywords Scopes', ${topicIds}),
  ('Variable Hoisting', ${topicIds}),
  ('Datatypes', ${topicIds}),
  ('Operators', ${topicIds}),
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


const createLecturesForSubTopic10089 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('Conditional Statements', ${topicIds}),
  ('Control Statements', ${topicIds}),
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


const createLecturesForSubTopic10090 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('Built-in Functions', ${topicIds}),
  ('Regular Functions', ${topicIds}),
  ('Passing Parameters to Function', ${topicIds}),
  ('return value', ${topicIds}),
  ('Anonymous Functions', ${topicIds}),
  ('Arrow Functions', ${topicIds}),
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


const createLecturesForSubTopic10091 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('Defining Objects', ${topicIds}),
  ('Accessing Properties and Methods of the Object', ${topicIds}),
  ('Usage of \'this\' keyword', ${topicIds}),
  ('Objects inside Object', ${topicIds}),
  ('Arrays in Javascript', ${topicIds}),
  ('String and math Object', ${topicIds}),
  ('Window Object - Console,Screen, Location, History', ${topicIds}),
  ('Dynamic Property Syntax in Object Literal', ${topicIds}),
  ('Shorter Property Syntax in Object Literal', ${topicIds}),
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


const createLecturesForSubTopic10092 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('DOM Property Manipulation', ${topicIds}),
  ('DOM Event Handling', ${topicIds}),
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


const createLecturesForSubTopic10093 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES
  ('Bootstrap Introduction', ${topicIds}),
  ('Layout and Content', ${topicIds}),
  ('Bootstrap components', ${topicIds}),
  ('Bootstrap utilities', ${topicIds}),
  ('Bootstrap icons', ${topicIds}),
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