const db = require("../../../../static/db.js");

const topicId=1005;

const createLecturesForSubTopic10041 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('What is Cloud Computing?', ${subTopicId}, ${topicId}),
  ('Traditional IT structure vs Cloud Services', ${subTopicId}, ${topicId}),
  ('Identity Access Management', ${subTopicId}, ${topicId}),
  ('MFA Authentication', ${subTopicId}, ${topicId}),
  ('AWS CloudShell Setup', ${subTopicId}, ${topicId}),
  ('Assignment', ${subTopicId}, ${topicId});`;

  const lectures = await db.query(`select * from lecture where subTopicId=${subTopicId}`);
  if (lectures[0].length == 0) {
    try {
      await db.query(data);
      return "Lecture Created";
    } catch (error) {
      return error;
    }
  }
};

const createLecturesForSubTopic10042 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Amazon Elastic Cloud Compute (EC2)', ${subTopicId}, ${topicId}),
  ('Amazon EC2 Auto Scaling', ${subTopicId}, ${topicId}),
  ('Amazon Lightsail', ${subTopicId}, ${topicId}),
  ('AWS Elastic Beanstalk', ${subTopicId}, ${topicId}),
  ('AWS Lambda', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10043 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Amazon Elastic Block Store (EBS)', ${subTopicId}, ${topicId}),
  ('Amazon Elastic File System (EFS)', ${subTopicId}, ${topicId}),
  ('Amazon Simple Storage Service (S3)', ${subTopicId}, ${topicId}),
  ('Amazon S3 Glacier', ${subTopicId}, ${topicId}),
  ('Storage Gateway', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10044 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('ELB Overview', ${subTopicId}, ${topicId}),
  ('Classic Load Balancer (CLB)', ${subTopicId}, ${topicId}),
  ('Application Load Balancer (ALB)', ${subTopicId}, ${topicId}),
  ('Network Load Balancer (NLB)', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10045 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Amazon Databases Overview', ${subTopicId}, ${topicId}),
  ('Amazon Aurora', ${subTopicId}, ${topicId}),
  ('Amazon ElasticCache', ${subTopicId}, ${topicId}),
  ('Amazon DynamoDB', ${subTopicId}, ${topicId}),
  ('Amazon Relational Database Service (RDS)', ${subTopicId}, ${topicId}),
  ('Amazon Neptune', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10046 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Route53 Introduction', ${subTopicId}, ${topicId}),
  ('Route53 as a Registrar', ${subTopicId}, ${topicId}),
  ('Record Sets & Routing Policies', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10047 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('CloudFormation', ${subTopicId}, ${topicId}),
  ('Elastic BeanStalk', ${subTopicId}, ${topicId}),
  ('CodeDeploy, CodeCommit, CodeBuild, CodePipeline, CodeArtifact', ${subTopicId}, ${topicId}),
  ('Systems Manager (SSM)', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10048 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Amazon API Gateway', ${subTopicId}, ${topicId}),
  ('Amazon EventBridge', ${subTopicId}, ${topicId}),
  ('Amazon Simple Notification Service (SNS)', ${subTopicId}, ${topicId}),
  ('Amazon Simple Queue Service (SQS)', ${subTopicId}, ${topicId}),
  ('Amazon MQ', ${subTopicId}, ${topicId}),
  ('AWS Step Functions', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10049 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('CloudWatch', ${subTopicId}, ${topicId}),
  ('CloudTrial', ${subTopicId}, ${topicId}),
  ('CloudGuru', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10050 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Virtual Private Cloud (VPC)', ${subTopicId}, ${topicId}),
  ('Security Groups & NACL', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10051 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Encryption with KMS', ${subTopicId}, ${topicId}),
  ('AWS Certificate Manager', ${subTopicId}, ${topicId}),
  ('DDoS Protection: WAF & Shield', ${subTopicId}, ${topicId}),
  ('Artifact and GuardDuty Overview', ${subTopicId}, ${topicId}),
  ('Config Overview', ${subTopicId}, ${topicId}),
  ('Security Hub and Root User Privileges', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10052 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Elastic Container Service (ECS)', ${subTopicId}, ${topicId}),
  ('Elastic Kubernetes Service (EKS)', ${subTopicId}, ${topicId}),
  ('CloudFront', ${subTopicId}, ${topicId}),
  ('AWS Sagemaker', ${subTopicId}, ${topicId}),
  ('AWS Sumerian', ${subTopicId}, ${topicId}),
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

const topic1005 = async (topicId) => {
  const subtopics = await db.query(`select * from subTopic where topicId=${topicId}`);
  if (subtopics[0].length != 0) {
    try {
        await createLecturesForSubTopic10041(subtopics[0][0].subTopicId);
        await createLecturesForSubTopic10042(subtopics[0][1].subTopicId);
        await createLecturesForSubTopic10043(subtopics[0][2].subTopicId);
        await createLecturesForSubTopic10044(subtopics[0][3].subTopicId);
        await createLecturesForSubTopic10045(subtopics[0][4].subTopicId);
        await createLecturesForSubTopic10046(subtopics[0][5].subTopicId);
        await createLecturesForSubTopic10047(subtopics[0][6].subTopicId);
        await createLecturesForSubTopic10048(subtopics[0][7].subTopicId);
        await createLecturesForSubTopic10049(subtopics[0][8].subTopicId);
        await createLecturesForSubTopic10050(subtopics[0][9].subTopicId);
        await createLecturesForSubTopic10051(subtopics[0][10].subTopicId);
        await createLecturesForSubTopic10052(subtopics[0][11].subTopicId);
      return { msg: "Lectures Created" };
    } catch (error) {
      return error;
    }
  } else {
    return { error: "Lecture not Created" };
  }
};

module.exports = { topic1005 };
