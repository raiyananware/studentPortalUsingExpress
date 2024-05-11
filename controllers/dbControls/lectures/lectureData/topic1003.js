const db = require("../../../../static/db.js");

const createLecturesForSubTopic10016 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('What is Python?', ${topicIds}),
  ('Features of Python', ${topicIds}),
  ('Installation of Python', ${topicIds}),
  ('Variables in Python', ${topicIds}),
  ('print() function | Message printing & Variable Value Printing', ${topicIds}),
  ('Comments in Python', ${topicIds}),
  ('Assignment', ${topicIds});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${topicIds}`,
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

const createLecturesForSubTopic10017 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('What is Data?', ${topicIds}),
  ('Basic Data types in Python-Number,string and Boolean', ${topicIds}),
  ('type() to check datatype', ${topicIds}),
  ('Arithmetic Operator [+,-,/,*,//,%]', ${topicIds}),
  ('Assignment operator', ${topicIds}),
  ('taking input from user | input() , string to int conversion using int() function , string to float conversion using float() function', ${topicIds}),
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
};

const createLecturesForSubTopic10018 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Need of Conditional Statement', ${topicIds}),
  ('Comparison Operators', ${topicIds}),
  ('if...else statement', ${topicIds}),
  ('logical operators', ${topicIds}),
  ('elif statements', ${topicIds}),
  ('Indentation in Python', ${topicIds}),
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
};

const createLecturesForSubTopic10019 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('range() function', ${topicIds}),
  ('Need of Loop', ${topicIds}),
  ('for loop', ${topicIds}),
  ('while loop', ${topicIds}),
  ('Continue, break and pass keyword', ${topicIds}),
  ('Nested loop', ${topicIds}),
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
};

const createLecturesForSubTopic10020 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('String', ${topicIds}),
  ('List', ${topicIds}),
  ('Multidimensional List | tuple , set', ${topicIds}),
  ('Dictionary', ${topicIds}),
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
};

const createLecturesForSubTopic10021 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES ('Simulator to WordScapes on Play Store', ${topicIds});`;

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

const createLecturesForSubTopic10022 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Defining and calling function', ${topicIds}),
  ('return statement', ${topicIds}),
  ('Types of Argument-default,variable length', ${topicIds}),
  ('Variable Scope - Global vs Local', ${topicIds}),
  ('Recursive function', ${topicIds}),
  ('Need of Module', ${topicIds}),
  ('What is module', ${topicIds}),
  ('Built in Module', ${topicIds}),
  ('User defined Module', ${topicIds}),
  ('Packages', ${topicIds}),
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
};

const createLecturesForSubTopic10023 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Word count and writing the word count to different file', ${topicIds}),
  ('File operations', ${topicIds}),
  ('Need of file', ${topicIds}),
  ('What is file', ${topicIds}),
  ('Modes in file (read, write, append)', ${topicIds}),
  ('Methods in file operations', ${topicIds}),
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
};

const createLecturesForSubTopic10024 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Introduction to OOP -Classes & Objects', ${topicIds}),
  ('Methods and attributes (user defined method)', ${topicIds}),
  ('constructor and destructor', ${topicIds}),
  ('Inheritance and its types', ${topicIds}),
  ('Operator overloading', ${topicIds}),
  ('Exception Handling[try,except,finally)', ${topicIds}),
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
};

const createLecturesForSubTopic10025 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('What is Framework', ${topicIds}),
  ('What is Django Framework', ${topicIds}),
  ('Need of Django Framework (Features of Django)', ${topicIds}),
  ('Installation - Python, Virtual env, Django', ${topicIds}),
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
};

const createLecturesForSubTopic10026 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Introduction to the Pet Store Project', ${topicIds}),
  ('SDLC', ${topicIds}),
  ('Agile Methodology', ${topicIds}),
  ('Scrum', ${topicIds}),
  ('Introduction to JIRA', ${topicIds}),
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
};

const createLecturesForSubTopic10027 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Django First Project', ${topicIds}),
  ('Django Architecture', ${topicIds}),
  ('Django view', ${topicIds}),
  ('URL Mapping', ${topicIds}),
  ('Function Based Views', ${topicIds}),
  ('Class Based Views', ${topicIds}),
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
};

const createLecturesForSubTopic10028 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Your first app Module', ${topicIds}),
  ('Understanding CRUD', ${topicIds}),
  ('Product Model', ${topicIds}),
  ('Django Admin', ${topicIds}),
  ('List View', ${topicIds}),
  ('Detail View', ${topicIds}),
  ('ImageField & FileField', ${topicIds}),
  ('Understanding Lookups', ${topicIds}),
  ('Custom Model Managers', ${topicIds}),
  ('Featured & Custom QuerySets', ${topicIds}),
  ('SlugField & Signals', ${topicIds}),
  ('Products URLs', ${topicIds}),
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
};

const createLecturesForSubTopic10029 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Base Template', ${topicIds}),
  ('Include Tag', ${topicIds}),
  ('Pass Arguments with Include', ${topicIds}),
  ('Reusable List View Snippets', ${topicIds}),
  ('Reverse for URLs', ${topicIds}),
  ('Navbar', ${topicIds}),
  ('Template Filters', ${topicIds}),
  ('ForLoop Counter & Cycle', ${topicIds}),
  ('Template Inheritance/ Template Extending', ${topicIds}),
  ('static files', ${topicIds}),
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
};

const createLecturesForSubTopic10030 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Adding Bootstrap', ${topicIds}),
  ('Container vs Container-Fluid', ${topicIds}),
  ('Rows And Columns', ${topicIds}),
  ('Column Sizing', ${topicIds}),
  ('Designing for Different Browser Sizes with Breakpoints', ${topicIds}),
  ('Spacing with Margin & Padding', ${topicIds}),
  ('Navbar', ${topicIds}),
  ('Integrate to Django', ${topicIds}),
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
};

const createLecturesForSubTopic10031 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('A Basic Search View', ${topicIds}),
  ('Display the Query to the User', ${topicIds}),
  ('Creating the Search Form', ${topicIds}),
  ('Better Lookups with Q', ${topicIds}),
  ('Tag Component', ${topicIds}),
  ('Shell Commands for a Brief Intro to Foreign Keys', ${topicIds}),
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
};

const createLecturesForSubTopic10032 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Assignment', ${topicIds}),
  ('Django Sessions', ${topicIds}),
  ('Cart Model', ${topicIds}),
  ('Cart Update View', ${topicIds}),
  ('Add to Cart Form', ${topicIds}),
  ('Display Cart', ${topicIds}),
  ('Remove Items from the Cart', ${topicIds}),
  ('Cart Icon & FontAwesome', ${topicIds}),
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
};

const createLecturesForSubTopic10033 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('The Roadmap for the Checkout Process', ${topicIds}),
  ('Generate the Order ID', ${topicIds}),
  ('Review Order Payment Page', ${topicIds}),
  ('PayPal Payment Gateway with Sandbox Account', ${topicIds}),
  ('Integrate PayPal', ${topicIds}),
  ('move cart items to OrderPet model', ${topicIds}),
  ('store order detail in backend.', ${topicIds}),
  ('Send Order confirmation Email and order success page.', ${topicIds}),
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
};

const createLecturesForSubTopic10034 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('User registration using built auth app.', ${topicIds}),
  ('user login', ${topicIds}),
  ('user logout', ${topicIds}),
  ('Authentication and Authorization', ${topicIds}),
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
};

const createLecturesForSubTopic10035 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Create Repository on GitHub and upload project..', ${topicIds}),
  ('Assignment', ${topicIds});
  `;

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

const createLecturesForSubTopic10036 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Why test?', ${topicIds}),
  ('What is testing, types of testing', ${topicIds}),
  ('Assertions', ${topicIds}),
  ('Basic pytest installation', ${topicIds}),
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
