import React from 'react'

function Form() {
  return (
    <>
    <div className="container">
        <form>
          <div className="row">
            <h4>Account</h4>
            <div className="input-group input-group-icon">
              <input type="date" placeholder="Full Name" />
              <div className="input-icon">
                <i className="fa fa-user" />
              </div>
            </div>
            <div className="input-group input-group-icon">
              <select>
                <option>hdfc</option>
                <option>kotak</option>
                <option>cash</option>
              </select>
            </div>
            <div className="input-group input-group-icon">
              <select>
                <option>expence</option>
                <option>credit</option>
                <option>debit</option>
              </select>
            </div>
            <div className="input-group input-group-icon">
              <input type="number" placeholder="AMOUND" />
              <div className="input-icon">
                <i className="fa fa-envelope" />
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input type="password" placeholder="Password" />
              <div className="input-icon">
                <i className="fa fa-key" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form