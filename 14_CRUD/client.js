const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

// CRUD Peticiones

//Create

//Create
 const createAuthor = (name, lastName, nacionalidad, biography, gender, age) => {
    const URL_POST = `${URL_BASE}/api/v1/authors/`;
    const jsonSend = {
        "name": name,
        "last_name": lastName,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age,
    };

    return request.post(URL_POST, { form: jsonSend}, (err, res, body) => {
        if(res.statusCode === 201) {
            const newAuthor = JSON.parse(body);
            console.log(json);
        } else {
            console.log(res.statusCode);
        }
    });
}

createAuthor("armando", "cano","MX","ingeniero","male");


/* const createAuthor = () => {
    const URL_POST = `${URL_BASE}/api/v1/authors/`;
    const jsonSend = {
        "name": "Mauricio",
        "last_name": "FM",
        "nacionalidad": "MX",
        "biography": "generación 2",
        "gender": "M",
        "age": 40,
        "is_alive": true
    };

    request.post(URL_POST, { form: jsonSend}, (err, res, body) => {
        if(res.statusCode === 201) {
            const json = JSON.parse(body);
            console.log(json);
        } else {
            console.log(res.statusCode);
        }
    });
}

createAuthor(); */

//READ ALL
const findAllAuthors = () => {
    const URL_GET = `${URL_BASE}/api/v1/authors/`;
    request.post(URL_GET, { form: jsonSend}, (err, res, body) => {
        if(res.statusCode === 200) {
            const json = JSON.parse(body);
            console.log(json);
        } else {
            console.log(res.statusCode);
        }
    });
}

//RED ONE
const findOneAuthorById = (id) => {
    const URL_GET_ONE = `${URL_BASE}/api/v1/authors/${id}/`;
    request.post(URL_GET_ONE, { form: jsonSend}, (err, res, body) => {
        if(res.statusCode === 200) {
            const json = JSON.parse(body);
            console.log(json);
        } else {
            console.log(res.statusCode);
        }
    });
}

//findOneAuthorById(13214);