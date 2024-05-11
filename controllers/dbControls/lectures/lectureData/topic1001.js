const db =require("../../../../static/db.js")


const createLecturesForSubTopic10001= async (topicIds) =>{
const data=`INSERT INTO lecture (lectureId, lectureName, subTopicId)
VALUES 
(100001 ,'What is Computer Program?', ${topicIds}),
(100002 ,'Categories of Programming Language', ${topicIds}),
(100003 ,'High Level Language Vs Low Level Language', ${topicIds}),
(100004 ,'Computer Instruction Components', ${topicIds}),
(100005 ,'Programming Language', ${topicIds}),
(100006 ,'Compiler Vs Interpreter', ${topicIds}),
(100007 ,'What is Instruction in Computer?', ${topicIds}),
(100008 ,'What is Program?', ${topicIds}),
(100009 ,'Assignment', ${topicIds});`
const lectures= await db.query(`select * from lecture where subTopicId=${topicIds}`)
if(lectures[0].length==0){
try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}

}

const createLecturesForSubTopic10002= async (topicIds) =>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('Decision Making statement', ${topicIds}),
('Comparison Operator', ${topicIds}),
('Logical Operator', ${topicIds}),
('AND Operator and OR operator', ${topicIds}),
('Types of IF condition and its Flowcharts', ${topicIds}),
('Nested IF condition and Its flowchart', ${topicIds}),
('Assignment', ${topicIds});`
const lectures= await db.query(`select * from lecture where subTopicId=${topicIds}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10003= async (topicIds) =>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('Iterative Statement', ${topicIds}),
('Infinite and Finite Loop', ${topicIds}),
('Flowchart to print 1 to 10 numbers', ${topicIds}),
('If vs Loop', ${topicIds}),
('Factorial of Given Number', ${topicIds}),
('Assignment', ${topicIds});`
const lectures= await db.query(`select * from lecture where subTopicId=${topicIds}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10004= async (topicIds) =>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('What is data and information', ${topicIds}),
('What is Database', ${topicIds}),
('What is Database Management System', ${topicIds}),
('What is SQL?', ${topicIds}),
('Assignment', ${topicIds}),
('E-R Diagram.', ${topicIds}),
('Geometric Shapes in ER diagram', ${topicIds}),
('Component of ER diagram.[Entity,Attribute and Relationship]', ${topicIds}),
('Relationship', ${topicIds}),
('ER diagram to Table Conversion', ${topicIds}),
('workbench', ${topicIds}),
('Assignment', ${topicIds});`
const lectures= await db.query(`select * from lecture where subTopicId=${topicIds}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10005= async (topicIds) =>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('Data types, expressions, operators', ${topicIds}),
('Data Definition Language(DDL)', ${topicIds}),
('Creation of table', ${topicIds}),
('Dropping a table', ${topicIds}),
('Working with different options', ${topicIds}),
('Assignment', ${topicIds});`
const lectures= await db.query(`select * from lecture where subTopicId=${topicIds}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10006= async (topicIds) =>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('INSERT statement', ${topicIds}),
('UPDATE statement', ${topicIds}),
('DELETE statement', ${topicIds}),
('Assignment', ${topicIds}),
('Constraints', ${topicIds}),
('Assignment', ${topicIds});`
const lectures= await db.query(`select * from lecture where subTopicId=${topicIds}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10007= async (topicIds) =>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('SELECT statement', ${topicIds}),
('WHERE clause search condition', ${topicIds}),
('Arithmetic, Comparison and Logical operator', ${topicIds}),
('Range operator', ${topicIds}),
('Assignment', ${topicIds}),
('List operator', ${topicIds}),
('Like operator', ${topicIds}),
('Using ORDER BY, DISTINCT and TOP', ${topicIds}),
('Using IS NULL and IS NOT NULL', ${topicIds}),
('Various other clauses', ${topicIds}),
('Assignment', ${topicIds});`
const lectures= await db.query(`select * from lecture where subTopicId=${topicIds}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10008= async (topicIds) =>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('String Function', ${topicIds}),
('Math Function', ${topicIds}),
('Date Function', ${topicIds}),
('Assignment', ${topicIds}),
('Aggregate Function', ${topicIds}),
('GROUP BY clause with HAVING', ${topicIds}),
('Assignment', ${topicIds});`
const lectures= await db.query(`select * from lecture where subTopicId=${topicIds}`)
if(lectures[0].length==0){
 try {
    await db.query(data);
    return "Lecture Created";
  } catch (error) {
    return error;
  }
}
}

const createLecturesForSubTopic10009= async (topicIds) =>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('Introduction to Joins', ${topicIds}),
('Types of Joins', ${topicIds}),
('Assignment', ${topicIds}),
('Introduction Types of Sub-queries', ${topicIds}),
('Search Condition', ${topicIds}),
('Comparison operators', ${topicIds}),
('IN', ${topicIds}),
('Assignment', ${topicIds});`
const lectures= await db.query(`select * from lecture where subTopicId=${topicIds}`)
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
            return error;
        }
    }
    else{
        return ({error:"Lecture not Created"})
    }

}

module.exports = {topic1001}