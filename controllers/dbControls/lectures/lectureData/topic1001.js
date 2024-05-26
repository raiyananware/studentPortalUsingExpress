const db =require("../../../../static/db.js")


const createLecturesForSubTopic10001= async  (subTopicId)=>{
  const topicId=1001
const data=`INSERT INTO lecture (lectureId, lectureName, subTopicId, topicId)
VALUES 
(100001 ,'What is Computer Program?', ${subTopicId}, ${topicId}),
(100002 ,'Categories of Programming Language', ${subTopicId}, ${topicId}),
(100003 ,'High Level Language Vs Low Level Language', ${subTopicId}, ${topicId}),
(100004 ,'Computer Instruction Components', ${subTopicId}, ${topicId}),
(100005 ,'Programming Language', ${subTopicId}, ${topicId}),
(100006 ,'Compiler Vs Interpreter', ${subTopicId}, ${topicId}),
(100007 ,'What is Instruction in Computer?', ${subTopicId}, ${topicId}),
(100008 ,'What is Program?', ${subTopicId}, ${topicId}),
(100009 ,'Assignment', ${subTopicId}, ${topicId});`
const lectures= await db.query(`select * from lecture where subTopicId=${subTopicId}`)
if(lectures[0].length==0){
try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}

}

const createLecturesForSubTopic10002= async (subTopicId) =>{
  const topicId=1001
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('Decision Making statement', ${subTopicId}, ${topicId}),
('Comparison Operator', ${subTopicId}, ${topicId}),
('Logical Operator', ${subTopicId}, ${topicId}),
('AND Operator and OR operator', ${subTopicId}, ${topicId}),
('Types of IF condition and its Flowcharts', ${subTopicId}, ${topicId}),
('Nested IF condition and Its flowchart', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId});`
const lectures= await db.query(`select * from lecture where subTopicId=${subTopicId}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10003= async (subTopicId) =>{
  const topicId=1001
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('Iterative Statement', ${subTopicId}, ${topicId}),
('Infinite and Finite Loop', ${subTopicId}, ${topicId}),
('Flowchart to print 1 to 10 numbers', ${subTopicId}, ${topicId}),
('If vs Loop', ${subTopicId}, ${topicId}),
('Factorial of Given Number', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId});`
const lectures= await db.query(`select * from lecture where subTopicId=${subTopicId}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10004= async (subTopicId) =>{
  const topicId=1001
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('What is data and information', ${subTopicId}, ${topicId}),
('What is Database', ${subTopicId}, ${topicId}),
('What is Database Management System', ${subTopicId}, ${topicId}),
('What is SQL?', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId}),
('E-R Diagram.', ${subTopicId}, ${topicId}),
('Geometric Shapes in ER diagram', ${subTopicId}, ${topicId}),
('Component of ER diagram.[Entity,Attribute and Relationship]', ${subTopicId}, ${topicId}),
('Relationship', ${subTopicId}, ${topicId}),
('ER diagram to Table Conversion', ${subTopicId}, ${topicId}),
('workbench', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId});`
const lectures= await db.query(`select * from lecture where subTopicId=${subTopicId}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10005= async (subTopicId) =>{
  const topicId=1001
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('Data types, expressions, operators', ${subTopicId}, ${topicId}),
('Data Definition Language(DDL)', ${subTopicId}, ${topicId}),
('Creation of table', ${subTopicId}, ${topicId}),
('Dropping a table', ${subTopicId}, ${topicId}),
('Working with different options', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId});`
const lectures= await db.query(`select * from lecture where subTopicId=${subTopicId}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10006= async (subTopicId) =>{
  const topicId=1001
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('INSERT statement', ${subTopicId}, ${topicId}),
('UPDATE statement', ${subTopicId}, ${topicId}),
('DELETE statement', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId}),
('Constraints', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId});`
const lectures= await db.query(`select * from lecture where subTopicId=${subTopicId}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10007= async (subTopicId) =>{
  const topicId=1001
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('SELECT statement', ${subTopicId}, ${topicId}),
('WHERE clause search condition', ${subTopicId}, ${topicId}),
('Arithmetic, Comparison and Logical operator', ${subTopicId}, ${topicId}),
('Range operator', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId}),
('List operator', ${subTopicId}, ${topicId}),
('Like operator', ${subTopicId}, ${topicId}),
('Using ORDER BY, DISTINCT and TOP', ${subTopicId}, ${topicId}),
('Using IS NULL and IS NOT NULL', ${subTopicId}, ${topicId}),
('Various other clauses', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId});`
const lectures= await db.query(`select * from lecture where subTopicId=${subTopicId}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10008= async (subTopicId) =>{
  const topicId=1001
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('String Function', ${subTopicId}, ${topicId}),
('Math Function', ${subTopicId}, ${topicId}),
('Date Function', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId}),
('Aggregate Function', ${subTopicId}, ${topicId}),
('GROUP BY clause with HAVING', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId});`
const lectures= await db.query(`select * from lecture where subTopicId=${subTopicId}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10009= async (subTopicId) =>{
  const topicId=1001
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('Introduction to Joins', ${subTopicId}, ${topicId}),
('Types of Joins', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId}),
('Introduction Types of Sub-queries', ${subTopicId}, ${topicId}),
('Search Condition', ${subTopicId}, ${topicId}),
('Comparison operators', ${subTopicId}, ${topicId}),
('IN', ${subTopicId}, ${topicId}),
('Assignment', ${subTopicId}, ${topicId});`
const lectures= await db.query(`select * from lecture where subTopicId=${subTopicId}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}



const topic1001= async (topicId)=>{
    const subtopics= await db.query(`select * from subTopic where topicId=${topicId}`)
    if(subtopics[0].length!=0){
        try{
            await createLecturesForSubTopic10001(subtopics[0][0].subTopicId)
            await createLecturesForSubTopic10002(subtopics[0][1].subTopicId)
            await createLecturesForSubTopic10003(subtopics[0][2].subTopicId)
            await createLecturesForSubTopic10004(subtopics[0][3].subTopicId)
            await createLecturesForSubTopic10005(subtopics[0][4].subTopicId)
            await createLecturesForSubTopic10006(subtopics[0][5].subTopicId)
            await createLecturesForSubTopic10007(subtopics[0][6].subTopicId)
            await createLecturesForSubTopic10008(subtopics[0][7].subTopicId)
            await createLecturesForSubTopic10009(subtopics[0][8].subTopicId)
            return ({msg:"Lectures Created"})
        }
        catch(error){
          console.log(error)
            return error;
        }
    }
    else{
        return ({error:"Lecture not Created"})
    }

}

module.exports = {topic1001}