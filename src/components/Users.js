import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

class User extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    axios.get("https://comptableapi.herokuapp.com/users/ent")
      .then(response => {
        this.successShow(response);
      })
      .catch(error => {
        this.successShow(error);
      });
  }

  successShow(response) {
    this.setState({
      people: response.data
    });
  }

  render() {
    function isEmpty(de){
        if(de===null || de==='' || typeof(de) === "undefined") return(<i>Not yet defined </i>)
        return (<strong>{de}</strong> )
    }
    
    return (
        <tbody>
            {this.state.people.map(({id, nom, prenom , nomE}) => (
            <tr key={id}>
                <td>
                    {nom} {prenom} 
                </td>
                <td>
                    {isEmpty(nomE)}
                </td>
                <td>
                    <Link to={`/admin/User/${id}`}>see profile</Link>
                </td>
            </tr>
            ))}
        </tbody>

    );
  }
}
export default User;