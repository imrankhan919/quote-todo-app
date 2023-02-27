import Form from '../components/Form'
import ListGroup from '../components/ListGroup'
import Quote from '../components/Quote'

function Home() {
  return (
    <div className='container p-5'>
      <Quote/>
      <Form />
      <ListGroup />
    </div>
  )
}

export default Home
