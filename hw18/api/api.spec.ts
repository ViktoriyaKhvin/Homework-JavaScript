import superagent from "superagent";

 describe('API tests:', () => {
     const BASE_URL = 'https://reqres.in/api/';
     let response: any;
     let formData: any;

     describe('GET requests:', () => {
         it('Should correctly get data of users list', async () => {
             try {
                 response = await superagent.get(`${BASE_URL}users`);
             } catch (e: any) {
                 console.log(e.message);
             }

             expect(response.status).toBe(200);
             expect(response.body.data.length).toBeGreaterThan(0);
         });

         it('Should correctly get data of list resource', async () => {
             try {
                 response = await superagent.get(`${BASE_URL}unknown`)
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
                 name: "Vladimir",
                 job: "SDET"
             }

             try {
                 response = await superagent.post(`${BASE_URL}users`)
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
                 email: "eve.holt@reqres.in",
                 password: "cityslicka"
             }

             try {
                 response = await superagent.post(`${BASE_URL}login`)
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
                 email: "sydney@fife"
             }

             try {
                 response = await superagent.post(`${BASE_URL}register`)
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
                 name: "morpheus",
                 job: "zion resident"
             }

             try {
                 response = await superagent.put(`${BASE_URL}users/2`)
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
                 name: "morpheus",
                 job: "zion resident"
             }

             try {
                 response = await superagent.patch(`${BASE_URL}users/2`)
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
                 response = await superagent.delete(`${BASE_URL}users/2`)
             } catch (e: any) {
                 console.log(e.message);
             }

             expect(response.status).toBe(204);
         });
     });
 });