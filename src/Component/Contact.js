const Contact = ({contact}) => {
    return ( 
        <div className="contactContainer">
            <div className="contacts">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            </div>
        </div>
     );
}
 
export default Contact;