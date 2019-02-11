import React, { useState, useEffect } from 'react';
import { Input, Button } from '@material-ui/core';
import { Grid, Row } from 'react-flexbox-grid';
import api from 'api';
import Contacts from 'components/common/Contacts';
import { content } from './details.module.css';

const Details = props => {
  const initialState = {
    text: '',
    error: false
  };

  const [input, setInput] = useState(initialState);
  const [data, setData] = useState([]);

  const handleChange = event => {
    setInput({ text: event.target.value });
    event.preventDefault();
  };

  const onAdd = async () => {
    if (!input.text) {
      setInput({ error: true });
      return;
    }
    await api.createContact({ name: input.text });
    setInput(initialState);
    fetchData();
  };

  const fetchData = async () => {
    const { data } = await api.getContacts();
    setData(data);
  };

  const onRemove = async id => {
    await api.removeContact(id);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid fluid className={content}>
      <Row>
        <Input
          placeholder="Add a contact"
          value={input.text || ''}
          error={input.error}
          onChange={event => handleChange(event)}
          inputProps={{
            'aria-label': 'text'
          }}
        />
        <Button color="primary" onClick={() => onAdd()}>
          SAVE
        </Button>
      </Row>

      <Row>
        <Contacts list={data} handleRemove={id => onRemove(id)} />
      </Row>
    </Grid>
  );
};

export default Details;
