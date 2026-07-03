const postcode = document.getElementById("postcode")
const searchBtn = document.getElementById("searchBtn")
const address = document.getElementById("address")

const main = () => {
  if(searchBtn === null){
    return
  }
  if (!(postcode instanceof HTMLInputElement)) {
    return;
  }
   if (!(address instanceof HTMLInputElement)) {
    return;
  }
  searchBtn.addEventListener("click", async() => {
    const url =
      `https://postcode.teraren.com/postcodes/${postcode.value}.json`;
      try{
        const result = await fetch(url);
        if(!result.ok){
          throw new Error("郵便番号が見つかりませんでした");
        }
        const {prefecture, city, suburb} = await result.json();
        address.value = prefecture + city + suburb
      }catch(e){
        alert("住所を取得できませんでした")
      }
  })
}

main()
