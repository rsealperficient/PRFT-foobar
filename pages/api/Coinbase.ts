export async function getBuyPrice(cur: string){
    let data = await fetch(`https://api.coinbase.com/v2/prices/BTC-${cur}/buy`).then(r => r.json());
    return { data : data };
}