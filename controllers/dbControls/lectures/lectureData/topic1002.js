const db =require("../../../../static/db.js")

const topicId=1002
const createLecturesForSubTopic10010=async (subTopicId)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('Client Server Architecture', ${subTopicId},${topicId}),
('HTML Structure-Head,Body and HTML Version', ${subTopicId},${topicId}),
('HTML Comments', ${subTopicId},${topicId}),
('Page Information-title,meta,link,style, script', ${subTopicId},${topicId}),
('HTML Tags and Attributes', ${subTopicId},${topicId}),
('First Web page - Hello World', ${subTopicId},${topicId}),
('Block Elements - Header tag, Paragraph tag', ${subTopicId},${topicId}),
('Format tag - bold, strong, italics, em, underline, del, sub, sup', ${subTopicId},${topicId}),
('Document structure - Div tag, Span tag', ${subTopicId},${topicId}),
('anchor tag', ${subTopicId},${topicId}),
('image tag', ${subTopicId},${topicId}),
('List - Ordered, unordered, definition', ${subTopicId},${topicId}),
('Assignment', ${subTopicId},${topicId});`

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


const createLecturesForSubTopic10011=async (subTopicId)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('Table structure-tr,td,th,colspan and rowspan', ${subTopicId},${topicId}),
('Form tag and Form Elements - Input type, textarea, select', ${subTopicId},${topicId}),
('fieldset tag, legend tag', ${subTopicId},${topicId}),
('Assignment', ${subTopicId},${topicId});`

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


const createLecturesForSubTopic10012=async (subTopicId)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('Need of CSS', ${subTopicId},${topicId}),
('Types of CSS', ${subTopicId},${topicId}),
('comments in CSS', ${subTopicId},${topicId}),
('tag selector', ${subTopicId},${topicId}),
('id selector', ${subTopicId},${topicId}),
('class Selector', ${subTopicId},${topicId}),
('Assignment', ${subTopicId},${topicId});`

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


const createLecturesForSubTopic10013=async (subTopicId)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('Color property', ${subTopicId},${topicId}),
('Text property', ${subTopicId},${topicId}),
('Font property', ${subTopicId},${topicId}),
('box property (width and Height)', ${subTopicId},${topicId}),
('Display Property', ${subTopicId},${topicId}),
('Background- property', ${subTopicId},${topicId}),
('Assignment', ${subTopicId},${topicId});`

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


const createLecturesForSubTopic10014=async (subTopicId)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('Introduction to Javascript', ${subTopicId},${topicId}),
('Variables using var, let & const', ${subTopicId},${topicId}),
('Functions in Javascript', ${subTopicId},${topicId}),
('Conditional Statements', ${subTopicId},${topicId}),
('Looping', ${subTopicId},${topicId}),
('Assignment', ${subTopicId},${topicId});`

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


const createLecturesForSubTopic10015=async (subTopicId)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId, topicId)
VALUES 
('Working on fetch function', ${subTopicId},${topicId}),
('Creating currency convertor by consuming API', ${subTopicId},${topicId}),
('Assignment', ${subTopicId},${topicId});`

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


const topic1002= async (topicId)=>{
    const subtopics= await db.query(`select * from subTopic where topicId=${topicId}`)
    if(subtopics[0].length!=0){
        try{
            await createLecturesForSubTopic10010(subtopics[0][0].subTopicId)
            await createLecturesForSubTopic10011(subtopics[0][1].subTopicId)
            await createLecturesForSubTopic10012(subtopics[0][2].subTopicId)
            await createLecturesForSubTopic10013(subtopics[0][3].subTopicId)
            await createLecturesForSubTopic10014(subtopics[0][4].subTopicId)
            await createLecturesForSubTopic10015(subtopics[0][5].subTopicId)
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

module.exports = {topic1002}