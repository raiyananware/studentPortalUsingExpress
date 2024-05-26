const db = require("../../../../static/db.js");

const topicId=1003

const createLecturesForSubTopic10016 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('What is Python?', ${subTopicId}, ${topicId}),
  ('Features of Python', ${subTopicId}, ${topicId}),
  ('Installation of Python', ${subTopicId}, ${topicId}),
  ('Variables in Python', ${subTopicId}, ${topicId}),
  ('print() function | Message printing & Variable Value Printing', ${subTopicId}, ${topicId}),
  ('Comments in Python', ${subTopicId}, ${topicId}),
  ('Assignment', ${subTopicId}, ${topicId});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${subTopicId}`,
  );
  if (lectures[0].length == 0) {
    try {
        await db.query(data);
      return "Lecture Created";
    } catch (error) {
        console.log(error)
      return error;
    }
  }
};

const createLecturesForSubTopic10017 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('What is Data?', ${subTopicId}, ${topicId}),
  ('Basic Data types in Python-Number,string and Boolean', ${subTopicId}, ${topicId}),
  ('type() to check datatype', ${subTopicId}, ${topicId}),
  ('Arithmetic Operator [+,-,/,*,//,%]', ${subTopicId}, ${topicId}),
  ('Assignment operator', ${subTopicId}, ${topicId}),
  ('taking input from user | input() , string to int conversion using int() function , string to float conversion using float() function', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10018 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Need of Conditional Statement', ${subTopicId}, ${topicId}),
  ('Comparison Operators', ${subTopicId}, ${topicId}),
  ('if...else statement', ${subTopicId}, ${topicId}),
  ('logical operators', ${subTopicId}, ${topicId}),
  ('elif statements', ${subTopicId}, ${topicId}),
  ('Indentation in Python', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10019 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('range() function', ${subTopicId}, ${topicId}),
  ('Need of Loop', ${subTopicId}, ${topicId}),
  ('for loop', ${subTopicId}, ${topicId}),
  ('while loop', ${subTopicId}, ${topicId}),
  ('Continue, break and pass keyword', ${subTopicId}, ${topicId}),
  ('Nested loop', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10020 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('String', ${subTopicId}, ${topicId}),
  ('List', ${subTopicId}, ${topicId}),
  ('Multidimensional List | tuple , set', ${subTopicId}, ${topicId}),
  ('Dictionary', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10021 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES ('Simulator to WordScapes on Play Store', ${subTopicId}, ${topicId});`;

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

const createLecturesForSubTopic10022 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Defining and calling function', ${subTopicId}, ${topicId}),
  ('return statement', ${subTopicId}, ${topicId}),
  ('Types of Argument-default,variable length', ${subTopicId}, ${topicId}),
  ('Variable Scope - Global vs Local', ${subTopicId}, ${topicId}),
  ('Recursive function', ${subTopicId}, ${topicId}),
  ('Need of Module', ${subTopicId}, ${topicId}),
  ('What is module', ${subTopicId}, ${topicId}),
  ('Built in Module', ${subTopicId}, ${topicId}),
  ('User defined Module', ${subTopicId}, ${topicId}),
  ('Packages', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10023 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Word count and writing the word count to different file', ${subTopicId}, ${topicId}),
  ('File operations', ${subTopicId}, ${topicId}),
  ('Need of file', ${subTopicId}, ${topicId}),
  ('What is file', ${subTopicId}, ${topicId}),
  ('Modes in file (read, write, append)', ${subTopicId}, ${topicId}),
  ('Methods in file operations', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10024 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Introduction to OOP -Classes & Objects', ${subTopicId}, ${topicId}),
  ('Methods and attributes (user defined method)', ${subTopicId}, ${topicId}),
  ('constructor and destructor', ${subTopicId}, ${topicId}),
  ('Inheritance and its types', ${subTopicId}, ${topicId}),
  ('Operator overloading', ${subTopicId}, ${topicId}),
  ('Exception Handling[try,except,finally)', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10025 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('What is Framework', ${subTopicId}, ${topicId}),
  ('What is Django Framework', ${subTopicId}, ${topicId}),
  ('Need of Django Framework (Features of Django)', ${subTopicId}, ${topicId}),
  ('Installation - Python, Virtual env, Django', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10026 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Introduction to the Pet Store Project', ${subTopicId}, ${topicId}),
  ('SDLC', ${subTopicId}, ${topicId}),
  ('Agile Methodology', ${subTopicId}, ${topicId}),
  ('Scrum', ${subTopicId}, ${topicId}),
  ('Introduction to JIRA', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10027 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Django First Project', ${subTopicId}, ${topicId}),
  ('Django Architecture', ${subTopicId}, ${topicId}),
  ('Django view', ${subTopicId}, ${topicId}),
  ('URL Mapping', ${subTopicId}, ${topicId}),
  ('Function Based Views', ${subTopicId}, ${topicId}),
  ('Class Based Views', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10028 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Your first app Module', ${subTopicId}, ${topicId}),
  ('Understanding CRUD', ${subTopicId}, ${topicId}),
  ('Product Model', ${subTopicId}, ${topicId}),
  ('Django Admin', ${subTopicId}, ${topicId}),
  ('List View', ${subTopicId}, ${topicId}),
  ('Detail View', ${subTopicId}, ${topicId}),
  ('ImageField & FileField', ${subTopicId}, ${topicId}),
  ('Understanding Lookups', ${subTopicId}, ${topicId}),
  ('Custom Model Managers', ${subTopicId}, ${topicId}),
  ('Featured & Custom QuerySets', ${subTopicId}, ${topicId}),
  ('SlugField & Signals', ${subTopicId}, ${topicId}),
  ('Products URLs', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10029 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Base Template', ${subTopicId}, ${topicId}),
  ('Include Tag', ${subTopicId}, ${topicId}),
  ('Pass Arguments with Include', ${subTopicId}, ${topicId}),
  ('Reusable List View Snippets', ${subTopicId}, ${topicId}),
  ('Reverse for URLs', ${subTopicId}, ${topicId}),
  ('Navbar', ${subTopicId}, ${topicId}),
  ('Template Filters', ${subTopicId}, ${topicId}),
  ('ForLoop Counter & Cycle', ${subTopicId}, ${topicId}),
  ('Template Inheritance/ Template Extending', ${subTopicId}, ${topicId}),
  ('static files', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10030 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Adding Bootstrap', ${subTopicId}, ${topicId}),
  ('Container vs Container-Fluid', ${subTopicId}, ${topicId}),
  ('Rows And Columns', ${subTopicId}, ${topicId}),
  ('Column Sizing', ${subTopicId}, ${topicId}),
  ('Designing for Different Browser Sizes with Breakpoints', ${subTopicId}, ${topicId}),
  ('Spacing with Margin & Padding', ${subTopicId}, ${topicId}),
  ('Navbar', ${subTopicId}, ${topicId}),
  ('Integrate to Django', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10031 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('A Basic Search View', ${subTopicId}, ${topicId}),
  ('Display the Query to the User', ${subTopicId}, ${topicId}),
  ('Creating the Search Form', ${subTopicId}, ${topicId}),
  ('Better Lookups with Q', ${subTopicId}, ${topicId}),
  ('Tag Component', ${subTopicId}, ${topicId}),
  ('Shell Commands for a Brief Intro to Foreign Keys', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10032 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Assignment', ${subTopicId}, ${topicId}),
  ('Django Sessions', ${subTopicId}, ${topicId}),
  ('Cart Model', ${subTopicId}, ${topicId}),
  ('Cart Update View', ${subTopicId}, ${topicId}),
  ('Add to Cart Form', ${subTopicId}, ${topicId}),
  ('Display Cart', ${subTopicId}, ${topicId}),
  ('Remove Items from the Cart', ${subTopicId}, ${topicId}),
  ('Cart Icon & FontAwesome', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10033 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('The Roadmap for the Checkout Process', ${subTopicId}, ${topicId}),
  ('Generate the Order ID', ${subTopicId}, ${topicId}),
  ('Review Order Payment Page', ${subTopicId}, ${topicId}),
  ('PayPal Payment Gateway with Sandbox Account', ${subTopicId}, ${topicId}),
  ('Integrate PayPal', ${subTopicId}, ${topicId}),
  ('move cart items to OrderPet model', ${subTopicId}, ${topicId}),
  ('store order detail in backend.', ${subTopicId}, ${topicId}),
  ('Send Order confirmation Email and order success page.', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10034 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('User registration using built auth app.', ${subTopicId}, ${topicId}),
  ('user login', ${subTopicId}, ${topicId}),
  ('user logout', ${subTopicId}, ${topicId}),
  ('Authentication and Authorization', ${subTopicId}, ${topicId}),
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
};

const createLecturesForSubTopic10035 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Create Repository on GitHub and upload project..', ${subTopicId}, ${topicId}),
  ('Assignment', ${subTopicId}, ${topicId});
  `;

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

const createLecturesForSubTopic10036 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Why test?', ${subTopicId}, ${topicId}),
  ('What is testing, types of testing', ${subTopicId}, ${topicId}),
  ('Assertions', ${subTopicId}, ${topicId}),
  ('Basic pytest installation', ${subTopicId}, ${topicId}),
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
};

const topic1003 = async (topicId) => {
  const subtopics = await db.query(`select * from subTopic where topicId=${topicId}`,
  );
  if (subtopics[0].length != 0) {
    try {
      await createLecturesForSubTopic10016(subtopics[0][0].subTopicId);
      await createLecturesForSubTopic10017(subtopics[0][1].subTopicId);
      await createLecturesForSubTopic10018(subtopics[0][2].subTopicId);
      await createLecturesForSubTopic10019(subtopics[0][3].subTopicId);
      await createLecturesForSubTopic10020(subtopics[0][4].subTopicId);
      await createLecturesForSubTopic10021(subtopics[0][5].subTopicId);
      await createLecturesForSubTopic10022(subtopics[0][6].subTopicId);
      await createLecturesForSubTopic10023(subtopics[0][7].subTopicId);
      await createLecturesForSubTopic10024(subtopics[0][8].subTopicId);
      await createLecturesForSubTopic10025(subtopics[0][9].subTopicId);
      await createLecturesForSubTopic10026(subtopics[0][10].subTopicId);
      await createLecturesForSubTopic10027(subtopics[0][11].subTopicId);
      await createLecturesForSubTopic10028(subtopics[0][12].subTopicId);
      await createLecturesForSubTopic10029(subtopics[0][13].subTopicId);
      await createLecturesForSubTopic10030(subtopics[0][14].subTopicId);
      await createLecturesForSubTopic10031(subtopics[0][15].subTopicId);
      await createLecturesForSubTopic10032(subtopics[0][16].subTopicId);
      await createLecturesForSubTopic10033(subtopics[0][17].subTopicId);
      await createLecturesForSubTopic10034(subtopics[0][18].subTopicId);
      await createLecturesForSubTopic10035(subtopics[0][19].subTopicId);
      await createLecturesForSubTopic10036(subtopics[0][20].subTopicId);
      return { msg: "Lectures Created" };
    } catch (error) {
      return error;
    }
  } else {
    return { error: "Lecture not Created" };
  }
};

module.exports = { topic1003 };
