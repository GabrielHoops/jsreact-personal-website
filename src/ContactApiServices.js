export async function getAllContacts() {
    const httpResponse = await fetch('http://localhost:4000/contacts');
    const data = await httpResponse.json();
    return data;
}

export async function addContactToApi(contact) {
    const httpResponse = await fetch('http://localhost:4000/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({...contact}),
    });
    const data = await httpResponse.json();
    if (data) {
        console.log('success ' + data);
    } else {
        console.error('error ' + data);
    }
}