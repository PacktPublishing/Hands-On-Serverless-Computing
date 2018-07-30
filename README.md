# Hands-On Serverless Computing

<a href="https://www.packtpub.com/virtualization-and-cloud/hands-serverless-computing?utm_source=github&utm_medium=repository&utm_campaign=9781788836654 "><img src="https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B09779_MockupCover_0.png" alt="Hands-On Serverless Computing" height="256px" align="right"></a>

This is the code repository for [Hands-On Serverless Computing](https://www.packtpub.com/virtualization-and-cloud/hands-serverless-computing?utm_source=github&utm_medium=repository&utm_campaign=9781788836654 ), published by Packt.

**Deploy functions efficiently using different cloud-based serverless offerings **

## What is this book about?
Serverless applications and architectures are gaining momentum and are increasingly being used by companies of all sizes. Serverless software takes care of many problems that developers face when running systems and servers, such as fault tolerance, centralized logging, horizontal scalability, and deployments.

This book covers the following exciting features:
* Understand the benefits of serverless computing and know when to use it 
* Develop serverless applications on AWS, Azure, and Google Cloud 
* Get to grips with Function as a Service (FaaS) 
* Apply triggers to serverless functions 
* Build event-driven apps using serverless frameworks  

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/9781788836654) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>

## Instructions and Navigations
All of the code is organized into folders. For example, Chapter02.

The code will look like the following:
```
const database = require('database').connect();
const mail = require('mail');
module.exports.saveCustomer = (event, context, callback) => {
 const customer = {
 emailAddress: event.email,
 createdAt: Date.now(),
 };
```

**Following is what you need for this book:**
This book is targeted towards developers, system administrators or any stakeholder working in the Serverless environment and want to understand how functions work.

Basic idea of serverless architecture can be an added advantage

With the following software and hardware list you can run all code files present in the book (Chapter 1-14).
### Software and Hardware List
| Chapter | Software required | OS required |
| -------- | ------------------------------------ | ----------------------------------- |

| 2 | Visual Studio Code, Node.js, JavaScript, Postman | Windows, Mac OS X, and Linux (Any) |
| 3 | AWS Lambda | Windows, Mac OS X, and Linux (Any) |
| 5 | AWS account  | Windows, Mac OS X, and Linux (Any) |
| 7 | Microsoft Azure | Windows, Mac OS X, and Linux (Any) |
| 8 | Google cloud Functions | Windows, Mac OS X, and Linux (Any)|
| 9 | Google cloud Functions | Windows, Mac OS X, and Linux (Any)|
| 10| Google cloud Functions | Windows, Mac OS X, and Linux (Any)|
| 11 | Google cloud Functions | Windows, Mac OS X, and Linux (Any)|
| 12 | Google cloud Functions | Windows, Mac OS X, and Linux (Any)|
| 13 | Google cloud Functions | Windows, Mac OS X, and Linux (Any)|
| 14 | Google cloud Functions | Windows, Mac OS X, and Linux (Any)|

We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://www.packtpub.com/sites/default/files/downloads/HandsOnServerlessComputing_ColorImages.pdf).

### Related products
*  [[Packt]](https://www.packtpub.com/virtualization-and-cloud/azure-serverless-computing-cookbook) [[Amazon]](https://www.amazon.com/dp/1788836650)

*  [[Packt]](https://www.packtpub.com/virtualization-and-cloud/docker-serverless-applications) [[Amazon]](https://www.amazon.com/dp/1788835263)


## Get to Know the Author
**Kuldeep Chowhan**
Kuldeep Chowhan is a Principal Software Developer at Expedia Group. He has been involved in building tools and platforms for the last 5+ years at Expedia. He has extensive experience on using serverless technologies on AWS (such as AWS Lambda, API Gateway, and DynamoDB) through Node.js. He has built a Platform as a Service (PaaS) tool for the automated creation of source code, a CI/CD pipeline, and a fully automated pipeline for deploying Docker containers/AWS Lambda. He is also passionate about CI/CD and DevOps.

### Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSdy7dATC6QmEL81FIUuymZ0Wy9vH1jHkvpY57OiMeKGqib_Ow/viewform) if you have any feedback or suggestions.
