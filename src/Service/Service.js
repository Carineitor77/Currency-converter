class Service {

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getCurrencies = async () => {
        return await this.getResource(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
    }
}

export default Service;