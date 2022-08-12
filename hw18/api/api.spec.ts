import superagent from "superagent";

 describe('API tests:', () => {
     const BASE_URL = 'https://reqres.in/api/';
     let response: any;
     let formData: any;

     describe('GET requests:', () => {
         it('Should correctly get data of users list', async () => {
             try {
                 response = await superagent.get("https://reqres.in/api/users");
             } catch (e: any) {
                 console.log(e.message);
             }

             expect(response.status).toBe(200);
             expect(response.body.data.length).toBeGreaterThan(0);
         });

         it('Should correctly get data of list resource', async () => {
             try {
                 response = await superagent.get("https://reqres.in/api/unknown")
             } catch (e: any) {
                 console.log(e.message);
             }

             expect(response.status).toBe(200);
             expect(response.body.data.length).toBeGreaterThan(0);
         });
     });

     describe('POST requests:', () => {
         it('Should correctly create new user', async () => {
             formData = {
                 name: "Viktoriya",
                 job: "Manager"
             }

             try {
                 response = await superagent.post("https://reqres.in/api/users")
                     .set('Content-Type', 'Application/json')
                     .send(formData);
             } catch (e: any) {
                 console.log(e.message);
             }

             expect(response.status).toBe(201);
             expect(response.body.hasOwnProperty(formData));
         });

         it('Should correctly get auth token', async () => {
             formData = {
                 email: "barsik@yandex.by",
                 password: "barsik2022"
             }

             try {
                 response = await superagent.post("https://reqres.in/api//login")
                     .set('Content-Type', 'Application/json')
                     .send(formData);
             } catch (e: any) {
                 console.log(e.message);
             }

             expect(response.status).toBe(200);
             expect(response.body.hasOwnProperty('token'));
             expect(response.body.token.length).toBeGreaterThan(0);
         });

         it('Should get error message after auth request with uncorrectly credentials', async () => {
             formData = {
                 email: "lol@lol"
             }

             try {
                 response = await superagent.post("https://reqres.in/api/register")
                     .set('Content-Type', 'Application/json')
                     .send(formData);
             } catch (e: any) {
                 console.log(e.message);
             }

             expect(response.status).toBe(400);
             expect(response.body.error).toBe('Missing password');
         });
     });

     describe('PUT requests:', () => {
         it('Should correctly put users data', async () => {
             formData = {
                 name: "natasha",
                 job: "developer"
             }

             try {
                 response = await superagent.put("https://reqres.in/api/users/2")
                     .set('Content-Type', 'Application/json')
                     .send(formData);
             } catch (e: any) {
                 console.log(e.message);
             }

             expect(response.status).toBe(200);
             expect(response.body.hasOwnProperty(formData));
         });
     });

     describe('PATCH requests:', () => {
         it('Should correctly patch users data', async () => {
             formData = {
                 name: "natasha",
                 job: "developer"
             }

             try {
                 response = await superagent.patch("https://reqres.in/api/users/2")
                     .set('Content-Type', 'Application/json')
                     .send(formData);
             } catch (e: any) {
                 console.log(e.message);
             }

             expect(response.status).toBe(200);
             expect(response.body.hasOwnProperty(formData));
         });
     });

     describe('DELETE requests:', () => {
         it('Should correctly remove the user', async () => {
             try {
                 response = await superagent.delete("https://reqres.in/api/users/2")
             } catch (e: any) {
                 console.log(e.message);
             }

             expect(response.status).toBe(204);
         });
     });
 });