---
title: Bachelor Thesis - REST API Frameworks
date: 24/05/24
description: "What are REST APIs, and what should you consider when choosing a framework?"
image: /blog-img/bap/thumbnail.webp
alt: REST API Frameworks
published: true
sitemap:
   loc: /blog/10-Bachelor-Thesis-Rest-API
   lastmod: 2024-11-02
   changefreq: monthly
   priority: 0.8    
---

### Introduction
**REST APIs form the backbone of modern software development**, and my bachelor thesis provides an in-depth insight into their application and optimization. In my research, I analyzed the performance of four different REST API frameworks to find an optimal solution for secure and efficient data access in external applications. 📊

### What are REST APIs?
A REST API utilizes a **standardized approach** to efficiently and flexibly exchange data between different systems. They are based on a **client-server architecture**, where the responsibilities of the client and server are strictly separated, promoting scalability. REST APIs support **stateless communication**, **caching**, and a **uniform interface**, contributing to their broad applicability. 🔄

### How a REST API Typically Works
Consider a scenario where a student enrolls in a school via a website. 🎓

The process begins when a student fills in information via an online form on the website to enroll. This information may include the student's name, address, date of birth, and other relevant details. Once the student clicks the "Submit" button, **a request is sent to the server via the HTTP protocol containing the filled-in information**. 📝

This request is **sent to an API endpoint** specifically designed to handle enrollment requests. The server **receives the request and starts processing the submitted information**. 🔄

This involves **checking the validity of the data**, such as verifying if the date of birth is in a valid format and ensuring all required fields are filled in. 

After validating the submitted information, **the server communicates with the database to store the student's data**. This allows us to reuse that data later. 

**Upon successful processing** of the enrollment request, **the server sends a response back to the client**. This response typically includes a confirmation of the enrollment, along with any additional information, such as an enrollment number or instructions for next steps. Additional actions may be taken at this stage, such as sending a confirmation email to the user. 📨

Finally, **the client processes the server's response** and displays it on the website. The student may see a message indicating that the enrollment has been successfully completed. 🎉

### Best Practices in API Development
Let's now discuss best practices in API development. These best practices are essential for ensuring the security and reliability of our systems. 🔒

### Password Hashing
Firstly, let's address the importance of hashing passwords or other sensitive information. Instead of storing passwords as plain text, they are hashed, meaning they are **converted into a unique string of characters**. These hashed data are **difficult to revert** to their original form, making them more secure in the event of a database breach. I utilized this to secure the accounts of school administrators. 🔐

### Authorization
Authorization is a critical aspect of API security. Establishing a well-thought-out authorization system allows us **to determine which users have access to specific parts of our API**. In my student management API, I opted for **JWT tokens** as the authentication method because of their widespread use. When a user makes a request to the API, the token is validated to confirm authenticity. With the obtained user information, including associated roles, the server decides if the user is authorized for the specific request and filters the information to return only relevant data. *For instance, a director from school A cannot request data of a student from school B.* 🔑

### API Versioning
Versioning of APIs is a best practice often overlooked but is of significant importance. By giving versions to our APIs, we can **ensure that older clients are not disrupted by changes in the API structure**. This enables us to add new features and correct errors without breaking existing integrations. This is something I did not implement in my student API due to its small scale. 🔄

### Validation
Validation is an essential step in API development. Consider a new student inadvertently entering incorrect information, such as an invalid email format or a negative age. **Without validation**, this erroneous input could disrupt the database and **jeopardize data integrity**. ✔️

### Handling Sensitive Information
It's crucial to **store sensitive information**, such as API keys and passwords, in separate **.env files**. Unlike other files, .env files are not included in the source code and remain outside version control systems like GitHub. This minimizes the risk of unintentional disclosure of sensitive information during code sharing or pushing to a shared repository. 🗄️

### Research Question and Methodology
I focused my research on comparing four popular REST API frameworks: Express.js, Django, ASP.NET Core, and Bun. To conduct a thorough comparison, I developed a Student Management API in each of these frameworks. This API offered various functionalities, including managing students and enrollments in schools, with authentication and authorization. 📚

### Experimental Setup
Using Postman, I simulated 100 virtual users testing the API for five minutes. The results were impressive: each framework performed strongly with minimal errors and acceptable response times. **Bun and ASP.NET Core excelled with the lowest average response times**, while Express also delivered solid performances. 📊
<img src="/blog-img/bap/benchmark.webp" style="object-fit: contain; height: 16rem; width: 100%" />


### Results and Findings
The test results indicated that all frameworks performed reliably with minimal errors.  These findings emphasize that the **choice of a framework depends on the specific project requirements and the preferences of the development team.** 🧠

### Conclusion
The choice of a specific framework depends on the unique needs of the project and the preferences of the development team. T**he performance can be a guiding factor, but other aspects such as ease of use, community support, and scalability should also be considered.** My research highlights the importance of finding the **right balance between functionality, performance, and developer experience**. 🏁

I encourage developers to embrace the power of APIs and experiment with different frameworks to find the best solution for their projects. My findings contribute to a better understanding and effective use of REST API technologies in diverse software development projects. 💡

### Interested in Learning More?
If you're interested in learning more about REST APIs and their optimization, feel free to reach out to me. I'm happy to share my research findings and insights to help you enhance your API development skills and create robust, secure, and efficient REST APIs.

Check out my full thesis and the detailed api-benchmark results on [GitHub](https://github.com/LukasOlivier/bap-rest-api/tree/97ecf1d7221fcf872d776d1d53c6c763d3388c01/documentation) 🌐
