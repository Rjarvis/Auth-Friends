import React from 'react';
import authWithAxios from '../utils/authWithAxios';

function Login () {
    return(
        <div>
            <form>
                User:<br/>
                <input type="text" user="user" /><br/>
                Pass:<br/>
                <input type="text" pass="pass" /><br/>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;