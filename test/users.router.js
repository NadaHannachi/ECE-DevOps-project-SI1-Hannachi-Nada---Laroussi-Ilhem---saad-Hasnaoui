const app = require('../src/index')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)


describe('Users REST API', () => {

  after(()=> {
    app.close(() => {
      console.log('Http server closed.');
    })
  })

  describe('POST /user', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'NadaIlhem',
        firstname: 'Nada',
        lastname: 'Hannachi'
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(201)
          chai.expect(res.body.username).to.equal('NadaIlhem')
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })
  })

  describe('GET /user', ()=> {
    // TODO Create test for the get method
    chai.request(app)
      .get('/',function(req,res){
        

      })
   
  })
  })

