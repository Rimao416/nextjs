import sleep from "sleep-promise";
export default async function Home() {
    const res=await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',{
      headers: {
        'X-Api-Key': 'pDsBb6dih1wbK+uRBQv9fQ==EvLVJpOpcGonr9ex',
      },
      next: { revalidate: 0 },
    }).then((res) => res.json()).then(sleep(2000));

    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
        {res.map((quote) => (
          <p key={quote.id}>{quote.quote}</p>
        ))}
        
      </div>
    );
  }