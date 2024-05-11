const db =require("../../../../static/db.js")


const createLecturesForSubTopic10094 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('What Is Angular?', ${topicIds}),
  ('Prerequisites', ${topicIds}),
  ('What is TypeScript?', ${topicIds}),
  ('Walk through of sample project', ${topicIds}),
  ('Angular Installation & Setting up environment', ${topicIds}),
  ('Anatomy of Angular Application', ${topicIds}),
  ('Running Angular Application', ${topicIds}),
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
}

const createLecturesForSubTopic10095 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('What is an Angular Module?', ${topicIds}),
  ('Introduction to Components', ${topicIds}),
  ('Understanding the role of AppModule & Component Declaration', ${topicIds}),
  ('Creating component using CLI', ${topicIds}),
  ('Using the component in application', ${topicIds}),
  ('Understanding metadata', ${topicIds}),
  ('Creating component manually', ${topicIds}),
  ('Defining template and css style', ${topicIds}),
  ('Adding bootstrap for styling', ${topicIds}),
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
}

const createLecturesForSubTopic10096 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Interpolation & Normal Property Binding', ${topicIds}),
  ('Property Binding - Class & Style', ${topicIds}),
  ('Event Binding', ${topicIds}),
  ('Two-Way Data Binding', ${topicIds}),
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
}

const createLecturesForSubTopic10097 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Assigning types to variables', ${topicIds}),
  ('Creating custom types for objects', ${topicIds}),
  ('Using setters and getters of TypeScript to filter data', ${topicIds}),
  ('Transforming data using built-in Pipes', ${topicIds}),
  ('Creating Custom Pipe', ${topicIds}),
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
}

const createLecturesForSubTopic10098 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Understanding Directives', ${topicIds}),
  ('Attribute Directives', ${topicIds}),
  ('Understanding Structural Directives: ngIf and ngFor', ${topicIds}),
  ('Creating attribute directive', ${topicIds}),
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
}

const createLecturesForSubTopic10099 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Building Nested Components', ${topicIds}),
  ('Passing data to child component using @Input', ${topicIds}),
  ('Passing data to parent component using @Output', ${topicIds}),
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
}

const createLecturesForSubTopic10100 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Why would you Need Services?', ${topicIds}),
  ('What is dependency injection', ${topicIds}),
  ('Building a Service', ${topicIds}),
  ('Registering a Service', ${topicIds}),
  ('Injecting the Service', ${topicIds}),
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
}

const createLecturesForSubTopic10101 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('Introduction to RxJS - Observables and Operators', ${topicIds}),
  ('Difference between Promises and Observables', ${topicIds}),
  ('Sending HTTP Request', ${topicIds}),
  ('Retrieving data using HTTP', ${topicIds}),
  ('Exception Handling', ${topicIds}),
  ('Unsubscribing observables', ${topicIds}),
  ('Using async pipe', ${topicIds}),
  ('Creating Observables using of() function & Observable class', ${topicIds}),
  ('Handle observable errors and complete', ${topicIds}),
  ('Perform operations using Operators', ${topicIds}),
  ('Subject & BehaviorSubject', ${topicIds}),
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
}

const createLecturesForSubTopic10102 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('What is SPA?', ${topicIds}),
  ('Add RouterModule', ${topicIds}),
  ('Add Routes for every Route', ${topicIds}),
  ('Specify router-outlet for the route to be displayed', ${topicIds}),
  ('Specify router links using routerLink', ${topicIds}),
  ('Specify the active route class using routerLinkActive', ${topicIds}),
  ('Specify title for every route using title property', ${topicIds}),
  ('Get query parameters from the route', ${topicIds}),
  ('Get path params from the route', ${topicIds}),
  ('Navigate to route programmatically', ${topicIds}),
  ('Handling route navigation on the same route with different dynamic parameters', ${topicIds}),
  ('Preventing unauthorized access to any route using guards', ${topicIds}),
  ('Nested child routes', ${topicIds}),
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
}

const createLecturesForSubTopic10103 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('How does the Angular form work?', ${topicIds}),
  ('Different ways for creating forms', ${topicIds}),
  ('Difference between template driven and reactive forms', ${topicIds}),
  ('Create template driven form', ${topicIds}),
  ('Validation in template driven forms', ${topicIds}),
  ('Create reactive form', ${topicIds}),
  ('Using FormBuilder service', ${topicIds}),
  ('Validation in reactive forms', ${topicIds}),
  ('Creating custom validator', ${topicIds}),
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
}

const createLecturesForSubTopic10104 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('What is Angular Module', ${topicIds}),
  ('Creating Feature Module', ${topicIds}),
  ('Creating Shared Module', ${topicIds}),
  ('Creating Routing Module', ${topicIds}),
  ('Creating Lazy Loaded Module', ${topicIds}),
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
}

const createLecturesForSubTopic10105 = async (topicIds) =>{
  const data = `INSERT INTO lecture (lectureName, subTopicId) VALUES 
  ('ng generate', ${topicIds}),
  ('Creating production build using 'ng build'', ${topicIds}),
  ('Deploying application to Github Pages', ${topicIds}),
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