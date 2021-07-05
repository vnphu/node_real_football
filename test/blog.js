const dotenv = require('dotenv')
const chai = require('chai')
const chaiHttp = require('chai-http')

process.env.NODE_ENV = 'test'
dotenv.config()

const should = chai.should()
chai.use(chaiHttp)

describe('Blogs', () => {
  beforeEach((done) => {
    done()
  })
  describe('/GET blogs', () => {
    it('it should Get all the blog', (done) => {
      chai
        .request(`${process.env.SERVER_URL}`)
        .get('/blog')
        .end((err, res) => {
          should.exist(res.body)
          res.should.have.status(200)
          res.body.data.should.be.a('array')
          res.body.total.should.be.a('number')
          done()
        })
    })
  })
})
