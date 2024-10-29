import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
    const { id } = useParams();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const contact = store.contacts.find(contact => contact.id === parseInt(id));
        if (contact) {
            setFullName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
            setAddress(contact.address);
        }
    }, [id, store.contacts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedContact = {
            name: fullName,
            phone: phone,
            email: email,
            address: address
        };
        actions.updateContact(id, updatedContact);
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Edit Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <button type="submit" className="btn btn-primary btn-block form-control">
                        Update
                    </button>
                </div>
                <Link to="/" className="d-flex text-center mt-3">
                    or get back to contacts
                </Link>
            </form>
        </div>
    );
};

export default EditContact;