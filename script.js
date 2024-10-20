let user = prompt("Who's there?")

if (user === 'Admin') {
    let pass = prompt("Password?");

    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === '' || pass === null) {
        alert('Canceled');
    } else {
        alert('Wrong Password');
    }
        
    } else if (user === '' || user === null) {
        alert('canceled')
    } else {
        alert("I dont know you");
    }

