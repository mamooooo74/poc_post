const postcode = document.getElementById("postcode")
const searchBtn = document.getElementById("searchBtn")
const address = document.getElementById("address")

const main = () => {
  if(searchBtn === null){
    // もみ消しになるのでエラー投げること
    return
  }
  if (!(postcode instanceof HTMLInputElement)) {
     // もみ消しになるのでエラー投げること
    return;
  }
   if (!(address instanceof HTMLInputElement)) {
     // もみ消しになるのでエラー投げること
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
