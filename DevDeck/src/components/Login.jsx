import React from 'react'

export default function Login() {
  return (
    <>
        <div id="login" className="login d-flex align-items-center justify-content-center vh-100">
            <div className="loginContainer p-3 rounded">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center">Login</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" required />
                            </div>
                            <button type="submit" className="btn w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
