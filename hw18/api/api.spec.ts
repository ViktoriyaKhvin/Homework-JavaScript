 import superagent from "superagent";
 import { describe, expect } from "@jest/globals";

 describe("Test HTTP methods", () => {
   const baseURL = "https://jsonplaceholder.typicode.com";

   test("Should return 200 HTTP status code for GET response", () => {
     return superagent
       .get(baseURL + "/posts/6")
       .then((response) => {
         expect(response.status).toBe(200);
       })
       .catch((error) => {
         throw new Error(error.message);
       });
   });


   test("Should successfully create a post", () => {
     const userId = 1337;
     const postTitle = "postTitle";
     const postBody = "postBody";

     return superagent
       .post(baseURL + "/posts")
       .send({ userId: userId, title: postTitle, body: postBody })
       .then((response) => {
         expect(response.status).toBe(201);
         expect(response.body.userId).toBe(userId);
         expect(response.body.title).toBe(postTitle);
         expect(response.body.body).toBe(postBody);
         expect(response.body.id).toBe(101);
       })
       .catch((error) => {
         throw new Error(error.message);
       });
   });

   test("Should successfully update first post's title via PATCH method", () => {
     const updatedTitle = "postTitle";

     return superagent
       .patch(baseURL + "/posts/1")
       .send({ title: updatedTitle })
       .then((response) => {
         expect(response.status).toBe(200);
         expect(response.body.id).toBe(1);
         expect(response.body.title).toBe(updatedTitle);
         expect(response.body.userId).not.toBe(null);
         expect(response.body.body).not.toBe(null);
       })
       .catch((error) => {
         throw new Error(error.message);
       });
   });

   test("Should successfully update post's title via PUT method", () => {
     const updatedTitle = "postTitle";

     return superagent
       .put(baseURL + "/posts/1")
       .send({ title: updatedTitle })
       .then((response) => {
         expect(response.status).toBe(200);
         expect(response.body.id).toBe(1);
         expect(response.body.title).toBe(updatedTitle);
         expect(response.body.userId).toBeUndefined();
         expect(response.body.body).toBeUndefined();
       })
       .catch((error) => {
         throw new Error(error.message);
       });
   });

   test("Should successfully delete post", () => {
     return superagent
       .delete(baseURL + "/posts/1")
       .then((response) => {
         expect(response.status).toBe(200);
         expect(response.body).toEqual({});
       })
       .catch((error) => {
         throw new Error(error.message);
       });
   });

   test("Should return 404 HTTP Status code if the post doesn't exist", () => {
     return superagent
       .get(baseURL + "/posts/101")
       .then()
       .catch((error) => {
         expect(error.status).toBe(404);
       });
   });

   test("Should return 500 HTTP Status code for PUT method to the non-existing post", () => {
     return superagent
       .put(baseURL + "/posts/101")
       .send({ id: 101 })
       .then()
       .catch((error) => {
         expect(error.status).toBe(500);
       });
   });

   test("Should return 404 HTTP Status code when DELETE method is used without post id", () => {
     return superagent
       .delete(baseURL + "/posts/")
       .then()
       .catch((error) => {
         expect(error.status).toBe(404);
       });
   });

   test("Should return 404 HTTP Status code when PATCH method is used without post id and body", () => {
     return superagent
       .patch(baseURL + "/posts/")
       .then()
       .catch((error) => {
         expect(error.status).toBe(404);
       });
   });

   test("Should return 404 HTTP Status code when PUT method is used without post id and body", () => {
     return superagent
       .put(baseURL + "/posts/")
       .then()
       .catch((error) => {
         expect(error.status).toBe(404);
       });
   });
 });