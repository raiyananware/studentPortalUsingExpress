const db =require("../../../../static/db.js")


const createLecturesForSubTopic10010=async (topicIds)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('Client Server Architecture', ${topicIds}),
('HTML Structure-Head,Body and HTML Version', ${topicIds}),
('HTML Comments', ${topicIds}),
('Page Information-title,meta,link,style, script', ${topicIds}),
('HTML Tags and Attributes', ${topicIds}),
('First Web page - Hello World', ${topicIds}),
('Block Elements - Header tag, Paragraph tag', ${topicIds}),
('Format tag - bold, strong, italics, em, underline, del, sub, sup', ${topicIds}),
('Document structure - Div tag, Span tag', ${topicIds}),
('anchor tag', ${topicIds}),
('image tag', ${topicIds}),
('List - Ordered, unordered, definition', ${topicIds}),
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


const createLecturesForSubTopic10011=async (topicIds)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('Table structure-tr,td,th,colspan and rowspan', ${topicIds}),
('Form tag and Form Elements - Input type, textarea, select', ${topicIds}),
('fieldset tag, legend tag', ${topicIds}),
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


const createLecturesForSubTopic10012=async (topicIds)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('Need of CSS', ${topicIds}),
('Types of CSS', ${topicIds}),
('comments in CSS', ${topicIds}),
('tag selector', ${topicIds}),
('id selector', ${topicIds}),
('class Selector', ${topicIds}),
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


const createLecturesForSubTopic10013=async (topicIds)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('Color property', ${topicIds}),
('Text property', ${topicIds}),
('Font property', ${topicIds}),
('box property (width and Height)', ${topicIds}),
('Display Property', ${topicIds}),
('Background- property', ${topicIds}),
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


const createLecturesForSubTopic10014=async (topicIds)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('Introduction to Javascript', ${topicIds}),
('Variables using var, let & const', ${topicIds}),
('Functions in Javascript', ${topicIds}),
('Conditional Statements', ${topicIds}),
('Looping', ${topicIds}),
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


const createLecturesForSubTopic10015=async (topicIds)=>{
const data=`INSERT INTO lecture (lectureName, subTopicId)
VALUES 
('Working on fetch function', ${topicIds}),
('Creating currency convertor by consuming API', ${topicIds}),
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