const db =require("../../../../static/db.js")

const topicId=1006

const createLecturesForSubTopic10053 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Introduction', ${subTopicId}, ${topicId}),
      ('Java Features', ${subTopicId}, ${topicId}),
      ('Java Virtual Machine - Architecture, Compiled vs Interpreted', ${subTopicId}, ${topicId}),
      ('Languages, Bytecode and Object', ${subTopicId}, ${topicId}),
      ('Java Installation', ${subTopicId}, ${topicId}),
      ('Basic Concepts of OOPs', ${subTopicId}, ${topicId}),
      ('First Java Program', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10054 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Data Types', ${subTopicId}, ${topicId}),
      ('Type Casting', ${subTopicId}, ${topicId}),
      ('Variables', ${subTopicId}, ${topicId}),
      ('Constants', ${subTopicId}, ${topicId}),
      ('Comments', ${subTopicId}, ${topicId}),
      ('Command Line Arguments', ${subTopicId}, ${topicId}),
      ('Identifiers', ${subTopicId}, ${topicId}),
      ('Literals', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10055 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Arithmetic Operators', ${subTopicId}, ${topicId}),
      ('Relational Operators', ${subTopicId}, ${topicId}),
      ('Bitwise Operators', ${subTopicId}, ${topicId}),
      ('Logical Operators', ${subTopicId}, ${topicId}),
      ('Ternary Operator', ${subTopicId}, ${topicId}),
      ('Assignment Operators', ${subTopicId}, ${topicId}),
      ('Unary Operator', ${subTopicId}, ${topicId}),
      ('Operator Precedence in Java', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10056 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('if statement', ${subTopicId}, ${topicId}),
      ('if...else statement', ${subTopicId}, ${topicId}),
      ('Nested if...else statement', ${subTopicId}, ${topicId}),
      ('switch statement', ${subTopicId}, ${topicId}),
      ('Assignment', ${subTopicId}, ${topicId}),
      ('for loop', ${subTopicId}, ${topicId}),
      ('while loop', ${subTopicId}, ${topicId}),
      ('do...while loop', ${subTopicId}, ${topicId}),
      ('Use of break and continue', ${subTopicId}, ${topicId}),
      ('Logical Programs', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10057 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Declaring and Initializing an Array', ${subTopicId}, ${topicId}),
      ('Accessing Array elements', ${subTopicId}, ${topicId}),
      ('Iterating over Array', ${subTopicId}, ${topicId}),
      ('Multidimensional Array', ${subTopicId}, ${topicId}),
      ('Logical Programs using Array', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10058 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Simulator to WordScapes on Play Store', ${subTopicId}, ${topicId});`;

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

const createLecturesForSubTopic10059 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Classes & Object', ${subTopicId}, ${topicId}),
      ('Methods - Passing parameters to methods, return type', ${subTopicId}, ${topicId}),
      ('Object as parameters, Constructors & Destructor, var-args', ${subTopicId}, ${topicId}),
      ('Access & Non-Access Modifiers', ${subTopicId}, ${topicId}),
      ('Dynamic memory allocation, Garbage collection and finalize()', ${subTopicId}, ${topicId}),
      ('Assignment', ${subTopicId}, ${topicId}),
      ('Packages and Class Hierarchy', ${subTopicId}, ${topicId}),
      ('Object Class, Import statement, Built-in packages, User defined packages', ${subTopicId}, ${topicId}),
      ('Nested & Anonymous Class', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10060 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('What is Inheritance?', ${subTopicId}, ${topicId}),
      ('Types of Inheritance', ${subTopicId}, ${topicId}),
      ('Why we use Inheritance', ${subTopicId}, ${topicId}),
      ('Method Overriding', ${subTopicId}, ${topicId}),
      ('Method Overloading', ${subTopicId}, ${topicId}),
      ('Assignment', ${subTopicId}, ${topicId}),
      ('Abstract Classes', ${subTopicId}, ${topicId}),
      ('Interfaces', ${subTopicId}, ${topicId}),
      ('Polymorphism', ${subTopicId}, ${topicId}),
      ('default, static and private methods in interface', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10061 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Various ways to create String in Java', ${subTopicId}, ${topicId}),
      ('In-built String functions', ${subTopicId}, ${topicId}),
      ('StringBuffer', ${subTopicId}, ${topicId}),
      ('StringBuilder', ${subTopicId}, ${topicId}),
      ('Assignment', ${subTopicId}, ${topicId}),
      ('Difference between String, StringBuffer & StringBuilder', ${subTopicId}, ${topicId}),
      ('Logical Programs on Strings', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10062 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('What is Exception and Handling an Exception', ${subTopicId}, ${topicId}),
      ('Compile time errors & Run time errors', ${subTopicId}, ${topicId}),
      ('try...catch...finally', ${subTopicId}, ${topicId}),
      ('throw & throws keywords', ${subTopicId}, ${topicId}),
      ('User Defined Exception', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10063 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('FileInputStream & FileOutputStream', ${subTopicId}, ${topicId}),
      ('FileReader & FileWriter', ${subTopicId}, ${topicId}),
      ('Serialization', ${subTopicId}, ${topicId}),
      ('Object serialization, transient', ${subTopicId}, ${topicId}),
      ('Wrapper Classes', ${subTopicId}, ${topicId}),
      ('Autoboxing and Unboxing', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10064 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Introduction to Collection', ${subTopicId}, ${topicId}),
      ('Collection Hierarchy', ${subTopicId}, ${topicId}),
      ('Working with ArrayList, LinkedList, HashSet, LinkedHashSet, TreeSet, Queue, Dequeue, Stack', ${subTopicId}, ${topicId}),
      ('Maps - HashMap, LinkedHashMap, TreeMap', ${subTopicId}, ${topicId}),
      ('Using Iterators and Enumerations, ListIterator, forEach()', ${subTopicId}, ${topicId}),
      ('Assignment', ${subTopicId}, ${topicId}),
      ('Generics', ${subTopicId}, ${topicId}),
      ('Comparable and Comparators', ${subTopicId}, ${topicId}),
      ('Functional Interfaces - Lambda Expressions', ${subTopicId}, ${topicId}),
      ('forEach() method in Iterable Interface', ${subTopicId}, ${topicId}),
      ('Streams - Sequential, Parallel', ${subTopicId}, ${topicId}),
      ('Filtering Collections', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10065 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Word count and writing the word count to different file', ${subTopicId}, ${topicId});`;

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

const createLecturesForSubTopic10066 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Introduction Multi-Threading', ${subTopicId}, ${topicId}),
      ('Thread Life Cycle', ${subTopicId}, ${topicId}),
      ('Thread Class vs Runnable Interface', ${subTopicId}, ${topicId}),
      ('Synchronized Methods, Block', ${subTopicId}, ${topicId}),
      ('Daemon Thread', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10067 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Java Time API', ${subTopicId}, ${topicId}),
      ('Project on Stop Watch', ${subTopicId}, ${topicId}),
      ('Java Http Client API', ${subTopicId}, ${topicId}),
      ('Project on Currency Convertor', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10068 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('IoC Container', ${subTopicId}, ${topicId}),
      ('Beans Overview', ${subTopicId}, ${topicId}),
      ('Dependency Injection', ${subTopicId}, ${topicId}),
      ('Aspect Oriented Programming (AOP)', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10069 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Spring MVC', ${subTopicId}, ${topicId}),
      ('Request-Response Life Cycle', ${subTopicId}, ${topicId}),
      ('Terminologies & Pre-requisites', ${subTopicId}, ${topicId}),
      ('Tools', ${subTopicId}, ${topicId}),
      ('Components of Spring MVC', ${subTopicId}, ${topicId}),
      ('Basics of Maven', ${subTopicId}, ${topicId}),
      ('Create a Project in Maven', ${subTopicId}, ${topicId}),
      ('Create jar package file using Maven Command', ${subTopicId}, ${topicId}),
      ('Maven Commands', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10070 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Introduction to the Pet Store Project', ${subTopicId}, ${topicId}),
      ('SDLC', ${subTopicId}, ${topicId}),
      ('Agile Methodology', ${subTopicId}, ${topicId}),
      ('Scrum', ${subTopicId}, ${topicId}),
      ('Introduction to JIRA', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10071 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Download & Install Spring Tool 4', ${subTopicId}, ${topicId}),
      ('Creating and Running Spring Boot Application using ST4 - Pet Store Project', ${subTopicId}, ${topicId}),
      ('Introduction to Properties file and changing some default properties like application name, port, etc.', ${subTopicId}, ${topicId}),
      ('Git Project Creation & Doing Initial Commit', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10072 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('What is REST?', ${subTopicId}, ${topicId}),
      ('Creating our First REST API', ${subTopicId}, ${topicId}),
      ('Adding DevTools', ${subTopicId}, ${topicId}),
      ('Creating Service file for Product Resource using in-memory data', ${subTopicId}, ${topicId}),
      ('Creating Rest Controller CRUD Operations on Product Resource', ${subTopicId}, ${topicId}),
      ('Consuming REST APIs using any Rest Client Library like postman, hoppscotch, etc.', ${subTopicId}, ${topicId}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10073 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Adding spring boot starter validation dependency', ${subTopicId}, ${topicId}),
      ('Add built-in validators to our User Resource Model', ${subTopicId}, ${topicId}),
      ('Validating the Request using @Valid annotation', ${subTopicId}, ${topicId}),
      ('Creating custom field validator for phoneNumber', ${subTopicId}, ${topicId}),
      ('Create custom cross-field validator for password & confirmPassword', ${subTopicId}, ${topicId}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10074 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Create database user & database', ${subTopicId}, ${topicId}),
      ('Add mysql connector & spring jpa dependency in our Spring Application', ${subTopicId}, ${topicId}),
      ('Adding mysql configuration details in application.properties file', ${subTopicId}, ${topicId}),
      ('Convert Product model to Entity by using JPA annotations', ${subTopicId}, ${topicId}),
      ('Create JPA repository for Product entity', ${subTopicId}, ${topicId}),
      ('Modifying service file to use repository instead of in-memory data', ${subTopicId}, ${topicId}),
      ('Defining Custom Query Methods in Repository', ${subTopicId}, ${topicId}),
      ('JPA Auditing using @CreatedDate and @LastModifiedDate', ${subTopicId}, ${topicId}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10075 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Add Spring Data REST Starter Dependency', ${subTopicId}, ${topicId}),
      ('Remove not needed APIs from controllers', ${subTopicId}, ${topicId}),
      ('Make necessary changes for validation', ${subTopicId}, ${topicId}),
      ('Pagination & Sorting using PagingAndSortingRepository', ${subTopicId}, ${topicId}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10076 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Create OneToOne Mapping for User & Address', ${subTopicId}, ${topicId}),
      ('Create OneToMany & ManyToOne Mapping for Category & Products', ${subTopicId}, ${topicId}),
      ('Create ManyToMany Mapping for Orders & Products', ${subTopicId}, ${topicId}),
      ('Consuming all the APIs with relationships', ${subTopicId}, ${topicId}),
      ('Create Projections & Excerpts for necessary data', ${subTopicId}, ${topicId}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10077 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('What is Authentication & Authorization', ${subTopicId}, ${topicId}),
      ('Add Spring Security Starter Dependency', ${subTopicId}, ${topicId}),
      ('Authentication based on default security config', ${subTopicId}, ${topicId}),
      ('Change default username and password', ${subTopicId}, ${topicId}),
      ('Change default url configs using HttpSecurity', ${subTopicId}, ${topicId}),
      ('Allow certain URLs based on http methods and url patterns', ${subTopicId}, ${topicId}),
      ('Override default authentication manager by providing inMemoryAuthentication', ${subTopicId}, ${topicId}),
      ('Add roles to the user', ${subTopicId}, ${topicId}),
      ("Add security to particular URL based on user's role using hasRole() method", ${subTopicId}, ${topicId}),
      ('Authorization using \@PreAuthorize, \@RolesAllowed or \@Secured', ${subTopicId}, ${topicId}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${subTopicId}, ${topicId}),
      ('Assignment', ${subTopicId}, ${topicId});`;

  const lectures = await db.query(
    `select * from lecture where subTopicId=${subTopicId}`,
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

const createLecturesForSubTopic10078 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('User Registration Flow', ${subTopicId}, ${topicId}),
      ('Use UserDetails interface to implement User object', ${subTopicId}, ${topicId}),
      ('Create custom MyUserDetailsService using UserDetailsService class and override loadUserByUsername method', ${subTopicId}, ${topicId}),
      ('Add MyUserDetailsService object in security configuration for authentication', ${subTopicId}, ${topicId}),
      ('Creating Login API', ${subTopicId}, ${topicId}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10079 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Create API to upload image for a product', ${subTopicId}, ${topicId}),
      ('Create API to download image of a product', ${subTopicId}, ${topicId}),
      ('Commit whatever is done to Git Project & mark tasks as Done in JIRA', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10080 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Create simple frontend application using HTML, CSS and Javascript', ${subTopicId}, ${topicId}),
      ('Consume Product APIs using fetch function', ${subTopicId}, ${topicId}),
      ('Displaying fetched data in HTML page', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10081 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('The JUnit framework', ${subTopicId}, ${topicId}),
      ('How to define a test in JUnit?', ${subTopicId}, ${topicId}),
      ('Writing test case for the API', ${subTopicId}, ${topicId}),
      ('Run your test from the command line', ${subTopicId}, ${topicId}),
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

const createLecturesForSubTopic10082 = async (subTopicId) => {
  const data = `INSERT INTO lecture (lectureName, subTopicId, topicId) 
  VALUES 
      ('Creating jar file', ${subTopicId}, ${topicId}),
      ('Using various environments using properties file', ${subTopicId}, ${topicId}),
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