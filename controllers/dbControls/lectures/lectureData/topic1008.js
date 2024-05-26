const db =require("../../../../static/db.js")

const topicId=1008

const createLecturesForSubTopic10094 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('What Is Angular?', ${subTopicId}, ${topicId}),
  ('Prerequisites', ${subTopicId}, ${topicId}),
  ('What is TypeScript?', ${subTopicId}, ${topicId}),
  ('Walk through of sample project', ${subTopicId}, ${topicId}),
  ('Angular Installation & Setting up environment', ${subTopicId}, ${topicId}),
  ('Anatomy of Angular Application', ${subTopicId}, ${topicId}),
  ('Running Angular Application', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10095 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('What is an Angular Module?', ${subTopicId}, ${topicId}),
  ('Introduction to Components', ${subTopicId}, ${topicId}),
  ('Understanding the role of AppModule & Component Declaration', ${subTopicId}, ${topicId}),
  ('Creating component using CLI', ${subTopicId}, ${topicId}),
  ('Using the component in application', ${subTopicId}, ${topicId}),
  ('Understanding metadata', ${subTopicId}, ${topicId}),
  ('Creating component manually', ${subTopicId}, ${topicId}),
  ('Defining template and css style', ${subTopicId}, ${topicId}),
  ('Adding bootstrap for styling', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10096 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Interpolation & Normal Property Binding', ${subTopicId}, ${topicId}),
  ('Property Binding - Class & Style', ${subTopicId}, ${topicId}),
  ('Event Binding', ${subTopicId}, ${topicId}),
  ('Two-Way Data Binding', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10097 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Assigning types to variables', ${subTopicId}, ${topicId}),
  ('Creating custom types for objects', ${subTopicId}, ${topicId}),
  ('Using setters and getters of TypeScript to filter data', ${subTopicId}, ${topicId}),
  ('Transforming data using built-in Pipes', ${subTopicId}, ${topicId}),
  ('Creating Custom Pipe', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10098 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Understanding Directives', ${subTopicId}, ${topicId}),
  ('Attribute Directives', ${subTopicId}, ${topicId}),
  ('Understanding Structural Directives: ngIf and ngFor', ${subTopicId}, ${topicId}),
  ('Creating attribute directive', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10099 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Building Nested Components', ${subTopicId}, ${topicId}),
  ('Passing data to child component using @Input', ${subTopicId}, ${topicId}),
  ('Passing data to parent component using @Output', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10100 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Why would you Need Services?', ${subTopicId}, ${topicId}),
  ('What is dependency injection', ${subTopicId}, ${topicId}),
  ('Building a Service', ${subTopicId}, ${topicId}),
  ('Registering a Service', ${subTopicId}, ${topicId}),
  ('Injecting the Service', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10101 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('Introduction to RxJS - Observables and Operators', ${subTopicId}, ${topicId}),
  ('Difference between Promises and Observables', ${subTopicId}, ${topicId}),
  ('Sending HTTP Request', ${subTopicId}, ${topicId}),
  ('Retrieving data using HTTP', ${subTopicId}, ${topicId}),
  ('Exception Handling', ${subTopicId}, ${topicId}),
  ('Unsubscribing observables', ${subTopicId}, ${topicId}),
  ('Using async pipe', ${subTopicId}, ${topicId}),
  ('Creating Observables using of() function & Observable class', ${subTopicId}, ${topicId}),
  ('Handle observable errors and complete', ${subTopicId}, ${topicId}),
  ('Perform operations using Operators', ${subTopicId}, ${topicId}),
  ('Subject & BehaviorSubject', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10102 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('What is SPA?', ${subTopicId}, ${topicId}),
  ('Add RouterModule', ${subTopicId}, ${topicId}),
  ('Add Routes for every Route', ${subTopicId}, ${topicId}),
  ('Specify router-outlet for the route to be displayed', ${subTopicId}, ${topicId}),
  ('Specify router links using routerLink', ${subTopicId}, ${topicId}),
  ('Specify the active route class using routerLinkActive', ${subTopicId}, ${topicId}),
  ('Specify title for every route using title property', ${subTopicId}, ${topicId}),
  ('Get query parameters from the route', ${subTopicId}, ${topicId}),
  ('Get path params from the route', ${subTopicId}, ${topicId}),
  ('Navigate to route programmatically', ${subTopicId}, ${topicId}),
  ('Handling route navigation on the same route with different dynamic parameters', ${subTopicId}, ${topicId}),
  ('Preventing unauthorized access to any route using guards', ${subTopicId}, ${topicId}),
  ('Nested child routes', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10103 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('How does the Angular form work?', ${subTopicId}, ${topicId}),
  ('Different ways for creating forms', ${subTopicId}, ${topicId}),
  ('Difference between template driven and reactive forms', ${subTopicId}, ${topicId}),
  ('Create template driven form', ${subTopicId}, ${topicId}),
  ('Validation in template driven forms', ${subTopicId}, ${topicId}),
  ('Create reactive form', ${subTopicId}, ${topicId}),
  ('Using FormBuilder service', ${subTopicId}, ${topicId}),
  ('Validation in reactive forms', ${subTopicId}, ${topicId}),
  ('Creating custom validator', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10104 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('What is Angular Module', ${subTopicId}, ${topicId}),
  ('Creating Feature Module', ${subTopicId}, ${topicId}),
  ('Creating Shared Module', ${subTopicId}, ${topicId}),
  ('Creating Routing Module', ${subTopicId}, ${topicId}),
  ('Creating Lazy Loaded Module', ${subTopicId}, ${topicId}),
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
}

const createLecturesForSubTopic10105 = async (subTopicId) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) VALUES 
  ('ng generate', ${subTopicId}, ${topicId}),
  ('Creating production build using 'ng build'', ${subTopicId}, ${topicId}),
  ('Deploying application to Github Pages', ${subTopicId}, ${topicId}),
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
}


const topic1008= async (topicId)=>{
    const subtopics = await db.query(`select * from subTopic where topicId=${topicId}`,
    );
    if (subtopics[0].length != 0) {
      try {
        await createLecturesForSubTopic10094(subtopics[0][0].subTopicId);
        await createLecturesForSubTopic10095(subtopics[0][1].subTopicId);
        await createLecturesForSubTopic10096(subtopics[0][2].subTopicId);
        await createLecturesForSubTopic10097(subtopics[0][3].subTopicId);
        await createLecturesForSubTopic10098(subtopics[0][4].subTopicId);
        await createLecturesForSubTopic10099(subtopics[0][5].subTopicId);
        await createLecturesForSubTopic10100(subtopics[0][6].subTopicId);
        await createLecturesForSubTopic10101(subtopics[0][7].subTopicId);
        await createLecturesForSubTopic10102(subtopics[0][8].subTopicId);
        await createLecturesForSubTopic10103(subtopics[0][9].subTopicId);
        await createLecturesForSubTopic10104(subtopics[0][10].subTopicId);
        await createLecturesForSubTopic10105(subtopics[0][11].subTopicId);
        return { msg: "Lectures Created" };
      } catch (error) {
        return error;
      }
    } else {
      return { error: "Lecture not Created" };
    }

}

module.exports = {topic1008}