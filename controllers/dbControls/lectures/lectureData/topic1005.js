const db = require("../../../../static/db.js");

const createLecturesForSubTopic10041 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('What is Cloud Computing?', ${topicIds}),
  ('Traditional IT structure vs Cloud Services', ${topicIds}),
  ('Identity Access Management', ${topicIds}),
  ('MFA Authentication', ${topicIds}),
  ('AWS CloudShell Setup', ${topicIds}),
  ('Assignment', ${topicIds});`;

  const lectures = await db.query(`select * from lecture where subTopicId=${topicIds}`);
  if (lectures[0].length == 0) {
    try {
      await db.query(data);
      return "Lecture Created";
    } catch (error) {
      return error;
    }
  }
};

const createLecturesForSubTopic10042 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Amazon Elastic Cloud Compute (EC2)', ${topicIds}),
  ('Amazon EC2 Auto Scaling', ${topicIds}),
  ('Amazon Lightsail', ${topicIds}),
  ('AWS Elastic Beanstalk', ${topicIds}),
  ('AWS Lambda', ${topicIds}),
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

const createLecturesForSubTopic10043 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Amazon Elastic Block Store (EBS)', ${topicIds}),
  ('Amazon Elastic File System (EFS)', ${topicIds}),
  ('Amazon Simple Storage Service (S3)', ${topicIds}),
  ('Amazon S3 Glacier', ${topicIds}),
  ('Storage Gateway', ${topicIds}),
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

const createLecturesForSubTopic10044 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('ELB Overview', ${topicIds}),
  ('Classic Load Balancer (CLB)', ${topicIds}),
  ('Application Load Balancer (ALB)', ${topicIds}),
  ('Network Load Balancer (NLB)', ${topicIds}),
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

const createLecturesForSubTopic10045 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Amazon Databases Overview', ${topicIds}),
  ('Amazon Aurora', ${topicIds}),
  ('Amazon ElasticCache', ${topicIds}),
  ('Amazon DynamoDB', ${topicIds}),
  ('Amazon Relational Database Service (RDS)', ${topicIds}),
  ('Amazon Neptune', ${topicIds}),
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

const createLecturesForSubTopic10046 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Route53 Introduction', ${topicIds}),
  ('Route53 as a Registrar', ${topicIds}),
  ('Record Sets & Routing Policies', ${topicIds}),
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

const createLecturesForSubTopic10047 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('CloudFormation', ${topicIds}),
  ('Elastic BeanStalk', ${topicIds}),
  ('CodeDeploy, CodeCommit, CodeBuild, CodePipeline, CodeArtifact', ${topicIds}),
  ('Systems Manager (SSM)', ${topicIds}),
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

const createLecturesForSubTopic10048 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Amazon API Gateway', ${topicIds}),
  ('Amazon EventBridge', ${topicIds}),
  ('Amazon Simple Notification Service (SNS)', ${topicIds}),
  ('Amazon Simple Queue Service (SQS)', ${topicIds}),
  ('Amazon MQ', ${topicIds}),
  ('AWS Step Functions', ${topicIds}),
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

const createLecturesForSubTopic10049 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('CloudWatch', ${topicIds}),
  ('CloudTrial', ${topicIds}),
  ('CloudGuru', ${topicIds}),
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

const createLecturesForSubTopic10050 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Virtual Private Cloud (VPC)', ${topicIds}),
  ('Security Groups & NACL', ${topicIds}),
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

const createLecturesForSubTopic10051 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Encryption with KMS', ${topicIds}),
  ('AWS Certificate Manager', ${topicIds}),
  ('DDoS Protection: WAF & Shield', ${topicIds}),
  ('Artifact and GuardDuty Overview', ${topicIds}),
  ('Config Overview', ${topicIds}),
  ('Security Hub and Root User Privileges', ${topicIds}),
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

const createLecturesForSubTopic10052 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Elastic Container Service (ECS)', ${topicIds}),
  ('Elastic Kubernetes Service (EKS)', ${topicIds}),
  ('CloudFront', ${topicIds}),
  ('AWS Sagemaker', ${topicIds}),
  ('AWS Sumerian', ${topicIds}),
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
