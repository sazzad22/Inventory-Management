import React from "react";

const Blogs = () => {
  return (
    <div className="min-h-screen  py-32 ">
          <div className="mx-10 lg:mx-32 lg:p-20 p-5">
          <div >
        <h2 className="text-2xl font-semibold ">Difference between javascript and nodejs </h2>
              <p>JavaScript
                  <br />
                  Javascript ia a programing language for the web, specially for those apps that  runs in browsers. Js is mostly used in the  front end,. Vanilla javascript cannot be used outside the browser.
                  Js is used to manipulate dom.
                  <br />
                      Node.js
                      <br />
          Node.js a backend runtime environment used to built server side of the web
          applications. Its written in javascript. Unlike JS its used outside the
          browser. One can use it to built web applications , desktop and mobile
          softwares. You can do file system manipulation (file handling),
          Database. which you can not do in JS.
        </p>
          </div>
          <div>
              <h2 className="text-2xl font-semibold "> When should you use nodejs? and when should you use mongodb</h2>
              <p>Node.js is writted in javascript. When one want the javascript's v8 engin's capability in their servers , they should use Node. <br /> Node.js servers provides Non-blocking I/O. Node has Rich ecosystem and regularly updated. Developers that only knows js can easily use node.js
                  <br />
                  Mongodb - it is nosql data base for softwares,webapps. If one required a scalable Database for large businesses mongodb is the best choice. MongoDB is also ideal for cloud computing. <br />
                  Mongodb is fast and easily accessible.
              </p>
              </div>
              <div>
                  <h2 className="text-2xl font-semibold " >Differences between sql and nosql databases.</h2>
                  <p>SQL <br />
                      SQL database is a relational database that stores a web app or software's data into a structured format.It provides data tables. The tables contain a collection of rows, also referred to as records, and columns referred to attributes.
                      <br /> To manipulate data in the tables, developers use SQL, a domain-specific language. MySQL is a databases that used SQL
                      <br />
                      NoSQL
                      <br />
                      In no sql databases data is stored in a json , key value format. To table of field is specified for a particular data. No domain specific language is required for NoSQL databases. <br />
                      It has much more freedom than SQL.MongoDb provides a NoSQL database service
                  </p>
              </div>
      </div>
    </div>
  );
};

export default Blogs;
