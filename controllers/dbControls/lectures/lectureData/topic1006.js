const db =require("../../../../static/db.js")

const createLecturesForSubTopic10053 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Introduction', ${topicIds}),
      ('Java Features', ${topicIds}),
      ('Java Virtual Machine - Architecture, Compiled vs Interpreted', ${topicIds}),
      ('Languages, Bytecode and Object', ${topicIds}),
      ('Java Installation', ${topicIds}),
      ('Basic Concepts of OOPs', ${topicIds}),
      ('First Java Program', ${topicIds}),
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

const createLecturesForSubTopic10054 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Data Types', ${topicIds}),
      ('Type Casting', ${topicIds}),
      ('Variables', ${topicIds}),
      ('Constants', ${topicIds}),
      ('Comments', ${topicIds}),
      ('Command Line Arguments', ${topicIds}),
      ('Identifiers', ${topicIds}),
      ('Literals', ${topicIds}),
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

const createLecturesForSubTopic10055 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Arithmetic Operators', ${topicIds}),
      ('Relational Operators', ${topicIds}),
      ('Bitwise Operators', ${topicIds}),
      ('Logical Operators', ${topicIds}),
      ('Ternary Operator', ${topicIds}),
      ('Assignment Operators', ${topicIds}),
      ('Unary Operator', ${topicIds}),
      ('Operator Precedence in Java', ${topicIds}),
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

const createLecturesForSubTopic10056 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('if statement', ${topicIds}),
      ('if...else statement', ${topicIds}),
      ('Nested if...else statement', ${topicIds}),
      ('switch statement', ${topicIds}),
      ('Assignment', ${topicIds}),
      ('for loop', ${topicIds}),
      ('while loop', ${topicIds}),
      ('do...while loop', ${topicIds}),
      ('Use of break and continue', ${topicIds}),
      ('Logical Programs', ${topicIds}),
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

const createLecturesForSubTopic10057 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Declaring and Initializing an Array', ${topicIds}),
      ('Accessing Array elements', ${topicIds}),
      ('Iterating over Array', ${topicIds}),
      ('Multidimensional Array', ${topicIds}),
      ('Logical Programs using Array', ${topicIds}),
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

const createLecturesForSubTopic10058 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Simulator to WordScapes on Play Store', ${topicIds});`;

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

const createLecturesForSubTopic10059 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Classes & Object', ${topicIds}),
      ('Methods - Passing parameters to methods, return type', ${topicIds}),
      ('Object as parameters, Constructors & Destructor, var-args', ${topicIds}),
      ('Access & Non-Access Modifiers', ${topicIds}),
      ('Dynamic memory allocation, Garbage collection and finalize()', ${topicIds}),
      ('Assignment', ${topicIds}),
      ('Packages and Class Hierarchy', ${topicIds}),
      ('Object Class, Import statement, Built-in packages, User defined packages', ${topicIds}),
      ('Nested & Anonymous Class', ${topicIds}),
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

const createLecturesForSubTopic10060 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('What is Inheritance?', ${topicIds}),
      ('Types of Inheritance', ${topicIds}),
      ('Why we use Inheritance', ${topicIds}),
      ('Method Overriding', ${topicIds}),
      ('Method Overloading', ${topicIds}),
      ('Assignment', ${topicIds}),
      ('Abstract Classes', ${topicIds}),
      ('Interfaces', ${topicIds}),
      ('Polymorphism', ${topicIds}),
      ('default, static and private methods in interface', ${topicIds}),
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

const createLecturesForSubTopic10061 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Various ways to create String in Java', ${topicIds}),
      ('In-built String functions', ${topicIds}),
      ('StringBuffer', ${topicIds}),
      ('StringBuilder', ${topicIds}),
      ('Assignment', ${topicIds}),
      ('Difference between String, StringBuffer & StringBuilder', ${topicIds}),
      ('Logical Programs on Strings', ${topicIds}),
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

const createLecturesForSubTopic10062 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('What is Exception and Handling an Exception', ${topicIds}),
      ('Compile time errors & Run time errors', ${topicIds}),
      ('try...catch...finally', ${topicIds}),
      ('throw & throws keywords', ${topicIds}),
      ('User Defined Exception', ${topicIds}),
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

const createLecturesForSubTopic10063 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('FileInputStream & FileOutputStream', ${topicIds}),
      ('FileReader & FileWriter', ${topicIds}),
      ('Serialization', ${topicIds}),
      ('Object serialization, transient', ${topicIds}),
      ('Wrapper Classes', ${topicIds}),
      ('Autoboxing and Unboxing', ${topicIds}),
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

const createLecturesForSubTopic10064 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Introduction to Collection', ${topicIds}),
      ('Collection Hierarchy', ${topicIds}),
      ('Working with ArrayList, LinkedList, HashSet, LinkedHashSet, TreeSet, Queue, Dequeue, Stack', ${topicIds}),
      ('Maps - HashMap, LinkedHashMap, TreeMap', ${topicIds}),
      ('Using Iterators and Enumerations, ListIterator, forEach()', ${topicIds}),
      ('Assignment', ${topicIds}),
      ('Generics', ${topicIds}),
      ('Comparable and Comparators', ${topicIds}),
      ('Functional Interfaces - Lambda Expressions', ${topicIds}),
      ('forEach() method in Iterable Interface', ${topicIds}),
      ('Streams - Sequential, Parallel', ${topicIds}),
      ('Filtering Collections', ${topicIds}),
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

const createLecturesForSubTopic10065 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Word count and writing the word count to different file', ${topicIds});`;

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

const createLecturesForSubTopic10066 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Introduction Multi-Threading', ${topicIds}),
      ('Thread Life Cycle', ${topicIds}),
      ('Thread Class vs Runnable Interface', ${topicIds}),
      ('Synchronized Methods, Block', ${topicIds}),
      ('Daemon Thread', ${topicIds}),
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

const createLecturesForSubTopic10067 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Java Time API', ${topicIds}),
      ('Project on Stop Watch', ${topicIds}),
      ('Java Http Client API', ${topicIds}),
      ('Project on Currency Convertor', ${topicIds}),
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

const createLecturesForSubTopic10068 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('IoC Container', ${topicIds}),
      ('Beans Overview', ${topicIds}),
      ('Dependency Injection', ${topicIds}),
      ('Aspect Oriented Programming (AOP)', ${topicIds}),
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

const createLecturesForSubTopic10069 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Spring MVC', ${topicIds}),
      ('Request-Response Life Cycle', ${topicIds}),
      ('Terminologies & Pre-requisites', ${topicIds}),
      ('Tools', ${topicIds}),
      ('Components of Spring MVC', ${topicIds}),
      ('Basics of Maven', ${topicIds}),
      ('Create a Project in Maven', ${topicIds}),
      ('Create jar package file using Maven Command', ${topicIds}),
      ('Maven Commands', ${topicIds}),
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

const createLecturesForSubTopic10070 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Introduction to the Pet Store Project', ${topicIds}),
      ('SDLC', ${topicIds}),
      ('Agile Methodology', ${topicIds}),
      ('Scrum', ${topicIds}),
      ('Introduction to JIRA', ${topicIds}),
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

const createLecturesForSubTopic10071 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Download & Install Spring Tool 4', ${topicIds}),
      ('Creating and Running Spring Boot Application using ST4 - Pet Store Project', ${topicIds}),
      ('Introduction to Properties file and changing some default properties like application name, port, etc.', ${topicIds}),
      ('Git Project Creation & Doing Initial Commit', ${topicIds}),
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

const createLecturesForSubTopic10072 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('What is REST?', ${topicIds}),
      ('Creating our First REST API', ${topicIds}),
      ('Adding DevTools', ${topicIds}),
      ('Creating Service file for Product Resource using in-memory data', ${topicIds}),
      ('Creating Rest Controller CRUD Operations on Product Resource', ${topicIds}),
      ('Consuming REST APIs using any Rest Client Library like postman, hoppscotch, etc.', ${topicIds}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${topicIds}),
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

const createLecturesForSubTopic10073 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Adding spring boot starter validation dependency', ${topicIds}),
      ('Add built-in validators to our User Resource Model', ${topicIds}),
      ('Validating the Request using @Valid annotation', ${topicIds}),
      ('Creating custom field validator for phoneNumber', ${topicIds}),
      ('Create custom cross-field validator for password & confirmPassword', ${topicIds}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${topicIds}),
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

const createLecturesForSubTopic10074 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Create database user & database', ${topicIds}),
      ('Add mysql connector & spring jpa dependency in our Spring Application', ${topicIds}),
      ('Adding mysql configuration details in application.properties file', ${topicIds}),
      ('Convert Product model to Entity by using JPA annotations', ${topicIds}),
      ('Create JPA repository for Product entity', ${topicIds}),
      ('Modifying service file to use repository instead of in-memory data', ${topicIds}),
      ('Defining Custom Query Methods in Repository', ${topicIds}),
      ('JPA Auditing using @CreatedDate and @LastModifiedDate', ${topicIds}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${topicIds}),
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

const createLecturesForSubTopic10075 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Add Spring Data REST Starter Dependency', ${topicIds}),
      ('Remove not needed APIs from controllers', ${topicIds}),
      ('Make necessary changes for validation', ${topicIds}),
      ('Pagination & Sorting using PagingAndSortingRepository', ${topicIds}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${topicIds}),
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

const createLecturesForSubTopic10076 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Create OneToOne Mapping for User & Address', ${topicIds}),
      ('Create OneToMany & ManyToOne Mapping for Category & Products', ${topicIds}),
      ('Create ManyToMany Mapping for Orders & Products', ${topicIds}),
      ('Consuming all the APIs with relationships', ${topicIds}),
      ('Create Projections & Excerpts for necessary data', ${topicIds}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${topicIds}),
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

const createLecturesForSubTopic10077 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('What is Authentication & Authorization', ${topicIds}),
      ('Add Spring Security Starter Dependency', ${topicIds}),
      ('Authentication based on default security config', ${topicIds}),
      ('Change default username and password', ${topicIds}),
      ('Change default url configs using HttpSecurity', ${topicIds}),
      ('Allow certain URLs based on http methods and url patterns', ${topicIds}),
      ('Override default authentication manager by providing inMemoryAuthentication', ${topicIds}),
      ('Add roles to the user', ${topicIds}),
      ("Add security to particular URL based on user's role using hasRole() method", ${topicIds}),
      ('Authorization using \@PreAuthorize, \@RolesAllowed or \@Secured', ${topicIds}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${topicIds}),
      ('Assignment', ${topicIds});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${topicIds}`,
  );
  if (lectures[0].length == 0) {
    try {
      await db.query(data);
      return "Lecture Created";
    } catch (error) {
      console.log(error)
      return error;
    }
  }
}

const createLecturesForSubTopic10078 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('User Registration Flow', ${topicIds}),
      ('Use UserDetails interface to implement User object', ${topicIds}),
      ('Create custom MyUserDetailsService using UserDetailsService class and override loadUserByUsername method', ${topicIds}),
      ('Add MyUserDetailsService object in security configuration for authentication', ${topicIds}),
      ('Creating Login API', ${topicIds}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${topicIds}),
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

const createLecturesForSubTopic10079 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Create API to upload image for a product', ${topicIds}),
      ('Create API to download image of a product', ${topicIds}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${topicIds}),
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

const createLecturesForSubTopic10080 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Create simple frontend application using HTML, CSS and Javascript', ${topicIds}),
      ('Consume Product APIs using fetch function', ${topicIds}),
      ('Displaying fetched data in HTML page', ${topicIds}),
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

const createLecturesForSubTopic10081 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('The JUnit framework', ${topicIds}),
      ('How to define a test in JUnit?', ${topicIds}),
      ('Writing test case for the API', ${topicIds}),
      ('Run your test from the command line', ${topicIds}),
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

const createLecturesForSubTopic10082 = async (topicIds) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId) 
  VALUES 
      ('Creating jar file', ${topicIds}),
      ('Using various environments using properties file', ${topicIds}),
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


const topic1006= async (topicId)=>{
    const subtopics = await db.query(`select * from subTopic where topicId=${topicId}`);
    if (subtopics[0].length != 0) {
      try {
        await createLecturesForSubTopic10053(subtopics[0][0].subTopicId);
        await createLecturesForSubTopic10054(subtopics[0][1].subTopicId);
        await createLecturesForSubTopic10055(subtopics[0][2].subTopicId);
        await createLecturesForSubTopic10056(subtopics[0][3].subTopicId);
        await createLecturesForSubTopic10057(subtopics[0][4].subTopicId);
        await createLecturesForSubTopic10058(subtopics[0][5].subTopicId);
        await createLecturesForSubTopic10059(subtopics[0][6].subTopicId);
        await createLecturesForSubTopic10060(subtopics[0][7].subTopicId);
        await createLecturesForSubTopic10061(subtopics[0][8].subTopicId);
        await createLecturesForSubTopic10062(subtopics[0][9].subTopicId);
        await createLecturesForSubTopic10063(subtopics[0][10].subTopicId);
        await createLecturesForSubTopic10064(subtopics[0][11].subTopicId);
        await createLecturesForSubTopic10065(subtopics[0][12].subTopicId);
        await createLecturesForSubTopic10066(subtopics[0][13].subTopicId);
        await createLecturesForSubTopic10067(subtopics[0][14].subTopicId);
        await createLecturesForSubTopic10068(subtopics[0][15].subTopicId);
        await createLecturesForSubTopic10069(subtopics[0][16].subTopicId);
        await createLecturesForSubTopic10070(subtopics[0][17].subTopicId);
        await createLecturesForSubTopic10071(subtopics[0][18].subTopicId);
        await createLecturesForSubTopic10072(subtopics[0][19].subTopicId);
        await createLecturesForSubTopic10073(subtopics[0][20].subTopicId);
        await createLecturesForSubTopic10074(subtopics[0][21].subTopicId);
        await createLecturesForSubTopic10075(subtopics[0][22].subTopicId);
        await createLecturesForSubTopic10076(subtopics[0][23].subTopicId);
        await createLecturesForSubTopic10077(subtopics[0][24].subTopicId);
        await createLecturesForSubTopic10078(subtopics[0][25].subTopicId);
        await createLecturesForSubTopic10079(subtopics[0][26].subTopicId);
        await createLecturesForSubTopic10080(subtopics[0][27].subTopicId);
        await createLecturesForSubTopic10081(subtopics[0][28].subTopicId);
        await createLecturesForSubTopic10082(subtopics[0][29].subTopicId);
        return { msg: "Lectures Created" };
      } catch (error) {
        return error;
      }
    } else {
      return { error: "Lecture not Created" };
    }

}

module.exports = {topic1006}