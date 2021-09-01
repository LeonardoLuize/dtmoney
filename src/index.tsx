import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';


createServer({

  models: {
    transaction: Model,
  },

  seeds(server){

    server.db.loadData({
      transactions:[
      {
        id: 1,
        title: 'Desenvolvimento Web site',
        type: 'deposit',
        category: 'Desenvolvimento',
        amount: 12000.00,
        createdAt: new Date('2021-02-12 09:00:00')
        
      },
      {
        id: 2,
        title: 'Mercado',
        type: 'withdraw',
        category: 'Compra',
        amount: 2000.00,
        createdAt: new Date('2021-06-05 19:00:00')
        
      }
    ]
    })
  },

  routes(){
      this.namespace = 'api';

      this.get('/transactions', () => {
        return this.schema.all('transaction');
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', data);
      })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

