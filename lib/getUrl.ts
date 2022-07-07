const Domain = () => {
    if (process.env.NODE_ENV === 'development') return 'http://localhost:3000/';
    return 'https://www.madames.store/'
}

export default Domain;