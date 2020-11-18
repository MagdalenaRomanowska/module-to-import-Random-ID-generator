const randomID = (idLength = 10) => {  //generuje długi losowy string z literami i liczbami. Domyślna wartość 10. 
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsAmount = characters.length;
    for(let i = 0; i < idLength; i++) {
        id += characters.charAt(Math.floor(Math.random() * charsAmount));
    }
    return id;
  }

module.exports = randomID;