const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			//Estuve tratando de resolver esto durante los ultimos dias pero dado el aviso sobre
			//el tiempo restante de la tarea, lo omitire. 
			//En un futuro tratare de regresar a ella, aunque sea en forma privada.
			//Aparentemente, tengo un problema con los derechos al referirme a las URL.
			//Estimo que estoy haciendo fetch a las direcciones incorrectas pero no estoy seguro.
			/*createDirectory: () => {
				fetch("https://playground.4geeks.com/contact/agendas/dimatto404")
					.then(response => {
						if (!response.ok) {
							const Agenda = {
								slug: "dimatto404"
							};
							return fetch("https://playground.4geeks.com/contact/agendas", {
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify(Agenda),
							})
						}
					})
					.catch(error => console.error(error));
			},*/
			fetchContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/dimatto404/contacts")
					.then(response => response.json())
					.then(data => setStore({ contacts: data.contacts }))
					.catch(error => console.error(error));
			},
			addContact: (newContact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/dimatto404/contacts`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newContact),
				})
					.then(() => getActions().fetchContacts())
					.catch(error => console.error(error));
			},
			updateContact: (id, updatedContact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/dimatto404/contacts/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(updatedContact),
				})
					.then(() => getActions().fetchContacts())
					.catch(error => console.error(error));
			},
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/dimatto404/contacts/${id}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
				})
					.then(() => getActions().fetchContacts())
					.catch(error => console.error(error));
			}
		}
	};
};

export default getState;
