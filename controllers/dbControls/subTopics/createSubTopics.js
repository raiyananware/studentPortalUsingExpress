const db = require("../../../static/db.js");

const getSubTopics = async (topicId) => {
  const data = await db.query(
    `select * from subTopic where topicId= ${topicId}`,
  );
  return data;
};

async function topic1001() {
  const data1 = `INSERT INTO subTopic (subTopicId, subTopicName, topicId)
  VALUES 
      (10001, 'Computer Program', 1001)`;
  const data2 = `INSERT INTO subTopic (subTopicName, topicId)
      VALUES 
      ( 'Conditional Statement', 1001),
      ( 'Iterative Statement', 1001),
      ( 'Introduction To SQL', 1001),
      ( 'DDL', 1001),
      ( 'DML', 1001),
      ( 'DQL', 1001),
      ( 'Built In SQL', 1001),
      ( 'Joins And Sub Query', 1001);`;
  try {
    await db.query(data1);
    await db.query(data2);
    return "Sub Topics created";
  } catch (error) {
    return error;
  }
}

async function topic1002() {
  const data = `INSERT INTO subTopic (subTopicName, topicId)
  VALUES 
      ('Introduction To HTML And Basic Tags', 1002),
      ('Tables And Form Elements', 1002),
      ('Introduction To CSS', 1002),
      ('CSS Properties', 1002),
      ('Introduction To Javascript', 1002),
      ('Consuming API', 1002);`;
  try {
    await db.query(data);
    return "Sub Topics created";
  } catch (error) {
    return error;
  }
}

async function topic1003() {
  const data = `INSERT INTO subTopic (subTopicName, topicId)
  VALUES 
      ("Introduction To Python", 1003),
      ("Operators In Python", 1003),
      ("Conditional Statement", 1003),
      ("Loops In Python", 1003),
      ("More On Data Types", 1003),
      ("Guess The Word Project", 1003),
      ("Function And Modules", 1003),
      ("Project On Alice In The Wonderland", 1003),
      ("OOPS In Python", 1003),
      ("Introduction To Django", 1003),
      ("Pet Store With Django", 1003),
      ("Django Project Structure", 1003),
      ("Products Component", 1003),
      ("Templates", 1003),
      ("Bootstrap", 1003),
      ("Search Component", 1003),
      ("Cart Component", 1003),
      ("Checkout Process", 1003),
      ("User Account Registration, Login Using Auth Application.", 1003),
      ("Deploying Our Pet Store Application To Server", 1003),
      ("Software Testing", 1003);`;
  try {
    db.query(data);
    return "Sub Topics created";
  } catch (error) {
    return error;
  }
}

async function topic1004() {
  const data = `INSERT INTO subTopic (subTopicName, topicId)
  VALUES 
      ("Resume Transformation", 1004),
      ("Digital Success", 1004),
      ("Winning The Interview", 1004),
      ("The Job Hunt", 1004);`;
  try {
    await db.query(data);
    return "Sub Topics created";
  } catch (error) {
    return error;
  }
}

async function topic1005() {
  const data = `INSERT INTO subTopic (subTopicName, topicId)
  VALUES 
      ("Introduction To Cloud Computing", 1005),
      ("Compute Services", 1005),
      ("AWS Storage Services", 1005),
      ("Elastic Load Balancing (ELB)", 1005),
      ("Databases", 1005),
      ("AWS Global Infrastructure", 1005),
      ("Infrastructure Management", 1005),
      ("Application Integration Services", 1005),
      ("Cloud Monitoring", 1005),
      ("VPC & Networking", 1005),
      ("Security", 1005),
      ("Other Services Overview", 1005);
  `;
  try {
    await db.query(data);
    return "Sub Topics created";
  } catch (error) {
    return error;
  }
}

async function topic1006() {
  const data = `INSERT INTO subTopic (subTopicName, topicId)
  VALUES 
      ("Introduction To Java", 1006),
      ("Variables, Data Types", 1006),
      ("Operators & Tokens", 1006),
      ("Control Structures & Looping", 1006),
      ("Arrays", 1006),
      ("Guess The Word Project", 1006),
      ("OOPS - Classes & Objects In-Depth", 1006),
      ("OOPS - Abstraction, Inheritance & Polymorphism", 1006),
      ("Strings", 1006),
      ("Exception Handling", 1006),
      ("File Handling & IO", 1006),
      ("Collection Framework & Lambda Expressions", 1006),
      ("Project On Alice In The Wonderland", 1006),
      ("Multi-Threading", 1006),
      ("Java New Features", 1006),
      ("Introduction To Spring Core", 1006),
      ("Spring MVC & Spring Boot", 1006),
      ("Spring With Project - Pet Store", 1006),
      ("Creating & Running Spring Application", 1006),
      ("Creating REST APIs", 1006),
      ("Validating The Request", 1006),
      ("Database Integration & JPA Repository", 1006),
      ("Using Data REST, Pagination & Sorting", 1006),
      ("Relationships & Projections", 1006),
      ("Security", 1006),
      ("Security - Registration & Login Flow", 1006),
      ("File Upload & Download", 1006),
      ("Create Frontend To Consume APIs", 1006),
      ("Unit Testing In Pet Store Project", 1006),
      ("Deploying Our Pet Store Application To Server Using CI/CD", 1006);
  `;
  try {
    await db.query(data);
    return "Sub Topics created";
  } catch (error) {
    return error;
  }
}

async function topic1007() {
  const data = `INSERT INTO subTopic (subTopicName, topicId)
  VALUES 
      ("HTML 5 Elements", 1007),
      ("More On Properties", 1007),
      ("CSS3 Properties", 1007),
      ("Responsive Utilities", 1007),
      ("Introduction To Javascript", 1007),
      ("Variables,Datatypes And Operators", 1007),
      ("Conditional And Control Statements", 1007),
      ("Javascript Function", 1007),
      ("Javascript Objects", 1007),
      ("Document Object Model", 1007),
      ("Bootstrap", 1007);
  `;
  try {
    await db.query(data);
    return "Sub Topics created";
  } catch (error) {
    return error;
  }
}

async function topic1008() {
  const data = `INSERT INTO subTopic (subTopicName, topicId)
  VALUES 
      ("Introduction To Angular", 1008),
      ("Angular Components", 1008),
      ("Data Binding", 1008),
      ("Pipes & Strong Typing", 1008),
      ("Directives", 1008),
      ("Component Communication", 1008),
      ("Using Services, Dependency Injection", 1008),
      ("RxJS & Calling API", 1008),
      ("Routing And Navigation", 1008),
      ("Angular Forms", 1008),
      ("Angular Modules", 1008),
      ("Building & Deploying With CLI", 1008);
  `;
  try {
    await db.query(data);
    return "Sub Topics created";
  } catch (error) {
    return error;
  }
}

async function topic1009() {
  const data = `INSERT INTO subTopic (subTopicName, topicId)
  VALUES 
      ("Stored Procedure And Function", 1009),
      ("Cursor", 1009),
      ("Triggers", 1009),
      ("MongoDB - CRUD Operations", 1009);
  `;
  try {
    await db.query(data);
    return "Sub Topics created";
  } catch (error) {
    return error;
  }
}

const createSubTopics = async (req, res) => {
  const topicId = req.query.topicId;
  const tableData = await getSubTopics(topicId);
  let message = "";
  if (tableData[0].length == 0) {
    if (topicId == 1001) message = await topic1001();
    else if (topicId == 1002) message = await topic1002();
    else if (topicId == 1003) message = await topic1003();
    else if (topicId == 1004) message = await topic1004();
    else if (topicId == 1005) message = await topic1005();
    else if (topicId == 1006) message = await topic1006();
    else if (topicId == 1007) message = await topic1007();
    else if (topicId == 1008) message = await topic1008();
    else if (topicId == 1009) message = await topic1009();

    if (!message.errno) res.status(201).json({ msg: message });
    else res.status(500).json({ msg: message });
  } else {
    res
      .status(500)
      .json({ msg: "Sub Topic Already exist", subTopics: tableData[0] });
  }
};

module.exports = { createSubTopics };
