
declare const axios: any;
const postcode = document.getElementById("postcode")
const searchBtn = document.getElementById("searchBtn")
const address = document.getElementById("address")

const main = ()=>{
   if(searchBtn === null){
    return
  }
  if (!(postcode instanceof HTMLInputElement)) {
    return;
  }
   if (!(address instanceof HTMLInputElement)) {
    return;
  }
  searchBtn.addEventListener("click", async () => {
    const url = `https://postcode.teraren.com/postcodes/${postcode.value}.json`;
  
    try {
      const result = await axios.get(url);
  
      const { prefecture, city, suburb } = result.data;
  
      address.value = prefecture + city + suburb
    } catch (e) {
      alert("住所を取得できませんでした");
    }
  });
}

main()
