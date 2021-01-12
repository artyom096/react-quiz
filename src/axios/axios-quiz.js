import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-7e627-default-rtdb.firebaseio.com/'
})

