const db = require("../../static/db.js");


const creatingCourseTable = `CREATE TABLE IF NOT EXISTS course (
    courseId INT AUTO_INCREMENT PRIMARY KEY,
    courseName VARCHAR(128) NOT NULL,
    courseTopicIds JSON
);`

const creatingBatchTable =`CREATE TABLE IF NOT EXISTS batch (
    batchId INT AUTO_INCREMENT PRIMARY KEY,
    batchName VARCHAR(128) NOT NULL,
    courseId INT,
    FOREIGN KEY (courseId) REFERENCES course(courseId) ON DELETE CASCADE
);`

const creatingUserTable =`CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    password VARCHAR(128) NOT NULL,
    last_login DATETIME(6),
    is_superuser TINYINT(1),
    username VARCHAR(254) UNIQUE NOT NULL,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    email VARCHAR(254) NOT NULL UNIQUE,
    is_staff TINYINT(1),
    is_active TINYINT(1),
    date_joined DATETIME(6),
    middleName VARCHAR(10),
    dob DATE,
    mobileNumber BIGINT NOT NULL UNIQUE,
    address VARCHAR(256),
    gender VARCHAR(10),
    jobLocationSelected VARCHAR(256),
    batchId INT,
    FOREIGN KEY (batchId) REFERENCES batch(batchId) ON DELETE CASCADE
);`

const creatingQualificationTable =`CREATE TABLE IF NOT EXISTS qualification (
    studentID INT unique,
    highestQualification VARCHAR(20) NOT NULL,
    university VARCHAR(50) NOT NULL,
    yearOfPassing INT NOT NULL,
    score DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (studentID) REFERENCES User(id) ON DELETE CASCADE
);`

const creatingWorkingDetailsTable =`CREATE TABLE IF NOT EXISTS workingDetails (
    studentID INT unique,
    fresher BOOLEAN DEFAULT TRUE,
    working BOOLEAN DEFAULT FALSE,
    companyName VARCHAR(20),
    designation VARCHAR(20),
    startDate DATE,
    lastDate DATE,
    FOREIGN KEY (studentID) REFERENCES User(id)  ON DELETE CASCADE
);`

const creatingJobLocationAvailableTable =`CREATE TABLE IF NOT EXISTS jobLocationAvailable (
    location VARCHAR(20)
);`

const creatingQualificationAvailableTable =`CREATE TABLE IF NOT EXISTS qualificationAvailable (
    qualificationName VARCHAR(100) PRIMARY KEY
);`

const creatingTopicTable =`CREATE TABLE IF NOT EXISTS topic (
    topicId INT AUTO_INCREMENT PRIMARY KEY,
    topicName VARCHAR(256) NOT NULL,
    selfLearningTopic BOOLEAN DEFAULT TRUE
);`

const creatingSubTopicTable =`CREATE TABLE IF NOT EXISTS subTopic (
    subTopicId INT AUTO_INCREMENT PRIMARY KEY,
    subTopicName VARCHAR(256) NOT NULL,
    topicId INT,
    FOREIGN KEY (topicId) REFERENCES topic(topicId) ON DELETE CASCADE
);`

const creatingLectureTable =`CREATE TABLE IF NOT EXISTS lecture (
    lectureId INT AUTO_INCREMENT PRIMARY KEY,
    lectureName VARCHAR(256) NOT NULL,
    subTopicId INT,
    topicId INT,
    FOREIGN KEY (subTopicId) REFERENCES subTopic(subTopicId) ON DELETE CASCADE,
    FOREIGN KEY (topicId) REFERENCES topic(topicId) ON DELETE CASCADE
);`

const creatingSelfCompletedLectureTable =`CREATE TABLE IF NOT EXISTS selfCompletedLecture (
    id int primary key,
    lectureId INT,
    subTopicId INT,
    topicId INT,
    studentId INT,
    FOREIGN KEY (lectureId) REFERENCES lecture(lectureId) ON DELETE CASCADE,
    FOREIGN KEY (subTopicId) REFERENCES subTopic(subTopicId) ON DELETE CASCADE,
    FOREIGN KEY (topicId) REFERENCES topic(topicId) ON DELETE CASCADE,
    FOREIGN KEY (studentId) REFERENCES User(id) ON DELETE CASCADE
);`

const creatingClassLectureCompletedTable =`CREATE TABLE IF NOT EXISTS classLectureCompleted (
    id int primary key,
    lectureId INT,
    subTopicId INT,
    topicId INT,
    batchId INT,
    FOREIGN KEY (lectureId) REFERENCES lecture(lectureId) ON DELETE CASCADE,
    FOREIGN KEY (subTopicId) REFERENCES subTopic(subTopicId) ON DELETE CASCADE,
    FOREIGN KEY (topicId) REFERENCES topic(topicId) ON DELETE CASCADE,
    FOREIGN KEY (batchId) REFERENCES batch(batchId) ON DELETE CASCADE
);`;

const createTable = async (req, res) => {
    try{
   await db.query(creatingCourseTable);
   await db.query(creatingBatchTable);
   await db.query(creatingUserTable);
   await db.query(creatingQualificationTable);
   await db.query(creatingWorkingDetailsTable);
   await db.query(creatingJobLocationAvailableTable);
   await db.query(creatingQualificationAvailableTable);
   await db.query(creatingTopicTable);
   await db.query(creatingSubTopicTable);
   await db.query(creatingLectureTable);
   await db.query(creatingSelfCompletedLectureTable);
   await db.query(creatingClassLectureCompletedTable);
   res.json({msg:"Tables Created Successfully"})
}
catch(error){
    console.error(error)
    res.status(500).json({msg:error})
}
};


module.exports={createTable}