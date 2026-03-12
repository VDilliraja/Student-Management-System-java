//write the REST client code to make a REST API call using the axios API.
import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/students'       // base url for all the rest API's

export const listStudents = () => {
    return axios.get(REST_API_BASE_URL);                             // written the rest client code to make a REST API call using the axios API.
}

// Written the REST client code to call (AddStudent) REST API using axios.post method. In order to make HTTP save(post)request use the axios.post method.

export const createStudent = (student) => {
    return axios.post(REST_API_BASE_URL, student);
}

// Written the REST client code to call getStudent REST API using Axios.get method. The getStudent method takes studentRollno as a parameter and append the studentRollno to the base URL.
export const getStudent = (studentRollno) => {
    return axios.get(REST_API_BASE_URL + '/'+studentRollno);
}
// Written the REST client code to call updateStudent REST API using Axios.put method.
export const updateStudent = (studentRollno,student) => {
    return axios.put(REST_API_BASE_URL+ '/' + studentRollno,student);
}
// Written the REST client code to call deleteStudent REST API using Axios.delete method.
export const deleteStudent = (studentRollno) => {
    return axios.delete(REST_API_BASE_URL+ '/'+studentRollno);
}
