import React from 'react';

function Login() {
    const [credentials, setCredentials] = useState({name: '', password: ''});

    handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    login = e => {
        e.preventDefault();
    
        axiosWithAuth()
          .post('/login', {...credentials})
          .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends');
          })
          .catch(err => {
            console.log(err);
          });
      };

      return (
          <div>
              <Form>
              <input
              type='text'
              name='username'
              value={credentials.username}
              onChange={handleChange}
              />
              <input
              type='password'
              name='password'
              value={credentials.password}
              onChange={handleChange}
              />
              <button>Log in</button>
              </Form>
          </div>
      )
}