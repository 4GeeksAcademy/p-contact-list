import React, { useEffect, useContext } from "react";
import guest from "../../img/guest.png";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		/*actions.createDirectory(),*/ actions.fetchContacts();
	}, []);

	return (
		<div className="text-center mt-1">
			<nav className="navbar mb-3 justify-content-end">
				<div className="m-2">
					<Link to="/add-contact">
						<button className="btn btn-success">Add new contact</button>
					</Link>
				</div>
			</nav>
			{store.contacts.length === 0 ? (
				<p>No contacts saved</p>
			) : (
				store.contacts.map((contact) => (
					<div key={contact.id} className="card mb-1 mx-5">
						<div className="row">
							<div className="col-2 align-items-end mx-2">
								<img
									src={guest}
									className="card-img img-fluid" style={{ height: "130px" }}
									alt={contact.name}
								/>
							</div>
							<div className="col-6">
								<div className="card-body text-start">
									<h5 className="card-title">{contact.name}</h5>
									<p className="card-text">
										<i className="fas fa-map-marker-alt"></i> {contact.address} <br />
										<i className="fas fa-phone"></i> {contact.phone} <br />
										<i className="fas fa-envelope"></i> {contact.email}
									</p>
								</div>
							</div>
							<div className="d-flex justify-content-end align-items-start col-3 m-2">
								<button className="btn btn-sm me-2" onClick={() => navigate(`/edit-contact/${contact.id}`)}>
									<i className="fas fa-pencil-alt"></i>
								</button>
								<button className="btn btn-sm" onClick={() => actions.deleteContact(contact.id)}>
									<i className="fas fa-trash-alt"></i>
								</button>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	);
}

export default Home;