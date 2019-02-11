const BASE_URL = 'http://localhost:8080/api/';

const CustomHeaders = new Headers();
CustomHeaders.append('Content-Type', 'application/json');

const getContacts = async () => {
  try {
    const res = await fetch(`${BASE_URL}contacts`);
    const json = await res.json();
    return json;
  } catch (error) {
    return new Error(error);
  }
};

const createContact = async params => {
  try {
    const result = await fetch(`${BASE_URL}contacts`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: CustomHeaders,
      body: JSON.stringify(params)
    });
    return result;
  } catch (error) {
    return new Error(error);
  }
};

const removeContact = async id => {
  try {
    const result = await fetch(`${BASE_URL}contacts/${id}`, {
      method: 'DELETE'
    });
    return result;
  } catch (error) {
    return new Error(error);
  }
};

export default { getContacts, createContact, removeContact };
