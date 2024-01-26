import React, { useState } from 'react';


const Forms = () => {
  const [data, setdata] = useState({
    name: '',
    lastName: '',
    email: '',
    contacts: '',
  });
  const [isSubmitSuccess, setisSubmitSuccess] = useState(false);
  const [err, seterr] = useState({});

  const change = (e) => {
    const { name, value } = e.target;
    setdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();

    const newerr = {};
    for (const a in data) {
      if (!data[a]) {
        newerr[a] = `Please enter your ${a}!`;
      }
    }
    if (Object.keys(newerr).length > 0) {
      seterr(newerr);
    } else {
      setisSubmitSuccess(true);
    }
  };

  return (
    <div className="container">
      {isSubmitSuccess && <p className="add">Submission successful!!!</p>}
      <form onSubmit={submit}>
        {Object.keys(data).map((a) => (
          <label style={{fontSize: '29px'}} key={a}>
            {a.charAt(0).toUpperCase() + a.slice(1)}:
            {a=== 'contacts' ? (
              <textarea value={data[a]} name={a} onChange={change} />
            ) : (
              <input type={a === 'email' ? 'email' : 'text'} value={data[a]} name={a} onChange={change} />
            )}
            {err[a] && <p className="error">{err[a]}</p>}
          </label>
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Forms;